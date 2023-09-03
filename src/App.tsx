
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import LogIn from './Pages/LogIn';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<LogIn/>}></Route>

      </Routes>
    </>
  )
}

export default App
