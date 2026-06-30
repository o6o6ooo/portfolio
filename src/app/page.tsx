import { Linkedin, Mail } from "lucide-react";
import { items, type PortfolioItem } from "@/data/items";

const appStoreImages = [
  "/kuusi/app%20store%201.jpg",
  "/kuusi/app%20store%202.jpg",
  "/kuusi/app%20store%203.jpg",
  "/kuusi/app%20store%205.jpg",
];

function AppStoreCard({ item }: { item: PortfolioItem }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-[var(--surface-line)] bg-[var(--surface)] p-6 shadow-[0_24px_80px_rgba(92,155,209,0.18)] backdrop-blur-2xl sm:p-8 lg:p-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 items-center gap-4 sm:gap-5">
          <div className="h-20 w-20 shrink-0 overflow-hidden rounded-[1.5rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_14px_30px_rgba(92,155,209,0.24)] sm:h-24 sm:w-24">
            <img
              src={item.icon}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <h2 className="truncate text-2xl font-semibold sm:text-3xl">
              {item.title}
            </h2>
            <p className="mt-1 text-base text-[var(--fg-secondary)]">
              {item.category}
            </p>
            <p className="max-w-2xl text-sm leading-6 text-[var(--fg-secondary)]">
              {item.summary}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-start gap-3 lg:justify-end">
          <a
            href="https://kuusi.app"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/75 bg-white/45 px-5 text-sm font-semibold text-[var(--accent-strong)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_28px_rgba(92,155,209,0.14)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/65 sm:px-6 sm:text-base"
          >
            Learn More
          </a>
          {item.link ? (
            <a
              href={item.link}
              target={item.target}
              rel={item.target === "_blank" ? "noreferrer" : undefined}
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/45 bg-[rgba(92,155,209,0.9)] px-5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_12px_30px_rgba(92,155,209,0.28)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-[rgba(55,126,184,0.94)] sm:px-6 sm:text-base"
            >
              Download
            </a>
          ) : null}
        </div>
      </div>

      <div
        id="kuusi-preview"
        className="-mx-6 mt-8 flex snap-x gap-4 overflow-x-auto px-6 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4 lg:gap-5"
      >
        {appStoreImages.map((src, index) => (
          <div
            key={src}
            className="w-2/3 shrink-0 snap-start overflow-hidden rounded-[1.35rem] bg-white p-1.5 shadow-[inset_0_0_0_1px_rgba(92,155,209,0.16),0_10px_24px_rgba(92,155,209,0.1)] sm:w-auto"
          >
            <div className="overflow-hidden rounded-[1.1rem] bg-white">
              <img
                src={src}
                alt={`Kuusi App Store screenshot ${index + 1}`}
                className="h-auto w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function Home() {
  const [kuusi] = items;

  return (
    <main className="flex min-h-[100dvh] px-5 pb-8 pt-16 text-[var(--fg)] sm:px-10 lg:px-16 lg:pb-10 lg:pt-20">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col">
        <header className="mx-auto max-w-4xl text-center">
          <img
            src="/memoji.png"
            alt=""
            className="mx-auto h-28 w-28 object-contain sm:h-32 sm:w-32"
          />
          <h1 className="mt-8 text-4xl font-semibold tracking-normal sm:text-5xl">
            My App Store Apps
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--fg-secondary)]">
            I&apos;m Sakura, a UK-based developer creating Apple-optimised apps
            with love.
          </p>
        </header>

        <section className="mt-12 sm:mt-16">
          <AppStoreCard item={kuusi} />
        </section>

        <div className="mt-auto pt-16 text-center">
          <div className="flex items-center justify-center gap-3">
            <a
              href="mailto:066sakura@gmail.com"
              aria-label="Email Sakura"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/75 bg-white/45 text-[var(--accent-strong)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_28px_rgba(92,155,209,0.14)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/65"
            >
              <Mail size={20} strokeWidth={1.8} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/sakurawallace/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/75 bg-white/45 text-[var(--accent-strong)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_28px_rgba(92,155,209,0.14)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/65"
            >
              <Linkedin size={20} strokeWidth={1.8} aria-hidden="true" />
            </a>
          </div>

          <footer className="mt-6 text-sm text-[var(--fg)] opacity-45">
            © {new Date().getFullYear()} Sakura Wallace. All rights reserved.
          </footer>
        </div>
      </div>
    </main>
  );
}
