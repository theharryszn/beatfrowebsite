import React from 'react';
import moment from 'moment'
import { fetchBlogs } from '../../api/getMethods';
import { useQuery } from 'react-query';
import { SwiperSlide , Swiper} from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';


const BlogsList = () => {
    const { data, status } = useQuery('blogs', fetchBlogs);
    SwiperCore.use([Pagination, Navigation]);
    return ( 
        <div>
        {
            status === 'success' &&(
                data.map(blog => (
                    <article className="my-5 py-3 border-b border-gray-100 border-opacity-25" key={blog._id}>
            
                    <div className="flex items-center justify-between">
                    <div className="flex items-center">
                    <img src={require("../../assets/images/wizkid.jpg")} alt="user" className="w-10 h-10 object-cover rounded-full"/>
                    <span className="text-sm ml-2">William</span>
                    </div>
                    <span className="text-xs text-opacity-75 text-gray-500">{moment(blog.dateAdded).fromNow()}</span>
                    </div>
                    <blockquote className="text-sm mb-2 mt-3 ml-2">
                        {blog.body.slice(0,250)}...
                    </blockquote>
                    {
                        blog.images.length !== 0 && (
                            <Swiper
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    navigation
                    color="#36D94F"
                    className="w-full overflow-hidden mb-6"
                    >
                    {
                        blog.images && (
                            blog.images.map(image => (
                                <SwiperSlide className="w-full overflow-hidden blogImage">
                                <div className="bgLight w-full blogImage rounded-lg mt-3 overflow-hidden relative">
                                <img src={image} className="object-cover h-full  w-full transform transition-all duration-500 hover:scale-110" alt="blogImage"/>
                                <div className="absolute bottom-0 mx-4 my-4 py-2 px-2 rounded-full bgLightOpacity">
                                <svg className="w-6 h-6" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                </div>
                            </div>
                                </SwiperSlide>
                    
                            ))
                        )
                    }
                    
                    </Swiper>
                        )
                    }
        
                    </article>
                ))
            )
        }
        </div>
     );
}
 
export default BlogsList;