import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './App.css'
import ProfilePage from "./pages/Profile";
import Header from "./partials/Header";


function App() {

  return (
    <div
      className='flex flex-col justify-start items-center w-screen h-screen bg-zinc-950 overflow-hidden'
    >
      <Header />

      <section
      className='flex flex-col justify-center items-start w-full h-auto overflow-x-hidden mt-10'
      >
        <Routes>
          <Route path="/" element={<Navigate to='/profile' replace />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </section>

    </div>
  )
}

export default App
