"use client";

import { useState } from "react";
import {
  Aperture,
  Blocks,
  Gamepad2,
  Palette,
  type LucideIcon,
} from "lucide-react";
import { items, type PortfolioItem } from "@/data/items";

const iconBySymbol: Record<PortfolioItem["symbol"], LucideIcon> = {
  aperture: Aperture,
  blocks: Blocks,
  gamepad: Gamepad2,
  palette: Palette,
};

function PortfolioCard({
  item,
  isSelected,
  onSelect,
}: {
  item: PortfolioItem;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const Icon = iconBySymbol[item.symbol];

  return (
    <article
      className="overflow-hidden rounded-[28px] bg-[#f5f5f7] text-[#1d1d1f] transition duration-200 hover:-translate-y-1 hover:bg-[#f0f0f2]"
    >
      <button
        type="button"
        className="block w-full text-left"
        onClick={onSelect}
        aria-expanded={isSelected}
      >
        <div
          className="flex aspect-[16/9] items-center justify-center"
          style={{ backgroundColor: item.themeColor }}
        >
          <Icon aria-hidden="true" className="h-20 w-20 stroke-[1.6]" />
        </div>

        <div className="px-7 py-7">
          <p className="text-sm font-semibold text-[#6e6e73]">{item.genre}</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">
            {item.title}
          </h2>
          <p className="mt-3 text-lg leading-7 text-[#424245]">
            {item.summary}
          </p>
        </div>
      </button>

      {isSelected ? (
        <div className="border-t border-black/10 px-7 pb-7 pt-6">
          <p className="text-base leading-7 text-[#424245]">{item.details}</p>
          {item.link ? (
            <a
              className="mt-5 inline-flex text-lg text-[#0066cc] hover:underline"
              href={item.link}
              target={item.target}
              rel={item.target === "_blank" ? "noreferrer" : undefined}
            >
              Open project
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

export default function Home() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <main className="min-h-svh bg-white px-6 py-14 text-[#1d1d1f] sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
            Sakura Wallace
          </h1>
          <p className="mt-5 text-xl leading-8 text-[#424245]">
            Full-Stack Engineer crafting focused, interactive products.
          </p>
        </header>

        <section className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <PortfolioCard
              key={item.id}
              item={item}
              isSelected={selectedId === item.id}
              onSelect={() =>
                setSelectedId((current) =>
                  current === item.id ? null : item.id,
                )
              }
            />
          ))}
        </section>
      </div>
    </main>
  );
}
