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

    return (
        <div
            classname = 'carousel-item'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <p>{infoToRender}</p>
            {/*<p>{gameInfo[gameID].name}</p>*/}
            {/*<p>{gameInfo[gameID].description}</p>*/}
        </div>
    )
}

export default CarouselItem;