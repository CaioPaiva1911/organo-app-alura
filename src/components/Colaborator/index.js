import './Colaborator.css'

const Colaborator = ({colaborator, backgroundColor}) => {
    return (<div className='colaborator'>
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