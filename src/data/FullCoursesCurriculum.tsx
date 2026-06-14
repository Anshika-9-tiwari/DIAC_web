// curriculum-data.ts
export const modules = [
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
 },

];