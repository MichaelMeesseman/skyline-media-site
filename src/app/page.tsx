import Image from "next/image";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="rounded-2xl border p-8 md:p-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Nationwide real estate media that helps listings win
            </h1>
            <p className="mt-4 max-w-xl text-neutral-700">
              Photo, video, drone, floor plans, and Zillow-ready deliverables. Built for teams and top agents who care about
              speed, consistency, and conversion.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/book" className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white">
                Book a shoot
              </a>
              <a href="/services" className="rounded-md border px-4 py-2 text-sm font-semibold">
                View services
              </a>
              <a href="/locations" className="rounded-md border px-4 py-2 text-sm font-semibold">
                See coverage map
              </a>
            </div>
            <p className="mt-4 text-sm text-neutral-600">
              Want listing leads from video? We publish neighborhood spotlights + marketing breakdowns — join the newsletter.
            </p>
          </div>

          <div className="rounded-2xl bg-neutral-50 p-6">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Skyline Media" width={44} height={44} />
              <div>
                <div className="font-semibold">Skyline Media</div>
                <div className="text-sm text-neutral-600">Fast. Clean. Consistent.</div>
              </div>
            </div>
            <div className="mt-6 grid gap-3">
              {[
                ["24–48 hour turnaround", "Reliable delivery standards"],
                ["Nationwide coverage", "Scale with vetted contractors"],
                ["Marketing-first media", "Designed to generate clicks and showings"],
              ].map(([t, d]) => (
                <div key={t} className="rounded-xl border bg-white p-4">
                  <div className="font-semibold">{t}</div>
                  <div className="text-sm text-neutral-700">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          ["Photos", "HDR real estate photography that looks natural and sells the space."],
          ["Video", "Vertical reels + cinematic walkthroughs built for social + lead gen."],
          ["Zillow-ready", "Deliverables designed for Zillow Listing Showcase requirements."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-2xl border p-6">
            <h2 className="text-lg font-semibold">{t}</h2>
            <p className="mt-2 text-sm text-neutral-700">{d}</p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border p-8">
        <h2 className="text-2xl font-semibold">Newsletter + promos for agents</h2>
        <p className="mt-2 text-neutral-700">
          Get new service drops, seasonal promos (twilight, spring refresh), and marketing tips.
        </p>
        <a href="/contact" className="mt-4 inline-block rounded-md bg-black px-4 py-2 text-sm font-semibold text-white">
          Join / Request pricing
        </a>
      </section>
    </div>
  );
}
