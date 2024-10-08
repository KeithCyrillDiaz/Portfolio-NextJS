import Image from "next/image";
import React from "react";

type ProfileImageProp = {
    className?: string;
    height?: number;
    width?: number;
}

export const ProfileImage: React.FC<ProfileImageProp> = ({
    className,
    height = 400,
    width = 400
}) => {
    return(
        <div style={{ height: `${height + 35}px`, width: `${width + 35}px` }}>
            <div className="relative h-full w-full">
                <CornerBorderWhite/>
                <CornerBorderGreen/>
                <Image
                    src={"https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg"}     
                    alt={"Keith Diaz Profile Picture"}       
                    width={width}         
                    height={height}        
                    className={`absolute top-3 left-3`} 
                />
            </div>
        </div>
       
    )
}

const CornerBorderWhite: React.FC = () => {
    return(
        <div className=" h-[20%] bg-white w-[20%] absolute left-0 top-0"/>
    )
}


const CornerBorderGreen: React.FC = () => {
    return(
        <div className=" h-[85%] bg-defaultGreen w-[85%] absolute bottom-0 right-0"/>
    )
}