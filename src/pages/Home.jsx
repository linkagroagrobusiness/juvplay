import React from 'react';

import RadioBanner from '../components/BannerStage';
import CardEpisodios from '../components/CardEpisodios';
import AudioPlayerFooter from '../components/AudioPlayerFooter';
import { useAudioPlayer } from '../context/AudioPlauseContext';
import Header from '../components/Header';
import RadioPlayer from '../components/RadioPlayer';
import CardProgramas from '../components/CardProgramas';



const Home = () => {

  return (
    <menu>
      <div className="content">
        <Header></Header>
        <RadioBanner/>

        <div className="projectos">
          <div className="container">
            <CardProgramas/>
          </div>
        </div>

      </div>
    </menu>
  );
};

export default Home;
