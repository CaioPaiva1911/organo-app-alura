import './Button.css'

import React from 'react';

interface ButtonProps {
    text: string
}

export const Button = ({ text }: ButtonProps) => {
    return (
        <button className='button'>
            {text}
        </button>
    )
}

export default Button