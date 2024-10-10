import { ChildrenClassNameProps, dateTypes } from "@/lib/types";
import React from "react";
import { Button } from "./Button";
import { AboutData } from "@/lib/constant";
import { Paragraph } from "./About/PersonalInformation";
import { CustomH2} from "./H_Tags";
import { CircleSVG } from "./Icons";


type TimeLineCardProps = {
    startingMonth: dateTypes;
    endingMonth: dateTypes;
    year: number;
    company: string;
    title?: string;
    role?: string;
    bulletData?: string[];
    headerParagraph?: string;
    appName?: string;
}



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

export const TimeLineCard: React.FC<TimeLineCardProps> = ({
    startingMonth,
    endingMonth,
    year,
    company,
    role,
    bulletData,
    headerParagraph,
}) => {
    return (
        <div className="mt-4 space-y-1">
           <Button className="text-white bg-defaultGray">{startingMonth} - {endingMonth} {year}</Button>
           {company && <CustomH2 className="text-white text-[16px]">{company}</CustomH2>}
           {role && <CustomH2 className="text-defaultGreen text-[16px]">{role}</CustomH2>}
           {headerParagraph && <Paragraph>{headerParagraph}</Paragraph>}
           {bulletData && (
            <div className=" mx-2">
                {bulletData.map((item, index) => (
                    <BulletForm key={index}>{item}</BulletForm>
                ))}
            </div>
           )}
        </div>
    )
}

const TimeLineStick: React.FC = () => {
    return(
        <div className=" relative w-[50px] flex flex-col items-center justify-center pt-2 mt-6 mr-2">
            <div className="absolute top-0 left-0 xl:left-[11px]"><CircleSVG className="w-[50%] h-[50%]"/></div>
            <Stick/>
        </div>
    )
}

const Stick: React.FC = () => {
    return (
        <div className="bg-defaultGray h-full w-[4px] xl:w-[7px]"/>
    )
}

export const TimeLine: React.FC = () => {
    const {Experience} = AboutData
    return(
       <>  
          <div className="flex flex-row">
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