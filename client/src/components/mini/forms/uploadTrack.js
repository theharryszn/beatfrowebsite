import React, { useContext, useState } from 'react';
import { connect } from 'react-redux'
import { uploadTrack } from '../../../store/actions/tracksAction';
import { useQuery } from 'react-query';
import { fetchOneArtiste } from '../../../api/getMethods';
import { UploadStatus } from '../../../context/uploadContext';



const UploadTrack = ({ uploadTrack, auth }) => {
    const uploadContext  = useContext(UploadStatus)
    const { createTask } = uploadContext;
    const { data, status} = useQuery('profile',() => fetchOneArtiste(auth.uid),{
        staleTime:2000,
        refetchOnWindowFocus:true,
        cacheTime:10
    })

    const [showLyrics, setshowLyrics] = useState(false)
    const [track, settrack] = useState({
        title:"",
        albumName:"Single",
        coverPhoto:null,
        audio:null,
        lyrics:"",
        explicit: true
    })

    const addSong = (e) => {
        if(e.target.files[0]){
            const audio = e.target.files[0]
            settrack({
                ...track,
                audio:{ file: audio }
            })
             document.getElementById('audiofiletitle').innerText = audio.name

        }
    }

    const handleSubmit = async (e) => {
        if(status === "success"){
            e.preventDefault();

            // start task
            const task = await createTask({ type: 'UPLOAD_TRACK' , text: `Uploading ${track.title}`});
            uploadTrack(track, data, task, uploadContext);
        }
    }

    const addImage =  (e) => {
        if(e.target.files[0]){
            const coverPhoto = e.target.files[0]
            settrack({
                ...track,
                coverPhoto:{ file: coverPhoto, url : URL.createObjectURL(coverPhoto)}
            })
        }
    }
    const toggleLyrics = (e) =>{
        setshowLyrics(!showLyrics)
    }
    return (
        <div className="text-white px-2">
            <h4 className="text-xl">Upload A Track</h4>
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
                    track.coverPhoto ? (
                        <img src={track.coverPhoto.url} alt="cover"  className="uploadCover md:w-64 mb-4 h-64 rounded-lg hover:opacity-75 cursor-pointer object-cover" onClick={()=> document.getElementById('cover').click()}/>
                    ):(
                        <div className=" md:w-64 min-w-full h-64 bgLight mb-4 flex items-center justify-center rounded-lg hover:opacity-75 cursor-pointer" id="coverPhoto" onClick={()=> document.getElementById('cover').click()}>Click to add cover photo</div>
                    )
                }
                </div>

                <div className="w-full mb-4">
                <label htmlFor="title" className="text-gray-500 text-sm px-2">Track Title</label>
                    <input type="text" required placeholder="Album Title" className="bgLight py-2 px-2 mb-4 w-full placeholder-opacity-50 outline-none rounded-lg  placeholder-gray-100" id="title" onChange={(e) => settrack({
                        ...track,
                        title:e.target.value
                    })}/>

                    <div className="bgLight px-2 py-2 rounded-lg mb-4">
                    <select className="bg-transparent text-gray-100 text-opacity-50 rounded-lg genreSelect w-full focus:outline-none">
                        <option value="0">Genre</option>
                    </select>
                    </div>
                    <label htmlFor="album" className="text-gray-500 text-sm px-2">Album</label>
                    <input type="text" placeholder="Single" className="bgLight py-2 px-2 mb-3 placeholder-opacity-50 outline-none rounded-lg w-full placeholder-gray-100" id="album" onChange={(e) => settrack({
                        ...track,
                        albumName:e.target.value
                    })}/>
                </div>
                
                </div>
                   
                    <input type="file" accept="image/*" onChange={addImage} required id="cover" hidden/>

                    

                    <div className="mb-4">
                        <div className="bgLight py-2 px-3 flex items-center justify-between rounded-lg hover:opacity-75 cursor-pointer" onClick={() => document.getElementById('trackFile').click()} ><span id="audiofiletitle">Click to add audio file</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" /></svg>
                        </div>
                        <input type="file" accept="audio/*" onChange={addSong} id="trackFile" hidden required/>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                    <input type="checkbox" id="explicit" defaultChecked onChange={(e) => settrack({
                        ...track,
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
                            <textarea placeholder="Paste Lyrics Here" draggable="false" onChange={(e) => settrack({
                                ...track,
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
        uploadTrack: (track, profile,id, context) => {
            dispatch(uploadTrack(track, profile, id, context))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UploadTrack);