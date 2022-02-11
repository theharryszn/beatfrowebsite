import React, { useContext } from "react";
import { StatusContext } from "../../../context/status";



export const Pause = ({width,height, track}) => {
    const status = useContext(StatusContext)
    const { pause} = status;

    return (
        <svg viewBox="0 0 20 20"  xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width} fill="#fff" onClick={pause} className="pause w-6 h-6"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
    )
}

export const Blog = () => {
    return (
        <svg className="w-4 h-4" viewBox="0 -10 512 511" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="m452 .5h-392c-33.085938 0-60 26.914062-60 60v332c0 44.113281 35.886719 80 80 80h226c11.046875 0 20-8.953125 20-20s-8.953125-20-20-20h-226c-22.054688 0-40-17.945312-40-40v-271h432v184c0 11.046875 8.953125 20 20 20s20-8.953125 20-20v-245c0-33.085938-26.914062-60-60-60zm-81 40c11.027344 0 20 8.972656 20 20s-8.972656 20-20 20-20-8.972656-20-20 8.972656-20 20-20zm100 20c0 11.027344-8.972656 20-20 20s-20-8.972656-20-20 8.972656-20 20-20 20 8.972656 20 20zm-431 0c0-11.027344 8.972656-20 20-20h254.441406c-2.222656 6.261719-3.441406 12.988281-3.441406 20 0 7.386719 1.347656 14.460938 3.800781 21h-274.800781zm344.882812 219.785156c-2.328124-2.332031-5.195312-4.054687-8.347656-5.011718l-78.722656-23.910157c-6.980469-2.121093-14.558594-.273437-19.78125 4.820313-5.21875 5.09375-7.253906 12.625-5.304688 19.65625l22.359376 80.722656c.921874 3.324219 2.683593 6.351562 5.121093 8.789062l109.367188 109.574219c11.695312 11.695313 27.0625 17.546875 42.425781 17.546875s30.726562-5.851562 42.425781-17.546875c23.394531-23.394531 23.394531-61.457031.015625-84.835937zm-63.902343 19.917969 39.128906 11.886719 73.925781 74.089844-28.289062 28.289062-73.515625-73.652344zm145.160156 146.4375c-7.796875 7.800781-20.484375 7.800781-28.269531.015625l-3.867188-3.875 28.285156-28.285156 3.855469 3.863281c7.796875 7.796875 7.796875 20.484375-.003906 28.28125zm0 0"/></svg>
    )
}

export const Recent = () => {
    return (
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
        viewBox="0 0 512 512" enableBackground="new 0 0 512 512" className="w-4 h-4" fill="#fff">
   <g>
       <g>
           <path d="M347.216,301.211l-71.387-53.54V138.609c0-10.966-8.864-19.83-19.83-19.83c-10.966,0-19.83,8.864-19.83,19.83v118.978
               c0,6.246,2.935,12.136,7.932,15.864l79.318,59.489c3.569,2.677,7.734,3.966,11.878,3.966c6.048,0,11.997-2.717,15.884-7.952
               C357.766,320.208,355.981,307.775,347.216,301.211z"/>
       </g>
   </g>
   <g>
       <g>
           <path d="M256,0C114.833,0,0,114.833,0,256s114.833,256,256,256s256-114.833,256-256S397.167,0,256,0z M256,472.341
               c-119.275,0-216.341-97.066-216.341-216.341S136.725,39.659,256,39.659c119.295,0,216.341,97.066,216.341,216.341
               S375.275,472.341,256,472.341z"/>
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
       )
}

export const AppleMusic = () => {
  return (
    <svg version="1.1" id="Capa_1" x="0px" y="0px" className="w-4 h-4 text-white"
                viewBox="0 0 512 512" fill="#fff">
           <g>
               <g>
                   <path d="M407,0H105C47.103,0,0,47.103,0,105v302c0,57.897,47.103,105,105,105h302c57.897,0,105-47.103,105-105V105
                       C512,47.103,464.897,0,407,0z M383,316v15v25c0,22.056-17.944,40-40,40h-25c-22.056,0-40-17.944-40-40c0-22.056,17.944-40,40-40
                       h35V168.807l-144,24.828V346v15v25c0,22.056-17.944,40-40,40h-25c-22.056,0-40-17.944-40-40c0-22.056,17.944-40,40-40h35V118.365
                       l204-35.172V316z"/>
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
  )
}



export const PlayList = () => {
    return ( 
        <svg version="1.1" id="Capa_1"  x="0px" y="0px"
                viewBox="0 0 405.333 405.333" className="w-4 h-4" fill="#fff">
           <g>
               <g>
                   <g>
                       <rect x="0" y="53.333" width="256" height="42.667"/>
                       <rect x="0" y="138.667" width="256" height="42.667"/>
                       <path d="M298.667,53.333v174.613c-6.72-2.453-13.76-3.947-21.333-3.947c-35.307,0-64,28.693-64,64c0,35.307,28.693,64,64,64
                           c35.307,0,64-28.693,64-64V96h64V53.333H298.667z"/>
                       <rect x="0" y="224" width="170.667" height="42.667"/>
                   </g>
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
                
     );
}
 

export const Album = () => {
    return (
        <svg version="1.1" id="Capa_1" x="0px" y="0px" className=" w-4 h-4" fill="#fff"
                viewBox="0 0 512 512">
           <path d="M496,128H16c-8.832,0-16,7.168-16,16v352c0,8.832,7.168,16,16,16h480c8.832,0,16-7.168,16-16V144
               C512,135.168,504.832,128,496,128z M336,286.016c-8.832,0-16-7.168-16-16c0-21.376-17.504-33.6-32-40.032V400
               c0,26.912-28.096,48-64,48s-64-21.088-64-48s28.096-48,64-48c11.808,0,22.592,2.464,32,6.464V208c0-4.768,2.112-9.28,5.792-12.32
               s8.512-4.256,13.184-3.392C301.632,197.28,352,219.968,352,270.016C352,278.848,344.832,286.016,336,286.016z"/>
           <path d="M448,80c0-8.832-7.168-16-16-16H80c-8.832,0-16,7.168-16,16v16h384V80z"/>
           <path d="M384,16c0-8.832-7.168-16-16-16H144c-8.832,0-16,7.168-16,16v16h256V16z"/>
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
                
    );
}

export const Heart = ({width,height}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 20 20" fill="#fff" className="heart w-4 h-4"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
    )
}

export const Play = ({width,height, track}) => {
    // console.log(track)
    const status = useContext(StatusContext)
    const { playAnotherTrack } = status;
    return (
        <svg width={width} height={height} onClick={() => playAnotherTrack(track)} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"  fill="#fff" className="play w-6 h-6"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
    )
}

export const Dots = ({width,height}) => {
    return (
        <svg viewBox="0 0 20 20"  xmlns="http://www.w3.org/2000/svg"
      fill="#fff" width={width} height={height} className="dots-vertical w-6 h-6"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
    )
}

export const Mute = () => {
    const status = useContext(StatusContext)
    const { isMuted, mute } = status;
    return (
            isMuted === false ? (
                <svg viewBox="0 0 20 20"  xmlns="http://www.w3.org/2000/svg" 
                onClick={mute}
                className="w-6 h-6 cursor-pointer" fill="#aaa"
                ><path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" /></svg>
            ):(
                <svg viewBox="0 0 20 20" onClick={mute}  xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 cursor-pointer" fill="#aaa"><path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            )
    )
}

export const Mic = ({ onClick }) => {
    return (
        <svg id="Capa_1" fill="#aaa" enableBackground="new 0 0 512.098 512.098" onClick={onClick} className="w-4 h-4 cursor-pointer" viewBox="0 0 512.098 512.098"  xmlns="http://www.w3.org/2000/svg"><g><path d="m283.803 249.51-57.099 57.099c-5.858 5.857-15.354 5.858-21.213 0-5.858-5.857-5.858-15.355 0-21.213l57.099-57.099c-13.88-16.795-23.741-35.815-29.573-55.775l-216.705 229.666c-22.264 23.764-21.666 60.415 1.359 83.44l8.801 8.801c23.026 23.028 59.68 23.62 83.479 1.323l229.627-216.669c-19.96-5.832-38.98-15.693-55.775-29.573z"/><path d="m283.728 48.572 179.81 179.8c-21.83 17.3-49.43 27.63-79.44 27.63-70.69 0-128-57.31-128-128 0-30.009 10.33-57.6 27.63-79.43z"/><path d="m512.098 128.003c0 29.87-10.24 57.35-27.38 79.13l-179.75-179.75c21.78-17.14 49.26-27.38 79.13-27.38 70.69 0 128 57.31 128 128z"/></g></svg>
    )
}


export const UploadSong = ({ width, height}) => {
    return (
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" fill="#fff" width={width} height={height}
	 viewBox="0 0 512 512" enableBackground="new 0 0 512 512">
<g>
	<g>
		<path d="M484.078,27.923C466.07,9.917,442.131,0.001,416.666,0.002L95.333,0C69.868,0.001,45.928,9.918,27.922,27.924
			S0,69.87,0.002,95.333L0,416.667C0.002,469.233,42.769,512,95.334,512h321.332C469.232,512,512,469.233,512,416.666V95.336
			C512,69.87,502.084,45.929,484.078,27.923z M165.864,180.323l79.527-79.53c2.813-2.813,6.629-4.394,10.606-4.394
			c3.979,0,7.793,1.58,10.606,4.394l79.527,79.525c5.859,5.857,5.859,15.355,0.002,21.213c-5.859,5.857-15.355,5.859-21.215,0
			l-53.922-53.922l0.002,160.018c0,8.284-6.715,15-15,15c-8.285,0-15-6.716-15-15l-0.003-160.012l-53.918,53.921
			c-2.929,2.929-6.768,4.394-10.606,4.394c-3.84,0-7.678-1.464-10.607-4.394C160.006,195.679,160.006,186.182,165.864,180.323z
			 M400.601,415.6h-289.2c-8.283,0-15-6.716-15-15s6.717-15,15-15h289.201c8.283,0,15,6.716,15,15
			C415.601,408.884,408.885,415.6,400.601,415.6z"/>
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
    )
}