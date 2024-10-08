import React from "react"

export type ChildrenClassNameProps = {
    children: React.ReactNode;
    className?: string;
}

export type Status = 'loading' | 'idle' | 'error' | 'success'