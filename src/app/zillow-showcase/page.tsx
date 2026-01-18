export const metadata = { title: "Zillow Listing Showcase" };

export default function ZillowShowcasePage() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Zillow Listing Showcase</h1>
        <p className="max-w-2xl text-neutral-700">
          Showcase is a Zillow premium listing experience that requires specific deliverables (including a Zillow 3D Home tour).
          If your listing qualifies, we can handle the media side.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border p-6">
          <h2 className="text-lg font-semibold">What agents care about</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
            <li>Better on-page experience for buyers</li>
            <li>More attention on competitive streets</li>
            <li>Consistent media requirements + QA</li>
          </ul>
        </div>
        <div className="rounded-2xl border p-6">
          <h2 className="text-lg font-semibold">What we deliver</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
            <li>MLS-ready HDR photos</li>
            <li>Zillow-ready 3D capture workflow</li>
            <li>Optional add-ons: video, drone, floor plans</li>
          </ul>
        </div>
      </section>

      <section className="rounded-2xl border p-6">
        <h2 className="text-lg font-semibold">Want to run a Showcase-style marketing plan?</h2>
        <p className="mt-2 text-sm text-neutral-700">
          We’ll help you pair media + posting strategy (reels, neighborhood spotlights, and listing breakdowns) to generate leads.
        </p>
        <a href="/contact" className="mt-3 inline-block rounded-md bg-black px-4 py-2 text-sm font-semibold text-white">Get pricing</a>
      </section>
    </div>
  );
}
