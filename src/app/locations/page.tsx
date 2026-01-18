import { USCoverageMap } from "@/components/USCoverageMap";
import { servedStates, states } from "@/lib/locations";

export const metadata = { title: "Locations" };

export default function LocationsPage() {
  const activeStates = servedStates.map((abbr) => ({ abbr, ...(states as any)[abbr] }));

  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Service Coverage</h1>
        <p className="max-w-2xl text-neutral-700">
          Green = active coverage. As we add vetted contractors, we expand coverage state-by-state.
        </p>
      </header>

      <USCoverageMap servedStates={servedStates} />

      <section className="space-y-6">
        {activeStates.map((st: any) => (
          <div key={st.abbr} className="rounded-2xl border p-6">
            <h2 className="text-lg font-semibold">{st.name} ({st.abbr})</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {st.metros.map((m: any) => (
                <div key={m.name} className="rounded-xl border bg-white p-4">
                  <div className="font-semibold">{m.name}</div>
                  <ul className="mt-2 space-y-1 text-sm text-neutral-700">
                    {m.cities.map((c: any) => (
                      <li key={c.slug}>• {c.name}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border p-6">
        <h2 className="text-lg font-semibold">Don’t see your city?</h2>
        <p className="mt-2 text-sm text-neutral-700">
          We’re expanding nationwide. Request coverage and we’ll route you to the nearest operator.
        </p>
        <a href="/contact" className="mt-3 inline-block rounded-md border px-4 py-2 text-sm font-semibold">Request coverage</a>
      </section>
    </div>
  );
}
