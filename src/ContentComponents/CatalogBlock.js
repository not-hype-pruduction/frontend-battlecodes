import React from 'react'
import CarouselItem from "./CarouselItem";
import './Catalog.css'

const CatalogBlock = () => {
    return (
        <div className = 'CatalogBlock'>
            <h1>Во что поиграть?</h1>
            <p className ='description'>информация об играх информация об играх</p>
            <CarouselItem gameID={'nim'}/>
        </div>
    )
}

export default CatalogBlock;