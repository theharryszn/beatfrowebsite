import React from 'react';
import Controls from './controls';
import { useQuery } from 'react-query'
import { fetchGenres } from '../../api/getMethods';

const GenreList = () => {

    const { data, status } = useQuery('genres', fetchGenres)
    return ( 
        <div>
        
            <div className="mb-4 text-white">
                <Controls title="Genres"/>
                <div className="overflow-x-scroll whitespace-no-wrap noScrollX pl-3">
                {
                    status === "success" && (
                        data.map(genre => (
                            <div key={genre._id} className={`transform duration-1000 genre  bg-gradient-to-tr ${genre.gradientCode} text-center ml-1 inline-block p-8 flex-col items-center rounded-lg`}>
                                {genre.title}
                            </div>
                        ))
                    )
                }
                </div>

            </div>

        </div>
     );
}
 
export default GenreList;

