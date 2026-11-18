"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, Instagram, Linkedin, MailOpen, X } from "lucide-react";
import { items, socialLinks } from "@/data/items";

const initialBubbles = [
  { color: "#FFC61E", x: 22, y: 20 },
  { color: "#2A68B2", x: 60, y: 20 },
  { color: "#B2E0ED", x: 86, y: 34 },
  { color: "#DD2728", x: 37, y: 44 },
  { color: "#027145", x: 64, y: 52 },
  { color: "#FEF9EF", x: 18, y: 65 },
  { color: "#89CFF0", x: 47, y: 78 },
  { color: "#0A4A6E", x: 87, y: 71 },
];

function ColourBubbles() {
  const [bubbles, setBubbles] = useState(initialBubbles);

  function shuffleBubbles() {
    setBubbles(initialBubbles.map((bubble) => ({
      ...bubble,
      x: Math.max(10, Math.min(90, bubble.x + (Math.random() - 0.5) * 28)),
      y: Math.max(10, Math.min(90, bubble.y + (Math.random() - 0.5) * 28)),
    })));
  }

  return (
    <section className="websites" aria-labelledby="websites-heading">
      <h2 id="websites-heading">Websites</h2>
      <button type="button" className="colour-bubbles" onClick={shuffleBubbles} aria-label="Shuffle the coloured bubbles">
        {bubbles.map((bubble) => (
          <span
            key={bubble.color}
            className="colour-bubble"
            aria-hidden="true"
            style={{ backgroundColor: bubble.color, left: `${bubble.x}%`, top: `${bubble.y}%` }}
          />
        ))}
      </button>
      <h3>Colour Bubbles</h3>
      <a className="website-link" href="https://colour-bubbles.vercel.app" target="_blank" rel="noreferrer">
        Open <ArrowUpRight size={19} aria-hidden="true" />
      </a>
    </section>
  );
}

export default function Home() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const appButtons = useRef<Record<string, HTMLButtonElement | null>>({});
  const selectedApp = items.find((item) => item.id === selectedId);

  function closePreview() {
    if (selectedId) appButtons.current[selectedId]?.focus();
    setSelectedId(null);
  }

  return (
    <main className="portfolio">
      <nav className="social-links" aria-label="Contact and social profiles">
        <a href={socialLinks.email} aria-label="Email Sakura">
          <MailOpen size={20} strokeWidth={1.8} aria-hidden="true" />
        </a>
        <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
          <Linkedin size={20} strokeWidth={1.8} aria-hidden="true" />
        </a>
        {socialLinks.instagram && (
          <a href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram profile">
            <Instagram size={20} strokeWidth={1.8} aria-hidden="true" />
          </a>
        )}
      </nav>

      <header className="introduction">
        <img src="/memoji.png" alt="" className="memoji" />
        <h1>
          Hi, I’m Sakura, an enthusiastic engineer who creates Apple-optimised
          apps and websites with love.
        </h1>
      </header>

      <section className="apps" aria-labelledby="apps-heading">
        <h2 id="apps-heading">My App Store Apps</h2>
        <div className="app-list">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              className="app-button"
              ref={(element) => { appButtons.current[item.id] = element; }}
              aria-expanded={selectedId === item.id}
              aria-controls="app-preview"
              onClick={() => setSelectedId(item.id === selectedId ? null : item.id)}
            >
              <img src={item.icon} alt="" className="app-icon" />
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        <div id="app-preview" hidden={!selectedApp}>
          {selectedApp && (
            <section
              className="app-preview"
              aria-labelledby="preview-heading"
              onKeyDown={(event) => {
                if (event.key === "Escape") closePreview();
              }}
            >
              <div className="preview-header">
                <h3 id="preview-heading" aria-live="polite">{selectedApp.title}</h3>
                <button type="button" className="close-preview" onClick={closePreview} aria-label={`Close ${selectedApp.title} preview`}>
                  <X size={22} strokeWidth={2.2} aria-hidden="true" />
                </button>
              </div>
              <div className="screenshots" key={selectedApp.id}>
                {Array.from({ length: 3 }, (_, index) => {
                  const src = selectedApp.images[index];
                  return src ? (
                    <img key={index} src={src} alt={`${selectedApp.title} screenshot ${index + 1}`} width={1284} height={2778} />
                  ) : (
                    <div key={index} className="screenshot-placeholder" role="img" aria-label={`${selectedApp.title} screenshot ${index + 1} coming soon`} />
                  );
                })}
              </div>
              {(selectedApp.link || selectedApp.learnMoreLink) && (
                <div className="app-links">
                  {selectedApp.link && (
                    <a href={selectedApp.link} target="_blank" rel="noreferrer">
                      App Store <ArrowUpRight size={19} aria-hidden="true" />
                    </a>
                  )}
                  {selectedApp.learnMoreLink && (
                    <a href={selectedApp.learnMoreLink} target="_blank" rel="noreferrer">
                      Learn more <ArrowUpRight size={19} aria-hidden="true" />
                    </a>
                  )}
                </div>
              )}
            </section>
          )}
        </div>
      </section>
      <ColourBubbles />
    </main>
  );
}
