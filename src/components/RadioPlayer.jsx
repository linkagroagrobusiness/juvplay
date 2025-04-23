import React, { useEffect, useRef, useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Slider } from '@mui/material';
import { PlayArrow, Pause, SkipNext, SkipPrevious } from '@mui/icons-material';
import Slide from '@mui/material/Slide';
import { useAudioPlayer } from '../context/AudioPlauseContext';


const RadioPlayer = ({onPlayPause, isPlaying, onChangeEpisode }) => {
  const { togglePlay, setIsPlayOpen, episodio, handleEpisodeClicked, setEpisodio, Listaepisodio, setListaEpisodio } = useAudioPlayer();
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (audioRef.current && episodio) {
      audioRef.current.src = episodio.audioUrl;
      audioRef.current.load(); // garante que o audio atualize
      if (isPlaying) audioRef.current.play();
      else audioRef.current.pause();
    }
  }, [episodio, isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current && isPlaying) {
        setCurrentTime(audioRef.current.currentTime || 0);
        setDuration(audioRef.current.duration || 0);

        if (audioRef.current.duration) {
          setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
        }
      }
    }, 500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSliderChange = (event, newValue) => {
    if (audioRef.current) {
      const newTime = (newValue / 100) * duration;
      audioRef.current.currentTime = newTime;
      setProgress(newValue);
    }
  };

  const handleEnded = () => {
    const currentIndex = Listaepisodio.findIndex((ep) => ep.audioUrl === episodio.audioUrl);
    const nextIndex = currentIndex + 1;
    if (nextIndex < Listaepisodio.length) {
      onChangeEpisode(Listaepisodio[nextIndex]);
    }
  };

  const goToNext = () => {
    const currentIndex = Listaepisodio.findIndex((ep) => ep.audioUrl === episodio.audioUrl);
    const nextIndex = (currentIndex + 1) % Listaepisodio.length;
    onChangeEpisode(Listaepisodio[nextIndex]);
  };

  const goToPrevious = () => {
    const currentIndex = Listaepisodio.findIndex((ep) => ep.audioUrl === episodio.audioUrl);
    const prevIndex = (currentIndex - 1 + Listaepisodio.length) % Listaepisodio.length;
    onChangeEpisode(Listaepisodio[prevIndex]);
  };

  return (
    episodio !=null && 
      <footer>
        <div className='gap-2 d-flex align-items-center  w-100'>
          <IconButton onClick={goToPrevious} color="primary">
            <SkipPrevious />
          </IconButton>
          <IconButton onClick={() => onPlayPause(episodio)} color="primary">
            {isPlaying ? <Pause /> : <PlayArrow />}
          </IconButton>
          <IconButton onClick={goToNext} color="primary">
            <SkipNext />
          </IconButton>
          <Typography variant="subtitle1" sx={{ flexGrow: 1, marginLeft: 2 }}>
            {episodio?.titulo || 'Selecione um episódio'}
          </Typography>
        </div>

        <div className='d-flex align-items-center mx-2 w-100'>
          <Typography variant="caption">{formatTime(currentTime)}</Typography>
          <Slider
            value={progress}
            onChange={handleSliderChange}
            sx={{ mx: 2 }}
            className="w-100"
          />
          <Typography variant="caption">{formatTime(duration)}</Typography>
        </div>

      <audio ref={audioRef} onEnded={handleEnded} />
    </footer>
    
  );
};


export default RadioPlayer;
