import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import AboutUs from './Pages/AboutPage/aboutUs';
import BottomBar from './components/bottombar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
      <BottomBar />
    </>
  );
}

export default App;
