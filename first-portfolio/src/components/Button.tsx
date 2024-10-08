import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    handleClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({children, className, handleClick}) => {
    return(
        <button onClick={handleClick} className={`${className} p-1 px-2 rounded-[7px] font-montserrat font-bold text-[13px] 2xl:text-[18px]`}>{children}</button>
    )
}