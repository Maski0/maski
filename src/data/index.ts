import { GraphData } from "@/types";

export const aboutData = [
  "I’m a passionate game developer and backend engineer with over two years of experience creating engaging games and scalable backend systems.",
  "My journey in game development began with a strong interest in gaming, which led me to pursue computer science and ultimately a career in game development.",
  "During my professional experience, I encountered growing requirements for backend solutions, which sparked my interest in building and optimizing these systems. Now, I’m considering transitioning my focus toward backend engineering.",
  "I specialize in Unity and Unreal Engine for game development, as well as Node.js, Python, and Go for backend services (though my Go experience comes from personal projects). I’m excited to continue exploring and refining my skills in backend systems, also Game Development if opportunity arises",
];

export const experienceData = [
  {
    role: "FreeLance/Contract & OpenSource",
    company: "Illiquid Labs pvt Ltd",
    period: "Jun 2024 - present",
    description:
      `* Contributing to [Godot](https://github.com/godotengine/godot). C++
* Projects on creating Backend Solutions.
* MVP products for Clients (in my Github).
      `,
  },
  {
    role: "Software/Game Developer II",
    company: "Illiquid Labs pvt Ltd",
    period: "Feb 2023 - Jun 2024",
    description:
      `* Worked with Multiple clients on Developing or Optimizing their proprietary Games(Unreal & Unity) and as well as Products related to Nft’s & Blockchain, Automated Bots (Twitter, Telegram). [Website](https://www.illiquidlabs.com/)
      `,
  },
  {
    role: "Game Developer (C#/Python)",
    company: "Vazrh Studios (Brugu Solutions)",
    period: "Jul 2022 - Jan 2023",
    description:
      `* Project MGR-- Developed and optimized features such as Gameplay, Multiplayer, Wallet Connection and Database of the Game for 500-1000 avg concurrent users.
* With Azure Playfab for database Photon server for multiplayer,Thirdweb Api for wallet integration in Unity Framework. [Youtube](https://www.youtube.com/watch?v=Q-HixedhOFI&ab_channel=Metagrandrace) [Website](https://metagrandrace.com/)
      `,
  },
  {
    role: "AR-VR Developer (C#) Intern",
    company: "Aespaes Lab Pvt",
    period: "Jun 2021 - Nov 2021",
    description:
      `* Developed projects with a Bootstrap team for Educational and Industrial Sectors making Mobile AR/VR Applications.`,
  },
];

export const projectsData = [
  {
    title: "ImbecileGPT",
    subtitle: "Client Project",
    description:
      "A Custom Agentic Personality Chatbot that uses Different Knlowledge Sources(PDF's, NewsAPI, NotionPages) & tools to generate a response. Also having a Visual Lip-Synced Character.",
    tech: ["Python","Typescript","LangGraph","NextJS","RAG","Qdrant Vector DB"],
    link: "#",
    video: {
      videoSrc: "https://drive.google.com/file/d/1HpB-pJQhxdHhXIUAbOfAq6bm8D4ht0Ta/preview",
      thumbnailSrc: "/maski/ImbecileGPT.png",
      thumbnailAlt: "ImbecileGPT",
    },
  },
  {
    title: "Bogdanoff Twins",
    subtitle: "Client Project",
    description:
      "A Custom Agentic Personality Chatbot that uses Different Knlowledge Sources(Telegram Channels, NewsAPI) & tools to generate a response. In frontend using twin Visual Lip-Synced Characters.",
    tech: ["Python","Typescript","LangGraph","NextJS","RAG","Qdrant Vector DB"],
    link: "https://www.bogdanoff.gg/",
    video: {
      videoSrc: "https://drive.google.com/file/d/1gTH4zFtr6ewHXobcXvdVsgCbyBzvsylY/preview",
      thumbnailSrc: "/maski/Bogdanoff.png",
      thumbnailAlt: "Bogdanoff",
    },
  },
  {
    title: "GarageManager",
    subtitle: "Client Project",
    description:
      "Developing a Backend Restful services for a Garage Client, key features of the main Frontend software are using - Accounting, Billing & Invoicing, Customer Database, Inventory Control, Service History, Payment Options, Tools (SMS, Alerts, Mails).",
    tech: ["JAVA SpringBoot", "Azure MysqlDB", "Azure (ContainerApps,Functions)"],
    link: "https://github.com/Maski0/GarageManager.git",
  },
  {
    title: "Conundrum",
    subtitle: "work Project",
    description:
      "A 1v1 Multiplayer Turn-Based Elemental Strategy Game with 2500+ concurrent players. Handling Matchmaking, Leaderboard, and Gameplay.",
    tech: ["C#","Unity","Networking","WebGL","Firebase"],
    link: "",
    video: {
      videoSrc: "https://drive.google.com/file/d/12rB7jZPaNDEmL1eSp6DrsKMQdPBsGDfk/preview",
      thumbnailSrc: "/maski/Conundrum.png",
      thumbnailAlt: "Conundrum",
    },
  },
  {
    title: "Omni",
    subtitle: "work Project",
    description:
      "A free for all Multiplayer Deathmatch Game with 1000+ concurrent players. Handling Lobby, Matchmaking, Leaderboard, and Gameplay. Blockchain NFT's for customizations and premium Paid matches.",
    tech: ["C#","Unity","Networking","WebGL/Mobile","Firebase"],
    link: "",
    video: {
      videoSrc: "https://drive.google.com/file/d/15eCwzImpB1JClT_G0qDITRWUOKI6GUK5/preview",
      thumbnailSrc: "/maski/Omni.png",
      thumbnailAlt: "Omni",
    },
  },
  {
    title: "OpenGl-FrameWork (Game/Graphic Engine)",
    subtitle: "Personal Project",
    description:
      "This is a 2D Opengl Graphic FrameWork Template without any External Api's (Core OpenGL) to understand the GPU Shader language, and Rendering (lighting)",
    tech: ["C++", "OpenGl ", "GLFW","ImGUI","GLEW"],
    link: "https://github.com/Maski0/OpenGlFrameWork",
  },
  {
    title: "Blog-Engine",
    subtitle: "Personal Project",
    description:
      "A Backend Personal BlogEngine which can be integrated easily with a front end application as a feature (inProgress, adding features on a daily basis)",
    tech: ["Golang", "Postgres", "Docker (Linux)", "Kubernetes(AWS)"],
    link: "https://github.com/Maski0/Blog-Engine.git",
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
    { id: "Game Dev", group: 1 },
    { id: "Unity", group: 2 },
    { id: "Unreal", group: 2 },
    { id: "DX12/Vulkan", group: 2 },
    
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
    { source: "Game Dev", target: "Unity", value: 1 },
    { source: "Game Dev", target: "Unreal", value: 1 },
    { source: "Game Dev", target: "DX12/Vulkan", value: 1 },
  ],
};
