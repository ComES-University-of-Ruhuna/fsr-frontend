const API_BASE = (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? '';

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(init.headers ?? {}) },
    ...init,
  });
  const ct = res.headers.get('content-type') ?? '';
  const data = ct.includes('application/json') ? await res.json() : await res.text();
  if (!res.ok) {
    const message =
      typeof data === 'object' && data && 'error' in data
        ? String((data as { error: string }).error)
        : `Request failed with status ${res.status}`;
    throw new Error(message);
  }
  return data as T;
}

export const api = {
  get: <T,>(path: string) => request<T>(path),
  post: <T,>(path: string, body: unknown) =>
    request<T>(path, { method: 'POST', body: JSON.stringify(body) }),
};

// Domain types
export type DivisionId = 'mechanical' | 'electrical' | 'simulation' | 'operations';

export interface Subteam {
  name: string;
  lead: string;
}

export interface Division {
  id: DivisionId;
  name: string;
  color: 'crimson' | 'gold';
  subteams: Subteam[];
}

export interface Member {
  id: number;
  name: string;
  role: string;
  division?: string;
  affiliation?: string;
  photo?: string | null;
}

export interface TeamData {
  advisors: Member[];
  executive: Member[];
  divisions: Division[];
  testimonials: { id: number; quote: string; name: string; role: string }[];
}

export interface ProjectSpec {
  chassis: string;
  powertrain: string;
  suspension: string;
  battery: string;
  aerodynamics: string;
}

export interface Project {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  status: string;
  year: number;
  hero: string | null;
  overview: string;
  specs: ProjectSpec;
  designHighlights: string[];
  timeline: { year: number; milestone: string }[];
  gallery: string[];
}

export interface GalleryAlbum {
  id: string;
  title: string;
  description: string;
  cover: string | null;
  assets: string[];
}

export interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  body: string;
}

export interface SponsorEntry {
  name: string;
  logo?: string;
  url?: string;
}
export interface SponsorTier {
  id: string;
  name: string;
  sponsors: SponsorEntry[];
}
export interface SponsorsData {
  tiers: SponsorTier[];
  packagePdfUrl: string;
}
