import React from 'react';
import './BannerImg.css'

const BannerImg = ({ slide }) => {

    const { image, id, prev, next } = slide;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt='' className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-20 top-1/3 mt-8">
                <h1 className='text-6xl font-bold text-white'>
                    The Place For Your<br />
                    Enjoyment
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-20 top-1/2 w-2/5 mt-14" >
                <p className=' text-xl text-white'>If you fill the need for a tour guide while traveling inside or outside the country, then you avail of this service.</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4 w-2/5">
                <button className="btn btn-warning mr-5">Warning</button>
                <button className="btn btn-outline btn-warning">Warning</button>

            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerImg;