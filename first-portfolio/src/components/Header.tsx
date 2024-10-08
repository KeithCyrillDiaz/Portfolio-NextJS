"use client"; 

import React,  { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/navigation'; // Change this import
import { FacebookSVG, GitHubSVG, LinkedInSVG } from "./Icons";
import { BurgerButton, Menu } from "./Menu";
import { LoadingSpinner } from "./Loading";
import { useIsMobile } from "@/hooks/useMobileChecker";

type HeaderProps = {
    children: React.ReactNode;
    focus: "Home" | "About" | "Projects";

}


export const Header: React.FC<HeaderProps> = ({
    children,
    focus,
}) => {

    const router = useRouter(); 

    const [showMenu, setShowMenu] = useState<boolean>(false)

    const menuRef = useRef<HTMLDivElement>(null)
    const {isMobile, status} = useIsMobile()

    useEffect(() => {

        if(!showMenu) return // If the menu is closed, exit early
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setShowMenu(false); // close the menu if the user clicks outside the menu
            }
        };
        // Attach the event listener when the menu is open
            window.addEventListener("mousedown", handleClickOutside);

        // Cleanup the event listener when the effect is cleaned up
        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        };

    }, [showMenu]);
    

    if(status==="loading"){
        return(
            <LoadingSpinner className="h-[100vh]"/>
        )
    } 
    return (
        <>  
            <HeaderDivider>
                {showMenu && <Menu ref={menuRef} onClick={() => setShowMenu(!showMenu)} currentPage = {focus}/>}
                {isMobile ? (
                     /* this will show if the screen is small */
                    <BurgerButton onClick={() => setShowMenu(!showMenu) }/>
                ) : (
                    /* this will show if the screen is in dest */
                    <div className="lg:space-x-16 lg:ml-24 space-x-7 ml-7">
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
        className={`border-b-2 ${focus ? "border-b-defaultGreen" : "border-b-transparent"} inline-block px-1 font-montserrat text-white font-extrabold text-[17px] 2xl:text-[24px]`}>
            {children}
        </button>
    )
}
