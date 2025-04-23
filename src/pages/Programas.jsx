import React from 'react';
import Header from '../components/Header';
import RadioBanner from '../components/BannerStage';
import CardEpisodios from '../components/CardEpisodios';
import BaseLayout from '../layouts/BaseDefault';

const Programas = () => {
    return (
        <BaseLayout title="Programa | Rádionovela EKOTI">
            <Header />
            <RadioBanner/>

            <div className="card-episodios m-0 ">
                <div className="container bg-white  rounded-2">
                    <h1 className='py-3'>Episódios da EKOTI</h1>
                    <CardEpisodios/>
                </div>
            </div>
        </BaseLayout>
    );
};

export default Programas;