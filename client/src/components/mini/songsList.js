import React from 'react';
import Most from '../mini/most'
import PropTypes from 'prop-types'
import Controls from './controls';
import { Link } from 'react-router-dom';
import { Play } from './icons/utils';
import { useQuery } from 'react-query';
import { fetchTracks } from '../../api/getMethods';
import { Swiper, SwiperSlide } from 'swiper/react';



const SongsList = () => {
    const { data, status } = useQuery('tracks', fetchTracks, {
        staleTime:2000,
        cacheTime:10
    })

    // const [data, setdata] = useState([
    //     {
    //         "title":"Bad Blood",
    //         "artiste":"Taylor Swift ft Kendrick Lamar",
    //         "genres":["afro-pop","bate"],
    //         "albumName":"Single",
    //         "explicit":true,
    //     },
    //     {
    //         "title":"Champman Run",
    //         "artiste":"Champman",
    //         "genres":["afro-pop","bate"],
    //         "albumName":"Single",
    //         "explicit":true,
    //     }
    // ])
    return ( 
        <div>

            <div className="mb-4">
                {
                    status === 'success' && (
                    data && (
                        <div>
                            <Controls title="Top Songs"/>
                            {
                                data.length ? (
                                    <Swiper
                                    slidesPerView={4.2}
                                    freeMode
                                    >
                                        {
                                            data.map(track => (
                                                <SwiperSlide key={track._id}>
                                                <div className="w-24 md:w-48 overflow-hidden inline-block ml-4 rounded-md">
                                                <div className="w-full relative cursor-pointer rounded-md overflow-hidden">
                                                <img src={track.coverPhoto} draggable="false" className="transform duration-700 hover:scale-110 w-full h-24 md:h-48 object-cover rounded-md" alt="songcover"/>
                                                <Link to={`/tracks/${track._id}`}>
                                                    <span className="absolute bottom-0 my-2 mx-2">
                                                    <Play track={track}/>
                                                    </span>
                                                </Link>
                                                </div>
                                                <div>
                                                <Link to={`/tracks/${track._id}`}>
                                                <span className="hover:opacity-75 cursor-pointer text-sm text-white">{track.title}</span>
                                                </Link>
                                                    <span className="text-xs block transform -translate-y-1 text-gray-500">{track.artiste}</span>
                                                </div>
                                                </div>
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
                                    ):(
                                        <div>
                                    
                                        </div>
                                    )
                                    
                                }
                            
                        </div>
                    )
                    )
                }
                
                
            </div>
            <div className="mb-4">
                {
                    data && (
                        <div>
                        <Controls title="Hottest release this week"/>
                        {
                            data.length ? (
                                <Swiper
                                slidesPerView={4.2}
                                freeMode
                                >
                                    {
                                        data.map(track => (
                                            <SwiperSlide key={track._id}>
                                            <div className="w-24 md:w-48 overflow-hidden inline-block ml-4 rounded-md">
                                            <div className="w-full relative cursor-pointer rounded-md overflow-hidden">
                                            <img src={track.coverPhoto} draggable="false" className="transform duration-700 hover:scale-110 w-full h-24 md:h-48 object-cover rounded-md" alt="songcover"/>
                                            <Link to={`/tracks/${track._id}`}>
                                                <span className="absolute bottom-0 my-2 mx-2">
                                                <Play track={track}/>
                                                </span>
                                            </Link>
                                            </div>
                                            <div>
                                            <Link to={`/tracks/${track._id}`}>
                                            <span className="hover:opacity-75 cursor-pointer text-sm text-white">{track.title}</span>
                                            </Link>
                                                <span className="text-xs block transform -translate-y-1 text-gray-500">{track.artiste}</span>
                                            </div>
                                            </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                                ):(
                                    <div>
                                
                                    </div>
                                )
                                
                            }
                        
                    </div>
                    )
                }
                
                
            </div>
            <Most/>
            <div className="mb-4">
                {
                    data && (
                        <div>
                            <Controls title="Most Popular"/>
                            <div className="mt-2 overflow-x-scroll whitespace-no-wrap noScrollX">
                                {
                                    data.length ? (
                                        data.map(track => (
                                            <div key={track._id} className="w-24 md:w-48 overflow-hidden inline-block ml-4 rounded-md">
                                            <div className="w-full relative cursor-pointer rounded-md overflow-hidden">
                                            <img src={track.coverPhoto} draggable="false" className="transform duration-700 hover:scale-110 w-full h-24 md:h-48 object-cover rounded-md" alt="songcover"/>
                                            <Link to={`/tracks/${track._id}`}>
                                                <span className="absolute bottom-0 my-2 mx-2">
                                                <Play/>
                                                </span>
                                            </Link>
                                            </div>
                                            <div>
                                            <Link to={`/tracks/${track._id}`}>
                                            <span className="hover:opacity-75 cursor-pointer text-sm text-white">{track.title}</span>
                                            </Link>
                                                <span className="text-xs block transform -translate-y-1 text-gray-500">{track.artiste}</span>
                                            </div>
                                            </div>
                                        ))
                                    ):(
                                        <div>
                                       
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    )
                }
                
                
            </div>

        </div>
     );
}

SongsList.propTypes = {
    filterWithData: PropTypes.bool,
    filterData: PropTypes.string
}
 
export default SongsList;