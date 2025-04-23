import React from 'react';

import RadioBanner from '../components/BannerStage';
import Header from '../components/Header';
import CardProgramas from '../components/CardProgramas';
import BaseLayout from '../layouts/BaseDefault';



const Home = () => {

  return (
    <BaseLayout title="Juveplay">
      <Header></Header>
      <RadioBanner/>

      <div className="projectos">
        <div className="">
          <CardProgramas/>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Home;
