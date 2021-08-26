import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Services from './components/Services';
import Client from './components/Client';
import Recent from './components/Recent';
import Company from './components/Company';
import { SliderData } from './components/SliderData';


import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar> 
        <Home></Home>
        <Company></Company>
        <About></About>
        <Services></Services>
        <Client></Client>
        <Gallery></Gallery>
        <Recent slides={SliderData}/>
        <Contact></Contact>
      </Navbar>
    </div>
  );
}

export default App;
