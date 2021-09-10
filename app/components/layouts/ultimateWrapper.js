import React, { useContext } from 'react';
import { NavigationContext } from '../../context/NavigationContext';



const UltimateWrapper = ({ active ,children}) => {
    return ( 
        <>
            { children }
        </>
     );
}
 
export default UltimateWrapper;