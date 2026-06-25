import { Github, Linkedin, Mail } from "lucide-react";
import { items, type PortfolioItem } from "@/data/items";

function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-[var(--surface)] text-[var(--fg)] transition duration-200 hover:-translate-y-1 hover:bg-[var(--surface-hover)]">
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={item.thumbnail}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col px-6 py-6 sm:px-7 sm:py-7">
        <p className="text-sm font-semibold text-[var(--fg-secondary)]">
          {item.genre}
        </p>
        <h2 className="mt-2 text-xl font-semibold sm:text-2xl">{item.title}</h2>
        <p className="mt-3 hidden text-lg leading-7 sm:block">{item.summary}</p>

        {item.link ? (
          <a
            className="mt-auto pt-5 text-base text-[var(--link)] hover:underline"
            href={item.link}
            target={item.target}
            rel={item.target === "_blank" ? "noreferrer" : undefined}
          >
            Open project
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-[100dvh] bg-[var(--bg)] px-8 pb-8 pt-20 text-[var(--fg)] sm:px-14 lg:px-24 lg:pb-10 lg:pt-28">
      <div className="mx-auto max-w-5xl">
        <header className="mx-auto max-w-3xl text-center">
          <img
            src="/memoji.png"
            alt=""
            className="mx-auto mb-6 h-28 w-28 object-contain sm:h-32 sm:w-32"
          />
          <h1 className="text-3xl font-semibold sm:text-3xl">
            Designed for Apple platforms.
          </h1>
          <p className="mt-5 text-lg leading-8">
            I&apos;m Sakura, a UK-based iOS developer creating SwiftUI apps
            focused on simplicity, quality, and delightful user experiences.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="mailto:066sakura@gmail.com"
              aria-label="Email Sakura"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--surface)] text-[var(--fg)] transition hover:bg-[var(--surface-hover)] hover:text-[var(--link)]"
            >
              <Mail size={20} strokeWidth={1.8} aria-hidden="true" />
            </a>
            <a
              href="https://github.com/o6o6ooo"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--surface)] text-[var(--fg)] transition hover:bg-[var(--surface-hover)] hover:text-[var(--link)]"
            >
              <Github size={20} strokeWidth={1.8} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/sakurawallace/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--surface)] text-[var(--fg)] transition hover:bg-[var(--surface-hover)] hover:text-[var(--link)]"
            >
              <Linkedin size={20} strokeWidth={1.8} aria-hidden="true" />
            </a>
          </div>
        </header>

        <section className="mt-20 grid grid-cols-2 gap-5 sm:gap-10 lg:grid-cols-3">
          {items.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </section>

        <footer className="mt-12 text-center text-sm text-[var(--fg)] opacity-45">
          © {new Date().getFullYear()} Sakura Wallace. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
