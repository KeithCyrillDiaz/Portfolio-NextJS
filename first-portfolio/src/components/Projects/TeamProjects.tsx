import React from "react";
import { TimeLineCard, TimeLineStick } from "../TimeLineCard";
import { TeamProjectsTypes } from "@/lib/Constants/Projects";
import { Title } from "../Home/Information";


export const TeamProjects: React.FC<{data: TeamProjectsTypes[]}> = ({data}) => {

    const TeamProjects = data
    // const {TeamProjects} = ProjectsData
    return(
        <div className="sm:mx-7 2xl:mx-12">
          <Title className="text-defaultGreen slide-in-from-left">Team Projects</Title>
          <div className="flex flex-row team-project-in">
          <TimeLineStick/>
          <>
          {TeamProjects.map((item, index) =>{
                const {
                    startingMonth, 
                    endingMonth, 
                    year, 
                    projectDetails, 
                    projectType, 
                    appName, 
                    introduction,
                    images,
                    video,
                    Technologies,
                    Members
                } = item
                return (
                    <TimeLineCard 
                    key={index} 
                    startingMonth={startingMonth}
                    endingMonth={endingMonth}
                    year={year}
                    projectData={{
                        projectDetails,
                        projectType,
                        appName,
                        introduction,
                        video,
                        images,
                        Technologies,
                        Members,
                    }}
                    />
                )
            })}
          </>
          
          </div>
    
          
        </div>
    )
}