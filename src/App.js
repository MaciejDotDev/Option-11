import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Registration from './pages/Registration';
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
