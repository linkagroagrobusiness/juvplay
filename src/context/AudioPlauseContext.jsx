import { createContext, useState, useContext } from "react";

// Criando o contexto
const MenuContext = createContext();

// Criando o Provider que envolve a aplicação
export const MenuProvider = ({ children }) => {
    const [isPlaying, setIsPlayOpen] = useState(false);
    const [episodio, setEpisodio] = useState(null);
    const [Listaepisodio, setListaEpisodio] = useState(null);


    const handleEpisodeClicked = (episodio) => {
        setEpisodio(episodio); // Seleciona o episódio
        setIsPlayOpen(true); // Começa a reprodução quando o episódio é selecionado
    };

    const togglePlay = () => {
        setIsPlayOpen((prev) => !prev);
    };

    return (
        <MenuContext.Provider value={{ isPlaying, togglePlay, setIsPlayOpen, episodio, handleEpisodeClicked, setEpisodio, Listaepisodio, setListaEpisodio }}>
            {children}
        </MenuContext.Provider>
    );
};

// Criando um Hook para usar o contexto
export const useAudioPlayer = () => {
    return useContext(MenuContext);
};
