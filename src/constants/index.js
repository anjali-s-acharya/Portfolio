export const myProjects = [
  {
    id: 1,
    title: "Interactive Network Topology Visualizer",
    tagline: "MCP + LLM",
    glyph: "topology",
    description:
      "A full-stack network visualizer rendering live topology from a Cisco Modeling Labs sandbox, paired with a Claude-powered chat copilot for natural-language troubleshooting.",
    subDescription: [
      "Engineered a Python MCP server (FastMCP) exposing topology, node-detail, show-command, path-finding, and graph-highlighting tools that let Claude query and reason over live network state.",
      "Built an interactive topology graph with React and Cytoscape.js, served by a FastAPI backend that bridges the MCP server and a CML sandbox over REST and WebSocket.",
      "Integrated Netmiko for read-only SSH show-commands against live lab nodes, surfaced directly inside chat-driven troubleshooting.",
      "Let Claude highlight the relevant nodes and links on the graph in response to natural-language questions about the topology.",
    ],
    href: "https://github.com/anjali-s-acharya/network-visualizer",
    tags: ["React", "Vite", "Cytoscape.js", "FastAPI", "Python", "MCP", "Claude"],
  },
  {
    id: 2,
    title: "NetCode",
    tagline: "Gamified network engineering practice",
    glyph: "terminal",
    description:
      "A gamified learning and practice platform for network engineers, blending guided lessons, LeetCode-style troubleshooting challenges, and automation katas.",
    subDescription: [
      "Built guided learning tracks for networking and coding fundamentals, plus LeetCode-style troubleshooting challenges with topology, logs, and CLI output to diagnose.",
      "Built CodeOps, teaching network automation (Python, REST APIs, Netmiko, Ansible, Terraform) through real day-to-day automation tasks instead of tutorials.",
      "Designed Capstone Labs that fuse diagnosis and automation into full-incident simulations with sequential unlock stages.",
      "Shipped a gamified progress system — XP, levels, streaks, and a deterministic daily challenge — across 50+ seeded challenges spanning networking, security, and automation.",
    ],
    href: "https://github.com/anjali-s-acharya/NetCode",
    tags: ["React", "Vite", "TypeScript", "FastAPI", "SQLAlchemy", "Python"],
  },
];

export const mySocials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/anjali-s-acharya/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/anjali-s-acharya",
    icon: "/assets/logos/github.svg",
  },
];

export const experiences = [
  {
    title: "Bachelor of Engineering – Information Science",
    job: "RV Institute of Technology and Management, Bengaluru",
    date: "2019 - 2023",
    contents: [
      "Graduated with a CGPA of 8.2/10.",
      "Relevant coursework: OOP, Data Structures & Algorithms, DBMS, SDLC, Operating Systems, and Computer Networks.",
    ],
  },
  {
    title: "Automation Intern",
    job: "Philips – Bengaluru",
    date: "Feb 2023 - Jul 2023",
    contents: [
      "Gained hands-on experience in network fundamentals, network automation, and API-driven integrations using Python and network libraries to interact with devices and management platforms.",
      "Supported SD-LAN site migrations as part of the SME team, collaborating with network, security, and site stakeholders on implementation, validation, and operational readiness.",
    ],
  },
  {
    title: "Software Engineer | IT Network Specialist",
    job: "Philips – Bengaluru",
    date: "Aug 2023 - Present",
    contents: [
      "Built MCP servers for Cisco Catalyst Center and vManage, exposing device, client, and network telemetry as AI-callable tools to power LLM-assisted troubleshooting — cutting time-to-diagnose by 40–45%.",
      "Developed an Executive Connectivity Monitoring platform using Django, Python, DNAC APIs, and LDAP integration for proactive detection of connectivity issues affecting executive and critical users.",
      "Built an in-house Firewall Rule Generation Tool (Django, JavaScript, SQL, FMC and 1DDI APIs), cutting firewall rule analysis effort by 35% and improving accuracy, flexibility, and control over rule management.",
      "Automated operational reporting, validation, monitoring, and alerting across Catalyst Center, ISE, ThousandEyes, and FMC APIs, reducing manual effort by 25% and improving operational accuracy.",
      "Built a training compliance workflow with Power Automate and AI Builder to monitor learning deadlines and trigger notifications, improving on-time compliance by 55–65%.",
      "Authored technical documentation, runbooks, dashboards, and leadership-ready operational reports covering network hardware, licensing, and monitoring.",
    ],
  },
];
