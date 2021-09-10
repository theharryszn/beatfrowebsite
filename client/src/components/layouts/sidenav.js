import React from 'react';
import { NavLink } from 'react-router-dom'
import { AppleMusic, PlayList, Album, Heart, Recent, Blog } from '../mini/icons/utils';

const SideNav = () => {
    return ( 
        <ul className="text-white hidden md:block text-center">
            <li className=" cursor-pointer">
                <NavLink to="/listen" className="sidenavlink flex items-center">
                <AppleMusic/>
                <span className="ml-3">Listen</span>
                </NavLink>
            </li>
            <li className=" cursor-pointer">
                <NavLink to="/blogs" className="sidenavlink flex items-center">
                <Blog/>
                <span className="ml-3">Blog</span>
                </NavLink>
            </li>
            <li className=" cursor-pointer">
                <NavLink to="/playlists" className="sidenavlink flex items-center">
                    <PlayList/>
                    <span className="ml-3">Playlists</span>
                </NavLink>
            </li>
            <li className=" cursor-pointer">
                <NavLink to="/albums" className="sidenavlink flex items-center">
                <Album/>
                <span className="ml-3">Albums</span>
                </NavLink>
            </li>
           
            <p className="text-xs text-gray-500 mt-6 mb-4">My Library</p>
            <li className="cursor-pointer">
                <NavLink to="/recent" className="sidenavlink flex items-center">
                <Recent/>
                <span className="ml-3">Recent</span>
                </NavLink>
            </li>
            <li className="cursor-pointer">
                <NavLink to="/favourites" className="sidenavlink flex items-center">
                <Heart/>
                <span className="ml-3">Favourites</span>
                </NavLink>
            </li>
        </ul>
     );
}
 
export default SideNav;