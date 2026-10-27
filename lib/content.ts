export const profile = {
  name: "Shobhit Gupta",
  email: "shobhitguptacs25@bmsce.ac.in",
  github: "https://github.com/shobhitguptacs",
  leetcode: "https://leetcode.com/u/Shobhit_Gupta_/",
  education: "BMSCE · Computer Science and Engineering · Second year",
  tagline: "Full Stack Developer · Startup Builder · Problem Solver",
  intro:
    "I enjoy turning ideas into useful products, working with startup teams, and collaborating with people who bring different perspectives.",
  about:
    "I’m Shobhit Gupta, a second-year CSE student at BMSCE and a full-stack developer. I enjoy early-stage product building, startup teams, and collaborating with people from different backgrounds. I’m open to internships, startup roles, and collaborative projects.",
  collaboration:
    "I’m open to internships, startup roles, co-building, and team projects.",
};

export const skillGroups = [
  { title: "Frontend", items: ["React", "Next.js"] },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Python", "Django"],
  },
  { title: "Languages", items: ["C++", "Python", "JavaScript"] },
  { title: "Data", items: ["MongoDB"] },
  {
    title: "DSA",
    items: ["Data structures", "Algorithms", "Problem solving"],
  },
  { title: "AI/ML", items: ["Basic machine learning with Python"] },
  { title: "Tools", items: ["Git", "GitHub", "Postman", "Visual Studio Code"] },
];

export const leetcodeStats = {
  total: 30,
  easy: 15,
  medium: 13,
  hard: 2,
  activeDays: 21,
  maxStreak: 7,
  checkedAt: "2026-10-27",
};

export const pawcare = {
  name: "PawCare",
  subtitle: "Stray Animal Assistance, Rescue and Adoption",
  description:
    "A community platform connecting people who report stray or injured animals with volunteers, shelters, and adopters.",
  problem:
    "People who find stray, injured, lost, or abandoned animals often do not know whom to contact. PawCare gives their reports a shared path to nearby volunteers, rescuers, shelters, and potential adopters.",
  features: [
    "Submit rescue reports with animal details, photos, map-selected locations, assistance needs, and Emergency / Urgent / Normal priority.",
    "Let volunteers browse priority-ranked requests, accept a case, and progress it through Accepted, In Progress, and Resolved.",
    "Track submitted rescue reports and lost/found notices from role-aware dashboards.",
    "Let shelters manage their details, incoming requests, adoption listings, and Available / Adopted status.",
    "Let administrators monitor cases, verify reports, remove inappropriate reports, and manage users and shelter information.",
  ],
  stack: [
    "React",
    "React Router",
    "Vite",
    "CSS",
    "Node.js",
    "Express",
    "MongoDB / Mongoose",
    "JWT",
    "bcrypt",
    "Multer",
    "Leaflet",
    "OpenStreetMap",
  ],
  repo: "https://github.com/shobhitguptacs/pawcare",
  live: "https://pawcare-v9rzfscq.manus.space",
  role: "Sole developer — Shobhit confirmed he built the complete project, including its React frontend, Express REST API, MongoDB/Mongoose models, authentication, photo uploads, map-based locations, dashboards, and rescue workflow.",
  screenshots: [
    {
      src: "/media/pawcare/pawcare-home.png",
      alt: "PawCare home page with its animal rescue introduction and reporting actions",
      label: "Home",
    },
    {
      src: "/media/pawcare/pawcare-assistance-map.png",
      alt: "PawCare assistance map and priority-ranked rescue requests",
      label: "Find assistance",
    },
    {
      src: "/media/pawcare/pawcare-volunteer-dashboard.png",
      alt: "PawCare volunteer dashboard showing the priority-ranked requests to review",
      label: "Volunteer workflow",
    },
  ],
  demoVideo: "/media/pawcare/pawcare-demo.mp4",
  demoPoster: "/media/pawcare/pawcare-resolved-case.png",
};
