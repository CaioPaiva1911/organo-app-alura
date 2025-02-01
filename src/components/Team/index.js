import Colaborator from '../Colaborator';
import './Team.css';
//Dumb component
const Team = (props) => {
    const css = { backgroundColor: props.secondaryColor}
    return (
       props.colaborators.length > 0 && <section className='team' style={css}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='colaborators'>
                {props.colaborators.map(colaborator => <Colaborator key={colaborator.name}
                name={colaborator.name} cargo={colaborator.cargo} image={colaborator.image} />)}
            </div>
        </section>
    )
}

export default Team