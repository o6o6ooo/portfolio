import { Apple, ChevronRight, Download } from "lucide-react";
import { items, type PortfolioItem } from "@/data/items";

const featureCards = [
  "Private family photo sharing",
  "A calm social feed feel",
  "Built carefully with SwiftUI",
  "Made for everyday memories",
];

function AppStoreCard({ item }: { item: PortfolioItem }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-[var(--surface-line)] bg-[var(--surface)] p-6 shadow-[0_24px_80px_rgba(92,155,209,0.18)] backdrop-blur-2xl sm:p-8 lg:p-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 items-center gap-4 sm:gap-5">
          <div className="grid h-20 w-20 shrink-0 place-items-center rounded-[1.5rem] bg-[linear-gradient(145deg,#e8f4ff,#ffffff)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_14px_30px_rgba(92,155,209,0.24)] sm:h-24 sm:w-24">
            <Apple
              size={42}
              strokeWidth={1.7}
              className="text-[var(--accent)]"
              aria-hidden="true"
            />
          </div>
          <div className="min-w-0">
            <h2 className="truncate text-2xl font-semibold sm:text-3xl">
              {item.title}
            </h2>
            <p className="mt-1 text-base text-[var(--fg-secondary)]">
              Photo & Family
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--fg-secondary)] sm:text-base">
              {item.summary}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 lg:justify-end">
          <a
            href="https://kuusi.app"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[var(--surface-line)] bg-white/70 px-5 text-sm font-semibold text-[var(--accent-strong)] shadow-sm transition hover:-translate-y-0.5 hover:bg-white sm:px-6 sm:text-base"
          >
            Learn More
            <ChevronRight size={18} strokeWidth={2.2} aria-hidden="true" />
          </a>
          {item.link ? (
            <a
              href={item.link}
              target={item.target}
              rel={item.target === "_blank" ? "noreferrer" : undefined}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(92,155,209,0.32)] transition hover:-translate-y-0.5 hover:bg-[var(--accent-strong)] sm:px-6 sm:text-base"
            >
              <Download size={18} strokeWidth={2.2} aria-hidden="true" />
              Download
            </a>
          ) : null}
        </div>
      </div>

      <div
        id="kuusi-preview"
        className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
      >
        {featureCards.map((title) => (
          <div
            key={title}
            className="overflow-hidden rounded-[1.5rem] bg-[linear-gradient(180deg,#f5fbff,#dceeff)] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]"
          >
            <div className="aspect-[9/16] overflow-hidden rounded-[1.15rem] bg-white">
              <img
                src={item.thumbnail}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <p className="px-2 pb-1 pt-4 text-center text-base font-semibold leading-6 text-[var(--fg)]">
              {title}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function Home() {
  const [kuusi] = items;

  return (
    <main className="min-h-[100dvh] px-5 pb-8 pt-16 text-[var(--fg)] sm:px-10 lg:px-16 lg:pb-10 lg:pt-20">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-4xl text-center">
          <div className="mx-auto inline-flex h-12 items-center gap-2 rounded-full border border-[var(--surface-line)] bg-white/70 px-5 text-sm font-semibold text-[var(--accent-strong)] shadow-sm backdrop-blur-xl sm:text-base">
            <Apple
              size={20}
              fill="currentColor"
              strokeWidth={0}
              aria-hidden="true"
            />
            App Store
          </div>
          <h1 className="mt-8 text-4xl font-semibold tracking-normal sm:text-6xl">
            My App Store Apps
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--fg-secondary)] sm:text-xl">
            Apps crafted with SwiftUI and care, available on the App Store.
          </p>
        </header>

        <section className="mt-12 sm:mt-16">
          <AppStoreCard item={kuusi} />
        </section>

        <footer className="mt-10 text-center text-sm text-[var(--fg)] opacity-45">
          © {new Date().getFullYear()} Sakura Wallace. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
