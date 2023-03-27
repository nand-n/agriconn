import React from 'react';
import { Link } from 'react-router-dom';
import closebtn from '../../../assets/Agri-Connect/closebtn.png'
const ProfileModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;


  return (
     <div className="fixed inset-0 z-50 flex items-start left-[850px] top-[50px] justify-start overflow-x-hidden overflow-y-auto">
      <div className="relative w-auto max-w-md mx-auto my-6 ">
        <div className="bg-gray-50 rounded-lg shadow-lg">
          <div className="flex flex-row p-4 justify-between">
            <div className='flex flex-col mr-2'>
              <Link
              className='my-2  bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'
              to='/signin'> Sign Up</Link>
            <Link
              className='my-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'
              to='/register'>
              Sign In
            </Link>
            </div>
             <div className=' flex flex-col '>
              <Link
              className='my-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'
              to='/signin'>Policy</Link>
            <Link
              className='my-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'
              to='/register'>
              Legal
            </Link>
               <button className="my-3  flex justify-end text-white font-bold py-4 px-4 rounded-full" onClick={onClose}>
                <img src={ closebtn }  alt='close'/>
             </button>
            </div>
            
          </div>
         
        </div>
      </div>
      {/* <div className="relative inset-0 z-40 bg-black opacity-50"></div> */}
    </div>
  );
};

export default ProfileModal;