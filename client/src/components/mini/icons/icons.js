import React from 'react';



// export const applemusic = (props) => {
//     return (
//        <div>
//        didjfe
//        </div>
            
//     )
// }

export const musicNote = (props) => {
    return (
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={props.className}
      height={props.height}
      width={props.width}  fill="#fff" className="music-note w-6 h-6"><path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" /></svg>
    )
}




export const pause = (props) => {
    return (
        <svg viewBox="0 0 20 20"  xmlns="http://www.w3.org/2000/svg" className={props.className}
      height={props.height}
      width={props.width} fill="#fff" className="pause w-6 h-6"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
    )
}

export const search = (props) => {
    return (
        <svg viewBox="0 0 20 20"  xmlns="http://www.w3.org/2000/svg" className={props.className}
      height={props.height}
      width={props.width} fill="#fff" className="search w-6 h-6"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
    )
}

export const heart = (props) => {
    return (
        <div>
        <svg viewBox="0 0 20 20"  xmlns="http://www.w3.org/2000/svg" className={props.className}
      height={props.height}
      width={props.width} fill="#fff" className="heart w-6 h-6"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
        </div>
    )
}


  
export const volume = (props) => {
    return (
        <svg viewBox="0 0 20 20"  xmlns="http://www.w3.org/2000/svg" className={props.className}
      height={props.height}
      width={props.width} fill="#fff" className="volume-up w-6 h-6"><path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" /></svg>
    )
}


export const dots = (props) => {
    return (
        <svg viewBox="0 0 20 20"  xmlns="http://www.w3.org/2000/svg" className={props.className}
      height={props.height}
      width={props.width} fill="#fff" className="dots-vertical w-6 h-6"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
    )
}