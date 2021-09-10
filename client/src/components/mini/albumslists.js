import React from 'react';
import Controls from './controls';
import { useQuery } from 'react-query'
import { fetchAlbums } from '../../api/getMethods';
import { Link } from 'react-router-dom';


const AlbumsList = () => {
    const { data, status} = useQuery('albums', fetchAlbums)
    return ( 
        <div>

            <div>
            {
                status === "success" && (
                    data.length ? (

                        <div>
                        <Controls title="New Albums"/>
    
                        <div className="mt-2 overflow-x-scroll whitespace-no-wrap noScrollX">
                        {

                            data.map(album => (
                                <div className="w-24 md:w-48 overflow-hidden inline-block ml-4 rounded-md">
                                <div className="w-full relative cursor-pointer rounded-md overflow-hidden">
                                <img src={album.coverPhoto} draggable="false" className="transform duration-700 hover:scale-110 w-full h-24 md:h-48 object-cover rounded-md" alt="songcover"/>
                                </div>
                                <div>
                                    <Link to={`/album/${album._id}`}>
                                    <span className="hover:opacity-75 cursor-pointer text-sm text-white">{album.title}</span>
                                    </Link>
                                    <span className="text-xs block transform -translate-y-1 text-gray-500">{album.artiste}</span>
                                </div>
                                </div>
                            ))
                                }
                
                                
                                    
                                </div>
                                </div>
                        ):(
                            <div className="w-full text-center text-gray-300 text-opacity-50">
                           No Albums
                            </div>
                        )
                    )
            }
            </div>

        </div>
     );
}
 
export default AlbumsList;