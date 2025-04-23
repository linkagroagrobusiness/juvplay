import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import AudioPlayerFooter from './AudioPlayerFooter';
import { PlayArrow, Pause } from '@mui/icons-material';
import { useAudioPlayer } from '../context/AudioPlauseContext';
import capa2 from '../assets/imgs/capa2.jpeg';
import capa3 from '../assets/imgs/capa3.jpeg';
import capa5 from '../assets/imgs/capa5.jpeg';

import Episodio01Part1 from '../assets/audios/Episodio01Part1.mp3';
import Episodio02Part1 from '../assets/audios/Episodio02Part1.mp3';
import Episodio01Part2 from '../assets/audios/Episodio01Part2.mp3';



import { Link } from 'react-router-dom';

const CardEpisodios = () => {
    const [open, setOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const { togglePlay, setEpisodio, episodio, setListaEpisodio } = useAudioPlayer();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const episodios = [
    {
        titulo: `Episódio 01 Parte 1`,
        duracao: `00:00`,
        descricao: `Descrição do episódio Episódio 01 Parte 1. Este episódio cobre vários temas interessantes com narrativa envolvente e um elenco de destaque.`,
        elenco: [`Ator`, `Ator`],
        imagemUrl: capa5,
        audioUrl: Episodio01Part1,
    },
    {
        titulo: `Episódio 02 Parte 1`,
        duracao: `00:00`,
        descricao: `Descrição do episódio Episódio 02 Parte 1. Este episódio cobre vários temas interessantes com narrativa envolvente e um elenco de destaque.`,
        elenco: [`Ator`, `Ator`],
        imagemUrl: capa3,
        audioUrl: Episodio02Part1,
    },
    {
        titulo: `Episódio 01 Parte 2`,
        duracao: `00:00`,
        descricao: `Descrição do episódio Episódio 03 Parte 1. Este episódio cobre vários temas interessantes com narrativa envolvente e um elenco de destaque.`,
        elenco: [`Ator`, `Ator`],
        imagemUrl: capa2,
        audioUrl: Episodio01Part2,
    }
    ];

    useEffect(() => {
        setListaEpisodio(episodios); // Atualiza a lista de episódios no contexto
    }, [episodios, setListaEpisodio]);

  const handleOpenDialog = (episodio) => {
    setEpisodio(episodio);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setEpisodio(null);
  };

  // Função para alternar o estado de play/pause
  const _togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Função para mudar o episódio, e ao mesmo tempo controlar a reprodução
  const handleEpisodeClick = (episodio) => {
    setEpisodio(episodio); // Seleciona o episódio
    setIsPlaying(true); // Começa a reprodução quando o episódio é 
  };

  return (
    <>
      <div className="row">
        {episodios.map((episodio, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="episodio-card">
                <div className="episodio-capa">
                    <img src={episodio.imagemUrl} alt={episodio.titulo} />
                    <div className='episodio-play-pause' onClick={() => handleEpisodeClick(episodio)}>
                        <Button className="play-button" onClick={() => setEpisodio(episodio)}>
                            {isPlaying && episodio=== episodio ? (
                            <Pause style={styles.icon} />
                            ) : (
                            <PlayArrow style={styles.icon} />
                            )}
                        </Button>
                    </div>
                </div>

                <div className="episodio-body m-2">
                    <h5 className='episodio-titulo'>{episodio.titulo}</h5>
                    <div className="d-flex pb-2">
                        <div className='p-0'>
                            <small className='clamp-1'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Quaerat magnam dolore adipisci officiis hic non voluptas rem voluptates optio quos accusantium quisquam, 
                                at, vel corrupti perspiciatis, sunt laudantium rerum veniam?
                            </small>
                        </div>
                        <Link className='small episodio-vermais d-flex  w-100' onClick={() => handleOpenDialog(episodio)}>ver mais</Link>
                    </div>
                </div>
                
              
            </div>
          </div>
        ))}
      </div>

      {/* Dialog */}
      <Dialog open={open} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        {episodio&& (
          <>
            <DialogTitle>{episodio.titulo}</DialogTitle>
            <DialogContent>
              <img
                src={episodio.imagemUrl}
                alt={episodio.titulo}
                style={{ width: '100%', borderRadius: '8px', marginBottom: '16px' }}
              />
              <Typography variant="body1" gutterBottom>
                <strong>Duração:</strong> {episodio.duracao}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {episodio.descricao}
              </Typography>
              <Typography variant="body2" gutterBottom>
                <strong>Elenco:</strong> {episodio.elenco.join(', ')}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} color="primary">
                Fechar
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      
      
    </>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px 0',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    minHeight: '280px',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '8px',
  },
  description: {
    fontSize: '1rem',
    marginBottom: '16px',
    color: '#eee',
  },
  verMais: {
    color: '#00BFFF',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  playButton: {
    cursor: 'pointer',
    padding: '10px',
  },
  icon: {
    fontSize: '30px',
    color: '#fff',
  },
};

export default CardEpisodios;
