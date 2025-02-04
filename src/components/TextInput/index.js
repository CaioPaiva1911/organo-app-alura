import './TextInput.css'

const TextInput = ({label, placeholder, value, onChange, required = true }) => {
    
    return (
        <div className="text-input">
            <label>
                {label}
            </label>
            <input value={value} onChange={event => onChange(event.target.value)} required={required} placeholder={placeholder}/>
        </div>
    )
}

export default TextInput