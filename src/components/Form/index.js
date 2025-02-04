import { useState } from 'react'
import Button from '../Button'
import DropdownList from '../DropdownList'
import TextInput from '../TextInput'
import './Form.css'


const Form = ({onCreate, teams}) => {

    const [name, setName] = useState('')
    const [cargo, setCargo] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')
    
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
                <TextInput 
                    required={true} 
                    label='Nome' 
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={value => setName(value)}
                />
                <TextInput 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    value={cargo}
                    onChange={value => setCargo(value)}
                />
                <TextInput 
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
        </section>
    )
}

export default Form