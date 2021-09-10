import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AppleMusic, PlayList, Album, Heart, UploadSong, Blog, Recent } from '../mini/icons/utils';
import Chevron from '../mini/chevron';
import { connect } from 'react-redux'
import { useQuery } from 'react-query';
import { fetchOneUser } from '../../api/getMethods';
import { UploadStatus } from '../../context/uploadContext';
import { ModalContext } from '../../context/modalContext';

const Navbar = ({ auth }) => {
    const [side, setSide] = useState(false)
    const [userDrop, setuserDrop] = useState(false);
    const [taskDrop, settaskDrop] = useState(false);

    const { tasks }  = useContext(UploadStatus)
    const { openModal , closeModal } = useContext(ModalContext);

    const { data, status } = useQuery('user',() => fetchOneUser(auth.uid), {
        staleTime:2000,
        refetchOnWindowFocus:true,
        cacheTime:10
    })

    return (
        <div className="fixed top-0 w-full z-50 bgDarker">
            <div className="fixed z-high top-0 h-screen block md:hidden w-full backdrop transform duration-300 ease-in-out" onClick={(e)=> {
                    if(e.target.classList.contains('backdrop')){
                        setSide(false)
                    }
            }} style={ side === true ? ( { display:"block" } ): ( { width:"0px"})}>
            <ul className="text-white  text-center rounded-r-lg pt-24 bgDarker h-screen inline-block overflow-hidden transform duration-500 ease-in-out" style={ side === true ? ( { width:"max-content" } ): ( { width:"0px"})}>
            <li className="cursor-pointer">
            <span className="sidenavlink">
            <Chevron className="transform rotate-180 w-4 h-4" onClick={() => setSide(false)} fill="#fff"/>
            </span>
            </li>
            <li className=" cursor-pointer">
                <NavLink to="/listen" className="sidenavlink" onClick={() => setSide(false)}>
                <AppleMusic/>
                </NavLink>
                </li>
            <li className=" cursor-pointer">
                <NavLink to="/blogs" className="sidenavlink" onClick={() => setSide(false)}>
                <Blog/>
                </NavLink>
                </li>
            <li className=" cursor-pointer">
                <NavLink to="/playlists" className="sidenavlink" onClick={() => setSide(false)}>
                <PlayList/>
                </NavLink>
            </li>
            <li className=" cursor-pointer">
                <NavLink to="/albums" className="sidenavlink" onClick={() => setSide(false)}>
                <Album/>
                </NavLink>
            </li>
            <li className="mx-2">
            <hr/>
            </li>

            <li className="cursor-pointer">
                <NavLink to="/recent" className="sidenavlink" onClick={() => setSide(false)}>
                <Recent/>
                </NavLink>
            </li>
            <li className="cursor-pointer">
                <NavLink to="/favourites" className="sidenavlink" onClick={() => setSide(false)}>
                <Heart/>
                </NavLink>
            </li>

        </ul>
            </div>
            <div className="flex justify-between  py-3 px-2 mx-2 border-b border-gray-900 items-center">
            <div>
                <span>
                <svg viewBox="0 0 20 20" onClick={() => setSide(true)} fill="#fff" className="menu w-6 h-6 inline-block md:hidden mr-4"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                </span>
                <Link to="/">
                    <span className="syntax-ui">BeatFro</span>
                </Link>
            </div>
            
            <div className="flex items-center justify-between">
                <Link to="/writeblog" className="mr-3 transition duration-300 cursor-pointer hover:opacity-75">
                <span className="bgLight flex items-center justify-between py-2 px-2 rounded-full">
                    <Blog/>
                    <span className="text-white text-xs ml-3 hidden md:inline">Write Something</span>
                </span>
                </Link>
                {
                    auth && (
                        auth.uid && (
                            status === 'success' && (
                                data.isArtiste && (
                                    <span className="mr-3 transition duration-300 cursor-pointer hover:opacity-75" onClick={() => openModal(
                                        <div>
                                        <div className="mx-4 grid pt-12 justify-center">
                                            <Link to="/uploadtrack" onClick={closeModal} className="text-white bg-gradient-to-tr from-blue-600 to-blue-900 hover:from-purple-900 hover:to-blue-600 transition-all duration-1000 rounded-lg flex items-center justify-center m-2 h-24 md:h-32 w-56">
                                                <span>Track</span>
                                            </Link>
                                            <Link to="/uploadalbum" onClick={closeModal} className="text-white bg-gradient-to-tr from-blue-600 to-blue-900 hover:from-purple-900 hover:to-blue-600 transition-all duration-1000 rounded-lg flex items-center justify-center m-2 h-24 md:h-32 w-56">
                                                <span>Album</span>
                                            </Link>
                                            <Link to="/createplaylist" onClick={closeModal} className="text-white bg-gradient-to-tr relative from-blue-600 to-blue-900 hover:from-purple-900 hover:to-blue-600 transition-all duration-1000 rounded-lg  m-2 h-24 md:h-32 w-56">
                                                <span className="absolute top-0 text-sm bg-gradient-to-tr from-yellow-600 to-orange-500 rounded-full mx-2 -my-2 shadow-sm px-2 py-1"> Premium</span>
                                                <span className="flex items-center justify-center w-full h-full">Playlist</span>
                                            </Link>
                                        </div>
                                
                                        <div>
                                        </div>
                                        </div>,"Upload")}>
                                    <span className="bgLight flex items-center justify-between py-2 px-2 rounded-full">
                                        <UploadSong width="19px" height="19px"/>
                                        <span className="text-white text-xs ml-3 hidden md:inline">Upload</span>
                                    </span>
                                    </span>
                                )
                            )
                        )
                    )
                }
                {
                    tasks.length !== 0 && (
                        <span onClick={() => settaskDrop(!taskDrop)} className="bgLight flex cursor-pointer  items-center justify-between py-2 px-2 rounded-full animate-pulse overflow-hidden">
                            <i className="uploadIconAnimation">
                            <UploadSong width="19px" height="19px"/>
                            </i>
                            <span className="text-white text-xs ml-3 hidden md:inline">Uploading {tasks.length} item{tasks.length > 1 ? "s": " "}</span>
                        </span>
                                )
                }

                
                
                <span className="ml-2">
                {
                    auth && (
                        auth.uid && (
                            status === 'success' && (
                                window.navigator.onLine === false ? (
                                    <img alt="user" src={require('../../assets/images/user.png')} onClick={() => setuserDrop(!userDrop)} className="w-8 h-8 userImage rounded-full object-cover"/>
                                ):(
                                    <img alt="user" src={data.coverPhoto} onClick={() => setuserDrop(!userDrop)} className="w-8 h-8 userImage rounded-full object-cover"/>
                                ) 
                            )
                        )
                    )
                }

                
                
                </span>
            </div>
            </div>
            
            {
                auth && (
                    auth.uid && (
                        status === 'success' && (
                            <div onClick={(e) => {
                                if(e.target.classList.contains('dropCont')){
                                    settaskDrop(!taskDrop)
                                }
                            }} className={`absolute md:flex justify-end dropCont flex w-full overflow-hidden ${ taskDrop === true ? 'h-screen opacity-100' : 'h-0 opacity-50'} transition-all duration-700 ease-in-out`}>
                                <div className=" bgDarker flex flex-col items-center shadow-lg rounded-l-lg px-4 mt-4 py-4 user-details-drop mr-1">
                                    <div className="flex items-center flex-col justify-center w-full">
                                    <div className="w-full">
                                        <span className="text-sm text-gray-200">{tasks.length} {tasks.length > 1 ? "items":"item" }</span>
                                    </div>
                                        <div className="flex flex-col items-stretch w-full mt-6 text-sm">
                                            <ul>
                                            {
                                                tasks.map(task =>  (
                                                    <li key={task.id} className="hover:bg-gray-600 cursor-pointer overflow-hidden transform-all duration-300 hover:bg-opacity-50 text-white px-2 py-2 rounded-lg flex items-center">
                                                    <span className="mr-3 uploadIconAnimation">
                                                    <UploadSong width="19px" height="19px"/>
                                                    </span>
                                                    { task.text}
                                                    </li>
                                                ))
                                            }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            )
                        )
                    )
                }
            {
                auth && (
                    auth.uid && (
                        status === 'success' && (
                            <div onClick={(e) => {
                                if(e.target.classList.contains('dropCont')){
                                    setuserDrop(!userDrop)
                                }
                            }} className={`absolute md:flex justify-end dropCont flex w-full overflow-hidden ${ userDrop === true ? 'h-screen opacity-100' : 'h-0 opacity-50'} transition-all duration-700 ease-in-out`}>
                                <div className=" bgDarker flex flex-col items-center shadow-lg rounded-l-lg px-4 mt-4 py-4 user-details-drop mr-1">
                                    <div className="flex items-center flex-col justify-center w-full">
                                        <div className="mb-4">
                                        <Link to="/account ">
                                        {
                                            window.navigator.onLine === true ? (
                                                <img alt="user"src={data.coverPhoto} className="w-12 h-12 userImage rounded-full object-cover"/>
                                            ):(
                                                <img alt="user"src={require('../../assets/images/user.png')} className="w-12 h-12 userImage rounded-full object-cover"/>
                                            )
                                        }
                                            
                                        </Link>
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <span className="text-white">{data.username}</span>
                                            <span className="text-xs text-gray-300">{data.email}</span>
                                        </div>
                                        <div className="flex items-center mt-3">
                                            <div className="w-8 h-8 rounded-full bgLight hover:bg-gray-600 hover:bg-opacity-50 flex items-center justify-center mr-2"><AppleMusic/></div>
                                            <div className="w-8 h-8 rounded-full bgLight  hover:bg-gray-600 hover:bg-opacity-50 flex items-center justify-center mr-2"><AppleMusic/></div>
                                            <div className="w-8 h-8 rounded-full bgLight  hover:bg-gray-600 hover:bg-opacity-50 flex items-center justify-center"><AppleMusic/></div>
                                        </div>
                                        <div className="flex flex-col items-stretch w-full mt-6 text-sm">
                                            <ul>
                                                <Link to="/becomeanartiste">
                                                <li className="hover:bg-gray-600 hover:bg-opacity-50 text-white px-2 py-2 rounded-lg flex items-center">
                                                <span className="mr-3"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg></span>
                                                Become an Artiste</li>
                                                </Link>
                                                <Link to="/settings">
                                                <li className="hover:bg-gray-600 hover:bg-opacity-50 text-white px-2 py-2 rounded-lg flex items-center">
                                                <span className="mr-3"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg></span>
                                                Settings</li>
                                                </Link>
                                                <li className="hover:bg-gray-600 hover:bg-opacity-50 text-white px-2 py-2 rounded-lg flex items-center">
                                                <span className="mr-3"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg></span>
                                                Sign Out</li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            )
                        )
                    )
                }
        </div>
     );
}

const mapStateToProps = (state) => {
     return {
        auth: state.firebase.auth
    };
};
 
export default connect(mapStateToProps)(Navbar)