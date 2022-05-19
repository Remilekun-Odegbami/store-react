import { Children, cloneElement, useState, useEffect } from 'react';
import styles from './Carousel.module.css';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'

export const CarouselItem = ({ children, width}) => {
    return (
        <div className={styles.carousel__item} style={{ width: width, marginRight: '50px', textAlign: 'center'}}>
            {children}
        </div>
    )
}

const Carousel = ({ children}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = Children.count(children) - 1;
        } else if (newIndex >= Children.count(children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    }
    const [hover, setHover] = useState('');
    const handleHover = (menu) => {
        setHover(menu);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            updateIndex(activeIndex + 1);
        }, 3000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        }
    });

    return (
        <div className={styles.carousel}>
            <div className={styles.carousel__inner} style={{ transform: `translateX(-${activeIndex * 30}%)` }}>
                {Children.map(children, (child, index) => {
                    return cloneElement(child, { width: '30%' })
                })}
            </div>
            <div className={styles.carousel__indicators}>
                <button className={`${styles.carousel__button} ${hover === 'Left' ? styles.carousel__button__hover : ''}`} onClick={() => {
                    updateIndex(activeIndex - 1);
                }} onMouseEnter={() => {handleHover('Left')}}>
                    <BsArrowLeft/>
                </button>
                <button className={`${styles.carousel__button} ${hover === 'Right' ? styles.carousel__button__hover : ''}`} onClick={() => {
                    updateIndex(activeIndex + 1);
                }} onMouseEnter={() => {handleHover('Right')}}>
                    <BsArrowRight/>
                </button>
            </div>
        </div>
    )
}

export default Carousel;