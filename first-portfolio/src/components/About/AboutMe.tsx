"use client"
import React from "react";
import { CropImage} from "../ProfileImage";
import { PersonalInformation } from "./PersonalInformation";
import { useIsMobile } from "@/hooks/useMobileChecker";
import { LoadingSpinner } from "../Loading";


export const AboutMe: React.FC = () => {
    const {isMobile, isLandscape, status, windowSizeY} = useIsMobile()
    const img = process.env.NEXT_PUBLIC_DP_ABOUT_URL

    if(status==="loading" || !img){
        return (
            <LoadingSpinner className="h-[100vh]"/>
        )
    }
    return(
        <>
            {isMobile ? (
                <>
                     <div className="flex items-center justify-center my-7">
                        <CropImage className="rounded-[17px] h-full slide-in-from-top" url={`${img}`} height={300} width={300}/>
                    </div>
                    <div className=" justify-center items-center flex">
                        <PersonalInformation/>
                    </div>
                    
                </>
            ) : isLandscape ? ( //landscape in mobile
                <>  
                    <div className="flex flex-row space-x-7 mt-8 items-center justify-center">
                        <CropImage className="rounded-[17px] h-full slide-in-from-left" url={`${img}`} height={300} width={300}/>
                        <PersonalInformation/>
                    </div>
                    
                </>
               
            ) : (
                    //desktop view
                <div className="flex flex-row items-center justify-center space-x-20 mt-12">
                    <CropImage className="rounded-[17px] h-full slide-in-from-left" url={`${img}`}
                     height={windowSizeY < 1600 ? 350 : windowSizeY < 1900 ? 400 : 450} 
                     width={windowSizeY < 1600 ? 350 : windowSizeY < 1900 ? 400 : 450}/>
                    <PersonalInformation className="w-[50%]"/>
                </div>
            )}
           
        </>
    )
}