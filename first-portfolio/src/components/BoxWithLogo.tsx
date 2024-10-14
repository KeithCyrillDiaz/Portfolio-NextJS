"use client"
import React from "react";
import { CropImage } from "./ProfileImage";
import { LoadingSpinner } from "./Loading";
import { useIsMobile } from "@/hooks/useMobileChecker";

type BoxWithLogoProps = {
    url: string;
    children: React.ReactNode;
    className?: string;
}

export const BoxWithLogo: React.FC<BoxWithLogoProps> = ({url, children, className}) => {

    const {windowSizeY} =useIsMobile()
    return (
        <div className={`${className ? className : "gap-4 xl:w-[350px] 2xl:w-full sm:w-[170px]"} mb-1  xl:mb-2  2xl:text-[20px] sm:items-center flex flex-row bg-defaultGray items-center rounded-[7px] text-white font-montserrat text-[13px] font-extrabold`}>
           { url ?  (
                 <CropImage
                 className={`${children=== "Facebook" ? "rounded-[25px]" : "rounded-[7px]"}`}
                 url={`${url}`}
                 height={windowSizeY < 1600 ? 50 : windowSizeY < 1900 ? 60 : 60} 
                 width={windowSizeY < 1600 ? 50 : windowSizeY < 1900 ? 60 : 60}
                 />
           ) : (    
                <LoadingSpinner/>
           )}
            {children}
        </div>
    )
}

