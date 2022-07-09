import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from"./components/Home";


function App() {
  return (
    <div className="App">
    <Router>
     <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
