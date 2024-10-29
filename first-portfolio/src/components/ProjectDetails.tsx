
import React from "react";
import { TeamProjectsTypes, videoType } from "@/lib/Constants/Projects";
import { CropImage } from "./ProfileImage";
import { RenderTechnologies } from "./Projects/Technologies";
import { RenderMembers } from "./Projects/RenderMembers";

export type ProjectDataTypes = Omit<TeamProjectsTypes, "startingMonth" | "endingMonth" | "MobileAndDesktop" | "year"> & { 
    appName?: string; 
};

type ProjectDetailsProps = {
    data: ProjectDataTypes
}

const Label: React.FC<{children: React.ReactNode}> = ({children}) => {
    return(
        <div className="text-white font-montserrat font-light text-[12px] 2xl:text-[17px] text-center">
            {children}
        </div>
    )
}

type RenderImagesProps = {
    imagesURL: string[], 
    label:string
}

const RenderImagesPortrait: React.FC<RenderImagesProps> = ({imagesURL, label}) => {
   return(
    <div className="flex flex-col items-center justify-center gap-y-4 mt-4">
        <div className="flex flex-row gap-x-2 sm:w-[400px] xl:w-[700px]">
            {imagesURL.map((url, index) => {
            return (
                <CropImage
                layout="responsive"
                key={index} height={170} width={300} url={`${url}`} className="w-ful h-full rounded-[4px]"/>
            )}
            )}
        </div>
        <Label>{label}</Label>
    </div>
    
   )
}

const RenderImagesLandscape: React.FC<RenderImagesProps>= ({imagesURL, label}) => {

    return(
        <div className="flex flex-col gap-y-4">
            <div className="flex flex-col sm:flex-row sm:gap-x-7 items-center justify-center gap-y-4 mt-4">
                {imagesURL.map((url, index) => {
                return (
                    <CropImage layout="responsive" key={index} height={170} width={300} url={`${url}`} className="w-ful h-full rounded-[7px]"/>
                )}
                )}
            </div>
            <Label>{label}</Label>
            
        </div>
       
    )
}

const VideoPresentation: React.FC<{video: videoType}> = ({video}) => {
    const {videoThumbNailURL, videoURL, label} = video
    return(
        <div className="mt-8 flex flex-col gap-y-2">
            <CropImage
            layout="responsive" 
            height={170} width={300} 
            url={`${videoThumbNailURL}`} 
            videoURL={`${videoURL}`}
            className="w-ful h-full rounded-[4px]"/>
            <Label>{label}</Label>
        </div>
    )
}



export const ProjectDetails: React.FC<ProjectDetailsProps> = ({data}) => {

    const {projectDetails, projectType, appName, introduction, images, video, Technologies, Members} = data
    return(
        <div className="ml-2 mt-2">
            <div className="text-white font-montserrat font-extrabold text-[12px] 2xl:text-[17px]">
                {projectType}
            </div>
            <div className="text-white font-montserrat font-extrabold text-[12px] 2xl:text-[17px] italic">
                <span className="text-defaultGreen">{appName}: </span>{projectDetails}
            </div>
            <div className="text-white font-montserrat font-light text-[12px] 2xl:text-[17px] text-justify mt-4">
                {introduction}
            </div>
            {images.map((item, index) => {
                const {imagesURL, label, portrait} = item
          
                return(
                   <div key={index}>
                     {portrait ? (
                        //mobile screenshots
                        <RenderImagesPortrait key={index} imagesURL={imagesURL} label={label}/>
                     
                    ) : (
                         //Desktop screenshots
                         <RenderImagesLandscape key={index} imagesURL={imagesURL} label={label}/>
                    )}
                   </div>
                )
            })} 
            <VideoPresentation video={video}/>
            <RenderTechnologies technologies={Technologies}/>
            <RenderMembers memberData={Members}/>
        </div>
    )   
}