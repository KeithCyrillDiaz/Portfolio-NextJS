"use client"
import { useIsMobile } from "@/hooks/useMobileChecker";
import React from "react";
import { Information } from "./Information";
import { ProfileImage } from "../ProfileImage";


export const HomePageContent: React.FC = () => {
    
    const {isMobile, isLandscape, status, windowSizeY } = useIsMobile()
    if(status === "loading") {
        return null
    }
    return (
        <>
            {isMobile ? (
                      //mobile view
                    <>
                        <div className="items-center flex justify-center my-7 mt-[30%] ">
                            <ProfileImage height={250} width={250}/>
                        </div>
                            <Information/>
                    </>
            )  : isLandscape ? (
                //landscape mobile
                <div className="flex flex-row space-x-7 items-center justify-center mt-7">
                    <Information/>
                    <ProfileImage height={200} width={200}/>
                </div>  
            ) :  (
                //desktop view
                <div className="flex flex-row space-x-32 items-center justify-center mt-20">
                    <Information/>
                    <ProfileImage 
                    height={windowSizeY < 1600 ? 300 : windowSizeY < 1900 ? 400 : 500} 
                    width={windowSizeY < 1600 ? 300 : windowSizeY < 1900 ? 400 : 500}/>
                </div>  
            ) }
            
           
                
        </>
    )
}

