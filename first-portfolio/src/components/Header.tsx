"use client"; 

import React,  { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'; // Change this import
import { FacebookSVG, GitHubSVG, LinkedInSVG } from "./Icons";
import { BurgerMenu } from "./Menu";

type HeaderProps = {
    children: React.ReactNode;
    focus: "Home" | "About" | "Projects";
}

export const Header: React.FC<HeaderProps> = ({
    children,
    focus
}) => {

    const router = useRouter(); 
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <>
            <div className="border-b-4 border-b-defaultGreen py-4 justify-between flex flex-row px-2">
                {isMobile ? (
                     /* this will show if the screen is small */
                     <BurgerMenu/>
                ) : (
                     /* this will show if the screen is in dest */
                     <div className="space-x-16 ml-24">
                        <ButtonTabs onClick={() => router.push('/home')} focus={focus === "Home"}>Home</ButtonTabs>
                        <ButtonTabs onClick={() => router.push('/about')} focus={focus === "About"}>About</ButtonTabs>
                        <ButtonTabs onClick={() => router.push('/projects')} focus={focus === "Projects"}>Projects</ButtonTabs>
                    </div>
                )
                }
 
                <div className="flex flex-row space-x-1 md:space-x-2">
                    <FacebookSVG/>
                    <GitHubSVG/>
                    <LinkedInSVG/>
                </div>
            </div>
           
            <div>{children}</div>
        </>
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
