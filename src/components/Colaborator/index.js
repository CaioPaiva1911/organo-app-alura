import './Colaborator.css'
import { IoCloseCircleSharp } from "react-icons/io5"

const Colaborator = ({colaborator, backgroundColor, onDelete}) => {
    return (<div className='colaborator'>
        <IoCloseCircleSharp  size={25} className='delete' onClick={onDelete} />
        <div className='cabecalho' style={{backgroundColor: backgroundColor}}>
            <img src={colaborator.image} alt={colaborator.name} />
        </div>
        <div className='rodape'>
            <h4>{colaborator.name}</h4>
            <h5>{colaborator.cargo}</h5>
        </div>
    </div>)
}

export default Colaborator