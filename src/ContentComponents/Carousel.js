import React from 'react'
import CarouselItem from "./CarouselItem";


const Carousel = () => {
    return (
        <div className="wrap">
            <div className="items-wrap">
                <div className="items marquee">
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                </div>
                <div aria-hidden="true" className="items marquee">
                    <div className="item">
                        <CarouselItem gameID={'nim'}/>
                    </div>
                    <div className="item">
                        <CarouselItem gameID={'bashe'}/>
                    </div>
                    <div className="item">
                        <CarouselItem gameID={'chet'}/>
                    </div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;