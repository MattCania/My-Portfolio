import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './App.css'
import ProfilePage from "./pages/Profile";
import Header from "./partials/Header";
import MouseEffect from "./pages/MouseEffect";


function App() {

  return (
    <Router>
      <div
        className='flex flex-col justify-start items-center w-auto h-auto bg-zinc-950 overflow-hidden'
      >
        <Routes>

          <Route path="/" element={<ProfilePage />} />
          <Route path="/test" element={<MouseEffect circleCount={500} circlePx={10} lerp={0.99} interval={2000} color={'black'} />} />
          {/* <Route path="/test" element={<MouseEffect  color={'black'} />} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
