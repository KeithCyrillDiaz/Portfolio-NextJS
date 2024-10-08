import { ChildrenClassNameProps } from "@/lib/types";
import React from "react";


export const H2: React.FC<ChildrenClassNameProps> = ({
    children
}) => {
    return (
        <div className="text-white font-montserrat font-extrabold text-[12px] xl:text-[15px]">{children}</div>
    )
}