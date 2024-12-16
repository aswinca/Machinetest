import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import AddMenu from './Components/Addmenu';
import MenuList from './Components/MenuList';
import ItemDetail from './Components/ItemDetail';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
          <Route path="/menu" element={<><Navbar /><MenuList /><Footer /></>} />
          <Route path="/menudetail/:menuId/items/:itemId" element={<><Navbar /><ItemDetail /><Footer /></>} />
          <Route path='/Addmenu' element={<><AddMenu /></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
