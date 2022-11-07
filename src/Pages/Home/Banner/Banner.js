import React from 'react';
import img1 from '../../../assets/images/Banner/1.jpeg'
import img2 from '../../../assets/images/Banner/2.jpeg'
import img3 from '../../../assets/images/Banner/3.jpeg'
import img4 from '../../../assets/images/Banner/4.jpeg'
import img5 from '../../../assets/images/Banner/5.jpeg'
import img6 from '../../../assets/images/Banner/6.jpeg'
import BannerImg from './BannerImg';

const bannerData = [
    {
        image: img1,
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: img4,
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: img5,
        prev: 4,
        id: 5,
        next: 6
    },
    {
        image: img6,
        prev: 5,
        id: 6,
        next: 1
    }
]


const Banner = () => {
    return (
        <div>
            <div className="carousel w-full py-10">

                {
                    bannerData.map(slide => <BannerImg
                        key={slide.id}
                        slide={slide}
                    ></BannerImg>)
                }

            </div>
        </div>
    );
};


export default Banner;