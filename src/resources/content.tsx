import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ruth",
  lastName: "Sada Mwatelah",
  name: `Ruth Sada Mwatelah`,
  role: "Epidemiologist & Medical Microbiologist",
  avatar: "/images/avatar.jpg",
  email: "ruth.sada@hotmail.com",
  location: "America/Toronto", // Changed to a valid IANA Time Zone
  languages: ["English", "French", "Swahili"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Research Journal</>,
  description: (
    <>Weekly reflections on epidemiology, bioinformatics, and infectious disease research.</>
  ),
};

const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ruth-sada-mwatelah/",
  },
  {
    name: "Personal Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "Academic Email",
    icon: "email",
    link: "mailto:ruth.mwatelah@mcgill.ca",
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `The portfolio of ${person.name}, an epidemiologist and medical microbiologist based in Montreal, advancing infectious disease research and public health.`,
  headline: <>Advancing global health through data, epidemiology, and infectious disease research.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Recent Publication</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured Work
        </Text>
      </Row>
    ),
    href: "/work/endocervical-regulatory-t-cells",
  },
  subline: (
    <>
      Hi, I’m Ruth — a Postdoctoral Researcher @ McGill University, currently investigating microbiome contributions to disease.
      <br />I’m passionate about merging epidemiological data, bioinformatics, and clinical research to solve complex public health challenges.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Learn about ${person.name}, a Montreal-based epidemiologist shaping the future of infectious disease research.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: { display: true },
  calendar: { display: true, link: "https://cal.com" },
  intro: {
    display: true,
    title: "Who I Am",
    description: (
      <>
        I’m Ruth Sada Mwatelah — an epidemiologist and medical microbiologist driven by a commitment to public health.
        With expertise spanning bioinformatics, mathematical modeling, and wet-lab techniques, I uncover hidden patterns in host-pathogen interactions.
        My journey includes managing complex research projects, conducting advanced statistical analyses, and contributing to high-impact scientific publications.
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
          <>Prepare manuscripts, presentations, and grant submissions while mentoring junior researchers.</>,
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
        role: "Data Liaison",
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
          <>Cleaned and analyzed HIV self-testing datasets for men who have sex with men in Kenya.</>,
          <>Conducted clustering, regression modeling, and model validation.</>,
        ],
        images: [],
      },
      {
        company: "Various Organizations",
        timeframe: "2022 – Present",
        role: "Volunteer & Committee Member",
        achievements: [
          <>Volunteer, Career Working Development Group, Canadian Black Scientist Network (2024 – Present).</>,
          <>Abstract Reviewer, Canadian Cancer Research Conference (2025).</>,
          <>Manuscript Reviewer, Pan African Medical Journal (2025 – Present) & Scientific Reports (2024 – Present).</>,
          <>Internship/Lab Exchange Committee Member, Visual and Automated Disease Analytics (2022 – 2023).</>,
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
    title: "Technical & Soft Skills",
    skills: [
      {
        title: "Epidemiology & Data Analysis",
        description: (
          <>
            Expertise in data management, statistical modeling, regression, clustering, longitudinal analysis, and data visualization using tools like R and SPSS.
          </>
        ),
        tags: [
          { name: "R", icon: "code" },
          { name: "SPSS", icon: "database" },
          { name: "Modeling", icon: "python" },
        ],
      },
      {
        title: "Bioinformatics & Wet Lab",
        description: (
          <>
            Proficient in PCR, ELISA, sequencing, tissue imaging, and comprehensive genomic data analysis to understand host-pathogen interactions.
          </>
        ),
        tags: [
          { name: "Bioinformatics", icon: "code" },
          { name: "Genomics", icon: "database" },
        ],
      },
      {
        title: "Research & Project Management",
        description: (
          <>
            Experienced in multidisciplinary coordination, grant writing, protocol development, and mentoring emerging researchers in the field.
          </>
        ),
        tags: [
          { name: "Management", icon: "team" },
          { name: "Mentorship", icon: "lightbulb" },
        ],
      },
      {
        title: "Communication",
        description: (
          <>
            Strong background in scientific writing, peer-reviewed publications, and conference presentations.
          </>
        ),
        tags: [
          { name: "Writing", icon: "edit" },
          { name: "Presenting", icon: "mic" },
        ],
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Research",
  title: `Publications & Research – ${person.name}`,
  description: `A collection of impactful epidemiological research and publications by ${person.name}.`,
};

const blog: Blog = {
  path: "/blog",
  label: "Journal",
  title: "Notes, Lessons & Reflections",
  description: `Insights, research updates, and thoughts from ${person.name} on infectious diseases and epidemiology.`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo Gallery – ${person.name}`,
  description: `Snapshots of laboratory work, conferences, and community moments from ${person.name}'s journey.`,
  images: [
    { src: "/images/gallery/vertical-1.jpeg", alt: "work environment", orientation: "vertical" },
    { src: "/images/gallery/horizontal-2.jpeg", alt: "project demo", orientation: "horizontal" },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
