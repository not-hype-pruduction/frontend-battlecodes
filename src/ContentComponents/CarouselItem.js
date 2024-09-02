import React from 'react'

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

    console.log("gameID" + gameID)
    return (
        <div classname = 'carousel-item'>
            <p>{gameInfo[gameID].name}</p>
            <p>{gameInfo[gameID].description}</p>
        </div>
    )
}

export default CarouselItem;