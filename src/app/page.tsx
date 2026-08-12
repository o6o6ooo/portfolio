import { Linkedin, Mail } from "lucide-react";
import { items, type PortfolioItem } from "@/data/items";

function AppStoreCard({ item }: { item: PortfolioItem }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-[var(--surface-line)] bg-[var(--surface)] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.045)] backdrop-blur-2xl sm:p-8 lg:p-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 items-center gap-4 sm:gap-5">
          <div className="h-20 w-20 shrink-0 overflow-hidden rounded-[1.5rem] shadow-[0_6px_18px_rgba(0,0,0,0.08)] sm:h-24 sm:w-24">
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
            href={item.learnMoreLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 bg-white/70 px-5 text-sm font-semibold text-[var(--fg-secondary)] shadow-[0_1px_3px_rgba(0,0,0,0.04)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white sm:px-6 sm:text-base"
          >
            Learn More
          </a>
          {item.link ? (
            <a
              href={item.link}
              target={item.target}
              rel={item.target === "_blank" ? "noreferrer" : undefined}
              className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--apple-blue)] bg-[var(--apple-blue)] px-5 text-sm font-semibold text-white shadow-[0_2px_8px_rgba(0,136,255,0.18)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-[#0077e6] sm:px-6 sm:text-base"
            >
              Download
            </a>
          ) : null}
        </div>
      </div>

      <div
        id={`${item.id}-preview`}
        className="-mx-6 mt-8 flex scrollbar-thin snap-x scroll-pl-6 gap-4 overflow-x-auto px-6 pb-2 sm:mx-0 sm:px-0 lg:gap-5"
      >
        {item.images.map((src, index) => (
          <div
            key={src}
            className="w-2/3 shrink-0 snap-start overflow-hidden rounded-[1.35rem] shadow-[0_4px_16px_rgba(0,0,0,0.07)] sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-3.75rem)/4)]"
          >
            <div className="overflow-hidden rounded-[1.35rem]">
              <img
                src={src}
                alt={`${item.title} App Store screenshot ${index + 1}`}
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
          <p className="mx-auto mt-5 max-w-2xl px-2 text-lg leading-8 text-[var(--fg-secondary)] sm:px-0">
            I&apos;m Sakura, a UK-based developer creating Apple-optimised apps
            with love.
          </p>
        </header>

        <section className="mt-12 space-y-8 sm:mt-16 sm:space-y-10">
          {items.map((item) => (
            <AppStoreCard key={item.id} item={item} />
          ))}
        </section>

        <div className="mt-auto pt-16 text-center">
          <div className="flex items-center justify-center gap-3">
            <a
              href="mailto:066sakura@gmail.com"
              aria-label="Email Sakura"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[var(--apple-blue)] shadow-[0_1px_3px_rgba(0,0,0,0.04)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white"
            >
              <Mail size={20} strokeWidth={1.8} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/sakurawallace/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[var(--apple-blue)] shadow-[0_1px_3px_rgba(0,0,0,0.04)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white"
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
