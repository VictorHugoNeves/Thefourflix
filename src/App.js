import React from 'react';
import Menu from './componentes/Menu'
import dadosIniciais from "./data/dados_iniciais.json"
import BannerMain from './componentes/BannerMain'
import Carousel from './componentes/Carousel'
import Footer from './componentes/Footer';


function App() {
  return (
    <div style= {{background: "#141414" }}>
      
      <Menu/>

      <BannerMain
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videosDescription={"O que é Front-end? Trabalhando na área"}
      />

      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}
      />

      <Footer/>

    </div>
  );
}

export default App;
