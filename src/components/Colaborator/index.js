import './Colaborator.css'

const Colaborator = ({name, image, cargo}) => {
    return (<div className='colaborator'>
        <div className='cabecalho'>
            <img src={image} alt={name} />
        </div>
        <div className='rodape'>
            <h4>{name}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>)
}

export default Colaborator