import React from 'react';
import PropTypes from 'prop-types'

const LyricsTab = ({ lyrics }) => {
    return ( 
        <div>
            <div className="text-white py-6 px-3 text-center h-screen pt-24">
                {
                    lyrics ? (
                        lyrics.body.split(/\r?\n/).map(line =>(
                            <p key={Math.random()} className="pb-6 text-lg md:text-2xl">{line}</p>
                        )
                        )
                    ):(
                        <p className="pb-6 text-lg md:text-2xl">Lyrics is not Avialable</p>
                    )
                    
                }
            </div>
        </div>
     );
}




LyricsTab.propTypes = {
    lyrics: PropTypes.string
}

 
export default LyricsTab;