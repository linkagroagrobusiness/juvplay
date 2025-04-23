import React from "react";
import { MenuProvider } from "../context/AudioPlauseContext";


const AppProvider = ({ children }) => {
    return (
        <MenuProvider>{children}</MenuProvider>
    );
};

export default AppProvider;
