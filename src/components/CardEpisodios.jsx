import React, { useEffect, useState, useMemo } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, IconButton } from '@mui/material';
import { PlayArrow, Pause } from '@mui/icons-material';
import { useAudioPlayer } from '../context/AudioPlauseContext';
import epi1 from '../assets/imgs/epi1.jpeg';


import Episodio01Part1 from '../assets/audios/Episodio01Part1.mp3';
import Episodio02Part1 from '../assets/audios/Episodio02Part1.mp3';
import Episodio01Part2 from '../assets/audios/Episodio01Part2.mp3';
import Episodio02Part2 from '../assets/audios/Episodio02Part2.mp3';
import Episodio03Part1 from '../assets/audios/Episodio03Part1.mp3';
import Episodio03Part2 from '../assets/audios/Episodio03Part2.mp3';
import Episodio04Part1 from '../assets/audios/Episodio04Part1.mp3';
import Episodio04Part2 from '../assets/audios/Episodio04Part2.mp3';
import Episodio05Part1 from '../assets/audios/Episodio05Part1.mp3';
import Episodio05Part2 from '../assets/audios/Episodio05Part2.mp3';
import Episodio06Part1 from '../assets/audios/Episodio06Part1.mp3';
import Episodio06Part2 from '../assets/audios/Episodio06Part2.mp3';
import Episodio07Part1 from '../assets/audios/Episodio07Part1.mp3';
import Episodio07Part2 from '../assets/audios/Episodio07Part2.mp3';
import Episodio08Part1 from '../assets/audios/Episodio08Part1.mp3';
import Episodio08Part2 from '../assets/audios/Episodio08Part2.mp3';
import Episodio09Part1 from '../assets/audios/Episodio09Part1.mp3';
import Episodio09Part2 from '../assets/audios/Episodio09Part2.mp3';
import Episodio10Part1 from '../assets/audios/Episodio10Part1.mp3';
import Episodio10Part2 from '../assets/audios/Episodio10Part2.mp3';


import { Link } from 'react-router-dom';

const CardEpisodios = () => {
    const [open, setOpen] = useState(false);

    // Substituir ou adicionar outras imagens se tiveres mais capas
    const capas = useMemo(() => {
      return [epi1, epi1, epi1, epi1, epi1, epi1, epi1, epi1, epi1, epi1];
    },[]);

    const { setEpisodio, isPlaying, setIsPlayOpen, episodio, setListaEpisodio } = useAudioPlayer();

    // eslint-disable-next-line react-hooks/exhaustive-deps
   
    const episodios = useMemo(() => {
      const lista = [];
    
      const audios = [
        [Episodio01Part1, Episodio01Part2],
        [Episodio02Part1, Episodio02Part2],
        [Episodio03Part1, Episodio03Part2],
        [Episodio04Part1, Episodio04Part2],
        [Episodio05Part1, Episodio05Part2],
        [Episodio06Part1, Episodio06Part2],
        [Episodio07Part1, Episodio07Part2],
        [Episodio08Part1, Episodio08Part2],
        [Episodio09Part1, Episodio09Part2],
        [Episodio10Part1, Episodio10Part2],
      ];
    
      for (let i = 0; i < audios.length; i++) {
        lista.push({
          titulo: `Episódio ${String(i + 1).padStart(2, '0')} Parte 1`,
          duracao: '00:00',
          descricao: `Descrição do episódio Episódio ${String(i + 1).padStart(2, '0')} Parte 1. Descrição do episódio Episódio ${String(i + 1).padStart(2, '0')} Parte 1.`,
          elenco: ['Ator', 'Ator'],
          imagemUrl: capas[i] || epi1,
          audioUrl: audios[i][0],
        });
        lista.push({
          titulo: `Episódio ${String(i + 1).padStart(2, '0')} Parte 2`,
          duracao: '00:00',
          descricao: `Descrição do episódio Episódio ${String(i + 1).padStart(2, '0')} Parte 2. Descrição do episódio Episódio ${String(i + 1).padStart(2, '0')} Parte 2.`,
          elenco: ['Ator', 'Ator'],
          imagemUrl: capas[i] || epi1,
          audioUrl: audios[i][1],
        });
      }
    
      return lista;
    }, [capas]);


    useEffect(() => {
        setListaEpisodio(()=>episodios); // Atualiza a lista de episódios no contexto
    }, [episodios, setListaEpisodio]);


  const handleOpenDialog = (_episodio) => {
    setEpisodio((prevState)=> _episodio);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setEpisodio(null);
  };


  // Função para mudar o episódio, e ao mesmo tempo controlar a reprodução
  const handleEpisodeClick = (_episodio) => {
    setEpisodio((prevState)=> _episodio); // Seleciona o episódio
    if(episodio === _episodio) {
      setIsPlayOpen((prevstate)=> !isPlaying); // Pausa a reprodução quando o episódio é o mesmo
      
    }else{
      setIsPlayOpen((prevstate)=> true); // Inicia a reprodução quando o episódio é diferente
    }
     // Pausa a reprodução quando o episódio é o mesmo
    
  };

  return (
    <>
      <div className="row">
        {episodios.map((_episodio, index) => (
          <div className="col-md-3 mb-2" key={index}>
            <div className={`episodio-card ${isPlaying && episodio === _episodio ? 'active' : ''}`} >
                <div className="episodio-capa">
                    <img src={_episodio.imagemUrl} alt={_episodio.titulo} />
                    <div className='episodio-play-pause' >
                      <IconButton className="play-button bg-btn-play" onClick={() => handleEpisodeClick(_episodio)} color="primary">
                        {isPlaying && episodio=== _episodio ? (
                            {isPlaying} ? <Pause  /> : <PlayArrow />
                            ) : (
                            <PlayArrow  />
                          )}
                      </IconButton>
                    </div>
                </div>

                <div className="episodio-bodys m-2 p-2">
                    <h5 className='episodio-titulo'>{_episodio.titulo}</h5>
                    <div className="d-flex pb-2 d-non">
                        <div className='p-0'>
                            <small className='clamp-1'> {_episodio.descricao} </small>
                        </div>
                        <Link className='small episodio-vermais d-flex  w-100' onClick={() => handleOpenDialog(_episodio)}>ver mais</Link>
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


export default CardEpisodios;
