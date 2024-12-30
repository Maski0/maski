import { GraphData } from "@/types";

export const aboutData = [
  "I’m a passionate game developer and backend engineer with over 6 years of experience in creating engaging games and scalable backend systems.",
  "My journey in game development started with modding existing games, which led me to pursue a career in both game development and backend engineering.",
  "I specialize in Unity and Unreal Engine for game development, and Node.js/Python for backend services. I’m particularly interested in multiplayer game architectures and real-time systems.",
];

export const experienceData = [
  {
    role: "Senior Game Developer",
    company: "GameStudio Inc",
    period: "2020 - Present",
    description:
      `Led development of the company's main product using **React** and **Node.js**. Key achievements include:

* Implemented crucial features for [Project X](https://project-x.example.com)
* Contributed to the [Open Source Community](https://github.com/organization)
      `,
  },
  {
    role: "Backend Engineer",
    company: "TechCorp",
    period: "2018 - 2020",
    description:
      "Developed scalable backend services for mobile games and real-time applications.",
  },
  {
    role: "Game Developer",
    company: "IndieGames Ltd",
    period: "2016 - 2018",
    description:
      "Created indie games and prototypes, handled both gameplay and backend systems.",
  },
];

export const projectsData = [
  {
    title: "3D RPG Game",
    description:
      "A fantasy RPG built with Unity featuring procedural generation and advanced AI systems.",
    tech: ["Unity", "C#", "Blender"],
    link: "#",
  },
  {
    title: "Game Backend Service",
    description:
      "Scalable backend service handling game state, multiplayer, and leaderboards.",
    tech: ["Node.js", "MongoDB", "WebSocket"],
    link: "#",
  },
  {
    title: "Physics Engine",
    description:
      "Custom 2D physics engine with rigid body dynamics and collision detection.",
    tech: ["C++", "OpenGL"],
    link: "#",
  },
];

export const SkillsData: GraphData = {
  nodes: [
    { id: "Languages", group: 1 },
    { id: "C#", group: 2 },
    { id: "C++", group: 2 },
    { id: "Python", group: 2 },
    { id: "Go", group: 2 },
    { id: "TypeScript", group: 2 },
    { id: "Frameworks", group: 1 },
    { id: "Frontend", group: 2 },
    { id: "React", group: 2 },
    { id: "Next.js", group: 2 },
    { id: "Tailwind", group: 2 },
    { id: "Backend", group: 2 },
    { id: "Node.js", group: 2 },
    { id: "Express", group: 2 },
    { id: "Spring", group: 2 },
    { id: "Database", group: 1 },
    { id: "MySQL", group: 2 },
    { id: "PostgreSQL", group: 2 },
    { id: "MongoDB", group: 2 },
    { id: "FireBase", group: 2 },
    { id: "Redis", group: 2 },
    { id: "DevOps/Cloud", group: 1 },
    { id: "Docker", group: 2 },
    { id: "Kubernetes", group: 2 },
    { id: "Jenkins", group: 2 },
    { id: "Azure", group: 2 },
    { id: "AWS", group: 2 },
    { id: "GCP", group: 2 },
    { id: "Heroku", group: 2 },
  ],
  links: [
    { source: "Languages", target: "C#", value: 1 },
    { source: "Languages", target: "C++", value: 1 },
    { source: "Languages", target: "Python", value: 1 },
    { source: "Languages", target: "Go", value: 1 },
    { source: "Languages", target: "TypeScript", value: 1 },
    { source: "Frameworks", target: "Frontend", value: 1 },
    { source: "Frameworks", target: "Backend", value: 1 },
    { source: "Frontend", target: "React", value: 1 },
    { source: "Frontend", target: "Next.js", value: 1 },
    { source: "Frontend", target: "Tailwind", value: 1 },
    { source: "Backend", target: "Node.js", value: 1 },
    { source: "Backend", target: "Express", value: 1 },
    { source: "Backend", target: "Spring", value: 1 },
    { source: "Database", target: "MySQL", value: 1 },
    { source: "Database", target: "PostgreSQL", value: 1 },
    { source: "Database", target: "MongoDB", value: 1 },
    { source: "Database", target: "FireBase", value: 1 },
    { source: "Database", target: "Redis", value: 1 },
    { source: "DevOps/Cloud", target: "Docker", value: 1 },
    { source: "DevOps/Cloud", target: "Kubernetes", value: 1 },
    { source: "DevOps/Cloud", target: "Jenkins", value: 1 },
    { source: "DevOps/Cloud", target: "Azure", value: 1 },
    { source: "DevOps/Cloud", target: "AWS", value: 1 },
    { source: "DevOps/Cloud", target: "GCP", value: 1 },
    { source: "DevOps/Cloud", target: "Heroku", value: 1 },
  ],
};
