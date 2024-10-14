import { ChildrenClassNameProps, dateTypes } from "@/lib/types";
import React from "react";
import { Button } from "./Button";

import { Paragraph } from "./About/PersonalInformation";
import { CustomH2} from "./H_Tags";
import { CircleSVG } from "./Icons";
import { AboutData } from "@/lib/Constants/About";
import { ProjectDataTypes, ProjectDetails } from "./ProjectDetails";


const BulletForm: React.FC<ChildrenClassNameProps> = ({
    children
}) => {
    return (
            <div className="flex flex-row gap-4 items-start xl:items-center relative pl-4 m-2">
                <div className=" absolute left-0 top-1"><CircleSVG/></div>
                <Paragraph>{children}</Paragraph>
            </div>

    )
}

type TimeLineCardProps = {
    startingMonth: dateTypes;
    endingMonth: dateTypes;
    year: number;
    company?: string;
    title?: string;
    role?: string;
    bulletData?: string[];
    headerParagraph?: string;
    projectData?: ProjectDataTypes;
}


export const TimeLineCard: React.FC<TimeLineCardProps> = ({
    startingMonth,
    endingMonth,
    year,
    company,
    role,
    bulletData,
    headerParagraph,
    projectData
}) => {
    return (
        <div className="mt-4">
           <Button className="text-white bg-defaultGray">{startingMonth} - {endingMonth} {year}</Button>
            {projectData ? (
                // for Projects Timeline
                <ProjectDetails data={projectData}/>
            ) : (
                //for experience timeline
                <>
                    {company && <CustomH2 className="text-white text-[16px] 2xl:text-[20px]">{company}</CustomH2>}
                    {role && <CustomH2 className="text-defaultGreen text-[16px] 2xl:text-[20px]">{role}</CustomH2>}
                    {headerParagraph && <Paragraph>{headerParagraph}</Paragraph>}
                    {bulletData && (
                        <div className=" mx-2">
                            {bulletData.map((item, index) => (
                                <BulletForm key={index}>{item}</BulletForm>
                            ))}
                        </div>
                    )}
                </>
              
            )}

           
        </div>
    )
}

export const TimeLineStick: React.FC = () => {
    return(
        <div className=" flex flex-col items-center justify-center mt-6 w-[20px] sm:mr-2">
            <div className="flex items-center justify-center ml-[14px] mb-[-1px] sm:ml-[18px] "><CircleSVG className="w-[50%] h-[50%]"/></div>
            <Stick/>
        </div>
    )
}

const Stick: React.FC = () => {
    return (
        <div className="bg-defaultGray h-full w-[4px] xl:w-[6px]"/>
    )
}

export const TimeLine: React.FC = () => {
    const {Experience} = AboutData
    return(
       <>  
          <div className="flex flex-row relative">
            <TimeLineStick/>
           <div className="flex flex-col">
           {Experience.map((item, index) => {
                if(!item) return null
                const {startingMonth, endingMonth, year, company, role, bulletsData } = item
                return (
                    <TimeLineCard 
                    key={index}
                    startingMonth={startingMonth}
                    endingMonth={endingMonth}
                    year={year}
                    company={company}
                    role={role}
                    bulletData={bulletsData}
                    />
                )
            })}
           </div>
         </div>
       </>
    )
}