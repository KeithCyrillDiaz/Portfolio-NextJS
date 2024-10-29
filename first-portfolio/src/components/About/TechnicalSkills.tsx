

import React from "react";
import { Title } from "../Home/Information";
import { SkillsComponent } from "./SkillsComponent";
import { TechnicalSkillTypes } from "@/lib/Constants/About";



export const TechnicalSkills: React.FC<{skills: TechnicalSkillTypes[]}>= ({skills}) => {
    return (
        <>
            <Title className="text-defaultGreen xl:mt-7 slide-in-from-left" >Technical Skills</Title>
            <SkillsComponent skills={skills}/>
        </>
    )
}
