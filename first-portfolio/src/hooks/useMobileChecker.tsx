"use client"
import { Status } from "@/lib/types";
import { useState, useEffect } from "react";

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isLandscape, setIsLandscape] = useState<boolean>(false);
    const [status, setStatus] = useState<Status>('loading');
    const [windowSizeY, setWindowSizeY] = useState<number>(1366) //default size of my monitor

    const handleResize = () => { 
        setIsMobile(window.innerWidth < 768);
        setIsLandscape(window.innerWidth < 1200);
        setWindowSizeY(window.innerWidth)
    };

    useEffect(() => {
        handleResize();
        setStatus('idle');
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        isMobile,
        isLandscape,
        status,
        windowSizeY
    };
};
