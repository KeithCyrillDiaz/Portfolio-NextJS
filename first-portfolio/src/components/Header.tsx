"use client"; 

import React,  { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from 'next/navigation'; // Change this import
import { FacebookSVG, GitHubSVG, LinkedInSVG } from "./Icons";
import { BurgerButton, Menu } from "./Menu";
import { LoadingSpinner } from "./Loading";
import { useIsMobile } from "@/hooks/useMobileChecker";

type HeaderProps = {
    focus: "Home" | "About" | "Projects";
}


export const Header: React.FC<HeaderProps> = ({
    focus,
}) => {

    const router = useRouter(); 

    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [isAnimationOut, setIsAnimationOut] = useState<boolean>(false)

    const menuRef = useRef<HTMLDivElement>(null)
    const {isMobile, status} = useIsMobile()

    const menuAnimationDelay = useCallback(() => {
        if (showMenu && isAnimationOut) return;
        setIsAnimationOut(true);
        setTimeout(() => {
            setShowMenu(false); // Close the menu after 700ms
        }, 700);
    }, [showMenu, isAnimationOut]);

    useEffect(() => {
        
        if(!showMenu) {
            setIsAnimationOut(false)
            return 
        } // If the menu is closed, exit early
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                menuAnimationDelay();
            }
        };
        // Attach the event listener when the menu is open
            window.addEventListener("mousedown", handleClickOutside);

        // Cleanup the event listener when the effect is cleaned up
        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        };

    }, [showMenu, menuAnimationDelay]);
    

    if(status==="loading"){
        return(
            <LoadingSpinner className="h-[100vh]"/>
        )
    } 
    return (
        <>  
            <HeaderDivider>
            {isMobile && showMenu && (
                    <Menu
                        ref={menuRef} 
                        onClick={() => menuAnimationDelay()} 
                        currentPage={focus} 
                        className={`${isAnimationOut? "menu-out-animation opacity-0" : "menu-in-animation"  }`}
                    />
                )}
                
                {isMobile ? (
                     /* this will show if the screen is small */
                    <BurgerButton disabled={isAnimationOut} onClick={() => setShowMenu(!showMenu) }/>
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
        </>
    )
}

type HeaderDividerProps = {
    children: React.ReactNode;
    className?: string
}
export const HeaderDivider: React.FC<HeaderDividerProps> = ({children, className}) => {
    return (
        <div className={`  py-4  px-2 ${className ? className : "border-b-4 border-b-defaultGreen justify-between flex flex-row"}`}>
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
            className={`border-b-2 ${focus ? "border-b-defaultGreen text-defaultGreen" : "border-b-transparent text-white"} inline-block px-1 font-montserrat font-extrabold text-[17px] hover:text-defaultGreen transition-all duration-200`}
        >
            {children}
        </button>
    )
}