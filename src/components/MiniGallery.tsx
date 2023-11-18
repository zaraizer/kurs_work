import React from 'react';
import { useNavigate } from 'react-router-dom';
import im1 from '../assets/miniGallery/1.jpg'
import im2 from '../assets/miniGallery/2.jpg'
import im3 from '../assets/miniGallery/3.jpg'
import im4 from '../assets/miniGallery/4.jpg'
import im5 from '../assets/miniGallery/5.jpg'
import im6 from '../assets/miniGallery/6.jpg'

const MiniGallery: React.FC = () => {
    const navigate = useNavigate();

    const handleGalleryClick = () => {
        // Navigate to the /gallery route
        navigate('/gallery');
    };
    return (
        <div className="container mx-auto  py-2   w-full  hover:cursor-pointer" onClick={handleGalleryClick}
        >
            <div className="-m-1 flex flex-wrap md:-m-2">
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={im1} />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={im2} />
                    </div>
                    <div className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={im3} />
                    </div>
                </div>
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={im4} />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={im5} />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={im6} />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MiniGallery;
