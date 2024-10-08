import React from "react";
import Link from 'next/link';

type SVGComponentProps = {
    link?: string;
    children:  React.ReactNode;
}

const SVGComponent: React.FC<SVGComponentProps> = ({
    link = "",
    children
}) => {
    return(
       <>
         {link === "" ? (
            <div className="w-7 md:w-9">
                {children}
            </div>
        ) : (
            <Link 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center"
            >
                <div className="w-7">
                    {children}
                </div>
            </Link>
        )}
       </>
    )
}

export const FacebookSVG: React.FC = () => {
    return(
        <SVGComponent
            link="https://www.facebook.com/keith.diaz.58"
            >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24">
                <path fill="#1db954" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
            </svg>
        </SVGComponent>
    )
}

export const GitHubSVG: React.FC = () => {
    return(
        <SVGComponent
            link="https://github.com/KeithCyrillDiaz" 
            >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24"><path fill="#1db954" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
        </SVGComponent>
    )
}

export const LinkedInSVG: React.FC = () => {
    return(
        <SVGComponent
            link="https://www.linkedin.com/in/keith-cyrill-diaz-637a5a2b2/" 
            >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24"><path fill="#1db954" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg>
        </SVGComponent>
    )
}

export const HamburgerMenuSVG: React.FC = () => {
    return(
        <SVGComponent>
             <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24"><path fill="none" stroke="#1db954" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 6h18M3 12h18M3 18h18"/></svg>
        </SVGComponent>
    )
}

type SVGChildrenProps = {
    focus?: boolean;
}

export const HomeSVG: React.FC<SVGChildrenProps> = ({focus}) => {
   return(
    <SVGComponent>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24"><path fill={focus ? "#1DB954": "white"} d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"/></svg>
    </SVGComponent>
   )
}

export const AboutSVG: React.FC<SVGChildrenProps> = ({focus}) => {
    return(
     <SVGComponent>
         <svg xmlns="http://www.w3.org/2000/svg"  className="w-full h-full" viewBox="0 0 256 256"><path fill={focus ? "#1DB954": "white"} d="M230.93 220a8 8 0 0 1-6.93 4H32a8 8 0 0 1-6.92-12c15.23-26.33 38.7-45.21 66.09-54.16a72 72 0 1 1 73.66 0c27.39 8.95 50.86 27.83 66.09 54.16a8 8 0 0 1 .01 8"/></svg>
     </SVGComponent>
    )
 }
 
 export const ProjectSVG: React.FC<SVGChildrenProps> = ({focus}) => {
    return(
     <SVGComponent>
         <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full"  viewBox="0 0 24 24"><path fill={focus ? "#1DB954": "white"} d="M13 9V3.5L18.5 9M6 2c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/></svg>
     </SVGComponent>
    )
 }


 export const PhoneSVG:React.FC = () => {
    return(
        <SVGComponent>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24"><path fill="#1DB954" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"/></svg>
        </SVGComponent>
    )
 }

 export const EmailSVG:React.FC = () => {
    return(
        <SVGComponent>
           <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24"><path fill="#1DB954" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"/></svg>
        </SVGComponent>
    )
 }


 export const AddressSVG:React.FC = () => {
    return(
        <SVGComponent>
           <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24"><path fill="#1DB954" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"/></svg>
        </SVGComponent>
    )
 }