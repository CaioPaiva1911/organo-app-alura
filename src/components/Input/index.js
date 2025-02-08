import './input.css'

const Input = ({ type = 'text', label, placeholder, value, onChange, required = true }) => {
    
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