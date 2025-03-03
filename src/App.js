import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import Home from './component/Home/Home';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';
import Cart from './component/Cart/Cart';
import Profile from './component/Profile/Profile';
import { Route, Routes } from 'react-router-dom';
import Auth from './component/Auth/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { store } from './component/State/store';
import { useEffect } from 'react';
import { getUser } from './component/State/Authentication/Action';
import { ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
import PaymentSuccess from './component/Payment/PaymentSuccess';
import RecipeChatbot from './component/RecipeChatbot';

function App() {

  const dispatch=useDispatch();

  const jwt=localStorage.getItem("jwt");
  const {auth}= useSelector(store=>store);


  useEffect(()=>{
    dispatch(getUser(auth.jwt || jwt));
   
  }, [auth.jwt]);





  return (
      <div>
        <NavBar/>
        <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route  path='/my-profile/*' element={<Profile/>}/> 
          <Route path='/cart' element={<Cart/>} />
          <Route  path='/account/:register' element={<Home/>}/>
          <Route  path='/restaurant/:name/:id' element={<RestaurantDetails/>}/>
          <Route path='/payment/success/:id' element={<PaymentSuccess/>}/>
          <Route path='/chatbot' element={<RecipeChatbot/>}/>
        </Routes>
        
        <Toaster position='bottom-center'/>   
        <Auth/>

      </div>
  );
}

export default App;
