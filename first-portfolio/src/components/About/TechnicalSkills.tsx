
import React from "react";
import { Title } from "../Home/Information";
import { SkillsComponent } from "./SkillsComponent";


export const TechnicalSkills: React.FC = () => {
    return (
        <>
            <Title className="text-defaultGreen xl:mt-7 slide-in-from-left" >Technical Skills</Title>
            <SkillsComponent/>
        </>
    )
}
