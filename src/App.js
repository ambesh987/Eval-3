import './App.css';
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import Register from './Components/Register';
import HomePage from './Components/HomePage'
import { Routes, Route} from 'react-router-dom';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/products' element={<Product/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
