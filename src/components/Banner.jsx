import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slide1 from '../assets/banner 1.jpg'
import slide2 from '../assets/banner 2.jpg'
import slide3 from '../assets/banner 3.jpg'
import slide4 from '../assets/banner 4.jpg'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img className='w-full h-[400px]' src={slide1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[400px]' src={slide2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[400px]' src={slide3} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[400px]' src={slide4} alt="" /></SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;