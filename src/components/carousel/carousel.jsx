import { Navigation, Pagination, Scrollbar, A11y, } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Skidka from '../../assets/swiper/skidka.png';
import Skidka1 from '../../assets/swiper/skidka1.png'
import Skidka2 from '../../assets/swiper/skidka2.png';
import Skidka3 from '../../assets/swiper/skidka3.png'
import Skidka4 from '../../assets/swiper/skidka4.png'
import Skidka5 from '../../assets/swiper/skidka5.png'
import Skidka6 from '../../assets/swiper/skidka6.png'
import Skidka7 from '../../assets/swiper/skidka7.png'
import Skidka8 from '../../assets/swiper/skidka8.png'
import Skidka9 from '../../assets/swiper/skidka9.png'
import Skidka10 from '../../assets/swiper/skidka10.png'
import './carousel.scss';
const swImgs = [Skidka, Skidka1, Skidka2, Skidka3, Skidka4, Skidka5, Skidka6, Skidka7, Skidka8, Skidka9, Skidka10];

export const CarouselComp = () => {
    return ( 
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y,]}
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        >
            {
                swImgs.map((sw) => (
                    <SwiperSlide>
                        <img src={sw} width="100%" alt="" />
                    </SwiperSlide>    
                ))
            }
        </Swiper>
    )
}