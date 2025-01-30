import './TextInput.css'

const TextInput = (props) => {
    const PlaceholderModificated = `${props.placeholder}...`
    
    const onWrite = (event) => { 
        props.onChange(event.target.value)
    }

    return (
        <div className="text-input">
            <label>
                {props.label}
            </label>
            <input value={props.value} onChange={onWrite} required={props.required} placeholder={PlaceholderModificated}/>
        </div>
    )
}

export default TextInput