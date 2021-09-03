import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Client from './components/Client';
import Recent from './components/Recent';
import Company from './components/Company';
import Feedback from './components/Feedback';
import Test from './components/Test';
import { SliderData } from './components/SliderData';
import AOS from 'aos';
import 'aos/dist/aos.css';


import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar> 
        <Home></Home>
        <Company></Company>
        <About></About>
        <Services></Services>
        <Test></Test>
        <Client></Client>
        <Recent slides={SliderData}/>
        <Feedback/>
        <Contact></Contact>
      </Navbar>
    </div>
  );
}

export default App;
