import './Button.css'

import { ReactElement } from 'react';

interface ButtonProps {
    text: string | ReactElement
}

export const Button = ({ text }: ButtonProps) => {
    return (
        <button className='button'>
            {text}
        </button>
    )
}

export default Button