import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Navbar from "./components/Navbar";
import { BrowserRouter } from 'react-router-dom';
import { Route } from "react-router-dom";
import { Router } from "react-router-dom";
import {Footer} from "./components/Footer";
import Home from "./Pages/Home";
import Journal from "./Pages/Journal";
import Consulting from "./Pages/Consulting";


function App() {
  return (
    
    <div>
      <Consulting/>
    </div>
  );
}

export default App;
