import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './App.css'
import ProfilePage from "./pages/Profile";
import Header from "./partials/Header";


function App() {

  return (
    <div
      className='flex flex-col justify-start items-center w-auto h-auto bg-zinc-950 overflow-hidden'
    >
        <Header/>
        <ProfilePage/>
    </div>
  )
}

export default App
