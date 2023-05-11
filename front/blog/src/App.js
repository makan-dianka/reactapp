import './App.css';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  let articles = [
    {
      "titre":"titre 1",
      "body":'body 1'
    },
    {
      "titre":"titre 2",
      "body":'body 2'
    }
  ]

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer>

      </footer>
    </div>
  );
}

export default App;
