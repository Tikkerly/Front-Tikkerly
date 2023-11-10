import React from 'react'
import { ForgetPassword } from '..';

const ModalForgetPassword = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    const handleClose = (e) => {
      if(e.target.id === 'wrapper') onClose()
    }
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10" id="wrapper" onClick={handleClose}>
        <div className="w-[800] flex flex-col justify-center items-center">
          <div className="bg-243244 p-2 rounded">
            <ForgetPassword/>
          </div>
          <button className="text-white text-xl w-8 h-8  bg-Az4 bg-opacity-40 rounded-full  shadow-md font-bold avant-garde-bold hover:bg-red-400" onClick={() => onClose()}>X</button>
        </div>
      </div>
    );
}

export default ModalForgetPassword