// data/courses/industrial-automation.ts

export const industrialAutomationCourse = {
  hero: {
    badge: "Job-Oriented Electrical Design Program",

    title: "Electrical Design Training",

    icon: "/courses/automation.png",

    paragraph1:
      "Electrical Design Training Course at DIAC is designed to help students and professionals develop practical skills in electrical schematic design, control panel design, power distribution systems, cable sizing, and industrial electrical drafting.",
    paragraph2:
      "This industry-focused program combines theoretical concepts with hands-on software training to prepare learners for real-world engineering projects in manufacturing, automation, and infrastructure sectors.",

    videoUrl:
      "https://www.youtube.com/embed/R4eJncL7bP8",

    syllabusPdf:
      "/downloads/industrial-automation-syllabus.pdf",
  },

  overview: {
    sectionTag: "Why Choose DIAC",

    title: "Job-Oriented Electrical Design Training",

    description:
      "DIAC is a leading Industrial Automation and Electrical Design training institute with 17+ years of expertise in delivering industry-focused technical education. Our Electrical Design Training program is developed according to current industrial standards and combines theoretical concepts with practical exposure on real-world design projects. Students learn from experienced industry professionals in a modern training environment equipped with advanced design software and workstations. With hands-on project experience, placement assistance, and industry-recognized certification, DIAC has become a trusted choice for thousands of engineering students and professionals looking to build successful careers in Electrical Design and Industrial Automation.",

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
      "Electrical Schematic Design",
      "Control Panel Design",
      "Power Distribution Systems",
      "Motor Control Circuits",
      "Cable Selection & Sizing",
      "Electrical Standards & Safety",
      "Industrial Documentation",
      "Real Industrial Design Practices",
      "Chemical Industries",
      "Smart Manufacturing Facilities",
    ],
  },

  curriculum:{
    sectionTag: "Full Curriculum",

    title:
      "Experience a Comprehensive 11-Module Program",

    description:
      "From relay fundamentals to TIA Portal — each module is structured for maximum hands-on practice aligned with industry workflows.",
      
    module: [
      {
        id: 1,
        title: "Fundamentals of Electrical Engineering",
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
          "Basic Electrical Concepts",
          "AC & DC Systems",
          "Electrical Symbols and Standards",
          "Electrical Safety Practices",
          "Industrial Electrical Applications",
        ],
      },

      {
        id: 2,
        title: "Electrical Drawings & Documentation",
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
           "Understanding Electrical Drawings",
          "Single Line Diagrams (SLD)",
         " Power Distribution Diagrams",
          "Wiring Diagrams",
          "Cable Schedules and Documentation",
        ],
      },

      {
        id: 3,
        title: " Electrical Load Calculation",
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
          "Connected Load Calculation",
          "Demand Load Calculation",
          "Load Balancing Techniques",
          "Transformer Sizing",
          "Generator Sizing Basics",
        ],
      },

      {
        id: 4,
        title: "Cable Selection & Sizing",
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
          "Types of Electrical Cables",
          "Cable Selection Criteria",
         " Current Carrying Capacity",
          "Voltage Drop Calculation",
          "Cable Routing Practices",
        ],
      },

      {
        id: 5,
        title: "Switchgear & Protection Systems",
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
           " Circuit Breakers and Isolators",
            "MCCB, MCB and ACB Selection",
           " Protection Relays",
            "Earthing Systems",
            "Electrical Protection Coordination",

        ],
      },

     {
        id: 6,
        title: "Control Panel Design",
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
           " Control Panel Components",
           " Power and Control Circuits",
            "Motor Starter Circuits",
           " Panel Layout Design",
            "Industrial Control Applications",
        ],
      },

      {
        id: 7,
        title: "Motor Control Systems",
        description:
          "",

        level: "Beginner–Intermediate",
        tag: "Hands-on Wiring",

        skills: [
          // "Transmitters",
          // "Flow Meters",
          // "Level Sensors",
          // "PID Control",
          // "Control Valves",
        ],

        topics: [
          "Three-Phase Motor Fundamentals",
          "DOL Starter",
          "Star-Delta Starter",
          "Forward-Reverse Control",
          "Motor Protection Techniques",
        ],
      },

      {
        id: 8,
        title: " Power Distribution System Design",
        description:
          "",

        level: "Intermediate",
        tag: "AutoCAD Overview",

        skills: [
          // "AutoCAD Basics",
          // "GA Drawings",
          // "Bus Bar Sizing",
          // "BOM",
          // "Panel Testing"
        ],

        topics: [
          "LT Distribution Systems",
          "Distribution Board Design",
          "Busbar Selection",
          "Transformer Distribution Concepts",
          "Industrial Power Distribution",

        ],
      },

      {
        id: 9,
        title: "Earthing & Lightning Protection",
        description:
          "",

        level: "Advanced",
        tag: "",

        skills: [
          // "TIA Portal",
          // "WinCC Integration",
          // "PROFINET",
          // "HMI Dev",
          // "Online Diagnostics",
        ],

        topics: [
          "Earthing System Design",
          "Grounding Methods",
          "Earthing Calculations",
          "Lightning Protection Systems",
          "Safety Standards",
        ],
      },
       {
        id: 10,
        title: "Electrical Estimation & BOQ",
        description:
          "",

        level: "Advanced",
        tag: "",

        skills: [
          // "TIA Portal",
          // "WinCC Integration",
          // "PROFINET",
          // "HMI Dev",
          // "Online Diagnostics",
        ],

        topics: [
          "Material Take-Off",
          "Bill of Quantity (BOQ) Preparation",
          "Cost Estimation Techniques",
          "Project Documentation",
          "Tender Basics",
        ],
      },
       {
        id: 11,
        title: " Industrial Electrical Design Projects",
        description:
          "",

        level: "Advanced",
        tag: "",

        skills: [
          // "TIA Portal",
          // "WinCC Integration",
          // "PROFINET",
          // "HMI Dev",
          // "Online Diagnostics",
        ],

        topics: [
          "Power Distribution Design",
          "Motor Control Circuit Design",
         " Control Panel Design Project",
         " Electrical Layout Preparation",
          "Industrial Case Studies",
        ],
      },
    ]
  },

  projects: {
    sectionTag: "Industrial Projects",

    title: "Real Systems You Will Build",

    description:
      "Every student implements complete automation projects — from wiring and programming to live commissioning — just like in real industry.",

    projects: [
      {
        icon: "Droplets",
        title: "Motor Control Center (MCC) Design",
        desc:
          "Pumping, filtration, dosing, and level control sequences with full SCADA monitoring and alarm management.",
        tech: "PLC • SCADA • HMI",
      },

      {
        icon: "Package",
        title: "PLC Control Panel Design",
        desc:
          "Conveyor-driven filling with reject logic, batch counters, and recipe-based HMI control.",
        tech: "PLC • HMI • SENSORS",
      },

      {
        icon: "MoveHorizontal",
        title: "VFD Control Panel Design",
        desc:
          "Multi-zone conveyor with product sorting, interlocking, and VFD speed control.",
        tech: "PLC • VFD • NETWORKING",
      },

      {
        icon: "Settings",
        title: "Power Distribution Panel Design",
        desc:
          "Servo-driven packaging with product detection, batch counting, and full alarm handling.",
        tech: "PLC • SERVO • HMI",
      },

      {
        icon: "TrafficCone",
        title: "Industrial Wiring Diagrams",
        desc:
          "PLC-based adaptive traffic management with HMI override and fault diagnostics.",
        tech: "PLC • HMI",
      },

      {
        icon: "BarChart3",
        title: "Electrical Schematic Development",
        desc:
          "PID-controlled level system with continuous trending, alarm logging, and data export.",
        tech: "PLC • SCADA • PID",
      },

      {
        icon: "Factory",
        title: "Cable Scheduling & Load Calculations",
        desc:
          "OEE monitoring and production data acquisition with SCADA dashboard on TIA Portal.",
        tech: "TIA PORTAL • SCADA",
      },

      {
        icon: "Cog",
        title: "Complete Industrial Electrical Documentation",
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
          "Students gain practical exposure through live design exercises and project-based learning. Training includes real-world industrial drawings, panel layouts, wiring diagrams, bill of materials (BOM), and complete electrical documentation used by industries.",
      },

      {
        title: "Industry-Recognized Certification",
        desc:
          "Validate your skills in PLC, SCADA, HMI, VFD, and Industrial Networking.",
      },

      {
        title: "Career Advancement Opportunities",
        desc:
          "Enhance employability and prepare for roles in manufacturing, process, and automation industries.",
      },

      {
        title: "Industry-Oriented Training",
        desc:
          "Our training programs are designed to replicate real industrial environments and workflows. Participants learn the technologies, tools, standards, and troubleshooting techniques commonly used in modern industries.",
      },
    ],
  },

  industryDemand: {
    badge: "Career Opportunities",

    title: "Industry Demand & Tools Covered",

    description:
      "Electrical Design Engineers are highly demanded across industries such as manufacturing, automation, power generation, EPC projects, oil & gas, infrastructure, and renewable energy. With the rapid growth of smart factories and industrial automation in 2026, skilled electrical design professionals are required to create efficient, safe, and compliant electrical systems.",

    industryTitle: "Industry Demand",

    toolsTitle: "Tools & Software Covered",

    jobRoles: [
      "Electrical Design Engineer",
      "Control Panel Design Engineer",
      "Electrical Draftsman",
      "EPLAN Design Engineer",
      "AutoCAD Electrical Engineer",
      "Project Design Engineer",
      "Industrial Automation Design Engineer",
      "Electrical Project Engineer",
    ],

    tools: [
      "EPLAN Electric P8",
      "AutoCAD Electrica",
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
        q: "Who can join this course?",
        a: "This course is suitable for B.Tech, B.E., Diploma, ITI students, fresh graduates, maintenance engineers, electrical engineers, instrumentation engineers, and working professionals who want to build or advance their careers in industrial automation.",
      },

      {
        q: "Do I need prior design experience?",
        a: "No. The course starts from fundamentals and gradually covers advanced industrial design concepts.",
      },

      {
        q: "Which software will I learn?",
        a: "You will learn EPLAN Electric P8, AutoCAD Electrical, SolidWorks Electrical, and other industry-relevant tools.",
      },

      {
        q: "Is this course practical?",
        a: "Yes. DIAC focuses on hands-on training through live projects, industrial case studies, and practical assignments.",
      },

      {
        q: "Will I get placement assistance?",
        a: "Yes. DIAC provides placement support, interview preparation, resume guidance, and career counseling.",
      },

      {
        q: "Will I receive a certificate?",
        a: "SYes. Students receive an industry-recognized certification after successful course completion. Content aligned with DIAC's industrial training approach and industry-focused curriculum.",
      },
    ],
  },
};