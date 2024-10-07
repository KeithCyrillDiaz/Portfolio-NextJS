"use client"; 

import React,  { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'; // Change this import
import { FacebookSVG, GitHubSVG, LinkedInSVG } from "./Icons";
import { BurgerButton, Menu } from "./Menu";
import { LoadingSpinner } from "./Loading";

type HeaderProps = {
    children: React.ReactNode;
    focus: "Home" | "About" | "Projects";

}


type Status = 'loading' | 'idle' | 'error' | 'success'

export const Header: React.FC<HeaderProps> = ({
    children,
    focus,
}) => {

    const router = useRouter(); 
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [status, setStatus] = useState<Status>('loading')

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        setStatus("idle");
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if(status === "loading"){
        return(
            <LoadingSpinner className="h-full"/>
        )
    } 
    return (
        <>  
            <HeaderDivider>
                {showMenu && <Menu onClick={() => setShowMenu(!showMenu)} currentPage = {focus}/>}
                {isMobile ? (
                     /* this will show if the screen is small */
                    <BurgerButton onClick={() => setShowMenu(!showMenu) }/>
                ) : (
                    /* this will show if the screen is in dest */
                    <div className="space-x-16 ml-24">
                        <ButtonTabs onClick={() => router.push('/')} focus={focus === "Home"}>Home</ButtonTabs>
                        <ButtonTabs onClick={() => router.push('/about')} focus={focus === "About"}>About</ButtonTabs>
                        <ButtonTabs onClick={() => router.push('/projects')} focus={focus === "Projects"}>Projects</ButtonTabs>
                    </div>
                )}
    
                <div className="flex flex-row space-x-1 md:space-x-2">
                    <FacebookSVG/>
                    <GitHubSVG/>
                    <LinkedInSVG/>
                </div>
            </HeaderDivider>
           
            <div>{children}</div>
        </>
    )
}

type HeaderDividerProps = {
    children: React.ReactNode;
    className?: string
}
export const HeaderDivider: React.FC<HeaderDividerProps> = ({children, className}) => {
    return (
        <div className={`border-b-4 border-b-defaultGreen py-4 justify-between flex flex-row px-2 ${className}`}>
            {children}
        </div>
    )
}
type ButtonTabsProps = {
    children: React.ReactNode;
    focus?: boolean;
    onClick: () => void;
}

export const ButtonTabs: React.FC<ButtonTabsProps> = ({
    children,
    focus,
    onClick
}) => {
    return (
        <button 
        onClick={onClick} 
        className={`border-b-2 ${focus ? "border-b-defaultGreen" : "border-b-transparent"} inline-block px-1 font-montserrat text-white font-extrabold text-[17px]`}>
            {children}
        </button>
    )
}
