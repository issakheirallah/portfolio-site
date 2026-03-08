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
  coordinates: [number, number];
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
  projection: GeoProjection
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
export default function PortfolioWebsite() {
  const profileImage = "/images/profile/issa-kheirallah.jpg";

  const videos = [
    {
      title: "Technologies at the 2024 Paris Olympics",
      url: "https://www.youtube.com/embed/ZFO_vnkpLBA",
    },
    {
      title: "Implantable device to help with regulating diabetes",
      url: "https://www.youtube.com/embed/2eOiy7dC3nE",
    },
    {
      title: "Spinal cord rehabilitation device",
      url: "https://www.youtube.com/embed/OcGbQclUDQw",
    },
  ];

  const featuredWork = [
    {
      title: "Eye Investigations",
      category: "Investigations",
      description:
        "Localising flagship BBC investigations for international audiences, managing editorial workflows, translation, dubbing and delivery across multiple markets.",
      image: "/images/projects/bbc-eye-investigations.jpg",
    },
    {
      title: "4Tech",
      category: "Presenter-led reporting",
      description:
        "Part of the production of 280+ episodes covering global technology, innovation and digital culture across broadcast and social platforms.",
      image: "/images/projects/bbc-arabic-4tech.jpg",
    },
    {
      title: "Art for Life",
      category: "Arts and Culture",
      description:
        "Produced and directed reports across Europe covering digital art, NFTs and cultural events, helping teams from development through final edit.",
      image: "/images/projects/art-for-life.jpg",
    },
  ];

  const documentaries = [
    {
      slug: "dark-waters",
      title: "Dark Waters: Africa's Deadliest Migration Route",
      image: "/images/documentaries/01-afeye-dark-waters.jpg",
      preview: "/videos/documentaries/dark-waters-preview.mp4",
      url: "https://youtu.be/ajX6NaVks3w",
      summary:
        "BBC Africa Eye investigates what is fast becoming the world's deadliest migration route: the perilous Atlantic crossing from West Africa to Spain's Canary Islands.",
      role: "Localisation Producer",
      strand: "BBC Africa Eye",
      contribution:
        "Led localisation delivery, coordinating editorial adaptation, dubbing and multilingual production workflows for international audiences.",
      process: [
        "Managed editorial localisation workflow from source delivery to final versioning",
        "Oversaw translation, dubbing and partner coordination",
        "Prepared the film for international audience adaptation and delivery",
      ],
    },
    {
      slug: "miracle-baby-scammers",
      title: "Nigeria's Miracle Baby Scammers",
      image: "/images/documentaries/02-afeye-nigeria-babies.jpg",
      preview: "/videos/documentaries/nigeria-babies-preview.mp4",
      url: "https://youtu.be/r62xSGw3kcI",
      summary:
        "Africa Eye goes undercover to expose fertility scammers targeting Nigerian women and fuelling an underground trade in black market babies.",
      role: "Localisation Producer",
      strand: "BBC Africa Eye",
      contribution:
        "Managed localisation and editorial adaptation for international audiences, ensuring the investigation travelled clearly across markets.",
      process: [
        "Supported multilingual editorial versioning",
        "Coordinated translation and dubbing delivery",
        "Maintained editorial clarity across localised outputs",
      ],
    },
    {
      slug: "opioid-kings",
      title: "India's Opioid Kings",
      image: "/images/documentaries/03-afeye-india-opioids.jpg",
      preview: "/videos/documentaries/opioid-kings-preview.mp4",
      url: "https://youtu.be/ji6tjiRjbok",
      summary:
        "For more than a decade, West Africa has been in the grip of an opioid crisis. BBC Eye tracks the supply chain back to the makers of the illegal, dangerous pills.",
      role: "Localisation Producer",
      strand: "BBC Africa Eye",
      contribution:
        "Adapted the film for wider international distribution through structured localisation and editorial delivery management.",
      process: [
        "Oversaw localisation timeline and delivery",
        "Managed vendor workflows across translation and dubbing",
        "Prepared final versions for platform distribution",
      ],
    },
    {
      slug: "stranded",
      title: "Stranded: Exposing The UK's Immigration Scammers",
      image: "/images/documentaries/04-afeye-stranded.jpg",
      preview: "/videos/documentaries/stranded-preview.mp4",
      url: "https://youtu.be/191CuNRGoos",
      summary:
        "BBC Africa Eye goes undercover to track down rogue relocation agents who squeeze thousands of pounds from aspiring migrants with the false promise of a job in the UK.",
      role: "Localisation Producer",
      strand: "BBC Africa Eye",
      contribution:
        "Handled localisation planning and final adaptation workflows to support wider audience reach.",
      process: [
        "Planned versioning across international outputs",
        "Managed multilingual adaptation",
        "Supported final editorial delivery",
      ],
    },
    {
      slug: "blood-parliament",
      title: "Blood Parliament",
      image: "/images/documentaries/05-afeye-blood-parliament.jpg",
      preview: "/videos/documentaries/blood-parliament-preview.mp4",
      url: "https://youtu.be/qz0f1yyf_eA",
      summary:
        "Africa Eye investigates the shootings at Kenya's June 25th finance bill protest.",
      role: "Localisation Producer",
      strand: "BBC Africa Eye",
      contribution:
        "Delivered localisation support for a fast-moving, high-impact investigation requiring precise editorial adaptation.",
      process: [
        "Supported rapid localisation turnaround",
        "Coordinated language and versioning workflows",
        "Maintained consistency across adapted outputs",
      ],
    },
    {
      slug: "madams",
      title: "Madams: Exposing Kenya's Child Sex Trade",
      image: "/images/documentaries/06-afeye-madams.jpg",
      preview: "/videos/documentaries/madams-preview.mp4",
      url: "https://youtu.be/JHINoFq8GvE",
      summary:
        "Africa Eye uncovers child sex trafficking in Kenya's transit town, Mai Mahiu, and follows one woman, Baby Girl, who rescues girls from abuse and exploitation.",
      role: "Localisation Producer",
      strand: "BBC Africa Eye",
      contribution:
        "Managed adaptation and multilingual delivery to preserve tone, clarity and emotional impact for new audiences.",
      process: [
        "Coordinated multilingual delivery pipeline",
        "Oversaw dubbing and final quality control",
        "Supported editorial adaptation for wider accessibility",
      ],
    },
    {
      slug: "death-in-dubai",
      title: "Death In Dubai",
      image: "/images/documentaries/07-afeye-death-in-dubai.jpg",
      preview: "/videos/documentaries/death-in-dubai-preview.mp4",
      url: "https://youtu.be/OboT09uRw6M",
      summary:
        "When the mysterious death of a 23-year-old Ugandan in Dubai goes viral, she becomes the face of the disturbing Dubai Porta Potty scandal.",
      role: "Localisation Producer",
      strand: "BBC Africa Eye",
      contribution:
        "Helped localise and deliver a sensitive, high-interest investigation for audiences across multiple markets.",
      process: [
        "Managed localisation workflow end to end",
        "Coordinated language adaptation and dubbing",
        "Prepared final materials for distribution",
      ],
    },
    {
      slug: "money-rituals",
      title: "Money Rituals: Africa's Deadliest Taboo",
      image: "/images/documentaries/08-afeye-money-rituals.jpg",
      preview: "/videos/documentaries/money-rituals-preview.mp4",
      url: "https://youtu.be/EjDe1D8NlOY",
      summary:
        "Africa Eye investigates Sierra Leone's hidden ritual market, where criminals posing as healers claim they can supply human body parts, while traditional healers and police deny the trade exists.",
      role: "Localisation Producer",
      strand: "BBC Africa Eye",
      contribution:
        "Oversaw the documentary's localisation and delivery, ensuring editorial integrity across adapted versions.",
      process: [
        "Guided translation and dubbing workflows",
        "Ensured cultural and editorial clarity in adapted versions",
        "Managed delivery across international outputs",
      ],
    },
    {
      slug: "hunting-the-traffickers",
      title: "Hunting The Traffickers",
      image: "/images/documentaries/09-afeye-traffickers.jpg",
      preview: "/videos/documentaries/traffickers-preview.mp4",
      url: "https://youtu.be/_a4G2SZPvBQ",
      summary:
        "Africa Eye is given exclusive access to the Sierra Leone Police as they target criminal gangs trafficking vulnerable people across West Africa and help one father try to find his missing daughter.",
      role: "Localisation Producer",
      strand: "BBC Africa Eye",
      contribution:
        "Managed localisation and editorial adaptation for a complex cross-border investigation.",
      process: [
        "Coordinated external localisation partners",
        "Oversaw editorial adaptation and version control",
        "Delivered final adapted outputs for wider distribution",
      ],
    },
    {
      slug: "state-of-fear",
      title: "State of Fear",
      image: "/images/documentaries/10-afeye-state-of-fear.jpg",
      preview: "/videos/documentaries/state-of-fear-preview.mp4",
      url: "https://youtu.be/9WkYK-SjJtE",
      summary:
        "A wave of enforced disappearances of government critics is spreading fear across Tanzania. Africa Eye investigates the abductions through powerful testimonies from survivors of torture and families of the disappeared.",
      role: "Localisation Producer",
      strand: "BBC Africa Eye",
      contribution:
        "Supported international adaptation and delivery for an investigation centred on testimony, risk and accountability.",
      process: [
        "Managed adaptation across target outputs",
        "Handled dubbing and versioning workflows",
        "Maintained editorial consistency through final delivery",
      ],
    },
  ];

  const timeline = [
    {
      year: "2024–Present",
      title: "Eye Investigations / Africa Eye",
      description:
        "Leading localisation operations for flagship BBC investigations, adapting documentaries for international audiences.",
    },
    {
      year: "2018–2024",
      title: "BBC Arabic – 4Tech",
      description:
        "Part of the production of hundreds of episodes covering technology, innovation and digital culture across broadcast and social platforms.",
    },
    {
      year: "2021–2022",
      title: "Art for Life",
      description:
        "Produced and directed arts and culture reports across the UK and Europe, from development through final edit.",
    },
    {
      year: "2015–2024",
      title: "BBC News Arabic & Newsroom Roles",
      description:
        "Worked across digital video, newsroom journalism and factual production, building a cross-platform editorial foundation.",
    },
  ];

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

  const expertise = [
    "Investigations and editorial decision-making",
    "Producer-led storytelling",
    "International documentary localisation",
    "Scriptwriting and story development",
    "Editorial leadership and team management",
    "Audience growth and digital strategy",
  ];

  const [currentVideo, setCurrentVideo] = useState(0);
  const [selectedDocumentary, setSelectedDocumentary] = useState(
    documentaries[0]
  );
  const [spotlightVisible, setSpotlightVisible] = useState(true);

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };
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
      "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
    );
    const world: WorldAtlasTopology = await response.json();

    const countries = feature(world as never, world.objects.countries as never);
    const borders = mesh(
      world as never,
      world.objects.countries as never,
      (a, b) => a !== b
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

const routePairs: Array<[[number, number], [number, number]]> = [
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
];

  const selectedIndex = useMemo(
    () => documentaries.findIndex((doc) => doc.slug === selectedDocumentary.slug),
    [documentaries, selectedDocumentary.slug]
  );

  const changeDocumentary = (doc: (typeof documentaries)[number]) => {
    setSpotlightVisible(false);
    window.setTimeout(() => {
      setSelectedDocumentary(doc);
      setSpotlightVisible(true);
    }, 150);
  };

  const nextDocumentary = () => {
    const nextIndex = (selectedIndex + 1) % documentaries.length;
    changeDocumentary(documentaries[nextIndex]);
  };

  const prevDocumentary = () => {
    const prevIndex =
      (selectedIndex - 1 + documentaries.length) % documentaries.length;
    changeDocumentary(documentaries[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-stone-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a
            href="#top"
            className="text-sm font-semibold uppercase tracking-[0.3em] text-white"
          >
            Issa Kheirallah
          </a>

          <nav className="hidden gap-6 text-sm text-stone-300 md:flex">
            <a href="#showreel" className="transition hover:text-white">
              Showreel
            </a>
            <a href="#work" className="transition hover:text-white">
              Work
            </a>
            <a href="#documentaries" className="transition hover:text-white">
              Documentaries
            </a>
            <a href="#timeline" className="transition hover:text-white">
              Timeline
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section
        id="top"
        className="relative overflow-hidden border-b border-white/10"
      >
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover scale-105 animate-[heroZoom_18s_ease-in-out_infinite_alternate] opacity-40"
          >
            <source src="/videos/hero/hero-background.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-950/50" />
        </div>

        <div className="relative mx-auto grid min-h-[85vh] max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm uppercase tracking-[0.38em] text-stone-300">
              Producer • Video Journalist • On-screen Reporter
            </p>

            <div className="relative inline-block">
              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <div className="h-24 w-72 rounded-full bg-white/20 blur-3xl animate-[pulseGlow_6s_ease-in-out_infinite]" />
              </div>

              <h1 className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
                Issa Kheirallah
              </h1>
            </div>

            <p className="mt-6 max-w-3xl text-xl leading-9 text-stone-200">
              Producer specialising in video journalism, digital storytelling,
              investigations, documentary localisation, and presenter-led
              reporting for global audiences.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#showreel"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-stone-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Watch showreel
              </a>

              <a
                href="#work"
                className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/5 hover:shadow-2xl"
              >
                View work
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-white/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900/70 shadow-2xl">
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-950">
                <img
                  src={profileImage}
                  alt="Issa Kheirallah"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent" />
              </div>

              <div className="grid gap-4 border-t border-white/10 bg-stone-900/80 p-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-stone-400">
                    Based in
                  </p>
                  <p className="mt-2 text-white">London</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-stone-400">
                    Focus
                  </p>
                  <p className="mt-2 text-white">
                    Investigations & factual storytelling
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="showreel"
        className="border-y border-white/10 bg-white/[0.03]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
            Showreel
          </p>

          <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
            On-screen reporting
          </h2>

          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src={videos[currentVideo].url}
                title={videos[currentVideo].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <button
              onClick={prevVideo}
              className="rounded-xl border border-white/20 px-4 py-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white/5 hover:shadow-xl"
            >
              Previous
            </button>

            <p className="text-center text-stone-400 transition-opacity duration-300">
              {videos[currentVideo].title}
            </p>

            <button
              onClick={nextVideo}
              className="rounded-xl border border-white/20 px-4 py-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white/5 hover:shadow-xl"
            >
              Next
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
              About
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
              Producer working across investigations and global factual
              storytelling
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-stone-300">
            <p>
              I am a BBC producer and journalist with more than nine years of
              experience delivering broadcast, digital and on-location
              productions. My work spans digital storytelling, documentary
              localisation, and presenter-led reporting.
            </p>

            <p>
              I currently lead localisation operations for Eye
              Investigation&apos;s Africa Eye, adapting flagship documentaries
              for new international audiences while managing editorial
              workflows, translation, dubbing and production delivery.
            </p>

            <p>
              Alongside investigations, I have been involved in the production
              of hundreds of episodes of BBC Arabic&apos;s technology programme,
              4Tech and worked across newsroom journalism, digital video
              production and culture show production.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
          Topics covered
        </p>

        <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
          Investigations, reporting and factual production
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {featuredWork.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900/70 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl"
            >
              <div className="relative h-80 overflow-hidden bg-stone-950">
                <img
                  src={item.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-stone-950/40" />
                <div className="absolute inset-0 ring-1 ring-white/10" />

                <img
                  src={item.image}
                  alt={item.title}
                  className="relative z-10 h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-stone-400">
                  {item.category}
                </p>

                <h3 className="mt-3 text-2xl font-medium text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-stone-300">
                  {item.description}
                </p>

                <div className="mt-6 text-sm font-medium text-stone-200">
                  Featured work
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="documentaries"
        className="border-y border-white/10 bg-white/[0.03]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
                Localisation work
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
                Selected Africa Eye investigations
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
                A curated selection of BBC Africa Eye investigations I worked on
                through localisation and international delivery.
              </p>

              <div className="mt-14 grid gap-8 sm:grid-cols-2">
                {documentaries.map((doc) => {
                  const isActive = selectedDocumentary.title === doc.title;

                  return (
                    <button
                      key={doc.title}
                      onClick={() => changeDocumentary(doc)}
                      className={`group block overflow-hidden rounded-[2rem] border text-left shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                        isActive
                          ? "border-white/30 bg-stone-900 shadow-2xl"
                          : "border-white/10 bg-stone-900/70 hover:border-white/20 hover:shadow-2xl"
                      }`}
                    >
                      <div className="relative h-80 overflow-hidden bg-stone-950">
                        <img
                          src={doc.image}
                          alt=""
                          aria-hidden="true"
                          className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl opacity-35"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-stone-950/40" />
                        <div className="absolute inset-0 ring-1 ring-white/10" />

                        <img
                          src={doc.image}
                          alt={doc.title}
                          className="relative z-10 h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="p-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-stone-400">
                          BBC Africa Eye
                        </p>

                        <h3 className="mt-2 text-xl font-medium leading-snug text-white">
                          {doc.title}
                        </h3>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <aside className="lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900/70 shadow-2xl">
                <div
                  key={selectedDocumentary.slug}
                  className={`transition-opacity duration-300 ${
                    spotlightVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="relative h-[28rem] overflow-hidden bg-stone-950">
                    <img
                      src={selectedDocumentary.image}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full scale-110 object-cover blur-3xl opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/10 to-stone-950/30" />
                    <div className="absolute inset-0 ring-1 ring-white/10" />

                    {selectedDocumentary.preview ? (
                      <video
                        key={selectedDocumentary.preview}
                        src={selectedDocumentary.preview}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="relative z-10 h-full w-full object-contain p-4 transition-opacity duration-300"
                      />
                    ) : (
                      <img
                        src={selectedDocumentary.image}
                        alt={selectedDocumentary.title}
                        className="relative z-10 h-full w-full object-contain p-4 transition-opacity duration-300"
                      />
                    )}
                  </div>

                  <div className="p-8 transition-opacity duration-300">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
                        Documentary spotlight
                      </p>

                      <div className="flex gap-2">
                        <button
                          onClick={prevDocumentary}
                          className="rounded-full border border-white/15 px-3 py-2 text-sm text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/5"
                          aria-label="Previous documentary"
                        >
                          ←
                        </button>
                        <button
                          onClick={nextDocumentary}
                          className="rounded-full border border-white/15 px-3 py-2 text-sm text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/5"
                          aria-label="Next documentary"
                        >
                          →
                        </button>
                      </div>
                    </div>

                    <h3 className="mt-4 text-3xl font-semibold text-white">
                      {selectedDocumentary.title}
                    </h3>

                    <p className="mt-6 text-lg leading-8 text-stone-300">
                      {selectedDocumentary.summary}
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08] hover:shadow-xl">
                        <p className="text-xs uppercase tracking-[0.25em] text-stone-400">
                          Role
                        </p>
                        <p className="mt-2 text-base text-white">
                          {selectedDocumentary.role}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08] hover:shadow-xl">
                        <p className="text-xs uppercase tracking-[0.25em] text-stone-400">
                          Strand
                        </p>
                        <p className="mt-2 text-base text-white">
                          {selectedDocumentary.strand}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/[0.08] hover:shadow-xl">
                      <p className="text-xs uppercase tracking-[0.25em] text-stone-400">
                        My contribution
                      </p>
                      <p className="mt-3 leading-7 text-stone-300">
                        {selectedDocumentary.contribution}
                      </p>
                    </div>

                    <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/[0.08] hover:shadow-xl">
                      <p className="text-xs uppercase tracking-[0.25em] text-stone-400">
                        Process
                      </p>
                      <div className="mt-4 space-y-3">
                        {selectedDocumentary.process.map((step) => (
                          <div
                            key={step}
                            className="rounded-xl border border-white/10 bg-stone-950/40 px-4 py-3 text-sm leading-6 text-stone-300 transition-all duration-300 hover:bg-stone-950/70"
                          >
                            {step}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <a
                        href={selectedDocumentary.url}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-stone-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                      >
                        Watch documentary
                      </a>
                      <a
                        href={`/documentaries/${selectedDocumentary.slug}`}
                        className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/5 hover:shadow-2xl"
                      >
                        View project page
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="timeline" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
          Timeline
        </p>

        <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
          Career timeline
        </h2>

        <div className="mt-12 space-y-6 border-l border-white/10 pl-6 md:pl-10">
          {timeline.map((item) => (
            <div key={item.title} className="relative">
              <div className="absolute -left-[2.05rem] top-2 h-3 w-3 rounded-full bg-white md:-left-[2.6rem]" />
              <p className="text-sm uppercase tracking-[0.25em] text-stone-400">
                {item.year}
              </p>
              <h3 className="mt-2 text-2xl font-medium text-white">
                {item.title}
              </h3>
              <p className="mt-3 max-w-3xl leading-7 text-stone-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

<section className="border-y border-white/10 bg-white/[0.03]">
  <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
    <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
          Global reporting footprint
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
          Stories reported across multiple countries and regions
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
          My work spans investigations, documentary localisation and factual
          storytelling across Africa, Europe, the Gulf and South Asia.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {storyLocations.map((location) => (
            <div
              key={`${location.name}-${location.city}`}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08] hover:shadow-xl"
            >
              <p className="text-sm uppercase tracking-[0.22em] text-stone-400">
                {location.name}
              </p>
              <p className="mt-2 text-base text-white">{location.city}</p>
              <p className="mt-1 text-sm text-stone-300">{location.region}</p>
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

      <section
        id="expertise"
        className="mx-auto max-w-7xl px-6 py-20 md:px-10"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
          Expertise
        </p>

        <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
          Editorial and production expertise
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {expertise.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08] hover:shadow-xl"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
            Collaborations, documentaries and editorial work
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
            Open to documentary projects, presenting opportunities, video
            editing roles and international editorial collaborations.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:issakheirallah@gmail.com"
              className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-stone-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com"
              className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/5 hover:shadow-2xl"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}