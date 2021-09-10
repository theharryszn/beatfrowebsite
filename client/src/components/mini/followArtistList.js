import React from 'react';
import { useQuery } from 'react-query'
import { fetchArtistes } from '../../api/getMethods'


const FollowArtistList = () => {
    const { data, status } = useQuery('artistes',fetchArtistes);
    console.log(data)
    return (
        status === 'success' && (
            <div>

        <div className="pt-2">

        <p className="text-sm mb-2">Suggested</p>

        <div className="overflow-x-scroll whitespace-no-wrap noScrollX pb-3 flex items-center">
        {
            data.map(artiste => (
                <div className="bgLight rounded-lg flex-col items-center justify-center inline-block px-5 py-4 mr-3" >
                <img className="rounded-full w-16 h-16 object-cover mb-2" alt="artiste" src={artiste.coverPhoto}/>
                <div className="text-sm mb-2 text-center">
                    {artiste.stageName}
                </div>
                <div className="text-xs text-center py-1 px-2 ui rounded-full cursor-pointer">Follow</div>
            </div>
            ))
        }
        
        <div className="bgLight rounded-lg inline-block mr-3 text-sm py-12 px-2 h-full cursor-pointer" >
            View More
        </div>
        </div>

        </div>

        </div>
        )
     );
}
 
export default FollowArtistList;