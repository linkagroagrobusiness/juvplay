import React, { useEffect, useRef, useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Slider } from '@mui/material';
import { PlayArrow, Pause, SkipNext, SkipPrevious } from '@mui/icons-material';
import Slide from '@mui/material/Slide';

const AudioPlayerFooter = ({ episodio, episodios, onPlayPause, isPlaying, onChangeEpisode }) => {
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = episodio.audioUrl;
      if (isPlaying) audioRef.current.play();
      else audioRef.current.pause();
    }
  }, [episodio, isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current && isPlaying) {
        const current = audioRef.current.currentTime;
        const duration = audioRef.current.duration;
        if (duration) {
          setProgress((current / duration) * 100);
        }
      }
    }, 500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleSliderChange = (event, newValue) => {
    if (audioRef.current) {
      const duration = audioRef.current.duration;
      const newTime = (newValue / 100) * duration;
      audioRef.current.currentTime = newTime;
      setProgress(newValue);
    }
  };

  const handleEnded = () => {
    const currentIndex = episodios.findIndex((ep) => ep.audioUrl === episodio.audioUrl);
    const nextIndex = currentIndex + 1;
    if (nextIndex < episodios.length) {
      onChangeEpisode(episodios[nextIndex]);
    }
  };

  const goToNext = () => {
    const currentIndex = episodios.findIndex((ep) => ep.audioUrl === episodio.audioUrl);
    const nextIndex = (currentIndex + 1) % episodios.length;
    onChangeEpisode(episodios[nextIndex]);
  };

  const goToPrevious = () => {
    const currentIndex = episodios.findIndex((ep) => ep.audioUrl === episodio.audioUrl);
    const prevIndex = (currentIndex - 1 + episodios.length) % episodios.length;
    onChangeEpisode(episodios[prevIndex]);
  };

  return (
    <div className="audio-player">
        <div className="content">
            <h1>Player</h1>
        </div>

        {/* {
            episodio ? <Slide direction="up" in={!!episodio} mountOnEnter unmountOnExit>
            <AppBar 
                position="fixed" 
                color="default" 
                
            >
                <Toolbar className='gap-2'>
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
                    {episodio.titulo}
                </Typography>
                </Toolbar>
                <Slider
                value={progress}
                onChange={handleSliderChange}
                sx={{ mx: 2 }}
                />
                <audio
                ref={audioRef}
                onEnded={handleEnded}
                />
            </AppBar>
        </Slide> : <h1>Sem episodios</h1>
        } */}
    </div>
  );
};

export default AudioPlayerFooter;
// Compare this snippet from src/components/CardEpisodios.jsx: