import { useState } from 'react'
import Button from '../Button'
import DropdownList from '../DropdownList'
import TextInput from '../TextInput'
import './Form.css'


const Form = (props) => {

    const teams = [
        "Programming",
        "Front-End",
        "Data Science",
        "DevOps",
        "UX and Design",
        "Mobile",
        "Inovation and Business"
    ]

    const [name, setName] = useState('')
    const [cargo, setCargo] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')
    
    const inSave = (event) => {
        event.preventDefault()
        props.onColaboratorSaved({
            name, 
            cargo, 
            image, 
            team 
        })
    }

    return (
        <section className="form">
            <form onSubmit={inSave}>
                <h2>Preecha os dados para criar o card do colaborador</h2>
                <TextInput 
                    required={true} 
                    label="Nome" 
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
                <Button>
                    Create card
                </Button>
            </form>
        </section>
    )
}

export default Form