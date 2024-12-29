export const skillData = {
    nodes: [
      { id: "Front-End", group: 1 },
      { id: "Back-End", group: 2 },
      { id: "React", group: 1 },
      { id: "Next.js", group: 1 },
      { id: "Node.js", group: 2 },
      { id: "Express", group: 2 },
    ],
    links: [
      { source: "Front-End", target: "React" },
      { source: "Front-End", target: "Next.js" },
      { source: "Back-End", target: "Node.js" },
      { source: "Back-End", target: "Express" },
    ],
  }
  