// data/courses/industrial-automation.ts

export const industrialAutomationCourse = {
  hero: {
    badge: "Job-Oriented Industrial Training Program",

    title: "Industrial Automation Training",

    icon: "/courses/automation.png",

    paragraph1:
      "Industrial Automation Training Program at DIAC is designed to equip students, working professionals, and corporate teams with the practical skills required in today's automated industries. This comprehensive program covers Relay Logic Control (RLC), PLC Programming, HMI, SCADA, Industrial Networking, VFD & Motion Control, Process Instrumentation, Panel Designing, and Siemens TIA Portal.",

    paragraph2:
      "Through a combination of classroom learning, hands-on laboratory sessions, and real-world industrial projects, participants gain the knowledge and confidence to work on modern automation systems used across manufacturing, process, power, automotive, pharmaceutical, and infrastructure industries.",

    videoUrl:
      "https://www.youtube.com/embed/R4eJncL7bP8",

    syllabusPdf:
      "/downloads/industrial-automation-syllabus.pdf",
  },

  overview: {
    sectionTag: "Why Choose DIAC",

    title: "Job-Oriented Industrial Automation Training",

    description:
      "DIAC is committed to delivering industry-relevant training that bridges the gap between academic knowledge and practical industrial requirements. With 17+ Years of Industrial Automation Training Experience, our training methodology focuses on real hardware exposure, project-based learning, and expert mentorship to ensure students become job-ready professionals.",

    cards: [
      {
        icon: "RefreshCw",
        title: "Learn Until You're Placed",
        description:
          "Continuous support until you land your target automation role — repeat sessions, mock interviews, and referrals included.",
        iconBg: "bg-blue-50",
        iconColor: "text-blue-600",
      },

      {
        icon: "Factory",
        title: "10+ Real Industrial Projects",
        description:
          "Build water treatment plants, conveyor systems, bottle filling lines, and packaging machines from scratch.",
        iconBg: "bg-orange-50",
        iconColor: "text-orange-600",
      },

      {
        icon: "Zap",
        title: "Real Hardware Practice",
        description:
          "Hands-on with Siemens S7-1200/S7-1500, TIA Portal, SINAMICS VFDs, live panels, and industrial networking equipment.",
        iconBg: "bg-green-50",
        iconColor: "text-green-600",
      },

      {
        icon: "Target",
        title: "Personalised Mentorship",
        description:
          "1:1 guidance from trainers with real industrial backgrounds in manufacturing, power, pharma, and process industries.",
        iconBg: "bg-purple-50",
        iconColor: "text-purple-600",
      },

      {
        icon: "ClipboardList",
        title: "Interview Preparation",
        description:
          "Technical mock interviews, resume building, and unlimited practice sessions until you clear your target company's hiring process.",
        iconBg: "bg-amber-50",
        iconColor: "text-amber-600",
      },

      {
        icon: "CalendarDays",
        title: "Flexible Batch Schedules",
        description:
          "Weekday, weekend, and evening batches available — so your upskilling doesn't interrupt your current commitments.",
        iconBg: "bg-cyan-50",
        iconColor: "text-cyan-600",
      },
    ],

    industriesTitle:
      "Industries Hiring Automation Professionals",

    industries: [
      "Manufacturing",
      "Automotive",
      "Oil & Gas",
      "Pharmaceuticals",
      "Food & Beverage",
      "Power Plants",
      "Infrastructure",
      "Water Treatment Plants",
      "Chemical Industries",
      "Smart Manufacturing Facilities",
    ],
  },

  curriculum:{
    sectionTag: "Full Curriculum",

    title:
      "Experience a Comprehensive 9-Module Program",

    description:
      "From relay fundamentals to TIA Portal — each module is structured for maximum hands-on practice aligned with industry workflows.",
      
    module: [
      {
        id: 1,
        title: "Relay Logic Control",
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
          "What is Control Logic",
          "Hardwired vs PLC Control",
          "Relay Logic Applications",
          "Voltage, Current & Power",
          "AC vs DC Basics",
          "Control vs Power Circuits",
          "Seal-in Circuits",
          "Interlocking Systems",
          "DOL Starter",
          "Star Delta Starter",
          "Forward Control Circuit",
          "Safety Practices",
          "Timers & Control Relays",
          "Control Panel Design",
          "Fault Diagnosis",
          "Industrial Applications",
        ],
      },

      {
        id: 2,
        title: "PLC Programming",
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
          "Digital Electronics Basics",
          "Architectural Evolution of PLC",
          "Introduction to the field devices attached to PLC",
          "PLC Fundamentals",
          "PLC Hardware & Architecture",
          "Source & Sink Concepts",
          "Wiring Different field Devices to PLC",
          "Concept of flags and Scan cycle execution",
          "Introduction to PLC Programming software",
          "Creating new application, addressing",
          "Programming Languages",
          "Programming instructions, arithmetic and logical",
          "Upload / Download / Monitoring/ Simulation",
          "Compare / Add / Sub /And /Or – Blocks",
          "Timer and Counter Blocks programming",
          "Positive edge / Negative edge instructions",
          "SHIFT, ROTATE, MOVE block application",
          "Scaling for Analog signals",
          "Advanced instructions",
          "Program structuring and its implementation with the STEP 7 block types (OB, FC, FB, DB)",
          "Set /reset / set bit field / reset bit field/ SR, RS flip flops",
          "Advance Instructions",
          "Password protection",
          "Web server",
          "Forcing of Inputs and Outputs.",
          "Back up of the programs and retrieving.",
          "PLC to PLC communication",
          "PLC to HMI communication",
          "Fault finding / troubleshooting & documentation",
          "Hands on experience on real time applications",
          "Various Communication protocols."

        ],
      },

      {
        id: 3,
        title: "HMI Development",
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
          "Getting started with HMI",
          "Creating applications, creating Internal / External tags",
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
        id: 4,
        title: "SCADA Systems",
        description:
          "Supervisory architecture, graphic displays, historical data, alarm logging, scripts, and PLC connectivity.",

        level: "Intermediate-Advanced",
        tag: "WinCC SCADA",

        skills: [
          "WinCC SCADA",
          "Alarm Logging",
          "Data Historian",
          "Scripting",
          "Multi-screen",
        ],

        topics: [
          "Introduction to SCADA Software",
          "SCADA Architecture Design",
          "Creating new SCADA project",
          "Creating & Accessing Real-time",
          "Creating & editing elementary graphic display",
          "Sizing, Movement, Blinking, Visibility, Filling",
          "Attaching controls to graphic objects",
          "Multi-screen navigation",
          "Creating & Accessing Historical Trends",
          "Using alarms & events",
          "Alarm logging and history",
          "Application of scripts",
          "Communication with PLC",
          "Communication with excel",
          "User roles and permissions-based login/ logout",
          "Industrial Projects (Hands-on)",
          "Fault finding / troubleshooting",
        ],
      },

      {
        id: 5,
        title: "PLC Networking",
        description:
          "Serial and Ethernet protocols, OSI model, topologies, remote I/O, and industrial communication standards.",

        level: "Intermediate-Advanced",
        tag: "PROFINET·MODBUS",

        skills: [
          "PROFINET",
          "MODBUS",
          "RS485",
          "Remote I/O",
          "Network Diagnostics"
        ],

        topics: [
            "Basics of Industrial Networking",
            "Different types of Networking Architecture.",
            "Importance of networking in automation",
            "Introduction to Industrial networking",
            "Basic network knowledge, supported by demonstrations and practical assignments.",
            "Data communication and networking used in plants",
            "Different Network Topologies & their importance",
            "Serial connections: RS232/RS422/RS485",
            "MODBUS RTU, MODBUS TCP/IP, PROFINET, PROFIBUS, PROFIDRIVE, MPI",
            "Sensor and Control-level Networks",
            "Introduction to network equipment, Routing, Switching",
            "OSI model",
            "Available networks (Master/Slave, Client/Server and producer/Consumer)",
            "Communication relations (Point to Point, Multicast and Broadcast)",
            "Transmission media (Cables, Wireless)",
            "Network Standards",
            "Transmission medium",
            "Physical characteristics and installation details",
            "Data link functions",
            "Addressing & hands on experience.",
            "Master Slave Mode",
            "Remote I/O System",
            "Sharing / Accessing Data on network",
            "Common symptoms, problems and solutions",
            "How to quickly identify likely causes",
            "Communications issues",

        ],
      },

     {
        id: 6,
        title: "VFD & Motion Control",
        description:
          "AC drives, SINAMICS G120 parameterisation, servo motors, braking methods, and VFD-PLC integration.",

        level: "Intermediate–Advanced",
        tag: "SINAMICS G120",

        skills: [
          "SINAMICS",
          "Drive Parameterisation",
          "Servo Tuning",
          "VFD Panel",
          "Braking Methods",
        ],

        topics: [
          "AC motors, operations & Limitations",
          "Starters: DOL, Star-Delta",
          "Motor control circuits & power circuit, interlocking circuits",
          "Introduction to AC drives & applications",
          "Criteria for drives selection",
          "Introduction to: Siemens SINAMICS G120",
          "Parameterization",
          "Designing of drive control panel",
          "VFD integration with PLC",
          "Basics of Servo motors",
          "Applications of servo motors",
          "Servo tuning",
          "Real time application",
          "DC braking, Dynamic braking, Regenerative braking",
          "Communication with PLC & SCADA.",
          "Soft starters & their advantages over conventional starters",
          "Fault finding / troubleshooting.",
        ],
      },

      {
        id: 7,
        title: "Process Instrumentation",
        description:
          "Industrial sensors, transmitters, measurement principles, and closed-loop process control fundamentals.",

        level: "Beginner–Intermediate",
        tag: "Hands-on Wiring",

        skills: [
          "Transmitters",
          "Flow Meters",
          "Level Sensors",
          "PID Control",
          "Control Valves",
        ],

        topics: [
          "Basic control systems",
          "Various transmitters / sensors used in industrial applications",
          "Photo electric, proximity sensor, encoder)",
          "working principle, types selection criterion",
          "Flow measurement, working principle, types, selection criterion",
          "Pressure measurement, working principle, types, selection criterion",
          "Level measurement, working principle, types, selection criterion",
          "Solenoid valves, control valves, smart transmitters",
          "Load measurement, load cells",
          "Instrument transformers (CT, PT)",
          "Process control basics, closed & open loop control",
          "Closed and open loop system",
        ],
      },

      {
        id: 8,
        title: "Panel Designing",
        description:
          "Switchgear selection, power and control drawings, load management, bus-bar sizing, and BOM preparation.",

        level: "Intermediate",
        tag: "AutoCAD Overview",

        skills: [
          "AutoCAD Basics",
          "GA Drawings",
          "Bus Bar Sizing",
          "BOM",
          "Panel Testing"
        ],

        topics: [
          "Introduction to Panel Designing Software",
          "Introduction to symbols used for Switchgear",
          "Selection of Switchgears",
          "Basics of Control & Power Drawings",
          "Load Management (connected load, running load, load factor)",
          "Indications (Ammeters, Voltmeters, PF & KW meters)",
          "Preparation of General Arrangement Drawing, Bus Bar sizing",
          "Preparation of power & control circuits",
          "Testing - Offline / Online testing of panels",
          "BOM preparation",
        ],
      },

      {
        id: 9,
        title: "Siemens TIA Portal",
        description:
          "Unified PLC–HMI–SCADA–Network integration on TIA Portal with online diagnostics and real project commissioning.",

        level: "Advanced",
        tag: "S7-1200 / S7-1500",

        skills: [
          "TIA Portal",
          "WinCC Integration",
          "PROFINET",
          "HMI Dev",
          "Online Diagnostics",
        ],

        topics: [
          "Introduction to TIA Portal",
          "PLC hardware configuration and programming (LAD/FBD)",
          "PLC tag creation, download, and monitoring",
          "HMI screen development and device communication",
          "SCADA development using SIMATIC WinCC",
          "Alarm, trend, and data logging configuration",
          "PROFINET and industrial network setup",
          "PLC-HMI-SCADA integration",
          "Online diagnostics and troubleshooting",
        ],
      }
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
        title: "Water Treatment Plant",
        desc:
          "Pumping, filtration, dosing, and level control sequences with full SCADA monitoring and alarm management.",
        tech: "PLC • SCADA • HMI",
      },

      {
        icon: "Package",
        title: "Bottle Filling Plant",
        desc:
          "Conveyor-driven filling with reject logic, batch counters, and recipe-based HMI control.",
        tech: "PLC • HMI • SENSORS",
      },

      {
        icon: "MoveHorizontal",
        title: "Conveyor Automation",
        desc:
          "Multi-zone conveyor with product sorting, interlocking, and VFD speed control.",
        tech: "PLC • VFD • NETWORKING",
      },

      {
        icon: "Settings",
        title: "Packaging Machine",
        desc:
          "Servo-driven packaging with product detection, batch counting, and full alarm handling.",
        tech: "PLC • SERVO • HMI",
      },

      {
        icon: "TrafficCone",
        title: "Traffic Light Control",
        desc:
          "PLC-based adaptive traffic management with HMI override and fault diagnostics.",
        tech: "PLC • HMI",
      },

      {
        icon: "BarChart3",
        title: "Tank Level Monitoring",
        desc:
          "PID-controlled level system with continuous trending, alarm logging, and data export.",
        tech: "PLC • SCADA • PID",
      },

      {
        icon: "Factory",
        title: "Smart Factory App",
        desc:
          "OEE monitoring and production data acquisition with SCADA dashboard on TIA Portal.",
        tech: "TIA PORTAL • SCADA",
      },

      {
        icon: "Cog",
        title: "Process Automation",
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
          "Gain real-world experience through live projects and industrial automation applications.",
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
      "Industrial Automation is one of the fastest-growing sectors worldwide. Industries are rapidly adopting smart manufacturing, Industry 4.0, process automation, and digital transformation technologies, creating strong demand for skilled automation professionals.",

    industryTitle: "Industry Demand",

    toolsTitle: "Tools & Software Covered",

    jobRoles: [
      "Automation Engineer",
      "Instrumentation Engineer",
      "Maintenance Engineer",
      "Commissioning Engineer",
      "PLC Programmer",
      "Service Engineer",
      "Project Engineer",
      "SCADA Engineer",
      "HMI Developer",
      "Control Panel Designer",
    ],

    tools: [
      "Siemens TIA Portal",
      "S7-1200 / S7-1500 PLC",
      "WinCC HMI",
      "WinCC SCADA",
      "Factory I/O",
      "SINAMICS VFD",
      "Industrial Networking",
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
        q: "Who can enroll in the Industrial Automation Training Program?",
        a: "This course is suitable for B.Tech, B.E., Diploma, ITI students, fresh graduates, maintenance engineers, electrical engineers, instrumentation engineers, and working professionals who want to build or advance their careers in industrial automation.",
      },

      {
        q: "What technologies are covered in this course?",
        a: "The program covers Relay Logic Control (RLC), PLC Programming, HMI, SCADA, Industrial Networking, VFD & Motion Control, Process Instrumentation, Panel Designing, AutoCAD, and Siemens TIA Portal with hands-on practical training.",
      },

      {
        q: "Is the training practical or theory-based?",
        a: "DIAC focuses heavily on practical learning. Students work on real PLCs, HMIs, SCADA systems, industrial panels, sensors, VFDs, communication networks, and live industrial projects to gain real-world experience.",
      },

      {
        q: "Will I receive a certificate after completing the course?",
        a: "Yes. Upon successful completion of the training program, students receive an Industry-Oriented Training Certificate from DIAC along with project-based practical exposure that strengthens their professional profile.",
      },

      {
        q: "Does DIAC provide placement assistance?",
        a: "Yes. DIAC provides placement assistance through resume building, interview preparation, technical mock interviews, career counseling, job referrals, and industry connections to help students secure opportunities in industrial automation.",
      },

      {
        q: "What job opportunities are available after completing the course?",
        a: "Students can pursue careers as PLC Programmers, SCADA Engineers, Automation Engineers, Maintenance Engineers, Electrical Design Engineers, Control Panel Engineers, Service Engineers, and Industrial Automation Specialists across multiple industries.",
      },
    ],
  },
};