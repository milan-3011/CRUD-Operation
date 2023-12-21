import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import User from './User';
import Create from './Create';
import Update from './Update';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User/>} />
        <Route path="/Update/:id" element={<Update/>} />
        <Route path="/Create" element={<Create/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
