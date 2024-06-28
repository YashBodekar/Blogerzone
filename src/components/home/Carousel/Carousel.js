import React, { useEffect, useState } from 'react'
import Typist from 'react-typist';
import './Carousel.css'
import img1 from '../../../images/blog.jpg';
import img2 from '../../../images/feather.jpeg';
import img3 from '../../../images/img3.jpg';
import img4 from '../../../images/fountain_pen.jpg';

const CustomCarousel = () => {

    const [count, setCount] = useState(1);

    useEffect(() => {
        setCount(1);
    }, [count])

    return (
        <div
            id='customCarousel'
            className='carousel slide cara-height scrollable-div'
            data-bs-ride="carousel"
            style={{ height: "90vh" }}
        >

            <div className="carousel-indicators">
                <button
                    type='button'
                    data-bs-target="#customCarousel"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type='button'
                    data-bs-target="#customCarousel"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type='button'
                    data-bs-target="#customCarousel"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
                <button
                    type='button'
                    data-bs-target="#customCarousel"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                ></button>
            </div>

            <div className="carousel-inner" style={{ height: "90vh" }}>
                <div className="carousel-item active">
                    <div className="carousel-caption d-none d-md-block"
                        style={{ position: 'absolute', top: '30%' }}
                    >
                        {count ? (
                            <Typist avgTypingDelay={100} onTypingDone={() => setCount(0)}>

                                <h1 className='caraText'>
                                    Welcome to Bloggers zone
                                </h1>
                                <Typist.Backspace count={200} delay={800} />
                            </Typist>
                        ) : ("")}

                    </div>
                    <img src={img1} alt="" className='d-block w-100 cara-height' />
                </div>
                <div className="carousel-item">
                    <div className="carousel-caption d-none d-md-block"
                        style={{ position: 'absolute', top: '30%' }}
                    >
                        {count ? (
                            <Typist avgTypingDelay={100} onTypingDone={() => setCount(0)}>

                                <h1 className='caraText'>
                                    Welcome to Bloggers zone
                                </h1>
                                <Typist.Backspace count={200} delay={800} />
                            </Typist>
                        ) : ("")}

                    </div>
                    <img src={img2} alt="" className='d-block w-100 cara-height' />
                </div>
                <div className="carousel-item">
                    <div className="carousel-caption d-none d-md-block"
                        style={{ position: 'absolute', top: '30%' }}
                    >
                        {count ? (
                            <Typist avgTypingDelay={100} onTypingDone={() => setCount(0)}>

                                <h1 className='caraText'>
                                    Welcome to Bloggers zone
                                </h1>
                                <Typist.Backspace count={200} delay={800} />
                            </Typist>
                        ) : ("")}

                    </div>
                    <img src={img3} alt="" className='d-block w-100 cara-height' />
                </div>
                <div className="carousel-item">
                    <div className="carousel-caption d-none d-md-block"
                        style={{ position: 'absolute', top: '30%' }}
                    >
                        {count ? (
                            <Typist avgTypingDelay={100} onTypingDone={() => setCount(0)}>

                                <h1 className='caraText'>
                                    Welcome to Bloggers zone
                                </h1>
                                <Typist.Backspace count={200} delay={800} />
                            </Typist>
                        ) : ("")}

                    </div>
                    <img src={img4} alt="" className='d-block w-100 cara-height' />
                </div>
            </div>


            <button
                className='carousel-control-prev'
                type='button'
                data-bs-target='#customCarousel'
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className='visually-hidden'>Previous</span>

            </button>

            <button
                className='carousel-control-next'
                type='button'
                data-bs-target='#customCarousel'
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className='visually-hidden'>Next</span>

            </button>


        </div>
    )
}

export default CustomCarousel