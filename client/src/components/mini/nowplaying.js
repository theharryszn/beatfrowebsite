import React, { useState, useContext } from 'react';
import LyricsTab from './lyricsTab';
import Chevron from './chevron';
import { StatusContext } from '../../context/status';
import { Mute, Mic } from './icons/utils';
import Playing from './playing';


const NowPlaying = () => {
    const status = useContext(StatusContext);

    const { 
        // initComponent,
        lyrics,
        currentTrack,
        progressWidth,
        deleteFromQueue,
        playNext,
        currentTime,
        pause,
        play,
        // mute,
        duration,
        isPlaying,
        // changeDuration,
        queue,
        seek } = status;
    // console.log(currentTrack)

    const [closed, setclosed] = useState(true)
    const [showList, setshowList] = useState(false)

    const toggleClosed = () => {
       
        setclosed(!closed);
    }

    const toggleList = () => {
        setclosed(true)
        setshowList(!showList)
    }


    return (
        currentTrack !== null ? (
            <div className="bgDarker rounded-t-lg overflow-hidden">

            <div className="lyrics-tab transform duration-300 ease-in-out absolute bottom-0 w-full bgDarker" style={ closed === true ? { maxHeight:"0px"} : { maxHeight:"92vh"}}>
            <div className="absolute top-0 w-full">
                <div className="flex justify-between items-center py-4 px-4 bgDarker border-b border-gray-100 border-opacity-25">
                <div>
                    <span className="hover:opacity-75 cursor-pointer text-sm text-white">{currentTrack.title}</span>
                    <span className="text-xs block transform -translate-y-1 text-gray-500">{currentTrack.artiste}</span>
                </div>

                <div className="z-high">
                <Chevron fill="#eee" width="15px" height="15px" className={ closed === false ? "transform rotate-90 duration-300 ease-in-out" : "transform -rotate-90 duration-300 ease-in-out" } onClick={toggleClosed} />
                </div>
                </div>
            </div>
            <span className={`transform duration-300 ease-in-out pb-6 ${ closed === false ? ' block':'hidden'}`}>
            // <LyricsTab lyrics={lyrics}/>
            </span>
            </div>
            
            <div className="lyrics-tab transform duration-300 overflow-y-hidden ease-in-out absolute bottom-0 w-full bgDarker" style={ showList === false ? { maxHeight:"0px"} : { maxHeight:"92vh"}}>
            <div className="absolute top-0 w-full z-high backdropDarker">
                <div className="flex justify-between items-center py-4 px-4 border-b border-gray-100 border-opacity-25">
                <div className="text-white text-opacity-50">
                    Now Playing
                </div>

                <div className="z-high">
                <Chevron fill="#eee" width="15px" height="15px" className={ showList === true ? "transform rotate-90 duration-300 ease-in-out" : "transform -rotate-90 duration-300 ease-in-out" } onClick={toggleList} />
                </div>
                </div>
            </div>

            <span className={`transform duration-300 ease-in-out overflow-y-hidden  ${ showList === true ? ' block':'hidden'}`}>
                
            </span>
            </div>
            {
                currentTrack !== null && (
                    <div className="bgDarker z-high relative transform duration-1000 ease-in-out" style={ showList === true ? {maxHeight:"0px"} : {maxHeight:"max-content"}}>
                    <div className="absolute top-0 w-full">
                    <img src={currentTrack.coverPhoto} alt="blur" className="blurBack w-full"/>
                    </div>
                        <div className="ui absolute top-0 uiSlider" style={{ width: `${progressWidth}%`}}>
                                
                        </div>
                        <div className="flex justify-between items-center py-2 px-4 z-high">
                            <div>
                                <span className="hover:opacity-75 cursor-pointer text-sm text-white">{currentTrack.title}</span>
                                <span className="text-xs block transform -translate-y-1 text-gray-500">{currentTrack.artiste}</span>
                            </div>
                            <div>
                            
                            </div>
                            
                            <div>
                            
                            </div>
        
                            <div className="flex items-center z-high">
                            <span className="mr-3"> <svg version="1.1" id="Capa_1" fill="#eee" className="w-4 h-4 transform rotate-180" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 320 320" enableBackground="new 0 0 320 320"> <path d="M288,0c-8.832,0-16,7.168-16,16v116.64L39.84,2.048c-4.896-2.752-11.008-2.72-15.904,0.128S16,10.304,16,16v288 c0,5.696,3.04,10.944,7.936,13.824C26.4,319.264,29.216,320,32,320c2.72,0,5.408-0.672,7.84-2.048L272,187.36V304 c0,8.832,7.168,16,16,16s16-7.168,16-16V16C304,7.168,296.832,0,288,0z"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> </span>
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
                                <span className="mr-8 md:mr-32">
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
                                <span className="mr-3 hidden md:block">
                                    <Mute/>
                                </span>
                                <span className="mr-3 ">
                                    <Mic onClick={toggleClosed}/>
                                </span>
                                <span className="ml-6">
                                    <Chevron fill="#fff" width="15px" height="15px" className={ showList === true ? "transform rotate-90 duration-300 ease-in-out" : "transform -rotate-90 duration-300 ease-in-out" } onClick={toggleList}/>
                                </span>
                                {
                                    queue.length && (
                                        <span onClick={() => {
                                            toggleList()
                                        }} className="ml-6 hidden bg-gray-600 bg-opacity-25 px-2 py-1 rounded-lg md:flex items-center cursor-pointer">
                                            <img src={queue[1].coverPhoto} className="w-6 h-6 rounded-sm object-cover mr-2" alt="song"/>
                                            <span className="text-gray-200 text-sm">{`${queue[1].title} - ${queue[1].artiste}`}</span>
                                        </span>
                                    )
                                }
                            </div>
                        </div>
                        
        
                    </div>
                )
            }
            

        </div>
        ):(
            <div></div>
        )
     );
}
 
export default NowPlaying;