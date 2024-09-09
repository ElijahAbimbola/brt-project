import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import AboutUs from "./pages/AboutUs";
import ScheduleATrip from "./pages/ScheduleATrip";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <main>
    <Router>
      <Routes>
         <Route  path='/' element= { <Home /> } />
         <Route path="/AboutUs" element={<AboutUs />} />
         <Route path="/Schedule a trip" element={<ScheduleATrip />} />
         <Route path="/Services" element={<Services />} />
         <Route path="/Contacts" element={<Contacts />} />
      </Routes>
    </Router>
    
    </main>
    </>
  )
}

export default App;
