"use client";

import { useEffect, useRef } from "react";
import type { BubbleItem } from "@/data/items";

const FONT_FAMILY =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans", Ubuntu, Cantarell, "Helvetica Neue", Oxygen, "Fira Sans", "Droid Sans", sans-serif';

type SimBubble = {
  item: BubbleItem;
  img: HTMLImageElement;
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  rTarget: number;
  linkBounds?: {
    x: number;
    y: number;
    w: number;
    h: number;
  };
};

export default function BubblesCanvas({ items }: { items: BubbleItem[] }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const selectedIdRef = useRef<string | null>(null);
  const bubblesRef = useRef<SimBubble[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId = 0;

    const setupCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const initBubbles = () => {
      const cw = window.innerWidth;
      const ch = window.innerHeight;

      const cx = cw / 2;
      const cy = ch / 2;

      const spread = Math.min(cw, ch) * 0.10;
      const baseR = 40;

      const visibleItems = items.filter((it) => !it.archived);

      const bubbles: SimBubble[] = visibleItems.map((item) => {
        const img = new Image();
        img.src = item.icon;
        img.decoding = "async";

        return {
          item,
          img,
          x: cx + (Math.random() - 0.5) * spread * 2,
          y: cy + (Math.random() - 0.5) * spread * 2,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: baseR,
          rTarget: baseR,
        };
      });

      bubblesRef.current = bubbles;
    };

    const drawBubbleImageCover = (b: SimBubble) => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();

      const iw = b.img.naturalWidth;
      const ih = b.img.naturalHeight;

      if (!iw || !ih) {
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.18)";
        ctx.fill();
        ctx.restore();
        return;
      }

      const size = b.r * 2;
      const scale = Math.max(size / iw, size / ih);
      const w = iw * scale;
      const h = ih * scale;

      ctx.drawImage(b.img, b.x - w / 2, b.y - h / 2, w, h);
      ctx.restore();
    };

    const applyRepulsion = (cw: number, ch: number) => {
      const padding = 2;
      const strength = 0.35;

      const bubbles = bubblesRef.current;

      for (let i = 0; i < bubbles.length; i++) {
        const a = bubbles[i];
        for (let j = i + 1; j < bubbles.length; j++) {
          const b = bubbles[j];

          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.hypot(dx, dy) || 0.0001;

          const minDist = a.rTarget + b.rTarget + padding;

          if (dist < minDist) {
            const nx = dx / dist;
            const ny = dy / dist;

            const overlap = minDist - dist;

            const push = overlap * 0.5 * strength;
            a.x -= nx * push;
            a.y -= ny * push;
            b.x += nx * push;
            b.y += ny * push;

            const vpush = overlap * 0.0008 * strength;
            a.vx -= nx * vpush;
            a.vy -= ny * vpush;
            b.vx += nx * vpush;
            b.vy += ny * vpush;
          }
        }

        a.x = Math.max(a.r, Math.min(cw - a.r, a.x));
        a.y = Math.max(a.r, Math.min(ch - a.r, a.y));
      }
    };

    const wrapLines = (text: string, maxWidth: number) => {
      const words = text.split(/\s+/).filter(Boolean);
      const lines: string[] = [];
      let line = "";

      for (const w of words) {
        const test = line ? `${line} ${w}` : w;
        if (ctx.measureText(test).width <= maxWidth) {
          line = test;
        } else {
          if (line) lines.push(line);
          line = w;
        }
      }
      if (line) lines.push(line);
      return lines;
    };

    const drawSelectedOverlayText = (b: SimBubble) => {
      const padding = 14;
      const maxW = b.r * 2 - padding * 2;

      ctx.save();
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();

      ctx.fillStyle = "rgba(0,0,0,0.28)";
      ctx.fillRect(b.x - b.r, b.y - b.r, b.r * 2, b.r * 2);

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "rgba(255,255,255,0.95)";

      const title = b.item.name ?? "";
      const desc = b.item.description ?? "";

      ctx.font = `600 14px ${FONT_FAMILY}`;
      const titleY = b.y - 10;
      ctx.fillText(title, b.x, titleY);

      ctx.font = `400 12px ${FONT_FAMILY}`;
      const lines = wrapLines(desc, maxW).slice(0, 3);
      const lineH = 16;
      const startY = b.y + 14 - ((lines.length - 1) * lineH) / 2;

      lines.forEach((ln, i) => {
        ctx.fillText(ln, b.x, startY + i * lineH);
      });

      if (b.item.link) {
        const linkText =
          b.item.target === "_blank" ? "Open in new tab" : "Open";
        const linkY = startY + lines.length * lineH + 18;

        ctx.font = `600 12px ${FONT_FAMILY}`;
        ctx.fillStyle = "rgba(255,255,255,0.92)";
        ctx.fillText(linkText, b.x, linkY);

        const metrics = ctx.measureText(linkText);
        const w = metrics.width;

        ctx.beginPath();
        ctx.moveTo(b.x - w / 2, linkY + 7);
        ctx.lineTo(b.x + w / 2, linkY + 7);
        ctx.strokeStyle = "rgba(255,255,255,0.65)";
        ctx.lineWidth = 1;
        ctx.stroke();

        b.linkBounds = {
          x: b.x - w / 2,
          y: linkY - 8,
          w,
          h: 16,
        };

        ctx.fillStyle = "rgba(255,255,255,0.95)";
      } else {
        b.linkBounds = undefined;
      }

      ctx.restore();
    };

    const pickBubbleIdAt = (x: number, y: number) => {
      const bubbles = [...bubblesRef.current].sort((a, b) => b.r - a.r);
      for (const b of bubbles) {
        const dx = x - b.x;
        const dy = y - b.y;
        if (Math.hypot(dx, dy) <= b.r) return b.item.id;
      }
      return null;
    };

    const tick = () => {
      const cw = window.innerWidth;
      const ch = window.innerHeight;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      const selectedId = selectedIdRef.current;
      const bubbles = bubblesRef.current;

      for (const b of bubbles) {
        if (selectedId && b.item.id === selectedId) {
          b.rTarget = 92;
          continue;
        }

        const dx = mx - b.x;
        const dy = my - b.y;
        const dist = Math.hypot(dx, dy);

        b.rTarget = dist < b.r ? 55 : 40;
      }

      applyRepulsion(cw, ch);

      ctx.clearRect(0, 0, cw, ch);

      for (const b of bubbles) {
        const lerp = selectedId && b.item.id === selectedId ? 0.16 : 0.12;
        b.r += (b.rTarget - b.r) * lerp;

        b.x += b.vx;
        b.y += b.vy;

        b.vx *= 0.995;
        b.vy *= 0.995;

        if (b.x < b.r) {
          b.x = b.r;
          b.vx *= -1;
        } else if (b.x > cw - b.r) {
          b.x = cw - b.r;
          b.vx *= -1;
        }

        if (b.y < b.r) {
          b.y = b.r;
          b.vy *= -1;
        } else if (b.y > ch - b.r) {
          b.y = ch - b.r;
          b.vy *= -1;
        }

        ctx.save();
        ctx.shadowColor = "rgba(18,60,90,0.14)";
        ctx.shadowBlur = 16;
        ctx.shadowOffsetY = 6;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,0,0,0.01)";
        ctx.fill();
        ctx.restore();

        drawBubbleImageCover(b);

        if (selectedId && b.item.id === selectedId) {
          drawSelectedOverlayText(b);
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const onClick = (e: MouseEvent) => {
      const bubbles = bubblesRef.current;

      const rect = canvasRef.current!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const id = pickBubbleIdAt(x, y);

      if (!id) {
        selectedIdRef.current = null;
        return;
      }

      const clicked = bubbles.find((b) => b.item.id === id);
      if (!clicked) return;

      if (selectedIdRef.current === id) {
        const lb = clicked.linkBounds;

        if (lb) {
          const insideLink =
            x >= lb.x && x <= lb.x + lb.w && y >= lb.y && y <= lb.y + lb.h;

          if (insideLink && clicked.item.link) {
            if (clicked.item.target === "_blank") {
              window.open(clicked.item.link, "_blank", "noopener,noreferrer");
            } else {
              window.location.href = clicked.item.link;
            }
            return;
          }
        }

        selectedIdRef.current = null;
        return;
      }

      selectedIdRef.current = id;
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") selectedIdRef.current = null;
    };

    const onResize = () => {
      setupCanvasSize();
      initBubbles();
    };

    setupCanvasSize();
    initBubbles();

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("click", onClick);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [items]);

  return <canvas ref={canvasRef} className="block h-screen w-screen" />;
}
