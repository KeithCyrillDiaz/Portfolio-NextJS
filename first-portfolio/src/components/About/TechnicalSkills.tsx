
import React from "react";
import { BoxWithLogo } from "../LogoWithBox";
import { About, SkillLevel } from "@/lib/constant";
import { Title } from "../Home/Information";



type SkillsInfoProps = {
    level: SkillLevel; 
    experience: string;
}

type ChildrenProps = {
    children: React.ReactNode;
}

type RatingProps = {
    progress: number;
}

export const RatingBar: React.FC<RatingProps> = ({progress}) => {
    return(
        <div className="bg-defaultGray w-full h-[10px] rounded-[4px]">
             <div 
            className="bg-defaultGreen h-full rounded-[4px]"
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
        <div className=" flex flex-col text-white text-[11px] font-extrabold font-montserrat">
            <div className="flex gap-2 items-center">
             Level: <span className="text-defaultGreen">{level}</span>
            </div>
           <div className="flex gap-2 items-center">
             Experience: <span className="text-defaultGreen ">{experience}</span>
           </div>
        </div>
    )
}

const RatingPercentage: React.FC<ChildrenProps> = ({children}) => {
    return (
        <div className="absolute right-0 bottom-3 text-white font-montserrat text-[12px] font-extrabold">
            {children}
    </div>
    )
}

type SkillRatingProps = {
    rating: number
}

const SkillRating: React.FC<SkillRatingProps> = ({rating}) => {
    return(
        <div className="text-white font-montserrat text-[11px] font-extrabold flex flex-col gap-1">
        Skill Rating: 
        <RatingBar progress={rating}/>
        </div>
    )
}

const SkillsComponent: React.FC = () => {
    const {TechnicalSkills} = About

    return(
        <div className="space-y-4">
            {TechnicalSkills.map((item, index) => (
                <div key={index} className="flex flex-row items-center gap-4 px-1">
                    {index < (Math.floor(TechnicalSkills.length/2)) && (
                       <div className="flex flex-col w-[170px] relative">
                        <BoxWithLogo url={`${item.url}`}>{item.title}</BoxWithLogo>
                        <SkillsInfo level={item.Level} experience={item.Experience}/>
                        <RatingPercentage> 
                            {item.Rating}%
                        </RatingPercentage>

                        <SkillRating rating = {item.Rating}/>              
                       </div>

                    )}
                    
                    {TechnicalSkills[index + (Math.floor(TechnicalSkills.length/2))] && (
                     
                     <div className="flex flex-col w-[170px] relative">
                        <BoxWithLogo 
                            url={`${TechnicalSkills[index + (Math.floor(TechnicalSkills.length/2))].url}`}
                        >
                            {TechnicalSkills[index + (Math.floor(TechnicalSkills.length/2))].title}
                        </BoxWithLogo>

                        <SkillsInfo 
                        level={TechnicalSkills[index + (Math.floor(TechnicalSkills.length/2))].Level} 
                        experience={TechnicalSkills[index + (Math.floor(TechnicalSkills.length/2))].Experience}/>
                        
                        <RatingPercentage> 
                            {TechnicalSkills[index + (Math.floor(TechnicalSkills.length/2))].Rating}%
                        </RatingPercentage>

                        <SkillRating rating = {TechnicalSkills[index + (Math.floor(TechnicalSkills.length/2))].Rating}/>              
                     </div>
                    )}
                </div>
            ))}
        </div>
       
    )
}



export const TechnicalSkills: React.FC = () => {
    return (
        <>
            <Title className="text-defaultGreen mb-4" >Technical Skills</Title>
            <SkillsComponent/>
        </>
    )
}
