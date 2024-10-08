"use client"

import { useIsMobile } from "@/hooks/useMobileChecker";
import React from "react";

type ContainerProps = {
    children: React.ReactNode;
    className?: string
}


export const Container: React.FC<ContainerProps> = ({children, className}) => {
    const {isMobile} = useIsMobile()
    if(!isMobile){
        return (
            <div className={`px-8 py-2 md:px-20 md:py-12 lg:h-[100vh] ${className}`}>{children}</div> 
        )
    } else
    return(
        <div className={`px-8 pt-2 md:px-20 md:py-12 lg:h-[100vh] ${className}`}>{children}</div> 
    )
}