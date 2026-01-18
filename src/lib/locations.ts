import locations from '../../data/locations.json';
import type { StateAbbr } from './states';

export type City = { name: string; slug: string };
export type Metro = { name: string; cities: City[] };
export type StateConfig = { name: string; slug: string; metros: Metro[] };

export const servedStates = locations.servedStates as StateAbbr[];
export const states = locations.states as Record<string, StateConfig>;

export function getState(abbr: string) {
  return states[abbr];
}
