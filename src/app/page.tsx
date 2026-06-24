import { items, type PortfolioItem } from "@/data/items";

function PortfolioCard({
  item,
}: {
  item: PortfolioItem;
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-[var(--surface)] text-[var(--fg)] transition duration-200 hover:-translate-y-1 hover:bg-[var(--surface-hover)]">
      <div className="aspect-[16/9] overflow-hidden">
        <img src={item.thumbnail} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="flex flex-1 flex-col px-7 py-7">
        <p className="text-sm font-semibold text-[var(--fg-secondary)]">
          {item.genre}
        </p>
        <h2 className="mt-2 text-xl font-semibold sm:text-3xl">{item.title}</h2>
        <p className="mt-3 hidden text-lg leading-7 sm:block">{item.summary}</p>

        {item.link ? (
          <a
            className="mt-auto pt-5 text-lg text-[var(--link)] hover:underline"
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
    <main className="min-h-svh bg-[var(--bg)] px-8 py-20 text-[var(--fg)] sm:px-14 lg:px-24 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <header className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-semibold sm:text-5xl">Sakura Wallace</h1>
          <p className="mt-5 text-xl leading-8">
            Full-Stack Engineer crafting focused, interactive products.
          </p>
        </header>

        <section className="mt-20 grid grid-cols-2 gap-5 sm:gap-10 lg:grid-cols-3">
          {items.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </section>
      </div>
    </main>
  );
}
