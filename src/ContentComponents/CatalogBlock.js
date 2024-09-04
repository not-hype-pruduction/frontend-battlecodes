import React from 'react'
import './Catalog.css'
import Carousel from "./Carousel";

const CatalogBlock = () => {
    return (
        <div className = 'CatalogBlock'>
            <h1>Во что поиграть?</h1>
            <p className ='description'>информация об играх информация об играх</p>
            <Carousel/>
        </div>
    )
}

export default CatalogBlock;