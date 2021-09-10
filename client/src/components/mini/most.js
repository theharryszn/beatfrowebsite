import React from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


const Most = () => {
    const todays = [
        {
            id:Math.random(),
            title: "Most Played Song",
            songDetails:"Champion - Fireboy",
            img: require('../../assets/images/apollo.jpg')
        },
        {
            id:Math.random(),
            title: "South Africa's Most Played",
            songDetails:"There They Go - Nasty-C",
            img: require('../../assets/images/Nasty-C.jpg')
        },
        {
            id:Math.random(),
            title: "South Africa's Most Played",
            songDetails:"There They Go - Nasty-C",
            img: require('../../assets/images/burna.webp')
        },

    ]
    SwiperCore.use([Autoplay]);
    return ( 
        <div className="mr-3">
        <Swiper
        spaceBetween={10}
        autoplay={{delay: 2500, disableOnInteraction:false,}}
        slidesPerView={1.2}
        color="#36D94F"
        >

        {
            todays.map(today => (
                <SwiperSlide key={today.id}>
                <div key={today.id} className="rounded-md overflow-hidden relative ml-4 w-full inline-block ">
                    <img src={today.img} draggable="false" className="h-48 md:h-64 w-full object-cover transform hover:scale-110 duration-700 ease-in-out" alt="most"/>
                    <div className="absolute z-10 bottom-0 px-2 py-3">
                    <span className="text-xs block">{today.title}</span>
                    <span className="text-xl font-medium">{today.songDetails}</span>
                    </div>
                </div>
                </SwiperSlide>
            ))
        }
        </Swiper>
        
        </div>
     );
}
 
export default Most;