import React from 'react';
import Header from '../components/Header';
import RadioBanner from '../components/BannerStage';
import CardEpisodios from '../components/CardEpisodios';

const Programas = () => {
    return (
        <menu>
            <div className="content">
                <Header />
                <RadioBanner/>

                <div className="card-episodios">
                    <div className="container">
                        <CardEpisodios/>
                    </div>
                </div>
            </div>
    </menu>
    );
};

export default Programas;