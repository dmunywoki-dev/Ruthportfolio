import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ruth Sada",
  lastName: "Mwatelah",
  name: `Ruth Sada Mwatelah`,
  role: "Epidemiologist & Medical Microbiologist",
  avatar: "/images/avatar.jpg",
  email: "ruth.sada@hotmail.com",
  location: "Montreal, QC",
  languages: ["English"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Research Updates</>,
  description: (
    <>Periodic updates on infectious disease research, epidemiology, and bioinformatics.</>
  ),
};

const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ruth-sada-mwatelah/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `The portfolio of ${person.name}, an Epidemiologist & Medical Microbiologist based in Montreal, QC.`,
  headline: <>Advancing infectious disease research through epidemiological data and bioinformatics.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Microbiome & HPV</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Current Postdoctoral Research
        </Text>
      </Row>
    ),
    href: "/work/projects/project10",
  },
  subline: (
    <>
      Hi, I’m Ruth — a Postdoctoral Researcher @ McGill University.
      <br />I specialize in managing complex research projects, statistical modeling, and uncovering immune correlates in infectious diseases.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Learn about ${person.name}, an epidemiologist and medical microbiologist.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: { display: true },
  calendar: { display: false, link: "" },
  intro: {
    display: true,
    title: "Who I Am",
    description: (
      <>
        I am a dynamic epidemiologist and medical microbiologist with extensive experience in infectious disease research, epidemiological data analysis, and bioinformatics. I have proven expertise in managing complex research projects, conducting advanced statistical analyses, and contributing to high-impact scientific publications. I am highly adept at interdisciplinary collaboration, grant writing, and mentoring emerging researchers.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "McGill University",
        timeframe: "2024 – Present",
        role: "Postdoctoral Researcher",
        achievements: [
          <>Conduct data cleaning, statistical modeling, and bioinformatics analysis for infectious disease studies.</>,
          <>Develop mathematical models to predict microbiome contributions to HPV acquisition and persistence.</>,
          <>Prepare manuscripts, presentations, and grant submissions.</>,
          <>Mentor junior researchers.</>,
        ],
        images: [],
      },
      {
        company: "University of Manitoba",
        timeframe: "2017 – 2024",
        role: "Ph.D. Researcher",
        achievements: [
          <>Managed large epidemiological datasets using R and SPSS.</>,
          <>Performed PCR, ELISA, sequencing, and tissue imaging for infectious disease studies.</>,
          <>Conducted descriptive and inferential statistical analyses; developed bioinformatic workflows.</>,
          <>Investigated immune correlates and host–pathogen interactions.</>,
        ],
        images: [],
      },
      {
        company: "Manitoba Centre for Health Policy",
        timeframe: "2023 – 2024",
        role: "Data Liaison (Part-Time)",
        achievements: [
          <>Coordinated research projects focused on older adult care.</>,
          <>Reviewed SAS code, developed data analysis plans, and supported stakeholders through approvals.</>,
          <>Produced data presentations, visualizations, and manuscripts.</>,
        ],
        images: [],
      },
      {
        company: "Mishra Lab, St. Michael's Hospital",
        timeframe: "2020 – 2021",
        role: "Data Analyst Intern",
        achievements: [
          <>Cleaned and analyzed HIV self-testing datasets for key populations in Kenya.</>,
          <>Conducted clustering, regression modeling, and model validation.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Ph.D., Medical Microbiology & Infectious Diseases",
        description: <>University of Manitoba, Canada (2024)</>,
      },
      {
        name: "M.Sc., Epidemiology",
        description: <>Jomo Kenyatta University of Agriculture & Technology, Kenya (2017)</>,
      },
      {
        name: "B.Sc., Medical Microbiology",
        description: <>Jomo Kenyatta University of Agriculture & Technology, Kenya (2010)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Key Skills",
    skills: [
      {
        title: "Epidemiology & Data Analysis",
        description: (
          <>
            Expertise in data management, statistical modeling, regression, clustering, longitudinal analysis, and visualization.
          </>
        ),
        tags: [
          { name: "R", icon: "code" },
          { name: "SPSS", icon: "database" },
          { name: "Statistical Modeling", icon: "chart" },
        ],
      },
      {
        title: "Bioinformatics",
        description: (
          <>
            Proficient in genomic data analysis workflows, molecular techniques, and assay analyses.
          </>
        ),
        tags: [
          { name: "PCR", icon: "science" },
          { name: "Sequencing", icon: "dna" },
          { name: "Tissue Imaging", icon: "image" },
        ],
      },
      {
        title: "Research & Project Management",
        description: (
          <>
            Skilled in multidisciplinary coordination, grant writing, protocol development, and mentorship.
          </>
        ),
        tags: [
          { name: "Grant Writing", icon: "document" },
          { name: "Mentorship", icon: "team" },
        ],
      },
      {
        title: "Communication",
        description: (
          <>
            Strong track record of scientific writing, peer-reviewed publications, and conference presentations.
          </>
        ),
        tags: [
          { name: "Publications", icon: "book" },
          { name: "Presentations", icon: "microphone" },
        ],
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Research & Projects – ${person.name}`,
  description: `A collection of impactful research projects by ${person.name}.`,
};

const blog: Blog = {
  path: "/blog",
  label: "Publications",
  title: "Selected Publications & Reviews",
  description: `Scientific papers and peer reviews contributed by ${person.name}.`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo Gallery – ${person.name}`,
  description: `Snapshots from the lab, conferences, and research journey of ${person.name}.`,
  images: [
    { src: "/images/gallery/vertical-1.jpeg", alt: "laboratory environment", orientation: "vertical" },
    { src: "/images/gallery/horizontal-2.jpeg", alt: "research presentation", orientation: "horizontal" },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
