import { desc } from "framer-motion/client";

export const personalInfo = {
  name: "Gabriel Ganeles",
  location: "Haifa, Israel",
  email: "gabriel.ganeles@gmail.com",
  github: "https://github.com/gganeles",
  linkedin: "https://linkedin.com/in/gganeles",
  profilePicture: "/profile.jpg",
  heroDescription:
    "I am a fourth year Biomedical Engineering Student at Technion - Israel Institute of Technology. I'm passionate about software, mechanical, electrical and biomedical engineering and I strive to use my wide range of experience to create innovative hardware and software solutions. I'm excited to collaborate on novel and creative projects.",
};

export const workExperience = [ 
  {
    company: "Technion BioMotion Lab",
    location: "Haifa, IL",
    position: "Software Engineer (Final Project for Degree)",
    period: "Sep 2024 - Present",
    achievements: [
      "Developed software to assist the coach of the Israeli Olympic windsurfing team in efficiently reviewing athlete footage",
      "Created an algorithm for real-time video-based horizon line detection",
      "Automated identification and stitching of pumping sequences in windsurfing footage using Python"
    ]
  },
  {
    company: "Formula Technion",
    location: "Haifa, IL",
    position: "Electrical Engineer",
    period: "Aug 2023 - Present",
    achievements: [
      "Implemented a CAN network to transmit data to the autonomous control unit of a Technion Formula electric car",
      "Designed and built PCBs for sensor data acquisition and communication with the main processor",
      "Engineered a low-cost multiplexing circuit enabling concurrent sensor readings from a single PCB",
      "Coded the team’s public-facing website, improving visibility and outreach, attracting over 3k monthly visitors"
    ]
  },
  {
    company: "Technion’s Experimental Particle Physics Group",
    location: "Haifa, IL",
    position: "Student Researcher",
    period: "Sep 2023 - Jul 2024",
    achievements: [
      "Developed an algorithm to optimize detector overlap region selection for improved accuracy in CERN’s muon detector",
      "Simulated muon interactions within ATLAS to study detector activation patterns"
    ]
  },
  {
    company: "Flinker Lab at NYU Langone",
    location: "New York City, NY",
    position: "Intern",
    period: "Aug 2023 - Sep 2023",
    achievements: [
      "Extracted features from the sEEG data of 50 patients to train an EEG-to-speech neural network (MATLAB)",
      "Converted medical images (MRI and CT) into 3D brain surfaces to map electrode placements into brain regions"
    ]
  },
  {
    company: "Technion Rocketry Club",
    location: "Haifa, IL",
    position: "Mechanical Engineer",
    period: "Sep 2022 - Jul 2023",
    achievements: [
      "Created a spring-based 3D printed parachute launcher for a hybrid solid-gas model rocket",
      "Collaborated with propulsion and avionics teams to develop the rocket’s structural body"
    ]
  },
  {
    company: "Technion Automated Robotics Lab",
    location: "Haifa, IL",
    position: "Robotics Engineer",
    period: "Jan 2021 - Jul 2023",
    achievements: [
      "Built a 3D printed robotic gripper for reliable handling of salmon fillets",
      "Programmed an Arduino Nano in C++ to control motors and driver circuits"
    ]
  }
]

export const education = [
  {
    institution: "Lorem Ipsum University",
    location: "Lorem City",
    degree: "BSc Lorem Ipsum",
    period: "2015 - 2019",
    achievements: [
      "President of Lorem Ipsum Club",
      "Organized multiple lorem events",
      "Represented university in national competitions.",
      "Graduated with honors.",
    ],
  },
];
export const skills = [
  {
    category: "Programming Languages",
    skills: [
      "C",
      "C++",
      "Python",
      "MATLAB",
      "TypeScript",
      "Linux"
    ]
  },
  {
    category: "Web Development",
    skills: [
      "HTML",
      "CSS",
      "React",
      "Svelte",
      "Tailwind",
      "Node.js",
      "Flask",
      "Firebase Realtime Database"

    ]
  },
  {
    category: "3D Modeling",
    skills: [
      "Creo",
      "SOLIDWORKS",
      "Onshape",
      "Blender",
      "Rhino",
      "Grasshopper"
    ]
  },
  {
    category: "Electronic Design Automation",
    skills: [
      "KiCad",
      "Altium",
      "LTSpice"
    ]
  }
];




export const projects = [
  {
    title: "CERN ATLAS' New Small Wheel Julia Trigger",
    github: "https://cds.cern.ch/record/1958265/files/nppp273-1160.pdf",
    description: [
      "Developed an algorithm to optimize detector overlap region selection for improved accuracy in CERN’s muon detector.",
      "Simulated muon interactions within ATLAS to study detector activation patterns.",
    ],
  },
  {
    title: "Dolor Sit Amet App",
    github: "https://github.com/loremipsum/dolorapp",
    description: [
      "Morbi in sem quis dui placerat ornare.",
      "Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam.",
      "Praesent dapibus, neque id cursus faucibus.",
      "Fusce feugiat malesuada odio.",
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
    ],
  },
];

export const awards = [
  {
    name: "Technion Bio-Hack Hackathon",
    issuer: "Technion Faculty of Biomedical Engineering",
    date: "April 2025",
    position: "First Place",
    desc: "Proposed a device to assist in the rapid prevention of cutaneous infection."
  },
  {
    name: "Nucleate Bio-Fense Hackathon",
    issuer: 'Nucleate | DDR&D (מפא"ת) | Teva',
    date: "April 2025",
    position: "First Place",
    desc: "Developed a novel solution to combat-based neck injuries."
  },
];
