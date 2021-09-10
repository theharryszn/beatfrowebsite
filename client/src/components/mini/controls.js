import React from 'react';


const Controls = ({ title, left }) => {
    return ( 
        <div className="mx-4 mb-4 flex items-center justify-between w-full">
                    <span className="font-medium tracking-normal">{ title }</span>
                    <span>
                        { left }
                    </span>
                </div>
     );
}
 
export default Controls;