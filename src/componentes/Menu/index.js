import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/imagens/logo.png';
import './menu.css';
// import ButtonLink from './componentes/ButtonLink'
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Kelflix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
