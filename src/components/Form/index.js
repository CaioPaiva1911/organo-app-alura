import Button from '../Button'
import DropdownList from '../DropdownList'
import TextInput from '../TextInput'
import './Form.css'


const Form = () => {

    const teams = [
        "Programming",
        "Front-End",
        "Data Science",
        "DevOps",
        "UX and Design",
        "Mobile",
        "Inovation and Business"
    ]

    return (
        <section className="form">
            <form>
                <h2>Preecha os dados para criar o card do colaborador</h2>
                <TextInput label="Nome" placeholder="Digite seu nome" />
                <TextInput label="Cargo" placeholder="Digite seu cargo" />
                <TextInput label="Imagem" placeholder="Digite o endereço da imagem" />
                <DropdownList label="Teams" itens={teams} />
                <Button>
                    Create card
                </Button>
            </form>
        </section>
    )
}

export default Form