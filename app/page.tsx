"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  geoGraticule10,
  geoNaturalEarth1,
  geoPath,
  type GeoProjection,
} from "d3-geo";
import { feature, mesh } from "topojson-client";

type StoryLocation = {
  name: string;
  city: string;
  region: string;
  coordinates: [number, number]; // [longitude, latitude]
};

type WorldAtlasTopology = {
  type: "Topology";
  objects: {
    countries: unknown;
    land?: unknown;
  };
  arcs: unknown[];
  transform?: unknown;
};

const WIDTH = 1000;
const HEIGHT = 700;

const storyLocations: StoryLocation[] = [
  {
    name: "United Kingdom",
    city: "London",
    region: "Europe",
    coordinates: [-0.1276, 51.5072],
  },
  {
    name: "Sierra Leone",
    city: "Freetown",
    region: "West Africa",
    coordinates: [-13.2317, 8.4657],
  },
  {
    name: "Nigeria",
    city: "Lagos",
    region: "West Africa",
    coordinates: [3.3792, 6.5244],
  },
  {
    name: "Kenya",
    city: "Nairobi",
    region: "East Africa",
    coordinates: [36.8219, -1.2921],
  },
  {
    name: "South Africa",
    city: "Cape Town",
    region: "Southern Africa",
    coordinates: [18.4241, -33.9249],
  },
  {
    name: "Lebanon",
    city: "Beirut",
    region: "Middle East",
    coordinates: [35.5018, 33.8938],
  },
  {
    name: "Qatar",
    city: "Doha",
    region: "Gulf",
    coordinates: [51.531, 25.2854],
  },
  {
    name: "United Arab Emirates",
    city: "Dubai",
    region: "Gulf",
    coordinates: [55.2708, 25.2048],
  },
  {
    name: "India",
    city: "Delhi",
    region: "South Asia",
    coordinates: [77.1025, 28.7041],
  },
];

function getProjection(): GeoProjection {
  return geoNaturalEarth1()
    .scale(185)
    .translate([WIDTH / 2, HEIGHT / 2])
    .center([15, 12]);
}

function getLabelOffset(city: string): { dx: number; dy: number } {
  switch (city) {
    case "London":
      return { dx: 0, dy: -28 };
    case "Freetown":
      return { dx: -30, dy: -12 };
    case "Lagos":
      return { dx: 26, dy: -8 };
    case "Nairobi":
      return { dx: 28, dy: -6 };
    case "Cape Town":
      return { dx: 22, dy: 18 };
    case "Beirut":
      return { dx: 26, dy: -16 };
    case "Doha":
      return { dx: 22, dy: -10 };
    case "Dubai":
      return { dx: 26, dy: 14 };
    case "Delhi":
      return { dx: 24, dy: -10 };
    default:
      return { dx: 16, dy: -16 };
  }
}

function buildCurvedPath(
  from: [number, number],
  to: [number, number],
  projection: GeoProjection,
) {
  const p1 = projection(from);
  const p2 = projection(to);

  if (!p1 || !p2) return "";

  const [x1, y1] = p1;
  const [x2, y2] = p2;

  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;

  const dx = x2 - x1;
  const dy = y2 - y1;
  const distance = Math.sqrt(dx * dx + dy * dy) || 1;

  const nx = -dy / distance;
  const ny = dx / distance;

  const curve = Math.min(70, Math.max(24, distance * 0.16));
  const cx = mx + nx * curve;
  const cy = my + ny * curve;

  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
      {children}
    </p>
  );
}

export default function HomePage() {
  const [countriesPath, setCountriesPath] = useState("");
  const [bordersPath, setBordersPath] = useState("");
  const [graticulePath, setGraticulePath] = useState("");
  const [mapReady, setMapReady] = useState(false);

  const projection = useMemo(() => getProjection(), []);
  const pathGenerator = useMemo(() => geoPath(projection), [projection]);

  useEffect(() => {
    let isMounted = true;

    async function loadMap() {
      const response = await fetch(
        "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json",
      );
      const world: WorldAtlasTopology = await response.json();

      const countries = feature(world as never, world.objects.countries as never);
      const borders = mesh(
        world as never,
        world.objects.countries as never,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (a, b) => a !== b,
      );

      const graticule = geoGraticule10();

      if (!isMounted) return;

      setCountriesPath(pathGenerator(countries as never) ?? "");
      setBordersPath(pathGenerator(borders as never) ?? "");
      setGraticulePath(pathGenerator(graticule as never) ?? "");
      setMapReady(true);
    }

    loadMap().catch((error) => {
      console.error("Failed to load world map:", error);
    });

    return () => {
      isMounted = false;
    };
  }, [pathGenerator]);

  const hub = storyLocations[0];

  const routePairs = [
    [hub.coordinates, storyLocations[1].coordinates],
    [hub.coordinates, storyLocations[2].coordinates],
    [hub.coordinates, storyLocations[3].coordinates],
    [hub.coordinates, storyLocations[4].coordinates],
    [hub.coordinates, storyLocations[5].coordinates],
    [hub.coordinates, storyLocations[6].coordinates],
    [hub.coordinates, storyLocations[7].coordinates],
    [hub.coordinates, storyLocations[8].coordinates],
    [storyLocations[5].coordinates, storyLocations[6].coordinates],
    [storyLocations[6].coordinates, storyLocations[7].coordinates],
    [storyLocations[5].coordinates, storyLocations[8].coordinates],
    [storyLocations[3].coordinates, storyLocations[4].coordinates],
  ] as Array<[[number, number], [number, number]]>;

  return (
    <main className="min-h-screen bg-stone-950 text-white">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <SectionEyebrow>Investigations • Documentary • Factual</SectionEyebrow>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Reporting and producing stories across borders
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
              I work across investigations, international journalism and
              documentary storytelling, with reporting experience spanning
              Africa, Europe, the Gulf and South Asia.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#footprint"
                className="rounded-full border border-white/10 bg-white px-5 py-3 text-sm font-medium text-stone-950 transition hover:scale-[1.02]"
              >
                View reporting footprint
              </a>
              <a
                href="#locations"
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Browse locations
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="footprint"
        className="relative isolate overflow-hidden py-24 sm:py-32"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.05),transparent_20%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.03),transparent_20%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_1fr]">
            <div>
              <SectionEyebrow>Global reporting footprint</SectionEyebrow>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
                Stories reported across multiple countries and regions
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
                My work spans investigations, documentary localisation and
                factual storytelling across Africa, Europe, the Gulf and South
                Asia.
              </p>

              <div id="locations" className="mt-8 grid gap-4 sm:grid-cols-2">
                {storyLocations.map((location) => (
                  <div
                    key={`${location.name}-${location.city}`}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08] hover:shadow-xl"
                  >
                    <p className="text-sm uppercase tracking-[0.22em] text-stone-400">
                      {location.name}
                    </p>
                    <p className="mt-2 text-base text-white">{location.city}</p>
                    <p className="mt-1 text-sm text-stone-300">
                      {location.region}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-stone-900/70 p-4 shadow-2xl transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.08),transparent_20%),radial-gradient(circle_at_70%_35%,rgba(255,255,255,0.05),transparent_18%),radial-gradient(circle_at_55%_70%,rgba(255,255,255,0.06),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]">
                <svg
                  viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
                  className="h-full w-full"
                  aria-label="Global reporting footprint map"
                >
                  <defs>
                    <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>

                    <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
                      <stop offset="50%" stopColor="rgba(255,255,255,0.66)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.12)" />
                    </linearGradient>
                  </defs>

                  {mapReady && (
                    <>
                      <path
                        d={graticulePath}
                        fill="none"
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="0.7"
                      />

                      <path
                        d={countriesPath}
                        fill="rgba(255,255,255,0.075)"
                        stroke="rgba(255,255,255,0.10)"
                        strokeWidth="0.8"
                      />

                      <path
                        d={bordersPath}
                        fill="none"
                        stroke="rgba(255,255,255,0.13)"
                        strokeWidth="0.7"
                      />

                      {routePairs.map(([from, to], index) => {
                        const d = buildCurvedPath(from, to, projection);

                        return (
                          <g key={`route-${index}`}>
                            <path
                              d={d}
                              fill="none"
                              stroke="rgba(255,255,255,0.08)"
                              strokeWidth="3.5"
                              strokeLinecap="round"
                            />
                            <path
                              d={d}
                              fill="none"
                              stroke="url(#routeGradient)"
                              strokeWidth="1.15"
                              strokeLinecap="round"
                            />
                          </g>
                        );
                      })}

                      {storyLocations.map((location) => {
                        const point = projection(location.coordinates);
                        if (!point) return null;

                        const [x, y] = point;
                        const { dx, dy } = getLabelOffset(location.city);
                        const labelX = x + dx;
                        const labelY = y + dy;
                        const textWidth = Math.max(52, location.city.length * 7.4);
                        const rectX = labelX - textWidth / 2;
                        const rectY = labelY - 11;

                        return (
                          <g key={`${location.name}-${location.city}`}>
                            <line
                              x1={x}
                              y1={y}
                              x2={labelX}
                              y2={labelY}
                              stroke="rgba(255,255,255,0.18)"
                              strokeWidth="1"
                            />

                            <rect
                              x={rectX}
                              y={rectY}
                              rx="999"
                              ry="999"
                              width={textWidth}
                              height="22"
                              fill="rgba(12,10,9,0.92)"
                              stroke="rgba(255,255,255,0.10)"
                            />

                            <text
                              x={labelX}
                              y={labelY + 0.5}
                              textAnchor="middle"
                              dominantBaseline="middle"
                              style={{
                                fontSize: 9.5,
                                letterSpacing: "0.18em",
                                textTransform: "uppercase",
                                fill: "rgba(231,229,228,1)",
                                fontFamily:
                                  "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
                              }}
                            >
                              {location.city}
                            </text>

                            <circle
                              cx={x}
                              cy={y}
                              r="13"
                              fill="rgba(255,255,255,0.12)"
                              filter="url(#softGlow)"
                            />
                            <circle
                              cx={x}
                              cy={y}
                              r="5"
                              fill="#ffffff"
                              stroke="rgba(255,255,255,0.35)"
                              strokeWidth="1"
                            />
                          </g>
                        );
                      })}
                    </>
                  )}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-stone-400">
                Coverage
              </p>
              <p className="mt-4 text-3xl font-semibold text-white">4 regions</p>
              <p className="mt-2 text-sm leading-7 text-stone-300">
                Africa, Europe, the Gulf and South Asia represented in one
                editorial view.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-stone-400">
                Locations
              </p>
              <p className="mt-4 text-3xl font-semibold text-white">
                {storyLocations.length} cities
              </p>
              <p className="mt-2 text-sm leading-7 text-stone-300">
                Key reporting points shown with accurate geographic placement.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-stone-400">
                Focus
              </p>
              <p className="mt-4 text-3xl font-semibold text-white">
                Investigations
              </p>
              <p className="mt-2 text-sm leading-7 text-stone-300">
                Documentary, localisation and factual storytelling connected by
                a single global footprint.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}