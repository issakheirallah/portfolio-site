"use client";

import { useMemo, useState } from "react";

export default function PortfolioWebsite() {
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

  const storyLocations = [
    { name: "Kenya", city: "Nairobi", top: "46%", left: "55%" },
    { name: "Sierra Leone", city: "Freetown", top: "49%", left: "43%" },
    { name: "India", city: "Delhi", top: "40%", left: "67%" },
    { name: "UAE", city: "Dubai", top: "43%", left: "60%" },
    { name: "UK", city: "London", top: "32%", left: "47%" },
    { name: "West Africa", city: "Regional reporting", top: "46%", left: "41%" },
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
  const [hoveredDocumentary, setHoveredDocumentary] = useState<string | null>(
    null
  );

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const selectedIndex = useMemo(
    () => documentaries.findIndex((doc) => doc.slug === selectedDocumentary.slug),
    [documentaries, selectedDocumentary.slug]
  );

  const nextDocumentary = () => {
    const nextIndex = (selectedIndex + 1) % documentaries.length;
    setSelectedDocumentary(documentaries[nextIndex]);
  };

  const prevDocumentary = () => {
    const prevIndex = (selectedIndex - 1 + documentaries.length) % documentaries.length;
    setSelectedDocumentary(documentaries[prevIndex]);
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

          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-950/40" />
        </div>

        <div className="relative mx-auto grid min-h-[85vh] max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm uppercase tracking-[0.38em] text-stone-300">
              Producer • Video Journalist • On-screen Reporter
            </p>

            <h1 className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
              Issa Kheirallah
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-9 text-stone-200">
              Producer specialising in video journalism, digital storytelling,
              investigations, documentary localisation, and presenter-led
              reporting for global audiences.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#showreel"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-stone-950"
              >
                Watch showreel
              </a>

              <a
                href="#work"
                className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-medium text-white"
              >
                View work
              </a>
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
              className="rounded-xl border border-white/20 px-4 py-2 transition hover:bg-white/5"
            >
              Previous
            </button>

            <p className="text-center text-stone-400">
              {videos[currentVideo].title}
            </p>

            <button
              onClick={nextVideo}
              className="rounded-xl border border-white/20 px-4 py-2 transition hover:bg-white/5"
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
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900/70 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-white/20"
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
                  className="relative z-10 h-full w-full object-contain p-3 transition duration-500 group-hover:scale-[1.02]"
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
                  const isHovered = hoveredDocumentary === doc.slug;

                  return (
                    <button
                      key={doc.title}
                      onClick={() => setSelectedDocumentary(doc)}
                      onMouseEnter={() => setHoveredDocumentary(doc.slug)}
                      onMouseLeave={() => setHoveredDocumentary(null)}
                      className={`group block overflow-hidden rounded-[2rem] border text-left shadow-xl transition duration-300 hover:-translate-y-1 ${
                        isActive
                          ? "border-white/30 bg-stone-900"
                          : "border-white/10 bg-stone-900/70 hover:border-white/20"
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
                          className={`relative z-10 h-full w-full object-contain p-3 transition duration-500 ${
                            isHovered ? "opacity-0" : "opacity-100"
                          }`}
                        />

                        {doc.preview ? (
                          <video
                            key={doc.preview}
                            src={doc.preview}
                            muted
                            loop
                            playsInline
                            autoPlay={isHovered}
                            className={`absolute inset-0 z-20 h-full w-full object-cover transition duration-500 ${
                              isHovered ? "opacity-100" : "opacity-0"
                            }`}
                          />
                        ) : null}
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
                <div className="relative h-[28rem] overflow-hidden bg-stone-950">
                  <img
                    src={selectedDocumentary.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full scale-110 object-cover blur-3xl opacity-30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/10 to-stone-950/30" />
                  <div className="absolute inset-0 ring-1 ring-white/10" />

                  <img
                    src={selectedDocumentary.image}
                    alt={selectedDocumentary.title}
                    className="relative z-10 h-full w-full object-contain p-4"
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
                      Documentary spotlight
                    </p>

                    <div className="flex gap-2">
                      <button
                        onClick={prevDocumentary}
                        className="rounded-full border border-white/15 px-3 py-2 text-sm text-white transition hover:bg-white/5"
                        aria-label="Previous documentary"
                      >
                        ←
                      </button>
                      <button
                        onClick={nextDocumentary}
                        className="rounded-full border border-white/15 px-3 py-2 text-sm text-white transition hover:bg-white/5"
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
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-xs uppercase tracking-[0.25em] text-stone-400">
                        Role
                      </p>
                      <p className="mt-2 text-base text-white">
                        {selectedDocumentary.role}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-xs uppercase tracking-[0.25em] text-stone-400">
                        Strand
                      </p>
                      <p className="mt-2 text-base text-white">
                        {selectedDocumentary.strand}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-stone-400">
                      My contribution
                    </p>
                    <p className="mt-3 leading-7 text-stone-300">
                      {selectedDocumentary.contribution}
                    </p>
                  </div>

                  <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-stone-400">
                      Process
                    </p>
                    <div className="mt-4 space-y-3">
                      {selectedDocumentary.process.map((step) => (
                        <div
                          key={step}
                          className="rounded-xl border border-white/10 bg-stone-950/40 px-4 py-3 text-sm leading-6 text-stone-300"
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
                      className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-stone-950"
                    >
                      Watch documentary
                    </a>
                    <a
                      href={`/documentaries/${selectedDocumentary.slug}`}
                      className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5"
                    >
                      View project page
                    </a>
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
                My work spans investigations, documentary localisation and factual storytelling across Africa, Europe, the Gulf and South Asia.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {storyLocations.map((location) => (
                  <div
                    key={location.name}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                  >
                    <p className="text-sm uppercase tracking-[0.22em] text-stone-400">
                      {location.name}
                    </p>
                    <p className="mt-2 text-base text-white">{location.city}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-stone-900/70 p-4 shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.08),transparent_20%),radial-gradient(circle_at_70%_35%,rgba(255,255,255,0.05),transparent_18%),radial-gradient(circle_at_55%_70%,rgba(255,255,255,0.06),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]">
                <div className="absolute inset-0 opacity-40">
                  <svg viewBox="0 0 1000 600" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M138 204L164 170L221 158L278 172L320 167L351 188L400 186L419 215L403 242L366 249L355 276L384 314L377 347L333 353L302 336L273 352L250 329L202 327L176 295L164 261L138 204Z" fill="rgba(255,255,255,0.08)" />
                    <path d="M455 177L493 160L562 159L598 180L633 180L676 204L693 232L678 261L639 275L620 307L593 313L574 298L553 310L520 291L512 261L483 248L455 177Z" fill="rgba(255,255,255,0.08)" />
                    <path d="M689 229L725 209L781 213L822 236L855 272L851 307L815 324L797 360L752 366L720 341L695 342L679 316L648 288L659 254L689 229Z" fill="rgba(255,255,255,0.08)" />
                    <path d="M797 390L824 381L860 392L876 419L860 451L826 463L792 446L786 416L797 390Z" fill="rgba(255,255,255,0.08)" />
                  </svg>
                </div>

                {storyLocations.map((location) => (
                  <div
                    key={location.name}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ top: location.top, left: location.left }}
                  >
                    <div className="relative flex flex-col items-center">
                      <span className="mb-2 rounded-full border border-white/10 bg-stone-950/90 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-stone-200 shadow-lg">
                        {location.city}
                      </span>
                      <span className="h-3 w-3 rounded-full bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.12)]" />
                    </div>
                  </div>
                ))}
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
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
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
              className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-stone-950"
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com"
              className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-medium text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
