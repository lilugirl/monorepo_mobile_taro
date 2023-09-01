import React from 'react';
export const Button = ({ children, onClick }) => {
    return React.createElement("button", { onClick: onClick }, children);
};
