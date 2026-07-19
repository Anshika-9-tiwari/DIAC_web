// data/courses/industrial-automation.ts

export const industrialAutomationCourse = {
  hero: {
    badge: "Job-Oriented PlC Vender Program",

    title: "Master Multiple PLC Platforms with Industry-Focused Training",

    icon: "/courses/automation.png",

    paragraph1:
      "Industrial automation companies use different PLC brands depending on project requirements, industry standards, and customer preferences. Our PLC Vendor Training is designed to help students and working professionals learn programming, configuration, troubleshooting, and communication across multiple PLC platforms.",
    paragraph2:
      "The course covers PLC programming, HMI development, SCADA integration, industrial communication protocols, and live automation projects. Training is delivered using real industrial hardware and software to prepare candidates for automation careers in manufacturing, process industries, and machine automation.",

    videoUrl:
      "https://www.youtube.com/embed/R4eJncL7bP8",

    syllabusPdf:
      "/downloads/industrial-automation-syllabus.pdf",
  },

  overview: {
    sectionTag: "Why Choose DIAC",

    title: "Job-Oriented PLC Vender Training",

    description:
      "DIAC is committed to delivering industry-relevant training that bridges the gap between academic knowledge and practical industrial requirements. With 17+ Years of Industrial Automation Training Experience, our training methodology focuses on real hardware exposure, project-based learning, and expert mentorship to ensure students become job-ready professionals",

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
      "Industries Hiring Automation Professionals",

    industries: [
      "Industrial Automation Companies",
      "Manufacturing Industries",
      "OEM Machine Builders",
      "Automotive Industry",
      "Pharmaceutical Industry",
      "Food & Beverage Plants",
      "Oil & Gas",
      "Power Plants",
      "Water Treatment Plants",
      "Cement Industry",
      "Steel Industry",
      "Chemical Plants",
      "EPC Companies",
      "Renewable Energy Projects",
      "Smart Factory & Industry 4.0 Projects"
    ],
  },

  curriculum:{
    sectionTag: "Full Curriculum",

    title:
      "Experience a Comprehensive 6-Module Program",

    description:
      "This is a Multi PLC Vendor Training program. The PLC brands covered may vary depending on the selected course module, project requirements, software availability, and industry demand. Not all PLC vendors are included in every batch or training program. The curriculum is customized to provide the most relevant vendor training for students and corporate requirements.",
      
    module: [
      {
        id: 1,
        title: "PLC Fundamentals",
        description:
          "",

        level: "Beginner–Intermediate",
        tag: "Hands-on Wiring",

        skills: [
          // "Relay Wiring",
          // "Motor Starters",
          // "Interlocking",
          // "Panel Layout",
          // "Troubleshooting",
        ],

        topics: [
          "PLC Architecture",
          "PLC Hardware",
          "PLC Wiring",
          "Digital Inputs & Outputs",
          "Analog Inputs & Outputs",
         " Timers",
          "Counters",
          "Comparators",
          "Data Handling",
         " Memory Functions",
          "Industrial Safety",
        ],
      },

      {
        id: 2,
        title: "PLC Vendor Training",
        description:
          "",

        level: "Intermediate–Advanced",
        tag: "",

        skills: [
          // "Ladder Logic",
          // "FBD",
          // "Analog Scalling",
          // "STEP 7",
          // "TIA Portal",
          // "Troubleshooting",
        ],

        topics: [
          "Siemens PLC Training",
          "Allen-Bradley PLC Training",
         " Mitsubishi PLC Training",
          "Delta PLC Training",
          "Omron PLC Training",
          "Schneider Electric PLC Training",
         " ABB PLC Training",
          "Beckhoff PLC Training",
         " Keyence PLC Training",
          "Panasonic PLC Training",
          "Fatek PLC Training",
          "Unitronics PLC Training",
          "WAGO PLC Training",
          "Bosch Rexroth PLC Training",
        ],
      },

      {
        id: 3,
        title: "HMI Training",
        description:
          "",

        level: "Intermediate",
        tag: "WinCC HMI",

        skills: [
          // "WinCC HMI",
          // "Tag Management",
          // "Recipes",
          // "Alarm Config",
          // "Trends",
        ],

        topics: [
          "HMI Fundamentals",
          "Screen Design",
          "Alarm Configuration",
          "Trend Configuration",
          "Recipe Management",
          "User Management",
          "PLC-HMI Communication",
          "Multi-screen Navigation",
        ],
      },

      {
        id: 4,
        title: "SCADA Training",
        description:
          "",

        level: "Intermediate-Advanced",
        tag: "WinCC SCADA",

        skills: [
          // "WinCC SCADA",
          // "Alarm Logging",
          // "Data Historian",
          // "Scripting",
          // "Multi-screen",
        ],

        topics: [
          "SCADA Fundamentals",
          "Tag Configuration",
          "Graphics Development",
          "Alarm Management",
         " Historical Trends",
         " Data Logging",
          "Reports",
          "PLC-SCADA Integration",
         " Client-Server Architecture",
        ],
      },

      {
        id: 5,
        title: "Industrial Communication",
        description:
          "",

        level: "Intermediate-Advanced",
        tag: "PROFINET·MODBUS",

        skills: [
          // "PROFINET",
          // "MODBUS",
          // "RS485",
          // "Remote I/O",
          // "Network Diagnostics"
        ],

        topics: [
           "Modbus RTU",
          "Modbus TCP/IP",
          "Profibus",
          "Profinet",
          "Ethernet/IP",
          "OPC UA",
          "RS232",
          "RS485",
        ],
      },

     {
        id: 6,
        title: "Industrial Projects",
        description:
          "",

        level: "Intermediate–Advanced",
        tag: "",

        skills: [
          // "SINAMICS",
          // "Drive Parameterisation",
          // "Servo Tuning",
          // "VFD Panel",
          // "Braking Methods",
        ],

        topics: [
          "Conveyor Automation",
          "Tank Level Automation",
          "Motor Control System",
          "Traffic Light System",
          "Batch Process Automation",
          "Packaging Machine",
          "Pump Automation",
          "Industrial Monitoring System",
        ],
      },
    ]
  },

  projects: {
    sectionTag: "Industrial Projects",

    title: "Real Systems You Will Build",

    description:
      "Students work on real industrial automation applications, including:",

    projects: [
      {
        icon: "Droplets",
        title: "Conveyor Automation",
        desc:
          "Pumping, filtration, dosing, and level control sequences with full SCADA monitoring and alarm management.",
        tech: "PLC • SCADA • HMI",
      },

      {
        icon: "Package",
        title: "Bottle Filling System",
        desc:
          "Conveyor-driven filling with reject logic, batch counters, and recipe-based HMI control.",
        tech: "PLC • HMI • SENSORS",
      },

      {
        icon: "MoveHorizontal",
        title: "Traffic Signal Automation",
        desc:
          "Multi-zone conveyor with product sorting, interlocking, and VFD speed control.",
        tech: "PLC • VFD • NETWORKING",
      },

      {
        icon: "Settings",
        title: "Automatic Water Level Control",
        desc:
          "Servo-driven packaging with product detection, batch counting, and full alarm handling.",
        tech: "PLC • SERVO • HMI",
      },

      {
        icon: "TrafficCone",
        title: "Boiler Automation",
        desc:
          "PLC-based adaptive traffic management with HMI override and fault diagnostics.",
        tech: "PLC • HMI",
      },

      {
        icon: "BarChart3",
        title: "Pump Control System",
        desc:
          "PID-controlled level system with continuous trending, alarm logging, and data export.",
        tech: "PLC • SCADA • PID",
      },

      {
        icon: "Factory",
        title: "VFD Automation",
        desc:
          "OEE monitoring and production data acquisition with SCADA dashboard on TIA Portal.",
        tech: "TIA PORTAL • SCADA",
      },

      {
        icon: "Cog",
        title: "Packaging Machine Automation",
        desc:
          "Chemical process simulation with closed-loop PID control, interlocks, and safety systems.",
        tech: "PLC • INSTRUMENTATION",
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
          "Practical training includes:  •  PLC Programming Practice  •  HMI Screen Development  •  SCADA Application Development •  PLC-HMI Communication  •  PLC-SCADA Communication  •  Industrial Networking  •  Live Troubleshooting  •  Industrial Project Implementation.",
      },

      {
        title: "Industry-Recognized Certification",
        desc:
          "Validate your skills in PLC, SCADA, HMI, VFD, and Industrial Networking.",
      },

      {
        title: "Industry-Oriented Training",
        desc:
          "The training follows current industrial standards and focuses on practical implementation rather than only theoretical concepts. Students learn through: • Industrial PLC Programming  •  Live Automation Systems  • Real Machine Logic • Industrial Documentation • Troubleshooting Methods • Project-Based Learning • Industry Standard Programming Practices.",
      },
    ],
  },

  industryDemand: {
    badge: "Career Opportunities",

    title: "Industry Demand & Tools Covered",

    description:
      "Automation industries require engineers who can work with different PLC brands instead of being limited to a single platform. Multi-vendor PLC knowledge gives professionals greater flexibility and increases employability across manufacturing, process plants, OEMs, and system integrators.",

    industryTitle: "Career Opportunities",

    toolsTitle: "Tools & Software Covered",

    jobRoles: [
      "Program PLCs from multiple vendors",
      "Develop professional HMI applications",
      "Build SCADA monitoring systems",
      "Configure industrial communication protocols",
      "Integrate PLC, HMI, and SCADA systems",
      "Troubleshoot industrial automation systems",
      "Execute live industrial automation projects",
      "Work confidently in manufacturing, OEM, and process industries",
      "PLC Programmer",
      "PLC Automation Engineer",
      "Automation Engineer",
      "Control System Engineer",
     " SCADA Engineer",
     "Commissioning Engineer",
     "Maintenance Engineer",
     "Industrial Automation Engineer",
    ],

    tools: [
     " Siemens TIA Portal",
      "STEP 7",
      "WinCC",
      "FactoryTalk View",
      "RSLogix / Studio 5000",
      "GX Works",
      "GX Developer",
      "Delta ISPSoft",
      "WPLSoft",
      "CX-One",
      "EcoStruxure Machine Expert",
     " EasyBuilder Pro",
      "CODESYS",
      "Wonderware InTouch",
      "Ignition SCADA",
      "AutoCAD (Basic Electrical Documentation)",
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
      "ITI Wireman",
      "Working Professionals",
      "Design Engineers",
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
      q: "Is this a beginner-friendly course?",
      a: "Yes. The course starts with PLC fundamentals before progressing to advanced programming and industrial applications.",
    },

    {
      q: "Will I learn HMI and SCADA?",
      a: "Yes. The training includes PLC, HMI, and SCADA with practical industrial integration.",
    },

    {
      q: "Do I need prior PLC knowledge?",
      a: "No. Basic electrical knowledge is helpful, but the course starts from the fundamentals.",
    },

    {
      q: "Will I work on industrial projects?",
      a: "Yes. Students complete multiple real-world automation projects during the training.",
    },

    {
      q: "Is placement assistance available?",
      a: "Yes. Resume preparation, interview guidance, and placement assistance are provided.",
    },

    {
      q: "Which PLC brands are covered?",
      a: "The course includes training on multiple PLC vendors based on industry requirements and the selected training module.",
    },
  ],
},
};