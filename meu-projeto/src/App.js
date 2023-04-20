import Home from './routes/Home';
import Empresa from './routes/Empresa';
import Contato from './routes/Contato';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'


function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home
          </Link>
        </li>
        <li>
          <Link to="/Empresa">Empresa
          </Link>
        </li>
        <li>
          <Link to="/Contato">Contato
          </Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Empresa" element={<Empresa/>}/>
        <Route path="/Contato" element={<Contato/>}/>
      </Routes>
    </Router>
  )
}

export default App;
