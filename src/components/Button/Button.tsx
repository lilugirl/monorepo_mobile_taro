import React from 'react';
export const Button = ({children,label,primary,size,onClick})=>{
    return <button onClick={onClick}>{label}</button>
}