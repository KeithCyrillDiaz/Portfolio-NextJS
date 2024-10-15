import React from "react";
import { TimeLine } from "../TimeLineCard";
import { Title } from "../Home/Information";


export const Experience: React.FC = () => {
    return (
        <div className="py-4 ">
            <Title className="text-defaultGreen slide-in-from-left">Experience</Title>
            <TimeLine/>
        </div >
    )
}