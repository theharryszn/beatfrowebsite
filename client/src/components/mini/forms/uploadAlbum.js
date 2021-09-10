import React, { useState } from 'react';
import { AppleMusic } from '../icons/utils';
import { connect } from 'react-redux'
import { uploadTrack } from '../../../store/actions/tracksAction';
import { useQuery } from 'react-query';
import { fetchOneArtiste } from '../../../api/getMethods';
import Controls from '../controls';

const UploadAlbum = ({ uploadTrack, auth }) => {

    const { data, status} = useQuery('profile',() => fetchOneArtiste(auth.uid),{
        staleTime:2000,
        refetchOnWindowFocus:true,
        cacheTime:10
    })

    const [showLyrics, setshowLyrics] = useState(false)
    const [album, setalbum] = useState({
        title:"",
        coverPhoto:null,
        audioFiles:[],
        explicit: true
    })

    const [noofTracks, setnoofTracks] = useState(0)


    const deleteTrack = (id) => {
        setalbum({
            ...album,
            audioFiles:album.audioFiles.filter(track => track.id !== id)
        })
    }


    const addSong = (e) => {
        if(e.target.files[0]){
            const audioFiles = e.target.files;
            const audioFilesNext = [...audioFiles];
            const sorted = [...album.audioFiles];
            audioFilesNext.forEach(audio => {
                sorted.push({
                    id:noofTracks,
                    file:audio,
                    title:"",
                    lyrics:"",
                })
                setnoofTracks(noofTracks +  1)
            })
            setalbum({
                ...album,
                audioFiles: sorted
            })
        }
    }

    const changeTitle = (id, value) => {
        const filteredFiles = album.audioFiles.filter(track => track.id !== id )

        const thistrack = album.audioFiles.filter(track => track.id === id);

        thistrack[0].title = value;

        const newaudioFiles = []
        newaudioFiles.push(...filteredFiles);
        newaudioFiles.push(...thistrack);

        setalbum({
            ...album,
            audioFiles: newaudioFiles.sort((a,b) => a.id - b.id)
        })
    }

    const handleSubmit = (e) => {
        if(status === "success"){
            e.preventDefault();
            uploadTrack(album, data);
        }
    }

    const addImage =  (e) => {
        if(e.target.files[0]){
            const coverPhoto = e.target.files[0]
            setalbum({
                ...album,
                coverPhoto:{ file: coverPhoto, url : URL.createObjectURL(coverPhoto)}
            })
        }
    }
    const toggleLyrics = (e) =>{
        setshowLyrics(!showLyrics)
    }

    return ( 
        <div className="text-white px-2">
            <h4 className="text-xl">Upload Album</h4>
            {
                status === 'success' && (
                    <p className="text-xs text-gray-500 tracking-wide">You are currently uploading as { data.stageName}</p>
                )
            }
           
            <div className="my-10">
                <form className="grid px-2 " onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2">
                <div className="flex w-full justify-center px-3">
                {
                    album.coverPhoto ? (
                        <img src={album.coverPhoto.url} alt="cover"  className="uploadCover md:w-64 mb-4 h-64 rounded-lg hover:opacity-75 cursor-pointer object-cover" onClick={()=> document.getElementById('cover').click()}/>
                    ):(
                        <div className=" md:w-64 min-w-full h-64 bgLight mb-4 flex items-center justify-center rounded-lg hover:opacity-75 cursor-pointer" id="coverPhoto" onClick={()=> document.getElementById('cover').click()}>Click to add cover photo</div>
                    )
                }
                </div>

                <div className="w-full mb-4">
                <label htmlFor="title" className="text-gray-500 text-sm px-2">Album Title</label>
                    <input type="text" required placeholder="Album Title" className="bgLight py-2 px-2 mb-4 w-full placeholder-opacity-50 outline-none rounded-lg  placeholder-gray-100" id="title" onChange={(e) => setalbum({
                        ...album,
                        title:e.target.value
                    })}/>

                    <div className="bgLight px-2 py-2 rounded-lg mb-4">
                    <select className="bg-transparent text-gray-100 text-opacity-50 rounded-lg genreSelect w-full focus:outline-none">
                        <option value="0">Genre</option>
                    </select>
                    </div>
                    <label htmlFor="des" className="text-gray-500 text-sm px-2">Album Description</label>
                    <textarea type="text" required placeholder="Description" id="des" className="bgLight w-full py-2 px-2 mb-3 placeholder-opacity-50 outline-none rounded-lg h-24 resize-none placeholder-gray-100" id="title"/>
                </div>
                
                </div>
                

                
                   
                    <input type="file" accept="image/*" onChange={addImage} required id="cover" hidden/>

                    

                    {
                        album.audioFiles.length !== 0 && (
                            <div className="overflow-y-scroll md:px-4 px-2 rounded-lg md:mx-4 mx-px my-4 bgLight py-4 pr-2 queueHeight">
                            <div className="flex items-center justify-between">
                            <Controls title="Tracks" left={album.audioFiles.length}/>
                            </div>
                    {
                        album.audioFiles.sort((a,b) => a.id - b.id).map((track,index,array) => (
                            <div  key={track.id} className="flex relative pl-3  queueTrack items-center justify-between border-b border-gray-100 border-opacity-25 py-4">
                                <div className="flex items-center">
                                    <div className="mr-2 hidden md:inline">
                                        {
                                            album.coverPhoto ? (
                                        <img src={album.coverPhoto.url} alt="song" className="w-10 object-cover h-10"/>

                                            ): (
                                                <img src="https://static.vecteezy.com/system/resources/previews/000/581/507/non_2x/retro-vinyl-record-icon-vector-illustration.jpg" alt="song" className="w-10 object-cover h-10"/>

                                            )
                                        }
                                    </div>
            
                                    <div>
                                        <input className="hover:opacity-75 cursor-pointer text-sm md:w-64 text-white bg-transparent outline-none focus:outline-none border-none" type="text" placeholder="Click to change song title" onChange={(e) => changeTitle(track.id,e.target.value)}/>
                                        <span className="text-xs block transform -translate-y-1 text-gray-500">{
                                            status === 'success' && (
                                                <span className="text-xs text-gray-500 tracking-wide">{ data.stageName}</span>
                                            )
                                        }</span>
                                    </div>
            
                                    
            
                                </div>
                                <div className="flex items-center oll">
                                    <div className="cursor-pointer mr-3">
                                        <span className="text-sm hidden md:inline">{track.file.name}</span>
                                    </div>
                                    
                                    <div className="w-0 overflow-x-hidden deleteIcon cursor-pointer">
                                    <svg className="w-6 h-6" fill="currentColor" onClick={() => deleteTrack(track.id)} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                                    </div>
                                </div>
                            </div>
                        )
                        )
                    }
                                
                    </div>

                        )
                    }
                    

                    <div className="mb-4">
                        <div className="bgLight py-2 px-3 flex items-center justify-between rounded-lg hover:opacity-75 cursor-pointer" onClick={() => document.getElementById('trackFile').click()} ><span id="audiofiletitle">
                        Click to add tracks
                        </span><AppleMusic fill=" #36D94F"/></div>
                        <input type="file" accept="audio/*" onChange={addSong} multiple id="trackFile" hidden required/>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                    <input type="checkbox" id="explicit" defaultChecked onChange={(e) => setalbum({
                        ...album,
                        explicit:e.target.checked
                    })} className="bgLight w-5 inline-block h-5 m-2" /><span className="text-gray-500">Explicit</span>
                    </div>
                    <span className="bgLight rounded-full px-2 py-2 hover:opacity-75 text-sm" onClick={toggleLyrics}>{
                        showLyrics === true ? (
                            <span>
                            - I don't have Lyrics
                            </span>
                        ):(
                            <span>
                            + Add Lyrics
                            </span>
                        )
                    }
                    </span>
                    </div>
                    {
                        showLyrics && (
                            <div className="mb-4">
                            <label htmlFor="lyrics" className="text-gray-500 text-sm px-2">Lyrics</label>
                            <textarea placeholder="Paste Lyrics Here" draggable="false" onChange={(e) => setalbum({
                                ...album,
                                lyrics: e.target.value
                            })}  className="placeholder-opacity-50 placeholder-gray-400 resize-none py-2 px-2 outline-none rounded-lg bgLight w-full
                            "/>
                            </div>
                        )
                    }
                    <button className="ui rounded-lg py-2 outline-none hover:opacity-75 focus:outline-none"  type="submit">Upload</button>
                </form>
            </div>
        </div>
     );
}

const mapStateToProps = (state) => {
    return {
       auth: state.firebase.auth
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
       uploadTrack: (track, profile) => {
           dispatch(uploadTrack(track, profile))
       }
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(UploadAlbum);