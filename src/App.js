import { Route, Routes } from 'react-router-dom';
import './App.css';
import Booking from './components/Booking/Booking';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/booking/:destination' element={<Booking />} />
      </Routes>
    </main>
  );
}

export default App;
