import React, { useContext } from 'react';
import { ModalContext } from '../../context/modalContext';


const Modal = ({ children, headertitle}) => {
    const { closeModal } = useContext(ModalContext);
    return ( 
        <div className="bgDarker rounded-lg px-3 py-3 modal overflow-hidden my-3 shadow-xl">
        <div className="text-white text-lg tracking-wider font-medium flex items-center justify-between">
            { headertitle}
            <span >
                <svg onClick={closeModal} className="w-6 h-8 cursor-pointer " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </span>
        </div>
        <div className="overflow-y-auto h-full max-h-full text-sm text-white">
        { children }
        </div>
        </div>
     );
}
 
export default Modal;