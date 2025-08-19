import './input.css'

interface InputProps {
    type: string;
    label: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    required?: boolean;
}

const Input = ({ type = 'text', label, placeholder, value, onChange, required = true }: InputProps) => {

    return (
        <div className={`input set-${type}`}>
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={event => onChange(event.target.value)}
                required={required}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input