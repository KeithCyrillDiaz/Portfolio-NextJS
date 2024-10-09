import { ChildrenClassNameProps } from "@/lib/types";
import React from "react";


export const BackgroundColor: React.FC<ChildrenClassNameProps> = ({children, className}) => {
    return (
        <div className={`${className ? className : "h-[100vh]"} bg-black `}>
            {children}
        </div>
    )
}