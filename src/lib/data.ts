export const personalInfo = {
    name: "Gabriel Ganeles",
    currentRoles: [
        "Biomedical Engineering Student at Technion",
        "Software Engineer",
    ],
    location: "Haifa, Israel",
    email: "gabriel.ganeles@gmail.com",
    github: "https://github.com/gganeles",
    linkedin: "https://linkedin.com/in/gganeles",
    whatsapp: "https://wa.me/972587120601",
    profilePicture: "/profile.webp",
    heroDescription:
        "I am a fourth year Biomedical Engineering Student at Technion - Israel Institute of Technology. I'm passionate about software, mechanical, electrical and biomedical engineering and I strive to use my wide range of experience to create innovative hardware and software solutions. I'm excited to collaborate on novel and creative projects.",
};

export const workExperience = [
    {
        company: "Formula Technion",
        location: "Haifa, IL",
        position: "Autonomous Team Co-Lead",
        period: "Aug 2023 - Present",
        achievements: [
            "Co-led a 14-member team to design and implement the autonomous systems for a Formula-style race car",
            "Implemented a CAN network to transmit data to the autonomous control unit of a Technion Formula electric car",
            "Designed and built PCBs for sensor data acquisition and communication with the main processor",
            "Engineered a low-cost multiplexing circuit enabling concurrent sensor readings from a single PCB",
            "Coded the team’s public-facing website, improving visibility and outreach, attracting over 3k monthly visitors",
        ],
    },
    {
        company: "Technion BioMotion Lab (Final Project for Degree)",
        location: "Haifa, IL",
        position: "Software Engineer",
        period: "Sep 2024 - Present",
        achievements: [
            "Developed software to assist the coach of the Israeli Olympic windsurfing team in efficiently reviewing athlete footage",
            "Designed a graphical user interface (GUI) to enhance the accessibility of the algorithm",
            "Automated identification and stitching of maneuvers in windsurfing video footage using C++",
        ],
    },
    {
        company: "Technion’s Experimental Particle Physics Group",
        location: "Haifa, IL",
        position: "Student Researcher",
        period: "Sep 2023 - Jul 2024",
        achievements: [
            "Developed an algorithm to optimize detector overlap region selection for improved accuracy in Large Hadron Collider's muon detector",
            "Simulated muon interactions within ATLAS to study detector activation patterns",
        ],
    },
    {
        company: "Flinker Lab at NYU Langone",
        location: "New York City, NY",
        position: "Intern",
        period: "Aug 2023 - Sep 2023",
        achievements: [
            "Extracted features from the sEEG data of 50 patients to train an EEG-to-speech neural network (MATLAB)",
            "Converted medical images (MRI and CT) into 3D brain surfaces to map electrode placements into brain regions",
        ],
    },
    {
        company: "Technion Rocketry Club",
        location: "Haifa, IL",
        position: "Mechanical Engineer",
        period: "Sep 2022 - Jul 2023",
        achievements: [
            "Created a spring-based 3D printed parachute launcher for a hybrid solid-gas model rocket",
            "Collaborated with propulsion and avionics teams to develop the rocket’s structural body",
        ],
    },
    {
        company: "Technion Automated Robotics Lab",
        location: "Haifa, IL",
        position: "Robotics Engineer",
        period: "Jan 2021 - Jul 2023",
        achievements: [
            "Built a 3D printed robotic gripper for reliable handling of salmon fillets",
            "Programmed an Arduino Nano in C++ to control motors and driver circuits",
        ],
    },
];

export const education = [
    {
        institution: "Technion - Israel Institute of Technology",
        location: "Haifa, Israel",
        degree: "BSc in Biomedical Engineering",
        period: "2021 - Present",
        achievements: [],
    },
];
export const skills = [
    {
        category: "Programming Languages",
        skills: [
            "C",
            "C++",
            "Rust",
            "Go",
            "Python",
            "MATLAB",
            "TypeScript",
            "Linux",
            "ROS2",
            "Git",
        ],
    },
    {
        category: "Web Development",
        skills: [
            "HTML",
            "CSS",
            "React",
            "Svelte",
            "SolidJS",
            "Tailwindcss",
            "Node.js/Bun/Deno",
            "Flask",
            "Firebase Realtime Database",
        ],
    },
    {
        category: "3D Modeling",
        skills: [
            "Creo",
            "SOLIDWORKS",
            "Onshape",
            "Blender",
            "Rhino",
            "Grasshopper",
        ],
    },
    {
        category: "Electronic Design Automation",
        skills: ["KiCad", "Altium", "LTSpice"],
    },
];

export const projects = [
    {
        title: "Technion Formula Autonomous System",
        try: ["https://formulatechnion.ac.il/"],
        tryTitles: ["Visit Team Website"],
        github: "",
        video: "/videos/formulaTech.mp4",
        smallVid: false,
        poster: "/videos/formulaTechPoster.png",
        description:
            `As the co-lead of the autonomous team, I spearheaded the design and implementation of the autonomous systems for a Formula-style race car. 
Together, we developed a full perception to control pipeline, with custom PCBs to control the car's actuators and read sensor data.
I personally oversaw the design of all of the relevant electrical systems, the SLAM algorithm, and the path planning.
Additionally, I coded the team's public-facing website, significantly enhancing our visibility and outreach.`,
    },
    {
        title: "Windsurfing Video Analysis Software",
        try: [],
        tryTitles: [],
        github: "https://github.com/gganeles/windsurfing",
        video: "/videos/windsurfing.mp4",
        smallVid: false,
        poster: "/videos/windsurfingPoster.png",
        description:
            "A video cutting application in C++ to help the coach of the Israeli Olympic windsurfing team in reviewing athlete footage",
    },
    {
        title: "Zombie Party",
        try: ["https://zombieparty.gganeles.com"],
        tryTitles: ["Try It Yourself"],
        github: "",
        video: "/videos/zombieParty.mp4",
        smallVid: false,
        poster: "/videos/zombiePartyPoster.png",
        description:
            "A web-RTC based multiplayer game where players control a warrior with their phone's gyroscope and try to survive against waves of zombies. Built entirely in flutter.",
    },
    {
        title: "Shab-BOT",
        try: ["https://wa.me/12038025238?text=!help"],
        tryTitles: ["Try It Yourself"],
        github: "https://github.com/gganeles/shabBOT#readme-ov-file",
        video: "/videos/shabBot.mp4",
        smallVid: true,
        poster: "/videos/shabBotPoster.png",
        description:
            `A command-driven bot that interfaces over Whatsapp, complete with a reminder system, scheduled messages, and a quick way to find Shabbat Candle lighting times for 100,000+ cities.
This was originally written using whatsapp-web.js, but in order to speed it up and reduce memory footprint, I ported it to @whiskeysockets/Baileys, then to Golang's Whatsmeow.`,
    },
    {
        title: "3D Printed Parachute Launcher",
        try: [],
        tryTitles: [],
        github: "",
        video: "/videos/parachuteLauncher.mp4",
        smallVid: false,
        poster: "/videos/parachuteLauncherPoster.png",
        description:
            "A 3D printed servo-based parachute launcher for a hybrid solid-gas rocket.",
    },
    {
        title: "Gabe's Games Corner",
        try: ["https://set.gganeles.com", "https://set2.gganeles.com"],
        tryTitles: ["Try v1", "Try v2"],
        github: "https://github.com/gganeles/rustSet",
        video: ["/videos/setgame.mp4", "/videos/set2.mp4"],
        videoTitles: ["v1", "v2"],
        smallVid: false,
        poster: "/videos/setgamePoster.png",
        description: `A web-based implementation of the some card games: "Set", "Memory", "Anagrams", and "Skull". Written with a SolidJS frontend and a Rust backend.`,
    },
    {
        title: "3d Printed Fountain",
        try: [],
        tryTitles: [],
        github: "",
        video: "/videos/fountain.mp4",
        smallVid: false,
        poster: "/videos/fountainPoster.png",
        description:
            "A 3D printed fountain for zen vibes.",
    }
];

export const awards = [
    {
        name: "Technion Bio-Hack Hackathon",
        issuer: "Technion Faculty of Biomedical Engineering",
        date: "April 2025",
        position: "First Place",
        desc: "Proposed a device to assist in the rapid prevention of cutaneous infection.",
    },
    {
        name: "Nucleate Bio-Fense Hackathon",
        issuer: 'Nucleate | DDR&D (מפא"ת) | Teva',
        date: "April 2025",
        position: "First Place",
        desc: "Developed a novel solution to combat-based neck injuries.",
    },
];
