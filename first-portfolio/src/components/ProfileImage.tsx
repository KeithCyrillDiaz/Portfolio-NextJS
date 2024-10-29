"use client"

import Image from "next/image";
import React from "react";
import dotenv from 'dotenv'
import { LoadingSpinner } from "./Loading";
dotenv.config();

type ProfileImageProp = {
    height?: number;
    width?: number;
    className?: string
    url?: string
}

export const ProfileImage: React.FC<ProfileImageProp> = ({
    height = 300,
    width = 300,
    className,
    url = process.env.NEXT_PUBLIC_DP_URL
}) => {

    if(!url) {
        return (
            <LoadingSpinner/>
        )
    }
    return(
        <div className={` ${className ? className : "slide-in-from-right"}`}
        style={{ height: `${height + 35}px`, width: `${width + 35}px` }}
        >
            <div className="relative h-full w-full ">
                <CornerBorderWhite/>
                <CornerBorderGreen/>
                <CropImage height={height} width={width} url={url}/>

            </div>
        </div>
       
    )
}
 type CropImageProps = {
    height: number;
    width: number;
    url: string;
    className?: string;
    layout?: "responsive"
    videoURL?: string
 }
export const CropImage: React.FC<CropImageProps> = ({
    height, 
    width, 
    url, 
    className, 
    layout,
    videoURL
}) => {

    if(!url) {
        return (
           <LoadingSpinner className="w-[83.5vh] xl:w-[45vh] 2xl:w-[33vh]"/>
        )
    }
    return(
      <>
            <div className="relative h-[85%] sm:h-[100%] lg:h-[100%]">
            <a href={videoURL ?? url} target="_blank" rel="noopener noreferrer">
                <Image
                    src={url}     
                    alt={"Keith Diaz Profile Picture"}
                    width={height} 
                    height={width}
                    layout={layout} 
                    className={`${className ? className : "absolute top-3 left-3 h-full"} object-cover `} 
                    style={{ width: width, height: height }} // to remove warnings and nsure it scales proportionally
                    priority // Add this to improve load time for above-the-fold images 
                    quality={100}
                />
            </a>
            </div> 
      </>
    )
}

const CornerBorderWhite: React.FC = () => {
    return(
        <div className=" h-[20%] bg-white w-[20%] absolute left-0 top-0"/>
    )
}


const CornerBorderGreen: React.FC = () => {
    return(
        <div className=" h-[85%] bg-defaultGreen w-[85%] absolute bottom-0 right-0"/>
    )
}