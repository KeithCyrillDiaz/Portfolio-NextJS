
import React from "react";
import { Title } from "../Home/Information";
import { BoxWithLogo } from "../BoxWithLogo";
import { AboutData } from "@/lib/Constants/About";


const HobbiesCards: React.FC = () => {
    const {Hobbies} = AboutData
    return (
        <div className="flex flex-wrap items-center gap-x-2 sm:gap-x-7 justify-center slide-in-from-bottom">
           {Hobbies.map((item, index) => (
                <BoxWithLogo key={index} className=" text-[12px] w-[160px] sm:w-[180px] xl:w-[200px] 2xl:w-[250px] gap-3 2xl:gap-4" url={`${item.url}`}>{item.title}</BoxWithLogo>
           ))}

        </div>
    )
}



export const Hobbies: React.FC = () => {
    return (
        <>
            <Title className="mt-4 text-defaultGreen slide-in-from-left">Hobbies</Title>
            <HobbiesCards/>
        </>
    )
}