"use client"

import { useIsMobile } from "@/hooks/useMobileChecker";
import React from "react";

type ContainerProps = {
    children: React.ReactNode;
    className?: string
}


export const Container: React.FC<ContainerProps> = ({children, className}) => {
    const {isMobile, isLandscape} = useIsMobile()
    if(isMobile){
        return (
            <div className={`px-8 py-2 md:px-20 md:py-12 ${className}`}>{children}</div> 
        )
    } else if(isLandscape){
        return(
            <div className={`px-12 pt-2 ${className}`}>{children}</div> 
        )
    } else {
        return (
            <div className={ `mx-20 pt-4 ${className}`}>{children}</div> 
        )
    }
    
}