import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    handleClick?: () => void;
    disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({children, className, handleClick, disabled}) => {
    //need to add the bg and text color in classname prop to make it dyanmic component and reusable
    return(
        <button disabled={disabled} onClick={handleClick} className={`${className} p-1 px-2 rounded-[7px] font-montserrat font-bold text-[13px] 2xl:text-[18px] transition-all duration-200`}>{children}</button>
    )
}