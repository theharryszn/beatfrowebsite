import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import Controls from '../mini/controls';
import { Play } from './icons/utils';


const ProfileSlider = ({ title , data, type}) => {
    return (
    data && (
        data.length ? (
            <div className="md:px-4 px-2 rounded-lg mx-4 my-4 bgLight py-4 pr-2 queueHeight">
            <Controls title={title}/>
                    <Swiper
                    slidesPerView={6}
                    freeMode
                    className="hidden md:block"
                    >
                    {
                        data.sort((a, b) => {
                            if(a.dateAdded < b.dateAdded){
                            return 1
                            }else {
                            return -1
                            }
                            }).map(item => (
                                <SwiperSlide key={item._id}>
                                <div className="w-24 md:w-48 overflow-hidden inline-block ml-4 rounded-md">
                                <div className="w-full relative cursor-pointer rounded-md overflow-hidden">
                                <img src={require('../../assets/images/apollo.jpg')} draggable="false" className="transform duration-700 hover:scale-110 w-full h-24 md:h-48 object-cover rounded-md" alt="songcover"/>
                                <Link to="">
                                    <span className="absolute bottom-0 my-2 mx-2">
                                    <Play/>
                                    </span>
                                </Link>
                                </div>
                                <div>
                                <Link to={`/${type}/${item._id}`}>
                                <span className="hover:opacity-75 cursor-pointer text-sm text-white">{item.title}</span>
                                </Link>
                                    <span className="text-xs block transform -translate-y-1 text-gray-500">{item.artiste}</span>
                                </div>
                                </div>
                                </SwiperSlide>
                            ))
                    }
                                
                    </Swiper>
                    <Swiper
                    slidesPerView={3}
                    freeMode
                    className="md:hidden"
                    >
                    {
                        data.sort((a, b) => {
                            if(a.dateAdded < b.dateAdded){
                            return 1
                            }else {
                            return -1
                            }
                            }).map(item => (
                                <SwiperSlide key={item._id}>
                                <div className="w-24 md:w-48 overflow-hidden inline-block ml-4 rounded-md">
                                <div className="w-full relative cursor-pointer rounded-md overflow-hidden">
                                <img src={require('../../assets/images/apollo.jpg')} draggable="false" className="transform duration-700 hover:scale-110 w-full h-24 md:h-48 object-cover rounded-md" alt="songcover"/>
                                <Link to="">
                                    <span className="absolute bottom-0 my-2 mx-2">
                                    <Play/>
                                    </span>
                                </Link>
                                </div>
                                <div>
                                <Link to={`/${type}/${item._id}`}>
                                <span className="hover:opacity-75 cursor-pointer text-sm text-white">{item.title}</span>
                                </Link>
                                    <span className="text-xs block transform -translate-y-1 text-gray-500">{item.artiste}</span>
                                </div>
                                </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
            </div>
        ):(
            <div>
            </div>
        )
        
    )
        
     );
}
 
export default ProfileSlider;