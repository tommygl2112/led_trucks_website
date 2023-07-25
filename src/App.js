import './App.scss';
import { Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Layout from './components/Layout';
import HowItWorks from './pages/HowItWorks';

function App() {
  return (
    <div>
     <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="how-it-works" element={<HowItWorks />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </ Routes>
      </Router>
     {/* <Preview/> */}
     {/* <Service/> */}
     {/* <Truck360 /> */}
     {/* <ImageList/> */}
    </div>
  )
}


export default App;
