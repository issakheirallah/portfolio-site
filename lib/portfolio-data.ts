export type StoryLocation = {
  name: string;
  city: string;
  region: string;
  coordinates: [number, number];
};

export type Documentary = {
  slug: string;
  title: string;
  image: string;
  preview: string;
  url: string;
  releaseYear: string;
  summary: string;
  role: string;
  strand: string;
  contribution: string;
  process: string[];
};

export const profileImage = "/images/profile/issa-kheirallah.jpg";

export const showreelVideos = [
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
] as const;

export const featuredWork = [
  {
    title: "Eye Investigations",
    category: "Investigations",
    description:
      "Localising flagship BBC investigations for international audiences, managing editorial workflows, translation, dubbing and delivery across multiple markets.",
    image: "/images/projects/bbc-eye-investigations.jpg",
  },
  {
    title: "4Tech",
    category: "Technology",
    description:
      "Produced and presented reports and part of the production of 280+ episodes covering global technology, innovation and digital culture across broadcast and social platforms.",
    image: "/images/projects/bbc-arabic-4tech.jpg",
  },
  {
    title: "Art for Life",
    category: "Arts and Culture",
    description:
      "Produced and directed reports across Europe covering digital art, NFTs and cultural events, guiding teams from development through final edit.",
    image: "/images/projects/art-for-life.jpg",
  },
] as const;

export const documentaries: Documentary[] = [
  {
    slug: "state-of-fear",
    title: "State of Fear",
    image: "/images/documentaries/10-afeye-state-of-fear.jpg",
    preview: "/videos/documentaries/state-of-fear-preview.mp4",
    url: "https://youtu.be/9WkYK-SjJtE",
    releaseYear: "2026",
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
  {
    slug: "hunting-the-traffickers",
    title: "Hunting The Traffickers",
    image: "/images/documentaries/09-afeye-traffickers.jpg",
    preview: "/videos/documentaries/traffickers-preview.mp4",
    url: "https://youtu.be/_a4G2SZPvBQ",
    releaseYear: "2026",
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
    slug: "money-rituals",
    title: "Money Rituals",
    image: "/images/documentaries/08-afeye-money-rituals.jpg",
    preview: "/videos/documentaries/money-rituals-preview.mp4",
    url: "https://youtu.be/EjDe1D8NlOY",
    releaseYear: "2025",
    summary:
      "Africa Eye investigates Sierra Leone's hidden ritual market, where criminals posing as healers claim they can supply human body parts.",
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
    slug: "death-in-dubai",
    title: "Death In Dubai",
    image: "/images/documentaries/07-afeye-death-in-dubai.jpg",
    preview: "/videos/documentaries/death-in-dubai-preview.mp4",
    url: "https://youtu.be/OboT09uRw6M",
    releaseYear: "2025",
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
    slug: "madams",
    title: "Madams",
    image: "/images/documentaries/06-afeye-madams.jpg",
    preview: "/videos/documentaries/madams-preview.mp4",
    url: "https://youtu.be/JHINoFq8GvE",
    releaseYear: "2025",
    summary:
      "Africa Eye uncovers child sex traffic  king in Kenya's transit town, Mai Mahiu.",
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
    slug: "blood-parliament",
    title: "Blood Parliament",
    image: "/images/documentaries/05-afeye-blood-parliament.jpg",
    preview: "/videos/documentaries/blood-parliament-preview.mp4",
    url: "https://youtu.be/qz0f1yyf_eA",
    releaseYear: "2025",
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
    slug: "stranded",
    title: "Stranded",
    image: "/images/documentaries/04-afeye-stranded.jpg",
    preview: "/videos/documentaries/stranded-preview.mp4",
    url: "https://youtu.be/191CuNRGoos",
    releaseYear: "2025",
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
    slug: "opioid-kings",
    title: "India's Opioid Kings",
    image: "/images/documentaries/03-afeye-india-opioids.jpg",
    preview: "/videos/documentaries/opioid-kings-preview.mp4",
    url: "https://youtu.be/ji6tjiRjbok",
    releaseYear: "2025",
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
    slug: "miracle-baby-scammers",
    title: "Nigeria's Miracle Baby Scammers",
    image: "/images/documentaries/02-afeye-nigeria-babies.jpg",
    preview: "/videos/documentaries/nigeria-babies-preview.mp4",
    url: "https://youtu.be/r62xSGw3kcI",
    releaseYear: "2024",
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
    slug: "dark-waters",
    title: "Dark Waters",
    image: "/images/documentaries/01-afeye-dark-waters.jpg",
    preview: "/videos/documentaries/dark-waters-preview.mp4",
    url: "https://youtu.be/ajX6NaVks3w",
    releaseYear: "2024",
    summary:
      "BBC Africa Eye investigates what is fast becoming the world's deadliest migration route: the perilous Atlantic crossing from West Africa to Spain's Canary Islands.",
    role: "Localisation Producer",
    strand: "BBC Africa Eye",
    contribution:
      "Led localisation delivery, coordinating editorial adaptation, dubbing and multilingual production workflows for international audiences.",
    process: [
      "Managed localisation workflow from offline to online delivery",
      "Oversaw translation, dubbing and partner coordination",
      "Prepared the film for international audience adaptation and delivery",
    ],
  },
];

export const timeline = [
  {
    year: "2024-Present",
    role: "Localisation Producer",
    title: "Africa Eye",
    description:
      "Leading localisation operations for flagship BBC investigations, adapting documentaries for international audiences.",
  },
  {
    year: "2018-2024",
    role: "Producer",
    title: "4Tech",
    description:
      "Part of the production of hundreds of episodes covering technology, innovation and digital culture across broadcast and social platforms.",
  },
  {
    year: "2024",
    role: "Newsroom Journalist",
    title: "BBC News",
    description:
      "Produced scripts and content for news bulletins using newsroom systems, while monitoring breaking news and coordinating contributors for major stories such as the Israel-Gaza conflict.",
  },
  {
    year: "2021-2022",
    role: "Digital Producer",
    title: "Art for Life",
    description:
      "Produced and directed arts and culture reports across the UK and Europe, from development through final edit.",
  },
  {
    year: "2015-2024",
    role: "",
    title: "BBC News Arabic & Newsroom Roles",
    description:
      "Worked across digital video, newsroom journalism and factual production, building a cross-platform editorial foundation.",
  },
] as const;

export const storyLocations: StoryLocation[] = [
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

export const expertise = [
  "Investigations",
  "Documentary localisation and reversioning",
  "Field producing and crew direction",
  "Producer-led storytelling",
  "Scriptwriting and story development",
  "Audience growth and digital strategy",
  "Video editing, motion graphics and image design",
  "Project management",
] as const;
