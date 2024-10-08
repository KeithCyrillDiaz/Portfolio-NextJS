import React from "react";
import { Title } from "../Home/Information";
import { H2 } from "../H2";
import { About } from "@/lib/constant";

const {courseAndGPA, school} = About.Education

const EducationSubTitle: React.FC = () => {
    return(
      <>
          <H2 className="">{courseAndGPA[0]} <span className="text-defaultGreen">{courseAndGPA[1]}</span></H2>
          <H2>{school}</H2>
      </>
   
      
    )
}


export const Education: React.FC = () => {
    return (
        <div className="mt-7">
            <Title>Education</Title>
            <EducationSubTitle/>
            
        </div>
    )
}