import React from 'react';
export const Button = ({ children, label, primary, size, onClick }) => {
    return React.createElement("button", { onClick: onClick }, label);
};
