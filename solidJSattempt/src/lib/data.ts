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
        title: "Shab-BOT",
        try: ["https://wa.me/12038025238?text=!help"],
        tryTitles: ["Try It Yourself"],
        github: "https://github.com/gganeles/shabBOT#readme-ov-file",
        video: "/videos/shabBot.mp4",
        smallVid: true,
        poster: "/videos/shabBotPoster.png",
        description:
            "During my time at Technion, my friends and I would plan Shabbat meals together almost every week.\nFiguring out what everyone was bringing was always a challenge to co-ordinate.\nTo address this, I wrote a command-driven bot that interfaces over Whatsapp.\nOver time, this turned into a fully fledged Whatsapp Bot, complete with a reminder system, scheduled messages, and a quick way to find Shabbat Candle lighting times for 100,000+ cities.\nThis was originally written using whatsapp-web.js, but in order to speed it up and reduce memory footprint, I ported it to @whiskeysockets/Baileys, then to Golang's Whatsmeow.",
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
        description: `In my second year of Techion, I reignited an old passion for a game called SET when I learned that one of my friends also loved it.
    In order to play more conveniently, I figured I should make a website where we could play set with each other.
    Although alternatives exist, I found they could not keep up with the fast pace my friends and I preferred.
    In order to build my vision without paying a single cent, I implimented the game using Firebase's Realtime Database, thereby avoiding server costs. The site itself is written in Svelte, hosted for free on Firebase.
    This implimentation worked well, and I ultimately used the same system to build 3 other games: Memory, Anagrams (snatch), and Skull.
    However, there was a bug with this implimentation, specifically for quick games such as set. When two people find sets simultaneously, this system fails. The database doesn't send data to the clients fast enough to appropriately check both sets, and therefore they both get accepted.
    To address this bug and refine the player experience, I ultimately ported my previous code to a new app, with a frontend written in SolidJS and a backend written in Rust.`,
    },
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
