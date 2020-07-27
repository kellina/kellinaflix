import React from 'react'
import Logo from '../../assets/imagens/logo.png'
import './menu.css'
// import ButtonLink from './componentes/ButtonLink'
import Button from '../Button'

function Menu () {
    return (
     <nav className="Menu">
         <a href="/">
            <img className="Logo" src={Logo} alt="Kelflix logo"></img>
         </a>

         <Button as="a" className="ButtonLink" href="/">
            Novo vídeo
         </Button>
     </nav>    
    )
}

export default Menu