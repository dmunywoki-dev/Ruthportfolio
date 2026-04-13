import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Dean",
  lastName: "Munywoki",
  name: `Dean Munywoki`,
  role: "Software Developer",
  avatar: "/images/avatar.jpg",
  email: "deanmaingi@gmail.com",
  location: "Africa/Nairobi",
  languages: ["English", "Swahili"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Tech Journal</>,
  description: (
    <>Weekly reflections on code, data, and innovation — straight from Dean’s development desk.</>
  ),
};

const social: Social = [
  {
    name: "GitLab",
    icon: "gitLab",
    link: "https://gitlab.com/dmunywoki",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/dean-munywoki-50202a200/",
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
  description: `The portfolio of ${person.name}, a passionate Software Developer from Nairobi building scalable systems and elegant digital experiences.`,
  headline: <>Building intelligent, impactful and human-centered software.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">SafeBus</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured Project
        </Text>
      </Row>
    ),
    href: "/work/safebus-school-transport-platform",
  },
  subline: (
    <>
      Hi, I’m Dean — a software developer @iLabAfrica 
      , currently advancing Kenya’s innovation ecosystem through robust digital systems.
      <br />I’m passionate about merging data, design, and development to create tools that make a real difference.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Learn about ${person.name}, a Nairobi-based software developer shaping Africa’s digital future.`,
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
        I’m Dean Munywoki — a developer driven by curiosity, faith, and the belief that technology can transform lives.
        From backend systems to full-stack platforms, I enjoy the thrill of solving real problems through clean code and creative thinking.
        My journey has taken me through projects that power national transparency portals, e-learning platforms, and IoT systems — each built with purpose and precision.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "@iLabAfrica – Strathmore University",
        timeframe: "Jan 2022 – Present",
        role: "Software Developer",
        achievements: [
          <>
            Designed, developed, and deployed software solutions for national platforms, including the Public Procurement Information Portal.
          </>,
          <>
            Integrated reporting and analytics tools to enable real-time tracking of service requests and data-driven insights.
          </>,
          <>
            Collaborated across multidisciplinary teams to translate stakeholder needs into robust and scalable software.
          </>,
          <>
            Developed core modules for e-learning, helpdesk, and ticketing systems, enhancing user experience and transparency.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "PPIP Platform Screenshot",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Master’s in Data Science and Analytics",
        description: <>Strathmore University, Nairobi (2025 – Present)</>,
      },
      {
        name: "Bachelor of Business Information Technology",
        description: <>Strathmore University, Nairobi (2019 – 2022)</>,
      },
      {
        name: "Diploma in Business Information Technology",
        description: <>Strathmore University, Nairobi (2018 – 2019)</>,
      },
      {
        name: "Certificate in Full Stack Software Development",
        description: <>Strathmore University (2023)</>,
      },
      {
        name: "Certificate in Data Science",
        description: <>Strathmore University (2020)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical & Soft Skills",
    skills: [
      {
        title: "Full Stack Development",
        description: (
          <>
            Experienced in building secure, performant, and responsive applications using
            Laravel, Django, Flask, Node.js, and React. Skilled at translating business logic
            into maintainable codebases.
          </>
        ),
        tags: [
          { name: "Laravel", icon: "laravel" },
          { name: "Django", icon: "python" },
          { name: "React", icon: "react" },
          { name: "Node.js", icon: "nodejs" },
        ],
      },
      {
        title: "Data Science & Machine Learning",
        description: (
          <>
            Passionate about turning data into actionable insights using Python, Pandas, and ML frameworks.
            My MSc research explores intelligent systems that enhance national digital infrastructure.
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "Pandas", icon: "database" },
          { name: "TensorFlow", icon: "ai" },
        ],
      },
      {
        title: "Cloud & DevOps",
        description: (
          <>
            Skilled in CI/CD, Docker, and Cloud Computing. Experienced in deploying applications securely using
            modern pipelines and containerized environments.
          </>
        ),
        tags: [
          { name: "Docker", icon: "docker" },
          { name: "CI/CD", icon: "code" },
          { name: "Cloud", icon: "cloud" },
        ],
      },
      {
        title: "Soft Skills",
        description: (
          <>
            Creative thinker, problem solver, and communicator.
            Known for adaptability, leadership, and fostering collaborative innovation.
          </>
        ),
        tags: [
          { name: "Leadership", icon: "team" },
          { name: "Creativity", icon: "lightbulb" },
        ],
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `A collection of impactful software projects by ${person.name}.`,
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Notes, Lessons & Reflections",
  description: `Insights, projects, and thoughts from ${person.name} on technology and growth.`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo Gallery – ${person.name}`,
  description: `Snapshots of creativity, code, and community moments from ${person.name}'s journey.`,
  images: [
    { src: "/images/gallery/vertical-1.jpeg", alt: "work environment", orientation: "vertical" },
    { src: "/images/gallery/horizontal-2.jpeg", alt: "project demo", orientation: "horizontal" },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
