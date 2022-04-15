import { Route, Routes } from 'react-router-dom';
import './App.css';
import Booking from './components/Booking/Booking';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Search from './components/Search/Search';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/booking/:destination' element={<Booking />} />
        <Route path='/search' element={<Search />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </main>
  );
}

export default App;
