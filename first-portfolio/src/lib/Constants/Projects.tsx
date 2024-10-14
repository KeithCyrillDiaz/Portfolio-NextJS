import { TeamProjects } from "@/components/Projects/TeamProjects";
import { dateTypes } from "../types"

export type ProjectTypes = 'Thesis Project' | 'Personal Project'

export type imageType = {
    imagesURL: string[];
    label: string;
    portrait?: boolean
}

export type videoType = {
    videoURL: string;
    label: string;
    videoThumbNailURL: string
}

export type TechnologiesType = {
    frontEnd: string[];
    backEnd: string[];
}

export type MembersType = {
    profileImageURL: string | undefined;
    linkedInURL: string | undefined;
    role: string;
    fullName: string;
}



export type TeamProjectsTypes = {
    startingMonth: dateTypes;
    endingMonth: dateTypes;
    MobileAndDesktop: boolean;
    MobileAppPorject?: boolean;
    year: number
    projectType: ProjectTypes;
    appName: string;
    projectDetails: string;
    introduction: string;
    images: imageType[];
    video: videoType;
    Technologies: TechnologiesType;
    Members: MembersType[];
    
}


type PersonalProjectsTypes = {
    startingMonth: dateTypes;
    endingMonth: dateTypes;
    MobileAndDesktop: boolean;
    MobileAppPorject?: boolean;
    year: number
    projectType: ProjectTypes;
    appName: string;
    projectDetails: string;
    introduction: string;
    images: imageType[];
    videos: videoType[];
}

type ProjectDataTypes = {
    TeamProjects: TeamProjectsTypes[];
    PersonalProjects?: PersonalProjectsTypes[];
}


export const ProjectsData: ProjectDataTypes = {
    TeamProjects: [
        {
            startingMonth: "March",
            MobileAndDesktop: true,
            endingMonth: "June",
            year: 2024,
            projectType: "Thesis Project",
            appName: "Kalinga App",
            projectDetails:"Empowering Breastmilk Donation Banks Through Mobile Application Management Integration",
            introduction: "The Kalinga App, created in collaboration with the Quezon City Human Milk Bank (QCHMB), aims to streamline the process of donating and requesting breast milk, enhancing the awareness and utilization of Milk Banks across the country (Cubelo et al., 2024).",
            images: [
                {
                    imagesURL: [
                        process.env.NEXT_PUBLIC_KALINGA_ADMIN_HOMEPAGE ?? "",
                        process.env.NEXT_PUBLIC_KALINGA_ADMIN_DASHBOARD ?? ""
                    ],
                    label:"Kalinga Admin Website which will be handled by Quezon City Human Milk Bank",
                },
                {
                    imagesURL: [

                        process.env.NEXT_PUBLIC_KALINGA_APP_LOG_IN ?? "",
                        process.env.NEXT_PUBLIC_KALINGA_APP_DONOR_DASHBOARD ?? "",
                        process.env.NEXT_PUBLIC_KALINGA_APP_REQUESTOR_DASHBOARD ?? "",
                        process.env.NEXT_PUBLIC_KALINGA_APP_DEVELOPERS ?? ""
                    ],
                    portrait: true,
                    label:"Kalinga App handled by mothers to either schedule an appointment for donation or request breast milk",
                },

            ],
            video:
                {
                    videoThumbNailURL: process.env.NEXT_PUBLIC_KALINGA_VIDEO_THUMBNAIL ?? "",
                    videoURL: process.env.NEXT_PUBLIC_KALINGA_VIDEO_URL??"",
                    label: "Video Presentation of Kalinga"
                },
            Technologies: 
                {
                    frontEnd:[
                        "JavaScript",
                        "React",
                        "React Native",
                        "Firebase Storage",
                        "Axios",
                        "Expo",

                    ],
                    backEnd:[
                        "TypeScript",
                        "Express",
                        "MongoDB",
                        "Postman",
                        "Node"
                    ],
                    
                },
                Members: [
                    {
                        fullName: "Ma. Alisha Mae M. Arafol",
                        role: "UI/UX Designer & Front End Developer",
                        linkedInURL: process.env.NEXT_PUBLIC_LINKED_IN_ALISHA,
                        profileImageURL: process.env.NEXT_PUBLIC_DP_ALISHA
                    },
                    {
                        fullName: "Rogine Mae C. Cubelo",
                        role: "Group Leader & Full Stack Developer",
                        linkedInURL: process.env.NEXT_PUBLIC_LINKED_IN_CUBELO,
                        profileImageURL: process.env.NEXT_PUBLIC_DP_CUBELO
                      
                    },
                    {
                    
                        fullName: "Keith Cyrill A. Diaz",
                        role: "Full Stack Developer",
                        linkedInURL: process.env.NEXT_PUBLIC_LINKED_IN_KEITH,
                        profileImageURL: process.env.NEXT_PUBLIC_DP_KEITH
                    },
                    {
                        fullName: "Ma. Beverly Q. Somodio",
                        role: "Full Stack Developer",
                        linkedInURL: process.env.NEXT_PUBLIC_LINKED_IN_BEVERLY,
                        profileImageURL: process.env.NEXT_PUBLIC_DP_BEVERLY
                    },
                
                    {
                        fullName: "Jeannah Jean S. Padasas",
                        role: "UI/UX Designer & Quality Assurance",
                        linkedInURL: process.env.NEXT_PUBLIC_LINKED_IN_JEANNAH,
                        profileImageURL:process.env.NEXT_PUBLIC_DP_JEANNAH
                    },
                   

                ]
            
        }
    ]
}