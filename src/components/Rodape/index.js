import './Rodape.css'

import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Rodape = () => {
    return (
        <footer className='footer'>
            <div className='container-icons'>
                <a href='https://github.com/lehcibele' rel="noreferrer" target='_blank'>
                    <FaGithub className='icon-redes-sociais'/>
                </a>
                <a href='https://www.instagram.com/leh_cibelle/' rel="noreferrer" target='_blank'>
                    <FaInstagram className='icon-redes-sociais' />
                </a>
                <a href='https://www.linkedin.com/in/let%C3%ADcia-cibele-94bb74311/' rel="noreferrer" target='_blank'>
                    <FaLinkedinIn className='icon-redes-sociais' />
                </a>
            </div>

            <div className='logo-footer'>
                <img src="/imagens/logo.png" alt="Logo organo" />
            </div>

            <h3>Desenvolvido por Letícia Cibele.</h3>
        </footer>
    )
}

export default Rodape