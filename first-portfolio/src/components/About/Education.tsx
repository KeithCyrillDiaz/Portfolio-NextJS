

import React from "react";
import { Title } from "../Home/Information";
import { H2 } from "../H2";
import { About } from "@/lib/constant";
import { CropImage } from "../ProfileImage";
import { LoadingSpinner } from "../Loading";

const {courseAndGPA, school, cumLaude, bestThesisCOS, bestThesisCourse} = About.Education
const CumLaudeImage = process.env.NEXT_PUBLIC_CUM_LAUDE;
const BestThesisCourse = process.env.NEXT_PUBLIC_COURSE;
const BestThesisDepartment = process.env.NEXT_PUBLIC_COS;

const EducationSubTitle: React.FC = () => {
    return(
      <>
          <H2 className="">{courseAndGPA[0]} <span className="text-defaultGreen">{courseAndGPA[1]}</span></H2>
          <H2>{school}</H2>
          <EducationImages/>
      </>
   
      
    )
}

type EducationImageContainerProps = {
    children: React.ReactNode;
    url: string
}

const EducationImageContainer: React.FC<EducationImageContainerProps> = ({
    children,
    url,
}) => {
    if(!url) {
        return (
            <LoadingSpinner/>
        )
    }
    return(
        <div className="flex flex-col gap-4 items-center my-4 sm:w-[300px] xl:w-[300px] xl:h-[200px] fade-in">
            <CropImage className="rounded-[7px]" url={`${url}`} height={170} width={270}/>
            <div className="text-white font-extrabold text-[14px] font-montserrat text-center">{children}</div>
        </div>
    )
}

const EducationImages: React.FC = () => {
    // Combine the image URLs and content in an array
    const educationData = [
        { url: BestThesisDepartment, text: bestThesisCOS },
        { url: CumLaudeImage, text: cumLaude },
        { url: BestThesisCourse, text: bestThesisCourse },
    ];

    return (
        <div className="mt-2 items-center flex flex-col xl:flex-row xl:space-x-4 justify-center ">
            {educationData.map((item, index) => (
                <EducationImageContainer key={index} url={`${item.url}`}>
                    {item.text[0]} 
                    <span className="text-defaultGreen">{item.text[1]}</span>
                    {item.text[2] && item.text[2]} {/* Render only if there's a third part */}
                </EducationImageContainer>
            ))}
        </div>
    );
}

export const Education: React.FC = () => {
    return (
        <div className="mt-7">
            <Title className="text-defaultGreen">Education</Title>
            <EducationSubTitle/>

        </div>
    )
}