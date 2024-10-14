import { ChildrenClassNameProps } from "@/lib/types";
import React from "react";
import { CloseComponent } from "./CloseComponent";

type ModalProps = {
    children: React.ReactNode;
    className?: string;
    onClick: () => void;
    visible: Boolean
}

export const Modal: React.FC<ModalProps> = ({children, className, onClick, visible}) => {
    return(
        <>
            {visible && (
                <div 
                className={`absolute h-[100vh] bg-black bg-opacity-60 w-full flex top-0 z-10 ${className}`}>
                <CloseComponent onClick={onClick}/>
                <div>
                    {children}
                </div>
            </div>
            )}
        </>

    )
}