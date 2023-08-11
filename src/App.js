
import './App.css';
import { Route, Routes, } from 'react-router-dom';


import Landing from "./component/Landing"
import Resume from './component/Resume';

import MainPage from './component/MainPage';



function App() {

 
  

  return (
    <>
   
    <Routes>
      {/* <Route path='/' element={<Home/>}/> */}
      <Route path="/" element={<Landing/>}/>
      <Route path="/admin/dashboard" element={<MainPage/>}/>
      <Route path="/resume/:index" element={<Resume/>}/> 
    </Routes>
   
   </>
  );
}

export default App;
