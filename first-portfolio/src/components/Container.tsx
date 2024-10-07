import React from "react";

type ContainerProps = {
    children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({children}) => {
    return(
        <div className="bg-black px-8 py-2 md:px-20 md:py-12 h-[100vh] w-[100wh]">{children}</div> 
    )
}