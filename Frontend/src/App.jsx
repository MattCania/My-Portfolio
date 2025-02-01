import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './App.css'
import ProfilePage from "./pages/Profile";
import Header from "./partials/Header";
import TestPage from "./pages/Test";


function App() {

  return (
    <div
      className='flex flex-col justify-start items-center w-auto h-auto bg-zinc-950 overflow-hidden'
    >
        <ProfilePage/>
        {/* <TestPage circleCount={1000} circlePx={2} lerp={0.1} interval={2000} color={'black'}/> */}
    </div>
  )
}

export default App
