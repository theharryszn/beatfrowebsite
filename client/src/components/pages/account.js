import React from 'react';


const Account = () => {
    return (
        <div className="W-full">
        <div className="w-full relative">
        <div className="rounded-lg h-32 w-full ui mr-2">
        </div>
        <div className="absolute top-0 mx-6 mt-20">
            <img src={require('../../assets/images/fireboy.jpeg')} alt="user" className="object-cover w-24 h-24 rounded-full "/>
        </div>
        <div className="text-white mt-4">
            <span className="text-2xl ml-40 font-medium mt-4">Fireboy DML</span>
        </div>
        </div>
        <div className="ml-6 mt-4">
            <button className="text-white py-2 px-3 bgLight rounded-full mr-2">Follow</button>
            <button className="text-white py-2 px-3 bgLight rounded-full mr-2">Play all Tracks</button>
        </div>

        { 
            // put tabs here  later
        }
        <div>
        
        </div>
        </div>
      );
}
 
export default Account;