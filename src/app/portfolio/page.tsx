"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import portfolioData from "../../../data/portfolio.json";

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
};

function uniq(arr: string[]) {
  return Array.from(new Set(arr)).sort((a, b) => a.localeCompare(b));
}

export default function PortfolioPage() {
  const items = (portfolioData as Item[])
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  const allStates = useMemo(() => uniq(items.map((i) => i.state)), [items]);
  const allCities = useMemo(() => uniq(items.map((i) => i.city)), [items]);
  const allServices = useMemo(() => uniq(items.flatMap((i) => i.services)), [items]);
  const allTags = useMemo(() => uniq(items.flatMap((i) => i.tags ?? [])), [items]);

  const [q, setQ] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [service, setService] = useState("");
  const [tag, setTag] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return items.filter((i) => {
      const matchesQ =
        !query ||
        i.title.toLowerCase().includes(query) ||
        i.city.toLowerCase().includes(query) ||
        i.state.toLowerCase().includes(query) ||
        (i.zip && i.zip.includes(query)) ||
        (i.tags ?? []).some((t) => t.toLowerCase().includes(query));

      const matchesState = !state || i.state === state;
      const matchesCity = !city || i.city === city;
      const matchesService = !service || i.services.includes(service);
      const matchesTag = !tag || (i.tags ?? []).includes(tag);

      return matchesQ && matchesState && matchesCity && matchesService && matchesTag;
    });
  }, [items, q, state, city, service, tag]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Portfolio</h1>
        <p className="mt-2 text-neutral-700">
          Recent shoots across our service areas. Click any project to view the full gallery.
        </p>
      </div>

      <div className="grid gap-3 rounded-xl border p-4 md:grid-cols-5">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search (city, ZIP, tag)…"
          className="rounded border px-3 py-2 text-sm md:col-span-2"
        />

        <select value={state} onChange={(e) => setState(e.target.value)} className="rounded border px-3 py-2 text-sm">
          <option value="">All States</option>
          {allStates.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        <select value={city} onChange={(e) => setCity(e.target.value)} className="rounded border px-3 py-2 text-sm">
          <option value="">All Cities</option>
          {allCities.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <select value={service} onChange={(e) => setService(e.target.value)} className="rounded border px-3 py-2 text-sm">
          <option value="">All Services</option>
          {allServices.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        <div className="flex gap-2 md:col-span-5">
          <select value={tag} onChange={(e) => setTag(e.target.value)} className="w-full rounded border px-3 py-2 text-sm">
            <option value="">All Tags</option>
            {allTags.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>

          <button
            onClick={() => { setQ(""); setState(""); setCity(""); setService(""); setTag(""); }}
            className="rounded bg-black px-4 py-2 text-sm text-white"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <Link key={item.slug} href={`/portfolio/${item.slug}`} className="overflow-hidden rounded-xl border hover:shadow-sm">
            <div className="aspect-[4/3] w-full bg-neutral-100">
              <img src={item.coverImage} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="p-4">
              <div className="font-semibold">{item.title}</div>
              <div className="text-sm text-neutral-600">
                {item.city}, {item.state}{item.showZip && item.zip ? ` • ${item.zip}` : ""}
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {item.services.map((s) => (
                  <span key={s} className="rounded-full border px-2 py-1 text-xs text-neutral-700">{s}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
