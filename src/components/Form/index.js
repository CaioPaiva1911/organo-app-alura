import { useState } from 'react'
import Button from '../Button'
import DropdownList from '../DropdownList'
import Input from '../Input'
import './Form.css'


const Form = ({onCreate, teams, addTeam}) => {

    const [name, setName] = useState('')
    const [cargo, setCargo] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')
    const [teamName, setTeamName] = useState('')
    const [teamColor, setTeamColor] = useState('')
    
    const inSave = (event) => {
        event.preventDefault()
        console.log('form submitted', name, cargo, image, team) 
        onCreate({
            name, 
            cargo, 
            image, 
            team 
        })
        setName('')
        setCargo('')
        setImage('')
        setTeam('')
    }

    return (
        <section className="form-container">
            <form className="form" onSubmit={inSave}>
                <h2>Preecha os dados para criar o card do colaborador</h2>
                <Input 
                    required={true} 
                    label='Nome' 
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={value => setName(value)}
                />
                <Input 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    value={cargo}
                    onChange={value => setCargo(value)}
                />
                <Input 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    onChange={value => setImage(value)}    
                />
                <DropdownList 
                    required={true} 
                    label="Teams" 
                    itens={teams}
                    value={team}
                    onChange={value => setTeam(value)}
                />
                <Button text='Criar card'/>
            </form>

            <form className="form" onSubmit={(event) => {
                event.preventDefault()
                addTeam({name: teamName, color: teamColor})
                setTeamColor('')
                setTeamName('')
            }}>
                <h2>Preecha os dados para criar um novo time.</h2>
                <Input 
                    required 
                    label='Nome' 
                    placeholder="Digite o nome do time"
                    value={teamName}
                    onChange={value => setTeamName(value)}
                />
                <Input 
                    required
                    type='color'
                    label="Cor" 
                    placeholder="Digite a cor do time" 
                    value={teamColor} 
                    onChange={value => setTeamColor(value)}
                />

                <Button text='Criar um novo time'/>
            </form>
        </section>
    )
}

export default Form