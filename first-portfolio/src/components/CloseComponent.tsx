import React from "react";
import { CloseSVG } from "./Icons";


type CloseComponentProps = {
    onClick: () => void
}
export const CloseComponent: React.FC<CloseComponentProps> = ({
    onClick
}) => {
    return(
        <div onClick={onClick} className=" absolute top-4 right-4 z-10">
            <CloseSVG className="w-[75%] h-[75%] "/>
        </div>
    )
}