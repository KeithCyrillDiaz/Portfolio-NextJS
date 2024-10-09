
export type SkillLevel = "Intermediate" | "Beginner" | "Novice";

interface TechnicalSkill {
    title: string;
    url: string | undefined;
    Level: SkillLevel;
    Experience: string;
    Rating: number
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
    Experience: {
        date: string;
        company: string;
        role: string;
        bullets: string[];
    };
    TechnicalSkills: TechnicalSkill[];
}


export const About: AboutTypes = {
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
        address: "33 Julio’s Compound Pulang Lupa Uno Las Pinas City",
        lastParagraph: "I was first exposed to technology at age four, which ignited my passion for technologies. This interest grew during my college years, leading me to pursue a degree in Information Systems. Throughout my studies, I gained hands-on experience in full-stack development during my thesis project. I thrive in collaborative environments where I can contribute to meaningful projects and grow both personally and professionally while aiming to make a positive impact in the tech industry."
    },

    Education: {
        courseAndGPA: ["Bachelor of Science in Information System: GPA: ", "1.567"],
        school: "Technological University of the Philippines",
        bestThesisCOS: ["Awarded " , "Best Thesis ", "in College of Science Department"],
        cumLaude: ["Awarded ", "Cum Laude"],
        bestThesisCourse: ["Awarded " , "Best Thesis ", "in Information System "],
    },

    Experience: {
        date: "March-June 2024",
        company: "Service Economy Applications INC – Alabang, Muntinlupa",
        role: "Software Developer Intern",
        bullets: [
            "Developed and maintained backend services using Node.js and Express with TypeScript, implementing RESTful APIs, token-based authentication, and middleware for enhanced security and functionality.",

            "Utilized React with TypeScript, integrating React Hooks and custom components to build dynamic and responsive web applications."
        ]
    },

    TechnicalSkills: [
        {
            title: "TypeScript",
            url: process.env.NEXT_PUBLIC_TS,
            Level: "Intermediate",
            Experience: "6 months",
            Rating: 75
        },
        
        {
            title: "HTML",
            url: process.env.NEXT_PUBLIC_HTML,
            Level: "Intermediate",
            Experience: "8 months",
            Rating: 75
            
        },
        {
            title: "Tailwind",
            url: process.env.NEXT_PUBLIC_TAILWIND,
            Level: "Beginner",
            Experience: "3 months",
            Rating: 60
        },
       
        {
            title: "React.js",
            url: process.env.NEXT_PUBLIC_REACT,
            Level: "Beginner",
            Experience: "3 months",
            Rating: 70
        },
        {
            title: "Next.js",
            url: process.env.NEXT_PUBLIC_NEXT,
            Level: "Novice",
            Experience: "1 month",
            Rating: 70
        },
         {
            title: "JavaScript",
            url: process.env.NEXT_PUBLIC_JS,
            Level: "Intermediate",
            Experience: "6 months",
            Rating: 70
        },
        {
            title: "Node.js",
            url: process.env.NEXT_PUBLIC_NODE,
            Level: "Intermediate",
            Experience: "6 months",
            Rating: 70
        },
        {
            title: "Express.js",
            url: process.env.NEXT_PUBLIC_EXPRESS,
            Level: "Intermediate",
            Experience: "6 months",
            Rating: 70
        },
        {
            title: "React Native",
            url: process.env.NEXT_PUBLIC_NATIVE,
            Level: "Intermediate",
            Experience: "6 months",
            Rating: 70
        },
    ]

}

