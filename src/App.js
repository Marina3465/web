import logo from './logo.svg';
import './App.css';
import Button from './button';
import Log_in from './components/Auth/Log_in';
import Auth from './components/Auth/Auth';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="login" element={<Log_in />}/>
        <Route path="auth" element={<Auth />}/>
      </Routes>
    </div>
  );
}

export default App;
