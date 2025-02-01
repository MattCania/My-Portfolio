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
        {/* <TestPage circleCount={1500} circlePx={10} lerp={0.9} interval={500} isBlack={true}/> */}
        {/* <TestPage circleCount={1500} circlePx={10} lerp={0.9} interval={500} isBlack={false}/> */}
    </div>
  )
}

export default App
