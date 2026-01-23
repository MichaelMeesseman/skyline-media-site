import Link from "next/link";
import Image from "next/image";
import portfolioData from "../../../../data/portfolio.json";

type Item = {
  slug: string;
  title: string;
  street?: string;
  showStreet?: boolean;
  streetNumber?: string;
  streetName?: string;
  city: string;
  state: string;
  zip?: string;
  showZip?: boolean;
  showFullAddress?: boolean;
  addressLabel?: string;
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const items = portfolioData as Item[];
  const item = items.find((x) => x.slug === slug);

  const address = item?.addressLabel || `${item?.city}, ${item?.state}`;

  return item
    ? {
        title: `${item.title} | ${address} Real Estate Media`,
        description: `Real estate media project at ${address}. Services: ${item.services.join(", ")}.`,
      }
    : { title: "Portfolio | Skyline Media", description: "Skyline Media portfolio." };
}

export default async function PortfolioItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const items = portfolioData as Item[];
  const item = items.find((x) => x.slug === slug);

  if (!item) {
    return (
      <div className="space-y-3">
        <h1 className="text-2xl font-semibold">Not found</h1>
        <p className="text-neutral-700">This portfolio item doesn't exist.</p>
        <Link className="underline" href="/portfolio">
          Back to portfolio
        </Link>
      </div>
    );
  }

  // Build full address for display
  const fullAddress = item.addressLabel || 
    [
      item.streetNumber && item.streetName 
        ? `${item.streetNumber} ${item.streetName}` 
        : item.street || null,
      `${item.city}, ${item.state}`,
      item.zip || null,
    ]
      .filter(Boolean)
      .join(", ");

  const images = item.gallery?.length ? item.gallery : [item.coverImage];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Link href="/portfolio" className="text-sm underline text-neutral-700">
          ← Back to Portfolio
        </Link>
        <h1 className="text-3xl font-semibold">{item.title}</h1>
        {item.showFullAddress && fullAddress && (
          <address className="not-italic text-neutral-700">
            {fullAddress}
          </address>
        )}

        <div className="flex flex-wrap gap-2 pt-2">
          {item.services.map((s) => (
            <span
              key={s}
              className="rounded-full border px-2 py-1 text-xs text-neutral-700"
            >
              {s}
            </span>
          ))}
          {(item.tags ?? []).map((t) => (
            <span
              key={t}
              className="rounded-full border px-2 py-1 text-xs text-neutral-700"
            >
              #{t}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, index) => (
          <div
            key={`${img}-${index}`}
            className="relative overflow-hidden rounded-xl border bg-neutral-100 aspect-[4/3]"
          >
            <Image
              src={img}
              alt={`${item.title} - Image ${index + 1}`}
              fill
              className="object-cover"
              quality={95}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={index === 0}
            />
            {item.showFullAddress && fullAddress && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-3">
                <address className="not-italic text-white text-sm font-medium">
                  {fullAddress}
                </address>
              </div>
            )}
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
