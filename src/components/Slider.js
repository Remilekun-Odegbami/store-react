import React, {useState, useEffect} from 'react';

import Item1 from '../Media/item1.jpg'
import Item2 from '../Media/item2.jpg'
import Item3 from '../Media/item3.jpg'
import Item4 from '../Media/item4.jpg'
import Item5 from '../Media/item5.jpg'

function Slider() {

   
  return (
    <section className='slider-wrapper'>
        <h1 className='text-center'>Our Products</h1>
        <div className='slider d-flex justify-content-around'>
            <div className='item'>
                <img src={Item1} className="image-fluid" alt="item 1" />
            </div>
            <div className='item'>
                <img src={Item2} className="image-fluid" alt="item 1" />
            </div>
            <div className='item'>
                <img src={Item3} className="image-fluid" alt="item 1" />
            </div>
            <div className='item'>
                <img src={Item4} className="image-fluid" alt="item 1" />
            </div>
            <div className='item'>
                <img src={Item5} className="image-fluid" alt="item 1" />
            </div>
            <div className='item'>
                <img src={Item1} className="image-fluid" alt="item 1" />
            </div>
            <div className='item'>
                <img src={Item2} className="image-fluid" alt="item 1" />
            </div>
            <div className='item'>
                <img src={Item3} className="image-fluid" alt="item 1" />
            </div>
            <div className='item'>
                <img src={Item4} className="image-fluid" alt="item 1" />
            </div>
            <div className='item'>
                <img src={Item5} className="image-fluid" alt="item 1" />
            </div>
        </div>
        {/* <Courses /> */}
        {/* <Carousel /> */}
    </section>
  )
}

{/* {
    sliderItems.map((slide, index) => (
        <SwiperSlide key={index} >
             <div className='row'>
            <img src={slide.image} height='70' width='100' className='row'/>
             </div>
            
        </SwiperSlide>
    )
    )
} */}
export default Slider;

