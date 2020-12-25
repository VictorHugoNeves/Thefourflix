import React from 'react';
import Menu from '../../componentes/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../componentes/BannerMain';
import Carousel from '../../componentes/Carousel';
import Footer from '../../componentes/Footer';

function Home() {
  return (
    <div style={{ background: '#141414' }}>

      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[13].videos[0].titulo}
        url={dadosIniciais.categorias[13].videos[0].url}
        videosDescription="Apresentação dos finalistas"
      />

      <Carousel
        category={dadosIniciais.categorias[6]}
      />

      <Carousel
        category={dadosIniciais.categorias[7]}
      />

      <Carousel
        category={dadosIniciais.categorias[8]}
      />

      <Carousel
        category={dadosIniciais.categorias[9]}
      />

      <Carousel
        category={dadosIniciais.categorias[10]}
      />

      <Carousel
        category={dadosIniciais.categorias[11]}
      />

      <Carousel
        category={dadosIniciais.categorias[12]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[13]}
      />

      <Footer />

    </div>
  );
}

export default Home;
