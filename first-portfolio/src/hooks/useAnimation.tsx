import React, {useState} from "react";


export const useAnimation = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [isAnimationOut, setIsAnimationOut] = useState<boolean>(false)

    const animationDelay = async () => {
        setIsAnimationOut(true)
        setTimeout(() => {
            setShowModal(false); // Close the menu after 700ms
            setIsAnimationOut(false)
        }, 400);
    };

    return {
        showModal,
        setShowModal,
        isAnimationOut,
        animationDelay
    }

}