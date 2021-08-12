import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Bothub from './components/Bothub';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar>
        <Home></Home>
        <section className="bg-light vh-20"></section>
        <About></About>
        <Bothub></Bothub>
        <Contact></Contact>
      </Navbar>
    </div>
  );
}

export default App;
