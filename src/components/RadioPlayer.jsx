import React, { useCallback, useEffect, useRef, useState } from 'react';
import { IconButton, Typography, Slider } from '@mui/material';
import { PlayArrow, Pause, SkipNext, SkipPrevious } from '@mui/icons-material';
import { useAudioPlayer } from '../context/AudioPlauseContext';

const RadioPlayer = () => {
  const { isPlaying, setIsPlayOpen, episodio, setEpisodio, Listaepisodio } = useAudioPlayer();
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Troca de episódio ou estado de play
  useEffect(() => {
    const audio = audioRef.current;
    if (audio && episodio) {
      audio.pause(); // sempre para o que estiver tocando
      audio.src = episodio.audioUrl;
      audio.load();

      const tempoSalvo = parseFloat(localStorage.getItem(`tempo-${episodio.audioUrl}`));
      if (!isNaN(tempoSalvo)) {
        audio.currentTime = tempoSalvo;
      }

      const handleCanPlay = () => {
        if (isPlaying) {
          audio.play().catch(err => console.warn('Erro ao tocar áudio:', err));
        }
      };

      audio.addEventListener('canplay', handleCanPlay);

      return () => {
        audio.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, [episodio, isPlaying]);

  // Atualiza tempo e salva progresso
  useEffect(() => {
    const interval = setInterval(() => {
      const audio = audioRef.current;
      if (audio && isPlaying) {
        const tempoAtual = audio.currentTime || 0;
        const duracaoTotal = audio.duration || 0;

        setCurrentTime(tempoAtual);
        setDuration(duracaoTotal);
        setProgress((tempoAtual / duracaoTotal) * 100);

        localStorage.setItem(`tempo-${episodio.audioUrl}`, tempoAtual);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [isPlaying, episodio]);

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSliderChange = (event, newValue) => {
    if (audioRef.current) {
      const novoTempo = (newValue / 100) * duration;
      audioRef.current.currentTime = novoTempo;
      setProgress(newValue);
    }
  };

  const handleEnded = () => {
    const currentIndex = Listaepisodio.findIndex(ep => ep.audioUrl === episodio.audioUrl);
    const nextIndex = currentIndex + 1;
    if (nextIndex < Listaepisodio.length) {
      setEpisodio(Listaepisodio[nextIndex]);
    }
  };

  const goToNext = useCallback(() => {
    const currentIndex = Listaepisodio.findIndex(ep => ep.audioUrl === episodio.audioUrl);
    const nextIndex = (currentIndex + 1) % Listaepisodio.length;
    setEpisodio(Listaepisodio[nextIndex]);
  }, [Listaepisodio, episodio, setEpisodio]);

  const goToPrevious = useCallback(() => {
    const currentIndex = Listaepisodio.findIndex(ep => ep.audioUrl === episodio.audioUrl);
    const prevIndex = (currentIndex - 1 + Listaepisodio.length) % Listaepisodio.length;
    setEpisodio(Listaepisodio[prevIndex]);
  }, [Listaepisodio, episodio, setEpisodio]);

  const togglePlayPause = useCallback(() => {
    setIsPlayOpen(!isPlaying);
  }, [isPlaying, setIsPlayOpen]);

  return (
    episodio && (
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="gap-2 d-flex align-items-center container w-100 my-0 py-0">
              <IconButton onClick={goToPrevious} color="primary" className="bg-light bg-btn-play">
                <SkipPrevious />
              </IconButton>
              <IconButton onClick={togglePlayPause} color="primary" className="bg-light bg-btn-play">
                {isPlaying ? <Pause /> : <PlayArrow />}
              </IconButton>
              <IconButton onClick={goToNext} color="primary" className="bg-light bg-btn-play">
                <SkipNext />
              </IconButton>
              <Typography variant="subtitle1" sx={{ flexGrow: 1, marginLeft: 2 }}>
                {episodio?.titulo || 'Selecione um episódio'}
              </Typography>
            </div>

            <div className="d-flex align-items-center mx-2 w-100">
              <Typography variant="caption">{formatTime(currentTime)}</Typography>
              <Slider
                value={progress}
                onChange={handleSliderChange}
                sx={{ mx: 2 }}
                className="w-100 bg-slider"
              />
              <Typography variant="caption">{formatTime(duration)}</Typography>
            </div>
          </div>
        </div>

        <audio ref={audioRef} onEnded={handleEnded} />
      </footer>
    )
  );
};

export default RadioPlayer;
