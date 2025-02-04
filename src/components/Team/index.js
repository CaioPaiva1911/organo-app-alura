import Colaborator from '../Colaborator';
import './Team.css';
//Dumb component
const Team = ({team, colaborators}) => {

    return (
       colaborators.length > 0 && <section className='team'  style={{ backgroundImage: 'url(/images/fundo.png)', backgroundColor: team.primaryColor }}>
            <h3 style={{ borderColor: team.primaryColor }}>{team.name}</h3>
            <div className='colaborators'>
                {colaborators.map((colaborator, index) => {
                console.log('render colaborator')
                return <Colaborator 
                    key={index}
                    colaborator={colaborator}
                    backgroundColor={team.secondaryColor}
                    // onDelete={() => {onDelete}}
                />
            })}
            </div>
        </section>
    )
}

export default Team