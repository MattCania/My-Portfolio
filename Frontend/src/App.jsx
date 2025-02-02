import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './App.css'
import ProfilePage from "./pages/Profile";

function App() {

  return (
      <div
        className='flex flex-col justify-start items-center w-auto h-auto bg-zinc-950 overflow-hidden'
      >
          {/* <Route path="/test" element={<MouseEffect circleCount={500} circlePx={10} lerp={0.99} interval={2000} color={'black'} />} /> */}
          <ProfilePage/>
      </div>
  )
}

export default App
