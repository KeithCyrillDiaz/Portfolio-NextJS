import { TechnologiesType } from "@/lib/Constants/Projects";
import React from "react";
import { BoxWithLogo } from "../BoxWithLogo";
import { CustomH2 } from "../H_Tags";

type TechnologiesMapType = {
    [key: string]: string | undefined
}


const RenderCards: React.FC<{techs: string[]}> = ({techs}) => {

    const technologiesMap: TechnologiesMapType = {
        "JavaScript": process.env.NEXT_PUBLIC_JS,
        "TypeScript": process.env.NEXT_PUBLIC_TS,
        "React": process.env.NEXT_PUBLIC_REACT,
        "React Native": process.env.NEXT_PUBLIC_NATIVE,
        "Express": process.env.NEXT_PUBLIC_EXPRESS,
        "Next": process.env.NEXT_PUBLIC_NEXT,
        "Node": process.env.NEXT_PUBLIC_NODE,
        "HTML": process.env.NEXT_PUBLIC_HTML,
        "Tailwind": process.env.NEXT_PUBLIC_TAILWIND,
        "Axios": process.env.NEXT_PUBLIC_AXIOS,
        "MongoDB": process.env.NEXT_PUBLIC_MONGO_DB,
        "Postman": process.env.NEXT_PUBLIC_POSTMAN,
        "Firebase": process.env.NEXT_PUBLIC_FIREBASE,
        "Expo": process.env.NEXT_PUBLIC_EXPO,
    }
    return(
        <div className="flex items-center justify-center sm:ml-20">
            <div className="flex flex-wrap gap-x-2 xl:gap-x-16  items-center xl:w-[100%] ">
                {techs.map((tech, index) => (
                    <BoxWithLogo 
                    className="w-[145px] sm:w-[150px] gap-x-4 xl:w-[250px] 2xl:w-[300px]"
                    key={index} 
                    url={`${tech === "Firebase Storage" ?technologiesMap["Firebase"] : technologiesMap[tech]}`}
                    >
                        {tech === "Firebase Storage" ? "Firebase" : tech}
                    </BoxWithLogo>
                ))}
            </div>
        </div>
      
    )
}

export const RenderTechnologies: React.FC<{technologies: TechnologiesType}> = ({
    technologies
}) => {
    const {frontEnd, backEnd} = technologies

    return(
       <div className="slide-in-from-bottom">
            <CustomH2 className="text-defaultGreen text-[18px] mt-7 xl:text-[24px]">Technologies</CustomH2>
            <CustomH2 className="mt-4 text-white text-[14px] mb-2 xl:text-[20px] sm:ml-4">Frontend</CustomH2>
            <RenderCards techs={frontEnd}/>
            <CustomH2 className="mt-4 text-white text-[14px] mb-2 xl:text-[20px] sm:ml-4">Backend</CustomH2>
            <RenderCards techs={backEnd}/>
        </div>
            
    )
}