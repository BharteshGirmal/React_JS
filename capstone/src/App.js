import Navbar from './Components/Navbar/Navbar.component';
import Home from './Routes/Home/Home.component';
import {Routes, Route} from 'react-router-dom';
function App() {


  return (
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Home/>}/>
      </Route>
    </Routes>
  );
}

export default App;
