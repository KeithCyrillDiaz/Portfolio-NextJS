import { ChildrenClassNameProps } from "@/lib/types";
import React from "react";


export const BackgroundColor: React.FC<ChildrenClassNameProps> = ({children, className}) => {
    return (
        <div className={`${className} bg-black xs:h-[100vh]`}>
            {children}
        </div>
    )
}