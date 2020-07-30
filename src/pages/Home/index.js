import React from 'react';
import Menu from '../../componentes/Menu';
import BannerMain from '../../componentes/BannerMain';
import Carousel from '../../componentes/Carousel';
import Footer from '../../componentes/Footer';
import dadosIniciais from '../../data/dados_iniciais.json';

function Home() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.mainVideo.titulo}
        url={dadosIniciais.mainVideo.url}
        videoDescription={dadosIniciais.mainVideo.description}
      />

      {dadosIniciais.categorias.map((categoria) => <Carousel category={categoria} />)}

      <Footer />
    </div>
  );
}

export default Home;
