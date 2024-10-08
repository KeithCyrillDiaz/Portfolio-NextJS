import React from "react";
import { ChildrenClassNameProps } from "@/lib/types";
import { Button } from "../Button";




export const Information: React.FC = () => {
    return(
        <div className="flex flex-col slide-in-from-bottom">
            <Title>Keith Diaz</Title>
            <SubTitle>Full Stack Developer | Mobile & Web Developer</SubTitle>
            <SubInfo>Passionate <span className="text-defaultGreen font-bold">Developer</span> from the Philippines</SubInfo>
            <div className="flex flex-row gap-2 mt-4">
                <Button handleClick={() => {}}className="bg-defaultGreen text-white">
                    <a
                        href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Send Email
                    </a>
                </Button>
                <Button className="bg-defaultGray text-white"> <a
                    href={process.env.NEXT_PUBLIC_RESUME_URL}
                    download="Keith_Diaz_Resume.pdf" 
                    target="_blank"
                    rel="noopener noreferrer" // Recommended for security
                >
                    Download Resume
                </a></Button>
            </div>
           

        </div>
       
    )
}



type TitleProps = {
    children: React.ReactNode;
    className?: string
}
export const Title: React.FC<TitleProps> = ({children, className}) => {
    return(
        <div className={`inline-block text-white font-montserrat font-extrabold text-[30px] 2xl:text-[50px] ${className}`}>{children}</div>
    )
}


const SubTitle: React.FC<ChildrenClassNameProps> = ({children, className}) => {
    return(
        <div className={`font-montserrat font-bold text-[14px] 2xl:text-[22px] text-defaultGreen ${className}`}>{children}</div>
    )
}

const SubInfo: React.FC<ChildrenClassNameProps> = ({children, className}) => {
    return(
        <div className={`text-white font-montserrat font-light text-[13px] 2xl:text-[20px] ${className}`}>{children}</div>
    )
}

