import Image from "next/image";
import React from "react";
import dotenv from 'dotenv'

dotenv.config();

type ProfileImageProp = {
    height?: number;
    width?: number;
}

export const ProfileImage: React.FC<ProfileImageProp> = ({
    height = 400,
    width = 400
}) => {
    return(
        <div style={{ height: `${height + 35}px`, width: `${width + 35}px` }}
        >
            <div className="relative h-full w-full ">
                <CornerBorderWhite/>
                <CornerBorderGreen/>
                <CropImage height={height} width={width}/>

            </div>
        </div>
       
    )
}
 type CropImageProps = {
    height: number;
    width: number;
 }
const CropImage = ({height, width}: CropImageProps) => {
    return(
        <div className="relative h-[85%] lg:h-[90%]">
            <Image
            src={`${process.env.NEXT_PUBLIC_DP_URL}`}     
            alt={"Keith Diaz Profile Picture"}
            width={height} 
            height={width}
            className={`absolute top-3 left-3 object-cover h-full`} 
        />
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