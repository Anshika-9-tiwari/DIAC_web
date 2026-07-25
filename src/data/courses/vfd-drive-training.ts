// data/courses/industrial-automation.ts

export const industrialAutomationCourse = {
  hero: {
    badge: "Job-Oriented VFD Drive Training",

    title: "VFD Drive Training with Hands-on Industrial Applications",

    icon: "/courses/automation.png",

    paragraph1:
      "Configure & Program Leading VFD Brands",
    paragraph2:
      "Real-Time Motor Control & Energy Optimization",
    paragraph3:
      "Industrial Fault Diagnosis & Commissioning Skills",
    paragraph4:
      "Career-Focused Training with Industry Certification",

    videoUrl:
      "https://www.youtube.com/embed/R4eJncL7bP8",

    syllabusPdf:
      "/downloads/industrial-automation-syllabus.pdf",
  },

  overview: {
    sectionTag: "Why Choose DIAC",

    title: "Job-Oriented VFD Drive Training",

    description:
      "17+ years of excellence in Industrial Automation Training, DIAC provides industry-oriented VFD Drive Training focused on practical learning and real-world applications. Students gain hands-on experience on live VFD systems, learn from experienced automation professionals, and work in modern automation labs. Our job-focused training, placement assistance, interview preparation, and industry-recognized certification help students build successful careers in the automation industry.",

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
      "Experience a Comprehensive 2-Module Program",

    description:
      "From relay fundamentals to TIA Portal — each module is structured for maximum hands-on practice aligned with industry workflows.",
      
    module: [
      {
        id: 1,
        title: "Introduction to Industrial Automation",
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
        title: " VFD & MOTION CONTROL",
        description:
          "Architecture, field device wiring, programming languages, advanced instructions, and communication with HMI/SCADA.",

        level: "Intermediate–Advanced",
        tag: "Hands on training",

        skills: [
          "Ladder Logic",
          "FBD",
          "Analog Scalling",
          "STEP 7",
          "TIA Portal",
          "Troubleshooting",
        ],

        topics: [
          "AC motors, operations & Limitations",
          "Starters: DOL, Star-Delta",
          "Motor control circuits & power circuit, interlocking circuits",
          " Introduction to AC drives & applications",
          " Criteria for drives selection",
          " Introduction to: Siemens SINAMICS G120",
          " Parameterization",
          "Designing of drive control panel",
          "  VFD integration with PLC",
          "Basics of Servo motors",
          "Applications of servo motors",
          " Servo tuning",
          "Real time application",
          "DC braking, Dynamic braking, Regenerative braking",
          "Communication with PLC & SCADA",
          "Soft starters & their advantages over conventional starters",
          " Fault finding / troubleshooting.",
        ],
      },
    ]
  },

  projects: {
    sectionTag: "Industrial Projects",

    title: "Real Systems You Will Build",

    description:
      "Students work on real-world automation projects to develop practical skills.",

    projects: [
      {
        icon: "Droplets",
        title: "Conveyor Belt Speed Control System",
        desc:
          "Control conveyor belt speed using PLC and VFD for smooth material handling and efficient production.",
        tech: "VFD • Drive • HMI",
      },

      {
        icon: "Package",
        title: "Pump Control Automation",
        desc:
          "Automate pump operations with level sensors, pressure monitoring, protection, alarms, and energy-efficient control systems.",
        tech: "PLC • VFD • SENSORS",
      },

      {
        icon: "MoveHorizontal",
        title: "HVAC Motor Control Application",
        desc:
          "Monitor and control HVAC motors for temperature regulation, airflow management, energy efficiency, and reliable operation.",
        tech: "PLC • VFD • NETWORKING",
      },

      {
        icon: "Settings",
        title: "Multi-Motor Synchronization Project",
        desc:
          "Synchronize multiple motors with precise speed control, load balancing, coordinated operation, and real-time performance monitoring.",
        tech: "PLC • SERVO • HMI",
      },

      {
        icon: "TrafficCone",
        title: "Energy Saving Automation System",
        desc:
          "Optimize equipment operation, reduce energy consumption, monitor power usage, and improve overall industrial efficiency automatically.",
        tech: "PLC • HMI • VFD",
      },

      {
        icon: "BarChart3",
        title: "Industrial Process Control Project",
        desc:
          "Automate industrial processes using PLC logic, sensors, actuators, alarms, and real-time monitoring for reliable performance.",
        tech: "PLC • SCADA • PID",
      },

      {
        icon: "Factory",
        title: "PLC & VFD Integrated Automation Project",
        desc:
          "Integrate PLC and VFD for intelligent motor control, speed regulation, automation, and industrial process optimization.",
        tech: "TIA PORTAL • VFD",
      },

      {
        icon: "Cog",
        title: "Industrial Troubleshooting Case Studies",
        desc:
          "Solve real industrial automation faults through practical troubleshooting, diagnostics, maintenance techniques, and hands-on case studies.",
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
          "Practical Training on Industrial VFD Drives • Motor Speed & Direction Control Applications • Parameter Configuration & Commissioning • Drive Installation & Wiring Practice • Industrial Troubleshooting Sessions • Real-Time Automation Demonstrations • Live Industrial Case Studies • Project-Based Learning Environment.",
      },

      {
        title: "Industry-Oriented Training",
        desc:
          "DIAC’s VFD Drive Training Program is designed to match real industrial requirements. Students learn drive selection, parameter configuration, motor control techniques, protection systems, communication integration, fault diagnostics, and industrial automation applications. The training prepares candidates for actual workplace challenges and automation projects.",
      },
    ],
  },

  industryDemand: {
    badge: "Career Opportunities",

    title: "Industry Demand & Tools Covered",

    description:
      "Variable Frequency Drives are widely used across industries for motor control, process automation, energy management, and machine automation. Skilled VFD professionals are in high demand in sectors such as manufacturing, power plants, HVAC, water treatment, pharmaceuticals, food processing, oil & gas, and industrial automation. Companies actively seek engineers and technicians with practical VFD programming and troubleshooting skills.",

    industryTitle: "Career Outcomes",

    toolsTitle: "Tools & Software Covered",

    jobRoles: [
      "VFD Engineer",
      "Automation Engineer",
      "Electrical Automation Engineer",
      "Maintenance Engineer",
      "Commissioning Engineer",
      "Service Engineer",
      "Control Panel Engineer",
      "PLC & Drive Engineer",
      "Industrial Automation Technician",
      "Project Engineer",
    ],

    tools: [
      "Variable Frequency Drives (VFD)",
      "AC & DC Motor Control Systems",
      "Industrial Control Panels",
      "PLC-VFD Communication Systems",
      "HMI Integration with VFD",
      "Industrial Sensors & Control Devices",
      "Industrial Networking Basics",
      "Automation Testing Equipment",
    ],
  },

  career: {
    sectionTag: "Career Outcomes",

    title: "Build Your Career in VFD Drive Training",

    description:
      "After completing the SCADA & HMI Training Course, students can pursue careers in industrial automation, manufacturing, process industries, and smart factory environments",

    opportunitiesTitle: "Career Opportunities",

    opportunities: [
      "VFD Engineer",
      "Automation Engineer",
      "Electrical Automation Engineer",
      "Maintenance Engineer",
      "Commissioning Engineer",
      "Service Engineer",
      "Control Panel Engineer",
      "PLC & Drive Engineer",
      "Industrial Automation Technician",
      "Project Engineer",
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
      q: "What is VFD Drive Training?",
      a: "VFD Drive Training teaches how to control motor speed, torque, and industrial processes using Variable Frequency Drives.",
    },

    {
      q: "Who can join this course?",
      a: "Diploma, B.Tech, B.E., ITI students, working professionals, maintenance engineers, and automation enthusiasts can enroll.",
    },

    {
      q: "Is practical training included?",
      a: "Yes. DIAC provides extensive hands-on practical training on industrial VFD systems and applications.",
    },

    {
      q: "Will I receive a certificate?",
      a: "Yes. Candidates receive a DIAC certification upon successful completion of the training program.",
    },

    {
      q: "Are placement assistance services available?",
      a: "Yes. DIAC provides placement assistance, interview preparation, and career guidance support.",
    },

    {
      q: "What industries use VFD drives?",
      a: "VFDs are widely used in manufacturing, power plants, HVAC systems, water treatment, pharmaceuticals, food processing, and industrial automation sectors.",
    },

    {
      q: "Do I need prior automation knowledge?",
      a: "No. The course starts from fundamentals and gradually covers advanced industrial applications.",
    },
  ],
},
};                                              