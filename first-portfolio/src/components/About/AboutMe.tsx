"use client"
import React from "react";
import { ProfileImage } from "../ProfileImage";
import { PersonalInformation } from "./PersonalInformation";
import { useIsMobile } from "@/hooks/useMobileChecker";
import { LoadingSpinner } from "../Loading";


export const AboutMe: React.FC = () => {
    const {isMobile, isLandscape, status, windowSizeY } = useIsMobile()

    if(status==="loading"){
        return (
            <LoadingSpinner className="h-[100vh]"/>
        )
    }
    return(
        <>
            {isMobile ? (
                <>
                     <div className="flex items-center justify-center my-7">
                        <ProfileImage height={200} width={200}/>
                    </div>
                    <PersonalInformation/>
                </>
            ) : isLandscape ? ( //landscape in mobile
                <>  
                    <div className="flex flex-row space-x-7 mt-8 items-center justify-center">
                        <ProfileImage height={200} width={200} className="slide-in-from-left"/>
                        <PersonalInformation/>
                    </div>
                    
                </>
               
            ) : (
                    //desktop view
                <div className="flex flex-row items-center justify-center space-x-20 mt-12">
                    <ProfileImage 
                    height={windowSizeY < 1600 ? 300 : windowSizeY < 1900 ? 400 : 450} 
                    width={windowSizeY < 1600 ? 300 : windowSizeY < 1900 ? 400 : 450}
                    className="slide-in-from-left"/>
                    <PersonalInformation className="w-[40%]"/>
                </div>
            )}
           
        </>
    )
}