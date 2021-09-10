import React from 'react';
import Navbar from './layouts/navbar';
import SideNav from './layouts/sidenav';
import Body from './layouts/body';
import StatusContextProvider from '../context/status';
import PlayingNow from './mini/PlayingNow';


const Layouts = ({children}) => {
    return ( 
        <StatusContextProvider>
        <div className="relative">
        
        <div className="flex h-screen">
        
        <div className="bgDarker pt-32 rounded-lg">
        <SideNav/>
        </div>
        
        <div className="z-50 fixed bottom-0 w-full">
        <Navbar/>
        </div>

        <div className="overflow-x-hidden w-full">
        <div className="pt-12">
            <Body>
            { children }
            </Body>
        </div>
        </div>
        <div className="z-50 fixed bottom-0 w-full">
        <PlayingNow/>
        </div>
        
        </div>
        
        </div>
        </StatusContextProvider>
     );
}
 
export default Layouts;