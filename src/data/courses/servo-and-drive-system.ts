// data/courses/industrial-automation.ts

export const industrialAutomationCourse = {
  hero: {
    badge: "Job-Oriented Servo Motors & Drive Systems Program",

    title: "Master Industrial Servo Motors & Drive Systems with Practical Training",

    icon: "/courses/automation.png",

    paragraph1:
      "Servo motors and drive systems play a vital role in modern industrial automation by providing high-speed, accurate, and precise motion control. They are widely used in CNC machines, robotics, packaging machines, printing machines, textile machinery, semiconductor manufacturing, and automated production lines.",

    paragraph2:
      "Our Servo & Drive Systems Training is designed to provide comprehensive knowledge of servo motor technology, servo drive configuration, motion control, industrial communication, troubleshooting, and system commissioning. The course emphasizes practical learning using real industrial servo systems and live automation applications.",

    videoUrl:
      "https://www.youtube.com/embed/R4eJncL7bP8",

    syllabusPdf:
      "/downloads/industrial-automation-syllabus.pdf",
  },

  overview: {
    sectionTag: "Why Choose DIAC",

    title: "Job-Oriented Servo Motors & Drive Systems Training",

    description:
      "DIAC is committed to delivering industry-relevant training that bridges the gap between academic knowledge and practical industrial requirements. With 17+ Years of Industrial Automation Training Experience, our training methodology focuses on real hardware exposure, project-based learning, and expert mentorship to ensure students become job-ready professionals.",

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
      "Industries Hiring Servo Professionals",

    industries: [
      "Industrial Automation Companies",
      "CNC Machine Manufacturers",
      "Robotics & Automation Companies",
      "Packaging Industries",
     " Automotive Manufacturing",
      "Pharmaceutical Industries",
      "Food & Beverage Plants",
     " Textile Industries",
      "Printing & Paper Industries",
      "Semiconductor Manufacturing",
      "Machine Builders (OEMs)",
      "Steel & Metal Industries",
      "Renewable Energy Projects",
      "Material Handling & Conveyor Industries",
    ],
  },

  curriculum:{
    sectionTag: "Full Curriculum",

    title:
      "Experience a Comprehensive 8-Module Program",

    description:
      "This is a Multi-Vendor Servo & Drive Systems Training program. The servo drive brands and software covered may vary depending on the selected course module, laboratory setup, project requirements, and industry demand. Not all servo drive brands are included in every training batch. The curriculum is customized to provide the most relevant industrial training for students and corporate professionals.",
      
    module: [
      {
        id: 1,
        title: "Servo System Fundamentals",
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
          "Basics of Servo Motors",
          "AC & DC Servo Motors",
          "Servo Drive Architecture",
          "Types of Servo Systems",
          "Applications of Servo Technology",
        ],
      },

      {
        id: 2,
        title: "Servo Motor Components",
        description:
          "",

        level: "Intermediate–Advanced",
        tag: "hands on learning",

        skills: [
          // "Ladder Logic",
          // "FBD",
          // "Analog Scalling",
          // "STEP 7",
          // "TIA Portal",
          // "Troubleshooting",
        ],

        topics: [
          "Servo Motor Construction",
          "Encoders",
          "Feedback Devices",
         " Power Supply",
          "Braking Systems",
          "Servo Cables & Connectors",
        ],
      },

      {
        id: 3,
        title: "Servo Drive Programming & Configuration",
        description:
          "",

        level: "Intermediate",
        tag: "",

        skills: [
          // "WinCC HMI",
          // "Tag Management",
          // "Recipes",
          // "Alarm Config",
          // "Trends",
        ],

        topics: [
          "Drive Initialization",
          "Parameter Configuration",
          "Position Control",
          "Speed Control",
          "Torque Control",
          "Electronic Gear",
          "Homing Functions",
          "Motion Profiles",
        ],
      },

      {
        id: 4,
        title: "PLC Integration",
        description:
          "",

        level: "Intermediate-Advanced",
        tag: "",

        skills: [
          // "WinCC SCADA",
          // "Alarm Logging",
          // "Data Historian",
          // "Scripting",
          // "Multi-screen",
        ],

        topics: [
          "PLC & Servo Communication",
         " Motion Commands",
          "Positioning Applications",
          "Multi-Axis Control",
          "PLC-Based Motion Control",
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
            "Profinet",
            "Profibus",
            "EtherCAT",
            "Ethernet/IP",
            "CANopen",
        ],
      },

     {
        id: 6,
        title: "Commissioning & Troubleshooting",
        description:
          "",

        level: "Intermediate–Advanced",
        tag: "",

        skills: [
         
        ],

        topics: [
          "Servo Drive Commissioning",
          "Auto Tuning",
          "Manual Tuning",
          "Alarm Diagnosis",
          "Fault Codes",
          "Preventive Maintenance",
        ],
      },

      {
        id: 7,
        title: "Industrial Applications",
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
          "Pick & Place Systems",
          "Conveyor Positioning",
          "CNC Motion Control",
          "Packaging Machines",
          "Indexing Systems",
          "Robotic Motion Control",
        ],
      },

      {
        id: 8,
        title: "Live Industrial Projects",
        description:
          "",

        level: "Intermediate",
        tag: "",

        skills: [
          // "AutoCAD Basics",
          // "GA Drawings",
          // "Bus Bar Sizing",
          // "BOM",
          // "Panel Testing"
        ],

        topics: [
         " Conveyor Servo Control",
          "Rotary Index Table",
          "Flying Shear System",
          "Pick & Place Automation",
          "Packaging Machine Motion Control",
          "Multi-Axis Motion System",
        ],
      },
    ]
  },

  projects: {
    sectionTag: "Industrial Projects",

    title: "Real Systems You Will Build",

    description:
      "Students complete practical industrial projects such as: ",

    projects: [
      {
        icon: "Droplets",
        title: "Conveyor Position Control",
        desc:
          "Pumping, filtration, dosing, and level control sequences with full SCADA monitoring and alarm management.",
        tech: "PLC • SCADA • HMI",
      },

      {
        icon: "Package",
        title: "Pick & Place Automation",
        desc:
          "Conveyor-driven filling with reject logic, batch counters, and recipe-based HMI control.",
        tech: "PLC • HMI • SENSORS",
      },

      {
        icon: "MoveHorizontal",
        title: "Packaging Machine Servo Control",
        desc:
          "Multi-zone conveyor with product sorting, interlocking, and VFD speed control.",
        tech: "PLC • VFD • NETWORKING",
      },

      {
        icon: "Settings",
        title: "Rotary Table Automation",
        desc:
          "Servo-driven packaging with product detection, batch counting, and full alarm handling.",
        tech: "PLC • SERVO • HMI",
      },

      {
        icon: "TrafficCone",
        title: "CNC Axis Control",
        desc:
          "PLC-based adaptive traffic management with HMI override and fault diagnostics.",
        tech: "PLC • HMI",
      },

      {
        icon: "BarChart3",
        title: "Robotic Motion Control",
        desc:
          "PID-controlled level system with continuous trending, alarm logging, and data export.",
        tech: "PLC • SCADA • PID",
      },

      {
        icon: "Factory",
        title: "Flying Shear Application",
        desc:
          "OEE monitoring and production data acquisition with SCADA dashboard on TIA Portal.",
        tech: "TIA PORTAL • SCADA",
      },

      {
        icon: "Cog",
        title: "Material Handling Automation",
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
          "Students receive practical experience through:  • Servo Drive Configuration • Parameter Setting • Motion Control Applications • Position & Speed Control • PLC-Servo Integration • Encoder Configuration • Industrial Wiring Practice • Fault Finding • Live Industrial Projects • Real Hardware Demonstrations ",
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
          "The course follows current industrial standards and focuses on practical applications used in manufacturing environments. Students gain hands-on knowledge of:  • Servo Drive Configuration  •  Servo Parameter Optimization  •  Motion Control Programming • Industrial Wiring  PLC Integration  •  Industrial Communication Networks  •  System Commissioning  •  Fault Diagnosis & Troubleshooting",
      },
    ],
  },

  industryDemand: {
    badge: "Career Opportunities",

    title: "Industry Demand & Tools Covered",

    description:
      "Industrial Automation is one of the fastest-growing sectors worldwide. Industries are rapidly adopting smart manufacturing, Industry 4.0, process automation, and digital transformation technologies, creating strong demand for skilled automation professionals.",

    industryTitle: "Career Opportunity",

    toolsTitle: "Tools & Software Covered",

    jobRoles: [
      "Configure industrial servo drives",
      "Program motion control applications",
      "Integrate servo systems with PLCs",
      "Commission servo-driven machines",
      "Optimize positioning accuracy",
     " Troubleshoot servo drive faults",
      "Execute industrial motion control projects",
      "Work confidently in automation robotics, CNC, and machine manufacturing industries",
      "Servo Drive Engineer",
     " Motion Control Engineer",
      "Automation Engineer",
      "Electrical Automation Engineer",
      "Commissioning Engineer",

    ],
    tools: [
      "Siemens SINAMICS Servo Drives",
     " Siemens TIA Portal Motion Control",
      "Mitsubishi MR Configurator",
     " Mitsubishi GX Works",
      "Delta ASDA Soft",
      "Delta ISPSoft",
      "Allen-Bradley Studio 5000",
      "Schneider EcoStruxure Machine Expert",
      "Omron CX-One",
      "Yaskawa SigmaWin+",
      "Panasonic PANATERM",
      "Beckhoff TwinCAT (Introduction)"
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
      q: "What is Servo & Drive Systems Training?",
      a: "This course teaches the installation, configuration, programming, commissioning, and troubleshooting of industrial servo motors and drive systems used in modern automation.",
    },

    {
      q: "Is this course suitable for beginners?",
      a: "Yes. The course starts with the fundamentals before progressing to advanced motion control applications.",
    },

    {
      q: "Will I learn PLC integration?",
      a: "Yes. Students learn how to integrate servo drives with PLCs for industrial automation.",
    },

    {
      q: "Will I work on live industrial projects?",
      a: "Yes. Practical projects and real hardware demonstrations are an integral part of the training.",
    },

    {
      q: "Which software will I learn?",
      a: "Training includes leading servo software and motion control platforms from major industrial automation vendors, depending on the training module.",
    },

    {
      q: "Is placement assistance available?",
      a: "Yes. We provide resume building, interview preparation, and placement assistance to help students start or advance their careers.",
    },

    {
      q: "Which servo drive brands are covered?",
      a: "Training may include Siemens, Mitsubishi, Delta, Yaskawa, Omron, Schneider Electric, Panasonic, Allen-Bradley, and other industrial brands based on batch requirements and available hardware.",
    },
  ],
},
};