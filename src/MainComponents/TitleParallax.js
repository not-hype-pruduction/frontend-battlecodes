import react from 'react'

const TitleParallax = () => {

    const wrapper = document.querySelector('.parallax');
    const layers = document.querySelectorAll('.parallax__layer');

    const handleParallax = (evt) => {
        //размер области просмотра
        const parallaxLeftOffset = wrapper.getBoundingClientRect().left;
        const parallaxTopOffset = wrapper.getBoundingClientRect().top;

        // координаты центра экрана
        const coordX = evt.clientX - parallaxLeftOffset - 0.5 * wrapper.offsetWidth;
        const coordY = evt.clientY - parallaxTopOffset - 0.5 *  wrapper.offsetHeight;

        layers.forEach((layer)=>{
            const layerSpeed = layer.dataset.speed;
            const x = - (coordX * layerSpeed).toFixed(2);
            const y = - (coordY * layerSpeed).toFixed(2);
            layer.setAttribute('style', `transform: translate(${x}px, ${y}px);`)
        });
    };

    const reset = () => {
        layers.forEach((layer)=>{
            layer.removeAttribute('style');
        });
    }

    wrapper.addEventListener('mousemove', handleParallax);
    wrapper.addEventListener('mouseout', reset);

    return (
        <div className="wrapper">
            <div className="parallax">
                <h1 className="parallax__layer title" data-speed="0.03">
                    Здорово быть енотом!
                </h1>

                <button className="parallax__layer button" type="button" data-speed="0.05">
                    Стать енотом
                </button>

                <div className="parallax__layer circle" data-speed="0.18"></div>
            </div>
        </div>
    )
}

export default TitleParallax;