import React, { useContext } from 'react';
import { Mic, Mute, Play} from './icons/utils';
import { Link } from 'react-router-dom'
import { StatusContext } from '../../context/status';
import Chevron from './chevron';

const Playing = ({ toggleList }) => {
    String.prototype.toHHMMSS = function () {
        var sec_num = parseInt(this, 10); // don't forget the second param
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);
    
        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        return hours + ':' + minutes + ':' + seconds;
    }
    return ( 
        <div className="relative lyrics-tab">
            <div className="absolute top-0 z-40 w-full lyrics-tab overflow-hidden">
            <img src={currentTrack.coverPhoto} alt="blur" className="blurBack w-full"/>
            </div>


            <div className=" md:hidden z-50 absolute top-0 mt-16 w-full px-3">
            <div className="flex flex-col justify-center items-center">
                <div>
                    <img src={currentTrack.coverPhoto} className={ isPlaying === true ? 'animate-pulse object-cover w-64 h-64 rounded-lg shadow-2xl':  'object-cover w-64 h-64 rounded-lg shadow-2xl' } alt="now playing"/>
                </div>
                <div className="text-center mb-3">
                <span className="hover:opacity-75 cursor-pointer text-lg pt-2 text-white">{currentTrack.title}</span>
                            <span className="text-xs block transform -translate-y-1 text-gray-500">{currentTrack.artiste}</span>
                </div>
                <div className="flex items-center z-high">
                            <span className="mr-3">
                                <svg version="1.1" id="Capa_1" fill="#eee" className="w-4 h-4 transform rotate-180" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                viewBox="0 0 320 320" enableBackground="new 0 0 320 320">
                           <path d="M288,0c-8.832,0-16,7.168-16,16v116.64L39.84,2.048c-4.896-2.752-11.008-2.72-15.904,0.128S16,10.304,16,16v288
                               c0,5.696,3.04,10.944,7.936,13.824C26.4,319.264,29.216,320,32,320c2.72,0,5.408-0.672,7.84-2.048L272,187.36V304
                               c0,8.832,7.168,16,16,16s16-7.168,16-16V16C304,7.168,296.832,0,288,0z"/>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           </svg>
                                </span>
                            <span className="mr-3">
                            {
                                isPlaying === true ? (
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="#eee" onClick={pause} x="0px" y="0px"
                                            viewBox="0 0 477.867 477.867" enableBackground="new 0 0 477.867 477.867">
                                        <g>
                                            <g>
                                                <path d="M187.733,0H51.2c-9.426,0-17.067,7.641-17.067,17.067V460.8c0,9.426,7.641,17.067,17.067,17.067h136.533
                                                    c9.426,0,17.067-7.641,17.067-17.067V17.067C204.8,7.641,197.159,0,187.733,0z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M426.667,0H290.133c-9.426,0-17.067,7.641-17.067,17.067V460.8c0,9.426,7.641,17.067,17.067,17.067h136.533
                                                    c9.426,0,17.067-7.641,17.067-17.067V17.067C443.733,7.641,436.092,0,426.667,0z"/>
                                            </g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        </svg>
                                ):(
                                    <svg version="1.1" id="Capa_1" fill="#eee" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" onClick={play} x="0px" y="0px"
                                    viewBox="0 0 320.001 320.001" enableBackground="new 0 0 320.001 320.001">
                               <path d="M295.84,146.049l-256-144c-4.96-2.784-11.008-2.72-15.904,0.128C19.008,5.057,16,10.305,16,16.001v288
                                   c0,5.696,3.008,10.944,7.936,13.824c2.496,1.44,5.28,2.176,8.064,2.176c2.688,0,5.408-0.672,7.84-2.048l256-144
                                   c5.024-2.848,8.16-8.16,8.16-13.952S300.864,148.897,295.84,146.049z"/>
                               <g>
                               </g>
                               <g>
                               </g>
                               <g>
                               </g>
                               <g>
                               </g>
                               <g>
                               </g>
                               <g>
                               </g>
                               <g>
                               </g>
                               <g>
                               </g>
                               <g>
                               </g>
                               <g>
                               </g>
                               <g>
                               </g>
                               <g>
                               </g>
                               <g>
                               </g>
                               <g>
                               </g>
                               <g>
                               </g>
                               </svg>
                                )
                            }
                                </span>
                                <span className="">
                                <svg version="1.1" id="Capa_1" fill="#eee" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" onClick={playNext} x="0px" y="0px"
                                viewBox="0 0 320 320" enable-background="new 0 0 320 320">
                           <path d="M288,0c-8.832,0-16,7.168-16,16v116.64L39.84,2.048c-4.896-2.752-11.008-2.72-15.904,0.128S16,10.304,16,16v288
                               c0,5.696,3.04,10.944,7.936,13.824C26.4,319.264,29.216,320,32,320c2.72,0,5.408-0.672,7.84-2.048L272,187.36V304
                               c0,8.832,7.168,16,16,16s16-7.168,16-16V16C304,7.168,296.832,0,288,0z"/>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           </svg>
                                </span>
                            </div>
                        
                <div className="w-full mx-3 bg-opacity-25">
                {
                    isPlaying && (
                        <div className="animate-pulse">
                            <input type="range" min="0" max="100" className="w-full slider" onChange={(e) => seek(e.target.value)} value={ !isNaN(progressWidth) ? progressWidth : 0}/>
                        </div>
                    )
                }
                </div>
                <div className="flex items-center justify-between text-xs text-gray-100 text-opacity-25 w-full">
                <span>
                    {
                        currentTime.toString().toHHMMSS()
                    }
                </span>
                <span>
                    {
                        duration.toString().toHHMMSS()               
                         }
                </span>
                </div>
            </div>
                <div className="syntax-ui text-xs pt-2">
                Playing Next
                </div>
                <div>
                {
                    queue && (
                        queue.map(track => (
                            <div key={track._id} className="flex items-center justify-between border-b border-gray-100 border-opacity-25 py-4">
                            <div className="flex items-center">
                                <div className="mr-2">
                                    <img src={track.coverPhoto} alt="song" className="w-10 object-cover h-10"/>
                                </div>
        
                                <div>
                                    <span className="hover:opacity-75 cursor-pointer text-sm text-white">{track.title}</span>
                                    <span className="text-xs block transform -translate-y-1 text-gray-500">{track.artiste}</span>
                                </div>
        
                            </div>
        
                            <div className="flex items-center oll">
                                    <div className="cursor-pointer mr-3">
                                    <svg className="w-5 h-5" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                    </div>
                                    <div className="cursor-pointer mr-3">
                                        <Play track={track}/>
                                    </div>
                                    <div className="w-0 overflow-x-hidden deleteIcon">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                </div>
                        </div>
                        ))
                    )
                }
                </div>

                <div className="rounded-t-lg mt-12 bottom-msg px-4 py-5">
                    <h6 className="text-gray-300 mt-4">Did you love this queue ?</h6>
                    <span className="text-sm text-gray-500 block mb-3">You can create a playlist with all this songs.</span>
                    <div className="grid grid-cols-2">
                    <Link to="/createplaylist" className="px-3 col-span-1 flex items-center py-1 text-sm text-white bgLight rounded-full mt-8">
                    <span>+</span>
                    <span className="ml-2" onClick={toggleList}>Create Playlist</span>
                    </Link>
                    </div>
                </div>

                </div>


            <div className="w-full hidden md:block z-50 absolute top-0 mt-16 overflow-hidden">
                
                <div className="grid grid-cols-5">

                    <div className="col-span-2 pt-24 w-full">
                        <div className="flex flex-col items-center w-full">
                            <div>
                                <img src={currentTrack.coverPhoto} className={ isPlaying === true ? 'animate-pulse object-cover w-64 h-64 rounded-lg shadow-2xl':  'object-cover w-64 h-64 rounded-lg shadow-2xl' } alt="now playing"/>
                            </div>
                            <div>
                            <div className="text-center mb-3">
                            <span className="hover:opacity-75 cursor-pointer text-lg pt-2 text-white">{currentTrack.title}</span>
                            <span className="text-xs block transform -translate-y-1 text-gray-500">{currentTrack.artiste}</span>
                            </div>
                            </div>
                            <div className="w-full px-6">
                                    {
                                        isPlaying && (
                                            <div className="animate-pulse w-full px-3">
                                                <input type="range" min="0" max="100" className="w-full slider" onChange={(e) => seek(e.target.value)} value={ !isNaN(progressWidth) && progressWidth}/>
                                            </div>
                                        )
                                    }
                            <div className="flex items-center justify-between text-xs text-gray-100 text-opacity-25 w-full">
                            <span>
                                {
                                    currentTime.toString().toHHMMSS()
                                }
                            </span>
                            <span>
                                {
                                    duration.toString().toHHMMSS()               
                                    }
                            </span>
                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-3">
                    <div className="syntax-ui text-xs pt-2">
                    Playing Next
                    </div>
                    <div className="overflow-y-scroll pr-2 w-full queueHeight">
                    {
                        queue && (
                            queue.map(track => (
                                <div key={track._id}   className="flex relative pl-3  queueTrack items-center justify-between border-b border-gray-100 border-opacity-25 py-4">
                                <div className="flex items-center">
                                    <div className="mr-2">
                                        <img src={track.coverPhoto} alt="song" className="w-10 object-cover h-10"/>
                                    </div>
            
                                    <div>
                                        <span className="hover:opacity-75 cursor-pointer text-sm text-white">{track.title}</span>
                                        <span className="text-xs block transform -translate-y-1 text-gray-500">{track.artiste}</span>
                                    </div>

                                    
            
                                </div>
                                <div className="flex items-center oll">
                                    <div className="cursor-pointer mr-3">
                                    <svg className="w-5 h-5" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                    </div>
                                    <div className="cursor-pointer mr-3">
                                        <Play track={track}/>
                                    </div>
                                    <div className="w-0 overflow-x-hidden deleteIcon cursor-pointer">
                                    <svg className="w-6 h-6" fill="none" stroke="#fff" onClick={()=> deleteFromQueue(track.id)} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                </div>
                            </div>
                            ))
                        )
                    }
                    </div>
                    </div>

                </div>
            
            </div>


        </div>
     );
}
 
export default Playing;