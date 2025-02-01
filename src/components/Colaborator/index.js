import './Colaborator.css'

const Colaborator = ({name, image, cargo, backgroundColor}) => {
    return (<div className='colaborator'>
        <div className='cabecalho' style={{backgroundColor: backgroundColor}}>
            <img src={image} alt={name} />
        </div>
        <div className='rodape'>
            <h4>{name}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>)
}

export default Colaborator