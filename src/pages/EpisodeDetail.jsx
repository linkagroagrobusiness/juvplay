import React, { useState, useEffect } from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

const EpisodeDetail = () => {
  const { episodeId } = useParams();
  const [episode, setEpisode] = useState(null);

  useEffect(() => {
    // Carregar os detalhes do episódio (pode ser de uma API)
    const fetchedEpisode = {
      id: episodeId,
      title: `Episódio ${episodeId} - A Chegada`,
      description: 'Detalhes sobre o episódio...',
      streamUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    };

    setEpisode(fetchedEpisode);
  }, [episodeId]);

  if (!episode) return <div>Carregando...</div>;

  return (
    <Container>
      <Typography variant="h4">{episode.title}</Typography>
      <Typography variant="body1">{episode.description}</Typography>
      <ReactPlayer url={episode.streamUrl} playing controls width="100%" height="50px" />
      <Button variant="contained" color="primary" href="/">Voltar</Button>
    </Container>
  );
};

export default EpisodeDetail;
