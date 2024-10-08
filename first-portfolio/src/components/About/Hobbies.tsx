
import React from "react";
import { Title } from "../Home/Information";
import { BoxWithLogo } from "../BoxWithLogo";
import { AboutData } from "@/lib/constant";


const HobbiesCards: React.FC = () => {
    const {Hobbies} = AboutData
    return (
        <div className="flex flex-wrap items-center gap-x-2 justify-center ">
           {Hobbies.map((item, index) => (
                <BoxWithLogo key={index} className="w-[160px] gap-3" url={`${item.url}`}>{item.title}</BoxWithLogo>
           ))}

        </div>
    )
}



export const Hobbies: React.FC = () => {
    return (
        <>
            <Title className="mt-4 text-defaultGreen">Hobbies</Title>
            <HobbiesCards/>
        </>
    )
}