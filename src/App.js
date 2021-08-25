import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Services from './components/Services';
import Client from './components/Client';
import Recent from './components/Recent';


import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar> 
        <Home></Home>
        <section className="bg-dark vh-20 shadow-lg p-5 mb-5 bg-light"></section>
        <About></About>
        <Services></Services>
        <Gallery></Gallery>
        <Client></Client>
        <Recent></Recent>
        <Contact></Contact>
      </Navbar>
    </div>
  );
}

export default App;
