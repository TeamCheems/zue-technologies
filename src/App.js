import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar>
        <Home></Home>
        <About></About>
        <Gallery></Gallery>
        <Contact></Contact>
      </Navbar>
    </div>
  );
}

export default App;
