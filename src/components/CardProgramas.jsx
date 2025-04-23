import React from 'react';
import { Link } from 'react-router-dom';
import bannerekoti from '../assets/imgs/bannerekoti.jpeg';

const projetos = [
    {
        imagem: bannerekoti,
        titulo: 'Radionovela EKOTI',
        descricao: `EKOTI significa “cuidar”, na língua Emakhua. E é exactamente isso que esta história quer provocar em ti: uma vontade de olhar para os outros com mais empatia.
Mas EKOTI também é denúncia, é emoção, é viragem. É uma radionovela moçambicana feita com alma.`,
        lancamento: '25/04/2025',
    },
    
];


const CardProgramas = () => {
    return (
        <div className="card-programas-container my-3">
            <h1>Programas</h1>

            <div className="row">
            {projetos.map((projeto, index) => (
                <div className="col-md-4 mb-3" key={index}>
                <div className="episodio-card">
                    <div className="episodio-capa">
                        <img src={projeto.imagem} alt={projeto.titulo} />
                    </div>

                    <div className="episodio-body m-2">
                        <Link className=' d-flex link-programa w-100' to={`/programa/${index}/`}>{projeto.titulo}</Link>
                        <div className="d-flex pb-2">
                            <div className='p-0'>
                                <small className='text-muted'>{projeto.descricao}</small>
                            </div>
                        </div>
                    </div>
                    
                
                </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default CardProgramas;

