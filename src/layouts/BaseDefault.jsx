import React from "react";
import { Helmet } from "react-helmet";
import RadioPlayer from "../components/RadioPlayer";


const BaseLayout = ({ children, title }) => {
  return (
    <>
        <Helmet>
            <title>{title ? title : "Radionovela EKOTI"}</title>
            
            {/* CSS Interno */}
            <link rel="stylesheet" href="../assets/css/style.css" />
            <link rel="stylesheet" href="../assets/css/utils.css" />
            <link rel="stylesheet" href="../assets/css/linkagro.css" />
            <link rel="stylesheet" href="../assets/css/linkagro_media.css" />
        </Helmet>

        <menu className="menu">
            <div className="content">
                {children}
            </div>
            <RadioPlayer />
            
        </menu>
    </>
  );
};

export default BaseLayout;