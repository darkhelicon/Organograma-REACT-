import "./Formulario.css"
import CampoTexto from "../CampoTexto";
import  ListaSuspensa  from "../ListaSuspensa";

const Formulario = () => {
    const times = ['Back-end', 'Front-end']
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto label="Nome" />
                <CampoTexto label="Cargo" />
                <CampoTexto label="Imagem" />
                <ListaSuspensa itens={times} label = "Times"/>
            </form>
        </section>
    )

}

export default Formulario