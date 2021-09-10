import React from 'react';


const Album = ({ match }) => {
    return ( 
        <>
        <div className="text-white">
        <div className="mt-4">
            { match.params.id }
        </div>
        </div>
        </>
     );
}
 
export default Album;