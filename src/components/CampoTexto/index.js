import './CampoTexto.css'

const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        // target -> evento do js
        // pega o que p usuario digitar no input
        // setValor(evento.target.value)
        // console.log(valor);

        props.aoAlterado(evento.target.value);
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>

            {/* required deixa o campo obrigatorio se obrigatorio for true, isso vem do arquivo index.js (Formulario) */}
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />

            {/* onChange quando o input for alterado pelo usuario vai ser executado uma função */}
        </div>
    );
}

export default CampoTexto;