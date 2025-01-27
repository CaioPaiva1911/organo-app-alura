import './TextInput.css'

const TextInput = (props) => {
    const PlaceholderModificated = `${props.placeholder}...`
    
    return (
        <div className="text-input">
            <label>
                {props.label}
            </label>
            <input placeholder={PlaceholderModificated}/>
        </div>
    )
}

export default TextInput