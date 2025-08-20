import { IColaborator } from '../../shared/interfaces/Colaborator';
import Colaborator from '../Colaborator';
import './Team.css';
import hexToRgba from 'hex-to-rgba';

interface TeamProps {
    team: {
        id: string;
        name: string;
        color: string;
        primaryColor: string;
    };
    colaborators: IColaborator[]
    onDelete: (teamId: string) => void;
    changeColor: (color: string, teamId: string) => void;
    onFavorite: (id: string) => void;
}

//Dumb component
const Team = ({ team, colaborators, onDelete, changeColor, onFavorite }: TeamProps) => {

    return (
        colaborators.length > 0 && <section className='team' style={{ backgroundImage: 'url(/images/fundo.png)', backgroundColor: hexToRgba(team.color, '0.6') }}>
            <input onChange={event => changeColor(event.target.value, team.id)} value={team.color} type='color' className='input-color' />
            <h3 style={{ borderColor: team.primaryColor }}>{team.name}</h3>
            <div className='colaborators'>
                {colaborators.map((colaborator, index) => {
                    return (
                        <Colaborator
                            key={index}
                            colaborator={colaborator}
                            backgroundColor={team.color}
                            onDelete={onDelete}
                            onFavorite={onFavorite}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Team