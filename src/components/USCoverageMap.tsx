'use client';

import * as React from 'react';
import { STATES, type StateAbbr } from '@/lib/states';

type Props = { servedStates: StateAbbr[] };

// "Tile map" grid: not geographically perfect, but looks clean + easy to read.
// 10 columns gives a nice aspect ratio.
const COLS = 10;

export function USCoverageMap({ servedStates }: Props) {
  const served = React.useMemo(() => new Set(servedStates), [servedStates]);

  return (
    <div className="w-full overflow-x-auto">
      <div className="inline-block rounded-xl border p-4">
        <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${COLS}, minmax(44px, 44px))` }}>
          {STATES.map((s) => {
            const active = served.has(s.abbr);
            const cls = [
              'flex h-10 w-11 select-none items-center justify-center rounded-md border text-xs font-semibold',
              active ? 'border-green-700 bg-green-600 text-white' : 'border-neutral-200 bg-neutral-50 text-neutral-700'
            ].join(' ');

            return (
              <div key={s.abbr} title={`${s.name}${active ? ' (Active)' : ''}`} className={cls}>
                {s.abbr}
              </div>
            );
          })}
        </div>

        <div className="mt-3 flex flex-wrap gap-3 text-sm">
          <span className="inline-flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-green-600" /> Active coverage
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm border bg-neutral-50" /> Coming soon
          </span>
        </div>
      </div>
    </div>
  );
}
