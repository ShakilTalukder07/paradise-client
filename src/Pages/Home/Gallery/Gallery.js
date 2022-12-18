import React from 'react';
import img1 from '../../../assets/images/galleryImages/1.jpeg';
import img2 from '../../../assets/images/galleryImages/2.jpeg';
import img3 from '../../../assets/images/galleryImages/3.jpeg';
import img4 from '../../../assets/images/galleryImages/4.jpeg';
import img5 from '../../../assets/images/galleryImages/5.jpeg';
import img6 from '../../../assets/images/galleryImages/6.jpeg';
import img7 from '../../../assets/images/galleryImages/7.jpeg';
import img8 from '../../../assets/images/galleryImages/8.jpeg';
// import img9 from '../../../assets/images/galleryImages/9.jpeg';

const Gallery = () => {
    return (
        <div>
            <div className='my-8 text-center mb-6'>
                <h className="text-5xl font-bold underline-offset-1">Gallery</h>
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
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-2'>
                <div>
                    <img  className="rounded-xl h-60 w-80"  src={img1} alt="" />
                </div>
                <div>
                    <img  className="rounded-xl h-60 w-80"  src={img2} alt="" />
                </div>
                <div>
                    <img  className="rounded-xl h-60 w-80"  src={img3} alt="" />
                </div>
                <div>
                    <img  className="rounded-xl h-60 w-80"  src={img4} alt="" />
                </div>
                <div>
                    <img  className="rounded-xl h-60 w-80"  src={img5} alt="" />
                </div>
                <div>
                    <img  className="rounded-xl h-60 w-80"  src={img6} alt="" />
                </div>
                <div>
                    <img  className="rounded-xl h-60 w-80"  src={img7} alt="" />
                </div>
                <div>
                    <img  className="rounded-xl h-60 w-80"  src={img8} alt="" />
                </div>
                {/* <div>
                    <img  className="rounded-xl h-60 w-80"  src={img9} alt="" />
                </div> */}
            </div>
        </div>
    );
};

export default Gallery;