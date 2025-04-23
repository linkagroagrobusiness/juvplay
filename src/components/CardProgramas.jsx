import React from 'react';
import { Link } from 'react-router-dom';

const projetos = [
    {
        imagem: 'https://picsum.photos/seed/2/300/200',
        titulo: 'Radio Novela',
        descricao: 'Descrição do Programa 1',
        lancamento: '01/01/2023',
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
                                <small className='text-muted'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Quaerat magnam dolore adipisci officiis hic non voluptas rem voluptates optio quos accusantium quisquam, 
                                    at, vel corrupti perspiciatis, sunt laudantium rerum veniam?
                                </small>
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

// Exemplo de uso:
// const projetos = [
//   {
//     imagem: '/public/images/serie1.jpg',
//     titulo: 'Série 1',
//     descricao: 'Descrição da Série 1',
//     lancamento: '01/01/2023',
//   },
//   {
//     imagem: '/public/images/serie2.jpg',
//     titulo: 'Série 2',
//     descricao: 'Descrição da Série 2',
//     lancamento: '15/02/2023',
//   },
// ];
// <CardProgramas projetos={projetos} />;