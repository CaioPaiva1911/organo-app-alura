import TextInput from '../TextInput'
import './Form.css'

const Form = () => {
    return (
        <section className="form">
            <form>
                <h2>Preecha os dados para criar o card do colaborador</h2>
                <TextInput label="Nome" placeholder="Digite seu nome" />
                <TextInput label="Cargo" placeholder="Digite seu cargo" />
                <TextInput label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    )
}

export default Form