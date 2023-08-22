import React from 'react';
import SlideCard from './SlideCard';

function Slider() {
    return (
        <div>
            <section className='homeSlide contentWidth'>
                <div className="container">
                    <SlideCard />
                </div>
            </section>
        </div>
    );
}

export default Slider;