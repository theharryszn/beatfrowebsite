import React from 'react';
import Controls from './controls';
import { Play } from './icons/utils';


const PlaylistsList = () => {
    return ( 
        <div>

            <div>
                <Controls title="For You"/>

                <div className="mt-2 overflow-x-scroll whitespace-no-wrap noScrollX">

                <div className="w-24 md:w-48 overflow-hidden inline-block ml-4 rounded-md">
                <div className="w-full relative cursor-pointer rounded-md overflow-hidden">
                <div  className="grid grid-cols-2 rounded-md overflow-hidden">
                <img src={require('../../assets/images/fireboy.jpeg')} draggable="false" className="w-full h-12 md:h-24 object-cover " alt="songcover"/>
                <img src={require('../../assets/images/yemialde.jpg')} draggable="false" className="w-full h-12 md:h-24 object-cover " alt="songcover"/>
                <img src={require('../../assets/images/hozeal.jpg')} draggable="false" className="w-full h-12 md:h-24 object-cover " alt="songcover"/>
                <img src={require('../../assets/images/wizkid.jpg')} draggable="false" className="w-full h-12 md:h-24 object-cover" alt="songcover"/>
                </div>
                <span className="absolute bottom-0 my-2 mx-2">
                <Play/>
                </span>
                </div>
                <div>
                    <span className="hover:opacity-75 cursor-pointer text-sm text-white">Afro Pop</span>
                </div>
                </div>
                    
                </div>
            </div>

        </div>
     );
}
 
export default PlaylistsList;