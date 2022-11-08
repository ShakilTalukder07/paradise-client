import React from 'react';
import spot1 from '../../../assets/images/galleryImages/spot1.jpg';
import spot2 from '../../../assets/images/galleryImages/spot2.jpg';
import spot3 from '../../../assets/images/galleryImages/spot3.jpg';
import spot4 from '../../../assets/images/galleryImages/spot4.jpg';

const Gallery = () => {
    return (
        <div>
            <div className='my-8 text-center mb-6'>
                <h className="text-5xl font-bold underline-offset-1 underline ">Gallery</h>
            </div>
            <div className=' my-12 text-center '>
                <p>
                    An image is a visual representation of something. It can be two-dimensional, three-dimensional, or somehow otherwise feed into the visual system
                </p>
                <p>
                    to convey information. An image can be an artifact, such as a photograph or other two-dimensional picture, that resembles a subject.
                </p>
                <p>
                    We are provide guide in many different place all over the world. Here we are showing some picture of our client.
                </p>
            </div>
            <div className='flex gap-2'>
                <div>
                    <img  className="rounded-xl h-60 w-80"  src={spot1} alt="" />
                </div>
                <div>
                    <img  className="rounded-xl h-60 w-80"  src={spot2} alt="" />
                </div>
                <div>
                    <img  className="rounded-xl h-60 w-80"  src={spot3} alt="" />
                </div>
                <div>
                    <img  className="rounded-xl h-60 w-80"  src={spot4} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;