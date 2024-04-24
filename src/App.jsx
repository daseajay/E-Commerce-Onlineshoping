import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/HOME/Home';
import About from './components/ABOUT/About';
import Products from "./components/PRODUCTS/Products"
import Cart from "./components/CART/Cart"
import Login from './components/LOGIN/Login'
import ProductItem from './components/ITEMS/ProductItem';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <BrowserRouter>
     <ToastContainer theme='light' transition:Bounce/>
       <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/item/:id'element={<ProductItem/>}/>
       </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
