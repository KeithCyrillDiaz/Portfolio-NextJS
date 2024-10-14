import React from "react";
import { HeaderDivider } from "./Header";


export const Footer: React.FC<{focus: 'Home' | 'About' | 'Projects' }> = ({focus}) => {
    return (
        <>
        {focus === "About" ? (
            <HeaderDivider className="border-t-2 border-t-defaultGreen mt-7 pb-7 text-white items-center justify-center font-montserrat font-light italic text-[12px] xl:text-[17px] text-center">
                1 Corinthians 10:31 (KJV) : <span className="italic">Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God.</span>
                That&#39;s All for Now
            </HeaderDivider>
           
        ) : (
            <HeaderDivider className="border-t-2 border-t-defaultGreen mt-7 pb-7 text-white items-center justify-center font-montserrat font-bold text-center">
                That&#39;s All for Now
            </HeaderDivider>
        )}
        </>
      
      
    )
}