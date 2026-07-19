// data/courses/industrial-automation.ts

export const industrialAutomationCourse = {
  hero: {
    badge: "Job-Oriented Scada & HMI Training Program",

    title: "SCADA & HMI Training",

    icon: "/courses/automation.png",

    paragraph1:
      "Master the technologies that power modern industrial automation with DIAC's SCADA & HMI Training Program. This industry-focused course is designed to help students, engineers, and working professionals learn real-time monitoring, process visualization, alarm management, data logging, and industrial control system development.",

    paragraph2:
      "The training follows current industry standards and 2026 automation technologies to prepare candidates for high-demand automation careers.",

    videoUrl:
      "https://www.youtube.com/embed/R4eJncL7bP8",

    syllabusPdf:
      "/downloads/industrial-automation-syllabus.pdf",
  },

  overview: {
    sectionTag: "Why Choose DIAC",

    title: "Job-Oriented SCADA & HMI Training",

    description:
      "DDIAC is a leading Industrial Automation Training Institute with 17+ years of experience in developing skilled automation professionals. Our SCADA & HMI Training program combines industry-oriented curriculum, practical learning, and real-world project exposure to help students gain job-ready skills. Training is delivered by experienced automation experts using modern industrial software and automation lab facilities. With hands-on practice, live projects, placement assistance, interview preparation, and career guidance, DIAC ensures students are fully prepared for successful careers in Industrial Automation, SCADA, HMI, and Control Systems Engineering. ",

    cards: [
      {
        icon: "RefreshCw",
        title: "Learn Until You're Placed",
        description:
          "Continuous support until you land your target automation role — repeat sessions, mock interviews, and referrals included.",
        iconBg: "bg-red-900",
        iconColor: "text-white",
      },

      {
        icon: "Factory",
        title: "10+ Real Industrial Projects",
        description:
          "Build water treatment plants, conveyor systems, bottle filling lines, and packaging machines from scratch.",
        iconBg: "bg-red-900",
        iconColor: "text-white",
      },

      {
        icon: "Zap",
        title: "Real Hardware Practice",
        description:
          "Hands-on with Siemens S7-1200/S7-1500, TIA Portal, SINAMICS VFDs, live panels, and industrial networking equipment.",
        iconBg: "bg-red-900",
        iconColor: "text-white",
      },

      {
        icon: "Target",
        title: "Personalised Mentorship",
        description:
          "1:1 guidance from trainers with real industrial backgrounds in manufacturing, power, pharma, and process industries.",
        iconBg: "bg-red-900",
        iconColor: "text-white",
      },

      {
        icon: "ClipboardList",
        title: "Interview Preparation",
        description:
          "Technical mock interviews, resume building, and unlimited practice sessions until you clear your target company's hiring process.",
        iconBg: "bg-red-900",
        iconColor: "text-white",
      },

      {
        icon: "CalendarDays",
        title: "Flexible Batch Schedules",
        description:
          "Weekday, weekend, and evening batches available — so your upskilling doesn't interrupt your current commitments.",
        iconBg: "bg-red-900",
        iconColor: "text-white",
      },
    ],

    industriesTitle:
      "Industry-Oriented Training",

    industries: [
      "SCADA Architecture & Fundamentals",
      "HMI Screen Development",
      "Alarm & Event Management",
      "Industrial Communication Protocols",
      "Data Logging & Trending",
      "Real-Time Monitoring Systems",
      "PLC-SCADA Integration",
      "Industrial Networking Concepts",
      "Report Generation & Diagnostics",
      "Smart Factory Applications",

    ],
  },

  curriculum:{
    sectionTag: "Full Curriculum",

    title:
      "Experience a Comprehensive 3-Module Program",

    description:
      "From relay fundamentals to TIA Portal — each module is structured for maximum hands-on practice aligned with industry workflows.",
      
    module: [
      {
        id: 1,
        title: " Introduction to Industrial Automation",
        description:
          "Foundation of industrial electrical control systems, motor starters, protection circuits, panel wiring and troubleshooting.",

        level: "Beginner–Intermediate",
        tag: "Hands-on Wiring",

        skills: [
          "Relay Wiring",
          "Motor Starters",
          "Interlocking",
          "Panel Layout",
          "Troubleshooting",
        ],

        topics: [
         "Basics of Industrial Automation",
          "Role of PLC, SCADA, and HMI",
          "Industrial Control System Architecture",
          "Automation Applications in Industries",
        ],
      },

      {
        id: 2,
        title: "HMI (HUMAN MACHINE INTERFACE)",
        description:
          "Architecture, field device wiring, programming languages, advanced instructions, and communication with HMI/SCADA.",

        level: "Intermediate–Advanced",
        tag: "Siemens S7-1200/1500",

        skills: [
          "Ladder Logic",
          "FBD",
          "Analog Scalling",
          "STEP 7",
          "TIA Portal",
          "Troubleshooting",
        ],

        topics: [
          "Getting started with HMI",
          " Creating applications, creating Internal / External tags",
          "Downloading / uploading programs",
          "Creating Templates",
          "Creating Analog/ digital alarm messages",
          "Creating User Administration",
          "Creating Recipes",
          "Faceplates",
          "Trends",
          "Communication with PLC",
          "Fault diagnostics",
          "Real world project simulation.",
        ],
      },

      {
        id: 3,
        title: "SCADA (SUPERVISORY CONTROL AND DATA ACQUISITION)",
        description:
          "Build operator interfaces with alarms, recipes, trends, and user administration — linked to live PLC systems.",

        level: "Intermediate",
        tag: "WinCC HMI",

        skills: [
          "WinCC HMI",
          "Tag Management",
          "Recipes",
          "Alarm Config",
          "Trends",
        ],

        topics: [
          "Introduction to SCADA Software",
          "SCADA Architecture Design",
          "Creating new SCADA project",
          "Creating & Accessing Real-time",
          "Creating & editing elementary graphic display",
         " Sizing, Movement, Blinking, Visibility, Filling",
          "Attaching controls to graphic objects",
          "Multi-screen navigation",
          "Creating & Accessing Historical Trends",
          "Using alarms & events",
         " Alarm logging and history",
          "Application of scripts",
          "Communication with PLC",
          "Communication with excel",
          "User roles and permissions-based login/ logout",
          "Industrial Projects (Hands-on)",
          "Fault finding / troubleshooting",
        ],
      },
    ]
  },

  projects: {
    sectionTag: "Industrial Projects",

    title: "Real Systems You Will Build",

    description:
      "Students work on automation projects based on real industrial applications.",
    projects: [
      {
        icon: "Droplets",
        title: "Water Treatment Plant Monitoring",
        desc:
          "Pumping, filtration, dosing, and level control sequences with full SCADA monitoring and alarm management.",
        tech: "PLC • SCADA • HMI",
      },

      {
        icon: "Package",
        title: "Tank Level Monitoring System",
        desc:
          "Conveyor-driven filling with reject logic, batch counters, and recipe-based HMI control.",
        tech: "PLC • HMI • SENSORS",
      },

      {
        icon: "MoveHorizontal",
        title: "Boiler Automation System",
        desc:
          "Multi-zone conveyor with product sorting, interlocking, and VFD speed control.",
        tech: "PLC • VFD • NETWORKING",
      },

      {
        icon: "Settings",
        title: "Conveyor Monitoring System",
        desc:
          "Servo-driven packaging with product detection, batch counting, and full alarm handling.",
        tech: "PLC • SERVO • HMI",
      },

      {
        icon: "TrafficCone",
        title: "Motor Control & Monitoring",
        desc:
          "PLC-based adaptive traffic management with HMI override and fault diagnostics.",
        tech: "PLC • HMI",
      },

      {
        icon: "BarChart3",
        title: "Energy Management System",
        desc:
          "PID-controlled level system with continuous trending, alarm logging, and data export.",
        tech: "PLC • SCADA • PID",
      },

      {
        icon: "Factory",
        title: "Process Visualization Projects",
        desc:
          "OEE monitoring and production data acquisition with SCADA dashboard on TIA Portal.",
        tech: "SCADA",
      },

      {
        icon: "Cog",
        title: "Manufacturing Monitoring Dashboard",
        desc:
          "Chemical process simulation with closed-loop PID control, interlocks, and safety systems.",
        tech: "HMI",
      },
    ],
  },

  certification: {
    sectionTag: "Certification",

    title: "Credentials That Open Doors",

    description:
      "Earn an industry-recognised certificate that validates your skills and demonstrates practical expertise in industrial automation technologies.",

    image: "/courses/diac_certification.jpg",

    points: [
      {
        title: "Hands-on Practical Training",
        desc:
          "At DIAC, students learn through extensive practical sessions instead of only theoretical concepts.",
      },

      {
        title: "Practical Training Includes:",
        desc:
          "Live SCADA Configuration, HMI Screen Designing, PLC Integration Projects, Alarm Configuration, Communication Setup, Real-Time Monitoring Applications, Industrial Simulation Exercises",
      },

      {
        title: "Career Advancement Opportunities",
        desc:
          "Enhance employability and prepare for roles in manufacturing, process, and automation industries.",
      },

      {
        title: "Why Industry Needs SCADA Professionals:",
        desc: "Industry 4.0 Adoption, Smart Factory Implementation, Remote Monitoring Systems, Data-Driven Manufacturing, Process Automation Expansion.",
      },
    ],
  },

  industryDemand: {
    badge: "Career Opportunities",

    title: "Industry Demand & Tools Covered",

    description:
      "The demand for SCADA and HMI professionals continues to grow across manufacturing, power plants, oil & gas, water treatment, pharmaceuticals, automotive, FMCG, and smart industries.",

    industryTitle: "Industry Demand",

    toolsTitle: "Tools & Software Covered",

    jobRoles: [
      "SCADA Engineer",
      "HMI Programmer",
      "Automation Engineer",
      "Control System Engineer",
      "PLC SCADA Engineer",
      "Industrial Automation Specialist",
      "Commissioning Engineer",
      "Technical Support Engineer",
    ],

    tools: [
      "WinCC flexible",
      "WinCC Explorer and more",
      "Industrial HMI Panels",
      "Communication Networks",
      "PLC",
    ],
  },

    audience: {
    badge: "Eligibility Criteria",

    title: "Who Can Enroll & Eligibility",

    description:
      "This Industrial Automation Training Program is ideal for students, fresh graduates, working professionals, and corporate employees who want to build expertise in PLC, SCADA, HMI, Industrial Networking, VFD, and Automation Technologies. No prior automation experience is required, making it suitable for both beginners and experienced professionals.",

    audience: [
      "B.Tech / B.E. Students & Graduates",
      "Diploma Engineering Students",
      "ITI Students (Electrician, Electronics, Instrumentation)",
      "Final Year Students & Freshers",
      "Electrical & Electronics Engineers",
      "Instrumentation Engineers",
      "Maintenance & Production Engineers",
      "Automation Professionals",
      "Corporate Employees Seeking Upskilling",
    ],
  },

  placement: {
    badge: "Placement Support",

    title:
      "We Do not Just Train You — We Help You Get Hired",

    description:
      "End-to-end career support including resume building, technical interview preparation, job referrals, and dedicated placement assistance.",

    cards: [
      {
        icon: "📄",
        title: "Resume Building",
        desc: "Professional resume preparation based on industry standards and automation job requirements.",
      },

      {
        icon: "🎯",
        title: "Interview Preparation",
        desc: "Mock interviews, technical discussions, aptitude guidance, and HR interview sessions.",
      },

      {
        icon: "📝",
        title: "Technical Mock Interviews",
        desc: "Practice real PLC, SCADA, HMI, Electrical and Automation interview questions.",
      },

      {
        icon: "🤝",
        title: "Job Referrals",
        desc: "Direct referrals through industry partners, automation companies, and manufacturing organizations.",
      },

      {
        icon: "📢",
        title: "Placement Assistance",
        desc: "Career guidance, company shortlisting, interview scheduling, and placement support.",
      },

      {
        icon: "🎯",
        title: "Career Counselling",
        desc: "One-on-one sessions to help you choose the right specialisation, target the right companies, and map a long-term career path.",
      },
    ],
  },

  faq: {
    sectionTag: "Common Questions",

    title: "Frequently Asked Questions",

    faqs: [
      {
        q: "What is SCADA and HMI Training?",
        a: "SCADA & HMI Training teaches monitoring, controlling, and visualizing industrial processes through modern automation software and industrial communication systems.",
      },

      {
        q: "Who can join this course?",
        a: "Diploma students, B.Tech students, electrical engineers, electronics engineers, automation professionals, and freshers can enroll.",
      },

      {
        q: "Is practical training included?",
        a: "Yes. The course includes extensive hands-on practical sessions, live projects, and industrial case studies.",
      },

      {
        q: "Which software will I learn?",
        a: "You will learn industry-standard tools such as Siemens WinCC, TIA Portal, FactoryTalk View, Wonderware InTouch, Ignition SCADA, and other leading platforms.",
      },

      {
        q: "Does DIAC provide placement assistance?",
        a: "Yes. DIAC provides placement support, interview preparation, resume guidance, and career assistance.",
      },

      {
        q: "What are the career opportunities after this course?",
        a: "You can work as a SCADA Engineer, HMI Developer, Automation Engineer, Control System Engineer, or Industrial Automation Engineer.",
      },

       {
        q: "Why choose DIAC for SCADA & HMI Training?",
        a: "DIAC offers industry-oriented training, practical learning, expert trainers, real projects, and placement-focused education for automation careers. Content aligned for DIAC course page, industrial automation audience, commercial intent, SEO optimization, and placement-focused positioning.",
      },
    ],
  },
};