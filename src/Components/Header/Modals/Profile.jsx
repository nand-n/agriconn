import React from 'react';
import { Link } from 'react-router-dom';

const ProfileModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
     <div className="fixed inset-0 z-50 flex items-start left-[850px] top-[50px] justify-start overflow-x-hidden overflow-y-auto">
      <div className="relative w-auto max-w-md mx-auto my-6 ">
        <div className="bg-gray-50 rounded-lg shadow-lg">
          <div className="flex flex-row p-4 justify-between">
            <div className='flex flex-col mr-2'>
              <Link
              className='my-2  bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
              to='/signin'> signin</Link>
            <Link
              className='my-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
              to='/register'>
              Sign up
            </Link>
            </div>
             <div className=' flex flex-col '>
              <Link
              className='my-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
              to='/signin'> signin</Link>
            <Link
              className='my-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
              to='/register'>
              Sign up
            </Link>
             <button className="my-3 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={onClose}>Close</button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="relative inset-0 z-40 bg-black opacity-50"></div> */}
    </div>
  );
};

export default ProfileModal;