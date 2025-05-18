"use client"


import { MembersType } from "@/lib/Constants/Projects";
import React from "react";
import { CustomH2 } from "../H_Tags";
import { CropImage } from "../ProfileImage";
import { useIsMobile } from "@/hooks/useMobileChecker";
import { LoadingSpinner } from "../Loading";
import { moveItemToAnotherIndex } from "@/lib/helpers";

type MemberCardProp = {
    userData: MembersType;
    layout?: "responsive"
}

const MemberCard: React.FC<MemberCardProp> = ({userData, layout}) => {
    const {fullName, linkedInURL, profileImageURL, role} = userData
    return(
        <div className="bg-defaultGray py-2 w-[140px] sm:w-[190px] rounded-[7px] flex flex-col items-center">
            <div className=" w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] sm:py-4 xl:w-[200px] xl:h-[200px] items-center flex flex-col justify-center overflow-hidden rounded-[7px] ">
            <CropImage
            height={120}
            width={120}
            className="rounded-[7px]"
            url={`${profileImageURL}`}
            videoURL={`${linkedInURL}`}
            layout={layout}
            />
        </div>
        <CustomH2 className="text-white text-[10px] sm:text-[14px] mt-4">{fullName}</CustomH2>
        <CustomH2 className="text-defaultGreen text-[10px] sm:text-[12px] text-center pb-1">{role} </CustomH2>
        </div>
    )
}

const MemberCardForPC: React.FC<MemberCardProp> = ({userData, layout}) => {
    const {fullName, linkedInURL, profileImageURL, role} = userData
    return(
        <div className="bg-defaultGray py-2 w-[300px] 2xl:w-[350px] rounded-[7px] flex flex-col items-center">
        <div className=" w-[140px] sm:w-[200px] sm:py-4 xl:w-[200px] xl:h-[200px] 2xl:w-[250px] 2xl:h-[250px]  items-center flex flex-col justify-center overflow-hidden rounded-[7px] ">
           <CropImage
           height={120}
           width={120}
           className="rounded-[7px]"
           url={`${profileImageURL}`}
           videoURL={`${linkedInURL}`}
           layout={layout}
           />
       </div>
            <CustomH2 className="text-white text-[15px] 2xl:text-[20px]  mt-4">{fullName}</CustomH2>
           <CustomH2 className="text-defaultGreen text-[12px] w-[200px] 2xl:text-[17px] 2xl:w-[250px] text-center pb-1">{role} </CustomH2>
      </div>
        
    )
}



export const RenderMembers: React.FC<{memberData: MembersType[]}> = ({memberData}) => {

    const {isLandscape, isMobile, status} = useIsMobile();
    const filteredMembers: MembersType[] = [...memberData];
    //to put KeithDiaz in middle for landscape mobile
    moveItemToAnotherIndex(filteredMembers, 1, "Keith Cyrill A. Diaz", "fullName")
    if(status==="loading"){
        return(
            <LoadingSpinner/>
        )
    }
    return(
        <>
        {isMobile ? (
            <div className="mt-4">
                <CustomH2 className="text-white text-[13px]">
                    <span className="text-defaultGreen">Members</span> and their <span className="text-defaultGreen">Roles</span> in this Project
                </CustomH2>
                <div className="flex flex-wrap gap-x-2 gap-y-2 justify-center mt-4">
                    {memberData.map((userData, index) => (
                        <MemberCard key={index} userData={userData} layout="responsive"/>
                    ))}

                </div>
            </div>
        ) : isLandscape? (
            <div className="mt-4 ">
                <CustomH2 className="text-white text-[13px]">
                    <span className="text-defaultGreen">Members</span> and their <span className="text-defaultGreen">Roles</span> in this Project
                </CustomH2>
                <div className="flex flex-wrap gap-x-2 gap-y-2 justify-center mt-4">
                    {filteredMembers.map((userData, index) => (
                        <MemberCard key={index} userData={userData} layout="responsive"/>
                    ))}

                </div>
            </div>
        ) : (
            <div className="mt-4 ">
                <CustomH2 className="text-white text-[13px] 2xl:text-[20px]">
                    <span className="text-defaultGreen">Members</span> and their <span className="text-defaultGreen">Roles</span> in this Project
                </CustomH2>
                <div className="flex flex-wrap gap-x-2 gap-y-2 justify-center mt-4 ml-2">
                    {filteredMembers.map((userData, index) => (
                        <MemberCardForPC key={index} userData={userData} layout="responsive"/>
                    ))}

                </div>
            </div>
        )}
        </>
    )
}