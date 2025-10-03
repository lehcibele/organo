import './Colaborador.css'

// https://github.com/lehcibele.png -> pega a imagem do usuario do github, é só colocar o usanerme do usuario

// desestruturação -> outra forma de usar props, usa o objeto
const Colaborador = ({nome, imagem, cargo, corDeFundo}) => {

    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome} />
            </div>

            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;