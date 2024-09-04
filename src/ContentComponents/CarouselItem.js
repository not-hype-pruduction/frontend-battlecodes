import React, {useState} from 'react'

const CarouselItem = ({gameID}) => {
    const gameInfo = {
        nim: {
            name: 'Ним',
            description: 'это игра ним лялялялял',
        },
        bashe: {
            name: 'Баше',
            description: 'это Баше',
        },
        chet: {
            name: 'Чет',
            description: 'это игра чет',
        },
    };

    const [hover, setHover] = useState(false);
    const infoToRender = hover ? gameInfo[gameID].description : gameInfo[gameID].name;
    const gameIcon = `./source/game_icons/${gameID}_icon.png`.toString()
    return (
        <div
            className = 'carousel-item'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <p>{infoToRender}</p>
            <img src = {gameIcon} className={'carousel-item-icon'}/>
        </div>
    )
}

export default CarouselItem;