import { ChildrenClassNameProps } from "@/lib/types";
import React from "react";


export const H2: React.FC<ChildrenClassNameProps> = ({
    children
}) => {
    return (
        <div className="text-white font-montserrat font-extrabold text-[12px] xl:text-[15px] 2xl:text-[17px]">{children}</div>
    )
}



export const CustomH2: React.FC<ChildrenClassNameProps> = ({
    children,
    className
}) => {
    return (
        <div className={`${className ? className : "text-white text-[12px] xl:text-[15px] "} font-montserrat font-extrabold`}>{children}</div>
    )
}
