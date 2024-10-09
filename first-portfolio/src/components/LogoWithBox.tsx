import React from "react";
import { CropImage } from "./ProfileImage";

type BoxWithLogoProps = {
    url: string;
    children: React.ReactNode;
}

export const BoxWithLogo: React.FC<BoxWithLogoProps> = ({url, children}) => {
    return (
        <div className="flex flex-row bg-defaultGray items-center gap-4 rounded-[7px] text-white font-montserrat text-[13px] font-extrabold">
            <CropImage
            className="rounded-[7px]"
            url={`${url}`}
            height={50}
            width={50}
            />
            {children}
        </div>
    )
}