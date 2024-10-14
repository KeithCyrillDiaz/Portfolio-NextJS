
import React, {forwardRef} from "react";
import { AboutSVG, HamburgerMenuSVG, HomeSVG, ProjectSVG } from "./Icons";
import { HeaderDivider } from "./Header";
import { useRouter } from "next/navigation";

type BurgerButtonProps = {
    onClick: () => void;
    disabled: boolean;
}
export const BurgerButton: React.FC<BurgerButtonProps> = ({
    onClick,
    disabled
}) => {
    return(
        <button disabled={disabled} onClick={onClick}>
            <HamburgerMenuSVG/>
        </button>
 
    )
}
type MenuProps = {
    onClick: () => void;
    currentPage: "Home" | "About" | "Projects";
    className?: string;
    disabled?: boolean;
}
export const Menu = forwardRef<HTMLDivElement, MenuProps>(
    ({ 
        onClick, 
        currentPage, 
        className,
        disabled,

    }, ref) => {

    const router = useRouter();
    return (
        <div ref={ref} className={`absolute z-10 bg-defaultGray h-[100vh] w-[60%] left-0 top-0 pt-5 text-white ${className}`}>
            <HeaderDivider className="mx-4 py-[15.5px]">
                <button disabled={disabled} onClick={onClick} className="font-montserrat font-extrabold text-[19px] mb-[-12px]">Menu</button>
            </HeaderDivider>
            <div className="my-2 flex flex-col space-y-2">
                <MenuButton focus={currentPage === "Home"} onClick={() => router.push('/')}>Home</MenuButton>
                <MenuButton focus={currentPage === "About"} onClick={() => router.push('/about')}>About</MenuButton>
                <MenuButton focus={currentPage === "Projects"} onClick={() => router.push('/projects')}>Project</MenuButton>
            </div>
        </div>
    );
});

Menu.displayName = "Menu";

type MenuButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
    focus: boolean;
}
const MenuButton: React.FC<MenuButtonProps> = ({children, onClick, focus}) => {
    return(
        <div 
        onClick={onClick}
        className={` font-montserrat font-semibold text-[17px] ${focus ? "bg-defaultDarkerGray text-defaultGreen" : "bg-transparent text-white"} w-full px-8 pl-4 flex flex-row items-center gap-2`}
        >
            {children === "Home" && <HomeSVG focus={focus}/>}
            {children === "About" && <AboutSVG focus={focus}/>}
            {children === "Project" && <ProjectSVG focus={focus}/>}
            {children}
        </div>
    
      
    
    )
}