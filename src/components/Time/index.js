import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) => {

    const estilo = { backgroundColor: props.corSecundaria }
    // renderização condicional -> se a lista de colaboradores tiver vázia não mostra nada, se tiver um elemento é mostrado esse elemento do time
    return(
        (props.colaboradores.length > 0) ? <section className='time' style={estilo}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} corDeFundo={props.corPrimaria} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
        : ''
        
    );
}

export default Time;