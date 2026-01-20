import Link from "next/link";
import portfolioData from "../../../../data/portfolio.json";

type Item = {
  slug: string;
  title: string;
  street?: string;
  showStreet?: boolean;
  city: string;
  state: string;
  zip?: string;
  showZip?: boolean;
  date: string;
  services: string[];
  tags?: string[];
  coverImage: string;
  gallery?: string[];
  notes?: string;
};

export function generateStaticParams() {
  const items = portfolioData as Item[];
  return items.map((x) => ({ slug: x.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const items = portfolioData as Item[];
  const item = items.find((x) => x.slug === params.slug);

  return item
    ? {
        title: `${item.title} | ${item.city}, ${item.state} Real Estate Media`,
        description: `Real estate media project in ${item.city}, ${item.state}. Services: ${item.services.join(", ")}.`,
      }
    : { title: "Portfolio | Skyline Media", description: "Skyline Media portfolio." };
}

export default function PortfolioItemPage({ params }: { params: { slug: string } }) {
  const items = portfolioData as Item[];
  const item = items.find((x) => x.slug === params.slug);

  if (!item) {
    return (
      <div className="space-y-3">
        <h1 className="text-2xl font-semibold">Not found</h1>
        <p className="text-neutral-700">This portfolio item doesn’t exist.</p>
        <Link className="underline" href="/portfolio">Back to portfolio</Link>
      </div>
    );
  }

  const locationLine = [
    item.showStreet && item.street ? item.street : null,
    `${item.city}, ${item.state}`,
    item.showZip && item.zip ? item.zip : null,
  ].filter(Boolean).join(" • ");

  const images = item.gallery?.length ? item.gallery : [item.coverImage];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Link href="/portfolio" className="text-sm underline text-neutral-700">← Back to Portfolio</Link>
        <h1 className="text-3xl font-semibold">{item.title}</h1>
        <p className="text-neutral-700">{locationLine}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {item.services.map((s) => (
            <span key={s} className="rounded-full border px-2 py-1 text-xs text-neutral-700">{s}</span>
          ))}
          {(item.tags ?? []).map((t) => (
            <span key={t} className="rounded-full border px-2 py-1 text-xs text-neutral-700">#{t}</span>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {images.map((img) => (
          <div key={img} className="overflow-hidden rounded-xl border bg-neutral-100">
            <img src={img} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>

      {item.notes ? (
        <div className="rounded-xl border p-5">
          <h2 className="text-lg font-semibold">Notes</h2>
          <p className="mt-2 text-neutral-700">{item.notes}</p>
        </div>
      ) : null}

      <div className="rounded-xl border p-6">
        <h2 className="text-xl font-semibold">Want media like this?</h2>
        <p className="mt-2 text-neutral-700">
          Book in minutes through our order form. Fast delivery. Consistent quality nationwide.
        </p>
        <a className="mt-4 inline-block rounded bg-black px-4 py-2 text-white" href="/book">
          Book a Shoot
        </a>
      </div>
    </div>
  );
}
