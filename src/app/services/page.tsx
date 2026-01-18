export const metadata = { title: "Services" };

const SERVICES = [
  {
    name: "HDR Photography",
    desc: "Natural, clean HDR photography optimized for MLS and Zillow."
  },
  {
    name: "Video Walkthrough",
    desc: "Cinematic walkthroughs + vertical reels designed for social lead generation."
  },
  {
    name: "Drone",
    desc: "Aerial photos and video for lots, waterfront, acreage, and lifestyle context."
  },
  {
    name: "Floor Plans",
    desc: "Fast, clean floor plans to reduce buyer friction and increase showings."
  },
  {
    name: "Virtual Staging",
    desc: "Tasteful staging for empty rooms with clear disclosure guidance."
  },
  {
    name: "Twilight",
    desc: "Real or virtual twilight to make listings pop on high-competition streets."
  }
];

export default function ServicesPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Services</h1>
        <p className="max-w-2xl text-neutral-700">
          Nationwide coverage with consistent standards. Book through our order system and we’ll handle scheduling + delivery.
        </p>
        <a href="/book" className="inline-block rounded-md bg-black px-4 py-2 text-sm font-semibold text-white">Book now</a>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {SERVICES.map((s) => (
          <div key={s.name} className="rounded-2xl border p-6">
            <h2 className="text-lg font-semibold">{s.name}</h2>
            <p className="mt-2 text-sm text-neutral-700">{s.desc}</p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border p-6">
        <h2 className="text-lg font-semibold">Need something custom?</h2>
        <p className="mt-2 text-sm text-neutral-700">We can build bundles for teams, property managers, and multi-state brokerages.</p>
        <a href="/contact" className="mt-3 inline-block rounded-md border px-4 py-2 text-sm font-semibold">Contact us</a>
      </section>
    </div>
  );
}
