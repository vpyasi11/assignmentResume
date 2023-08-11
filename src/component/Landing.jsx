


import React, { useRef } from 'react';

import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';

function Admin() {
 

  
  

  
    return (
      <div className=" w-full h-full flex justify-center items-center bg-yellow-200 " >
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="mb-4 text-4xl font-bold uppercase">Hello Welcome to Resume Builder</h1>
        
        <Link
          to="/admin/dashboard"
          className="px-6 py-2 text-lg font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
    );
}

export default Admin;
