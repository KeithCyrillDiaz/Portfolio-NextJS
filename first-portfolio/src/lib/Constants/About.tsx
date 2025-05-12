import { dateTypes } from "../types";


export type SkillLevel = "Intermediate" | "Beginner" | "Novice";

export type TechnicalSkillTypes = {
    title: string;
    url: string | undefined;
    Level: SkillLevel;
    Experience: string;
    projects: string[];
}

export type ExperienceTypes = {
    startingMonth: dateTypes;
    endingMonth: dateTypes;
    year: number;
    company: string;
    role: string;
    bulletsData: string[];
}

export type HobbiesCardTypes = {
    title: string;
    url: string | undefined;
}


type AboutTypes = {
    PersonalInformation: {
        title: string;
        firstParagpraph: string[];
        contactNumber: string;
        email: string;
        address: string;
        lastParagraph: string;
    };
    Education: {
        courseAndGPA: string[];
        school: string;
        bestThesisCOS: string[];
        cumLaude: string[];
        bestThesisCourse: string[];
    };
    Experience: ExperienceTypes[],
    TechnicalSkills: TechnicalSkillTypes[],
    Hobbies: HobbiesCardTypes[];
}


export const AboutData: AboutTypes = {
    PersonalInformation: {
        title: "Keith Cyrill A. Diaz",
        firstParagpraph: [
            "Hi there! I'm Keith, a fresh graduate passionate about building", 
            " mobile", 
            " and", 
            " web",
            " applications, with a current focus on JavaScript and Typescript."
        ],
        contactNumber: "+63 976-532-9159",
        email: "keithalbarinadiaz0317@gmail.com",
        address: "Las Pinas City, Philippines",
        lastParagraph: "I was first exposed to technology at age four, which ignited my passion for technologies. This interest grew during my college years, leading me to pursue a degree in Information Systems. Throughout my studies, I gained hands-on experience in full-stack development during my thesis project. I thrive in collaborative environments where I can contribute to meaningful projects and grow both personally and professionally while aiming to make a positive impact in the tech industry."
    },

    Education: {
        courseAndGPA: ["Bachelor of Science in Information System: GPA: ", "1.567"],
        school: "Technological University of the Philippines",
        bestThesisCOS: ["Awarded " , "Best Thesis ", "in College of Science Department"],
        cumLaude: ["Awarded ", "Cum Laude"],
        bestThesisCourse: ["Awarded " , "Best Thesis ", "in Information System "],
    },

    Experience: [
        {
            startingMonth: "March",
            endingMonth: "June",
            year: 2024,
            company: "Service Economy Applications INC – Alabang, Muntinlupa",
            role: "Software Developer Intern",
            bulletsData: [
                "Developed and maintained backend services using Node.js and Express with TypeScript, implementing RESTful APIs, token-based authentication, and middleware for enhanced security and functionality.",
    
                "Utilized React with TypeScript, integrating React Hooks and custom components to build dynamic and responsive web applications."
            ]
        },
    ],

    TechnicalSkills: [
        {
            title: "TypeScript",
            url: process.env.NEXT_PUBLIC_TS,
            Level: "Intermediate",
            Experience: "6 months",
            projects: ["Kalinga App"]
        },
        
        {
            title: "HTML",
            url: process.env.NEXT_PUBLIC_HTML,
            Level: "Intermediate",
            Experience: "8 months",
            projects: ["Kalinga App"]
            
        },
        {
            title: "Tailwind",
            url: process.env.NEXT_PUBLIC_TAILWIND,
            Level: "Beginner",
            Experience: "3 months",
            projects: ["Kalinga App"]
        },
       
        {
            title: "React.js",
            url: process.env.NEXT_PUBLIC_REACT,
            Level: "Beginner",
            Experience: "3 months",
            projects: ["Kalinga App"]
        },
        {
            title: "Next.js",
            url: process.env.NEXT_PUBLIC_NEXT,
            Level: "Novice",
            Experience: "1 month",
            projects: ["Kalinga App"]
        },
         {
            title: "JavaScript",
            url: process.env.NEXT_PUBLIC_JS,
            Level: "Intermediate",
            Experience: "6 months",
            projects: ["Kalinga App"]
        },
        {
            title: "Node.js",
            url: process.env.NEXT_PUBLIC_NODE,
            Level: "Intermediate",
            Experience: "6 months",
            projects: ["Kalinga App"]
        },
        {
            title: "Express.js",
            url: process.env.NEXT_PUBLIC_EXPRESS,
            Level: "Intermediate",
            Experience: "6 months",
            projects: ["Kalinga App"]
        },
        {
            title: "React Native",
            url: process.env.NEXT_PUBLIC_NATIVE,
            Level: "Intermediate",
            Experience: "6 months",
            projects: ["Kalinga App"]
        },
    ],

    Hobbies: [
        {
            title: "Valorant",
            url: process.env.NEXT_PUBLIC_VALORANT,
        },
        {
            title: "Mobile Legends",
            url: process.env.NEXT_PUBLIC_MOBILE_LEGENDS,
        },
        {
            title: "Genshin Impact",
            url: process.env.NEXT_PUBLIC_GENSHIN_IMAPACT,
        },
        {
            title: "Tiktok",
            url: process.env.NEXT_PUBLIC_TIKTOK,
        },
        {
            title: "Yotube",
            url: process.env.NEXT_PUBLIC_YOUTUBE,
        },
        {
            title: "Facebook",
            url: process.env.NEXT_PUBLIC_FACEBOOK,
        },
        {
            title: "Spotify",
            url: process.env.NEXT_PUBLIC_SPOTIFY,
        },
        {
            title: "Discord",
            url: process.env.NEXT_PUBLIC_DISCORD,
        },
        {
            title: "Netflix",
            url: process.env.NEXT_PUBLIC_NETFLIX,
        },

    ]

}

