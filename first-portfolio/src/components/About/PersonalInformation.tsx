import { ChildrenClassNameProps } from "@/lib/types";
import React from "react";
import { Title } from "../Home/Information";
import { AboutData } from "@/lib/constant";
import { AddressSVG, EmailSVG, PhoneSVG } from "../Icons";


export const Paragraph: React.FC<ChildrenClassNameProps> = ({
    children,
    className
}) => {
    return(
        <div className={`${className} font-montserrat font-light text-[12px] xl:text-[15px] 2xl:text-[19px] text-white text-justify`}>{children}</div>
    )
}

type DetailsContainerProps = {
    children: React.ReactNode;
    className?: string;
    icon: "email" | "contact" | "address";
    title: "Contact Number" | "Email" | "Address"
}

const DetailsContainer: React.FC<DetailsContainerProps> = ({
    children,
    className,
    icon,
    title
}) => {
    return(
        <div className={`${className} flex flex-row text-[12px] xl:text-[15px] 2xl:text-[19px] text-white items-center`}>
                {icon === "email" ?  <EmailSVG/> : icon === "contact" ? <PhoneSVG/> : <AddressSVG/>}
                <span className="font-bold mx-2">{title}: </span>
                {children}
        </div>
    )
}

const PersonalDetails: React.FC= () => {
    const {email, contactNumber, address} = AboutData.PersonalInformation
    return(
        <div 
        className="my-2 mx-4"
        >   
           <DetailsContainer icon="contact" title="Contact Number">{contactNumber}</DetailsContainer>
           <DetailsContainer icon="email" title="Email">{email}</DetailsContainer>
           <DetailsContainer icon="address" title="Address">{address}</DetailsContainer>

        </div>
    )
}

type PersonalInformationProps = {
    className?: string;
}

export const PersonalInformation: React.FC<PersonalInformationProps> = ({
    className
}) => {
    const{
        firstParagpraph, 
        title, 
        lastParagraph,
    } = AboutData.PersonalInformation;
    return (
        <div className={`${className ? className : "w-[320px]"} flex flex-col slide-in-from-bottom`}>
            <Title className="text-defaultGreen xl:text-[35px]">{title}</Title>
            <Paragraph>
                {firstParagpraph[0]}
                <span className="text-defaultGreen font-semibold">{firstParagpraph[1]}</span>
                {firstParagpraph[2]}
                <span className="text-defaultGreen font-semibold">{firstParagpraph[3]}</span>
                {firstParagpraph[4]}
            </Paragraph>
            <PersonalDetails/>
            <Paragraph>{lastParagraph}</Paragraph>
        </div>

    )
}

