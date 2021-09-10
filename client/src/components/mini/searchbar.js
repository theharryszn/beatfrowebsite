import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { SearchContext } from '../../context/searchContext';

const SearchBar = ( { asLink } ) => {

    const { setsearchQuery } = useContext(SearchContext);
    return ( 
        <div>
        {
            asLink === true ? (
                <Link to="/search">
                <div className="bgLight rounded-md ">
                    <input className="py-2 px-2 bg-transparent text-sm placeholder-opacity-50 outline-none text-white w-full" type="search" placeholder="Search"></input>
                </div>
                </Link>
            ):(
                <div className="bgLight rounded-md ">
                    <input onChange={(e) => setsearchQuery(e.target.value)} className="py-2 px-2 bg-transparent text-sm placeholder-opacity-50 outline-none text-white w-4/6" type="search" placeholder="Search"></input>
                </div>
            )
        }
        </div>
        
     );
}

SearchBar.propTypes = {
    asLink: PropTypes.bool,
}
 
export default SearchBar;