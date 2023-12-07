import './CampoTexto.css'

const CampoTexto = (props) => {
    return (
        <div class='campo-texto'>
            <label>{props.label}</label>
            <input placeholder={`Digite o seu ${props.label}.`}></input>
        </div>
    )
}

export default CampoTexto