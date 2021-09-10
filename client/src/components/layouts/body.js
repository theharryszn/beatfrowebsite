import React from 'react';
import SearchBar from '../mini/searchbar';


const Body = ({children}) => {
    return ( 
        <div className=" pt-6">
            <div className="px-6">
                <SearchBar asLink/>
            </div>
            <div className="pt-4 pb-12">
                { children }
            </div>
        </div>
     );
}
 
export default Body;