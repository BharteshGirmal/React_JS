import Navbar from './Components/Navbar/Navbar.component';
import Authentication from './Components/Authenticaton/Authentication.component';
// import Signup from './Components/Sign-up/Signup.component';
import Home from './Routes/Home/Home.component';
import {Routes, Route} from 'react-router-dom';
import Shop from './Routes/Shop/Shop.component';
import Checkout from './Routes/Checkout/Checkout.components';
// import Signin from './Components/Sign-in/Sign-in.component';
function App() {


  return (
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='shop/*' element={<Shop/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='auth' element={<Authentication/>}/>
      </Route>
    </Routes>
  );
}

export default App;
