
import { useRef, useState, useEffect, RefObject } from 'react';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay, Controller, EffectCoverflow} from 'swiper/modules';
import { Post } from '../types/index';


interface SliderProps {
    posts: Post[];
}

const Slider: React.FC<SliderProps> = ({ posts }) => {
    const postsToDisplay = posts.slice(0, 10);
    const swiper = useRef<SwiperRef>(null);
    const listContainerRef: RefObject<HTMLDivElement> = useRef(null);
    const listUL: RefObject<HTMLUListElement> = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);



    useEffect(() => {
        const liElement = listUL.current?.children[activeIndex];
        const ulElement = listContainerRef.current;

        if (liElement && ulElement) {
            const liRect = liElement.getBoundingClientRect();
            const ulRect = ulElement.getBoundingClientRect();
            const relativePosition = {
                top: liRect.top - ulRect.top,
                left: liRect.left - ulRect.left
            };

            if (activeIndex === postList.length - 1) {
                setTimeout(() => {
                    listContainerRef.current !== null ? listContainerRef.current.scrollTop = 0 : false;
                }, swiperAutoplay.delay);
            } else if (relativePosition.top >= ulElement.clientHeight - 100) {
                const newScrollTop = listContainerRef.current.scrollTop + liElement.clientHeight;
                listContainerRef.current.scrollTop = newScrollTop;
            } else if (swiper && swiper.current?.swiper.previousIndex !== undefined) {
                const previousIndex = swiper.current.swiper.previousIndex;
                const currentIndex = activeIndex;

                if (previousIndex > currentIndex && previousIndex !== postList.length - 1) {
                    const newScrollTop = listContainerRef.current.scrollTop - liElement.clientHeight;
                    listContainerRef.current.scrollTop = newScrollTop;

                }
            }
        }
    }, [activeIndex]);



    const slides = postsToDisplay.map((s, index) => (
        <SwiperSlide key={index}><img src={s.image_url} alt={`Slide ${index + 1}`} /></SwiperSlide>
    ));





    const postList = postsToDisplay.map((post, idx) => (
        <li className={`w-full h-[80px] border-b-2 border-neutral-100 border-opacity-100 dark:border-opacity-50 ${activeIndex === idx ? 'bg-gray-300' : '' // Додайте клас 'bg-gray-300' для активного елемента
            }`} key={idx} onClick={() => {
                swiper.current?.swiper.slideTo(idx);
            }}
        >
            <h5 className='float-right'>{post.pubDate}</h5>
            <p className='flex w-full  text-black py-1 px-4 bg-slate-700' >
                {post.title}.
            </p>

        </li>
    ));

    const swiperAutoplay = {
        delay: 3000,
        disableOnInteraction: true,
    };

    const coverflowEffect = {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    }

    return (
        <div className=" w-full md:flex xl:flex-col">


            <Swiper ref={swiper} coverflowEffect={coverflowEffect} effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}  style={{ width: '100%'  }} slidesPerView={4} navigation={true} modules={[Navigation, Autoplay, Controller,EffectCoverflow]} className="mySwiper text-black" autoplay={swiperAutoplay} onSwiper={() => {
                }} onSlideChange={(swiper) => {
                    setActiveIndex(swiper.activeIndex);
                }} >
                {slides}
            </Swiper>


            <div className="text-sm md:w-[60%] xl:w-[100%] md:text-base text-black">
                <div ref={listContainerRef}
                    className="block scroll-smooth w-full max-h-[30vh] min-h-[300px] overflow-y-auto rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <ul ref={listUL} className="w-full h-full">
                        {postList}
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default Slider; 
