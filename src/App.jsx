import Home from "./home";
import Login from "./components/login";
import { Routes, Route } from 'react-router-dom';



export default function App (){
  return (
           <>
           <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/market" element={<Home/>}/>
           </Routes>
           </>
  )

}