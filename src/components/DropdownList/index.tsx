import './DropdownList.css';

interface DropdownListProps {
   onChange: (value: string) => void;
   label: string;
   required?: boolean;
   itens: string[];
   value: string;
}

const DropdownList = (props: DropdownListProps) => {
    return (
        <div className='dropdown-list'>
            <label>{props.label}</label>
            <select onChange={event => props.onChange(event.target.value)} required={props.required} value={props.value}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}       
            </select>
        </div>
    )
}

export default DropdownList