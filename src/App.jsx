import './App.css'
import CardDetails from './componnets/CardDetails';
import Cards from './componnets/Cards';
import Headers from "./componnets/Headers";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";

function App() {

  return (
   <>
   <Headers/>
   <Routes>
    <Route path="/" element={<Cards/>}/>
    <Route path="/cart/:id" element={<CardDetails/>}/>
   </Routes>
   </>
  )
}

export default App
