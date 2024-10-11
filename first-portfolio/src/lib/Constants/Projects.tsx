import { TeamProjects } from "@/components/Projects/TeamProjects";
import { dateTypes } from "../types"

type ProjectTypes = 'Thesis Project' | 'Personal Project'
type imageType = {
    imagesURL: string[];
    label: string;
}

type videoType = {
    videoURL: string;
    label: string;
    videoThumbNailURL: string
}

type TeamProjectsTypes = {
    startingMonth: dateTypes;
    endingMonth: dateTypes;
    year: number
    projectType: ProjectTypes;
    appName: string;
    projectDetails: string;
    introduction: string;
    images: imageType[];
    videos: videoType[];
}

type ProjectDataTypes = {
    TeamProjects: TeamProjectsTypes[]
}


export const ProjectsData: ProjectDataTypes = {
    TeamProjects: [
        {
            startingMonth: "March",
            endingMonth: "June",
            year: 2024,
            projectType: "Thesis Project",
            appName: "Kalinga App",
            projectDetails: "Empowering Breastmilk Donation Banks Through Mobile Application Management Integration",
            introduction: "The Kalinga App, created in collaboration with the Quezon City Human Milk Bank (QCHMB), aims to streamline the process of donating and requesting breast milk, enhancing the awareness and utilization of Milk Banks across the country (Cubelo et al., 2024).",
            images: [
                {
                    imagesURL: [
                        process.env.NEXT_PUBLIC_KALINGA_ADMIN_HOMEPAGE ?? "",
                        process.env.NEXT_PUBLIC_KALINGA_ADMIN_DASHBOARD ?? ""
                    ],

                    label:"Kalinga Admin Website which will be handled by Quezon City Human Milk Bank"
                },
                {
                    imagesURL: [

                        process.env.NEXT_PUBLIC_KALINGA_APP_LOG_IN ?? "",
                        process.env.NEXT_PUBLIC_KALINGA_APP_DONOR_DASHBOARD ?? "",
                        process.env.NEXT_PUBLIC_KALINGA_APP_REQUESTOR_DASHBOARD ?? "",
                        process.env.NEXT_PUBLIC_KALINGA_APP_DEVELOPERS ?? ""
                    ],

                    label:"Kalinga App handled by mothers to either schedule an appointment for donation or request breast milk"
                },

            ],
            videos: [
                {
                    videoThumbNailURL: process.env.NEXT_PUBLIC_KALINGA_VIDEO_THUMBNAIL ?? "",
                    videoURL: process.env.NEXT_PUBLIC_KALINGA_VIDEO_URL??"",
                    label: "Video Presentation of our System"
                }
        ]
        }
    ]
}