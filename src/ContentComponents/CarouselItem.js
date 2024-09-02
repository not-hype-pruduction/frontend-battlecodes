import React from 'react'

const CarouselItem = ({gameID}) => {
    const gameInfo = {
        nim: {
            name: 'Ним',
            description: 'это игра ним лялялялял',
        },
        bashe: {
            name: 'Баше',
            description: 'это Баше хахахаха башенки',
        },
        chet: {
            name: 'Чет',
            description: 'Букву Р забыли в слове Чет',
        },
    };

    console.log(gameInfo)
    return (
        <div classname = 'carousel-item'>
            {/*<p>{gameInfo.gameID.name}</p>*/}
            {/*<p>{gameInfo.gameID.description}</p>*/}
            <p>{gameID}</p>
        </div>
    )
}

export default CarouselItem;