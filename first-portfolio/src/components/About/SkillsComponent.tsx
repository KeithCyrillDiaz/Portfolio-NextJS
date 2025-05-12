
"use client"

import { SkillLevel, TechnicalSkillTypes } from "@/lib/Constants/About";
import React from "react";
import { BoxWithLogo } from "../BoxWithLogo";
import { useIsMobile } from "@/hooks/useMobileChecker";
import { LoadingSpinner } from "../Loading";
import { getSecondHalfItems, isFirstHalf } from "@/lib/helpers";


type SkillsInfoProps = {
    level: SkillLevel; 
    experience: string;
}

// type ChildrenProps = {
//     children: React.ReactNode;
// }

type RatingProps = {
    progress: number;
}

export const RatingBar: React.FC<RatingProps> = ({progress}) => {
    return(
        <div className="bg-defaultGray w-full h-[10px] rounded-[4px] xl:h-[15px]">
             <div 
            className="bg-defaultGreen h-full rounded-[4px] xl:h-[15px]"
            style={{
                width: `${progress}%`,
            }}>

            </div>
        </div>
       
    )
}

const SkillsInfo: React.FC<SkillsInfoProps> = ({
    level,
    experience,
}) => {
    return (
        <div className=" flex flex-col text-white text-[11px] xl:text-[12px] 2xl:text-[14px] font-extrabold font-montserrat w-full">
            <div className="flex gap-2 items-center">
             Level: <span className="text-defaultGreen">{level}</span>
            </div>
           <div className="flex gap-2 items-center">
             Experience: <span className="text-defaultGreen ">{experience}</span>
           </div>
        </div>
    )
}

// const RatingPercentage: React.FC<ChildrenProps> = ({children}) => {
//     return (
//         <div className="absolute right-0 bottom-3 xl:bottom-4 text-white font-montserrat text-[11px] xl:text-[12px] 2xl:text-[14px] font-extrabold">
//             {children}
//     </div>
//     )
// }

// type SkillRatingProps = {
//     rating: number
// }

// const SkillRatingBar: React.FC<SkillRatingProps> = ({rating}) => {
//     return(
//         <div className="text-white font-montserrat text-[11px] xl:text-[12px] 2xl:text-[14px] font-extrabold flex flex-col gap-1">
//         Skill Rating: 
//         <RatingBar progress={rating}/>
//         </div>
//     )
// }

type SkillCardProp = {
    item: TechnicalSkillTypes;
    isDesktop?: boolean
}

const ProjectBar: React.FC<{projects: number}> = ({projects}) =>{
    return (
        <div className="flex flex-row  w-full h-[1vh] rounded-[7px] gap-x-1 sm:h-[2vh]">
            {Array.from({length: 5}).map((_, index)=> (
                <div key={index} className={`${index < projects ? "bg-defaultGreen" : "bg-defaultGray" }  h-full w-full rounded-[7px]`}/>
            ))}
        </div>
    )
}

const ProjectsBarCard: React.FC<{projects: number}> = ({projects}) => {
    return(
       <div className="space-y-1">
         <div className="font-extrabold text-white font-montserrat text-[11px]">Projects: <span className="text-defaultGreen">{projects}/5 completed</span></div>
         <ProjectBar projects={projects}/>
       </div>
    )
}

const SkillCard: React.FC<SkillCardProp> = ({item, isDesktop}) => {
    const {url, title, Level, projects, Experience} = item
    return (
      <>
           {!isDesktop ? (
            <>
                  <BoxWithLogo url={`${url}`}>{title}</BoxWithLogo>
                    <SkillsInfo level={Level} experience={Experience}/>
                    <ProjectsBarCard projects={projects.length}/>
            </>
           ) : (
                <>
                <div className="flex flex-row w-[370px] 2xl:w-[500px] items-center gap-x-4 mt-4">
                    <BoxWithLogo url={`${item.url}`}>{item.title}</BoxWithLogo>
                    <SkillsInfo level={item.Level} experience={item.Experience}/>
                </div>
                    <ProjectsBarCard projects={projects.length}/>
                </>
           )}
      </>
    )
}

export const SkillsComponent: React.FC<{skills?: TechnicalSkillTypes[]}> = ({skills}) => {

    const {isMobile, isLandscape, status} = useIsMobile()

    if(status === "loading" || !skills) {
        return(
            <LoadingSpinner/>
        )
    }
    const TechnicalSkills = skills

    return(
       <div className="fade-in">
        {isMobile ? (
             <>
             {TechnicalSkills.map((item, index) => (
                 <div key={index} className="flex flex-row items-center gap-4 justify-center ">
                    {isFirstHalf(index, TechnicalSkills.length)&& (
                        <div key={index} className="flex flex-col w-[170px] relative my-2">
                         <SkillCard item={item}/>   
                        </div>
 
                     )}
                     
                     {getSecondHalfItems(index, TechnicalSkills) && (
                      <div key={index} className="flex flex-col w-[170px] relative my-2">
                        <SkillCard item={getSecondHalfItems(index, TechnicalSkills)}/>
                      </div>
                     )}
                 </div>
             ))}
         </>
        ) : isLandscape ? (
            <>
                <div className="flex flex-wrap gap-y-4 gap-x-7 justify-center">
                    {TechnicalSkills.map((item, index) => (
                        <div key={index} className="flex flex-col relative">
                            <SkillCard item={item} />
                        </div>
                    ))}
                    
                </div>
            </>
        ) : (
            <div className="flex flex-wrap gap-x-4 justify-center">
                    {TechnicalSkills.map((item, index) => (
                        <div key={index} className="flex flex-col relative ">
                            <SkillCard item={item} isDesktop/>
                        </div>
                    ))}
                    
                </div>
        )}
       </div>
       
    )
}