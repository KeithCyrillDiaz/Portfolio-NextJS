import React from "react"

export type ChildrenClassNameProps = {
    children: React.ReactNode;
    className?: string;
}

export type Status = 'loading' | 'idle' | 'error' | 'success'

export type dateTypes = 
'January' | 'February' | 'March' | 'April' | 'May' | 'June'
| 'July' | 'August' | 'September' | 'October' | 'November' | 'December';