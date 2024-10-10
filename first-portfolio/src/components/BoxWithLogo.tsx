import React from "react";
import { CropImage } from "./ProfileImage";
import { LoadingSpinner } from "./Loading";

type BoxWithLogoProps = {
    url: string;
    children: React.ReactNode;
    className?: string;
}

export const BoxWithLogo: React.FC<BoxWithLogoProps> = ({url, children, className}) => {
    return (
        <div className={`${className ? className : "gap-4"} mb-1 xl:w-[200px] 2xl:w-[400px] xl:mb-2 sm:w-[170px] sm:items-center flex flex-row bg-defaultGray items-center rounded-[7px] text-white font-montserrat text-[13px] font-extrabold`}>
           { url ?  (
                 <CropImage
                 className={`${children=== "Facebook" ? "rounded-[25px]" : "rounded-[7px]"}`}
                 url={`${url}`}
                 height={50}
                 width={50}
                 />
           ) : (    
                <LoadingSpinner/>
           )}
            {children}
        </div>
    )
}