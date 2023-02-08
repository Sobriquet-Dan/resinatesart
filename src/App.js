import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./Home/Home";
import Paint from "./Paint/Paint.js";
import Resin from "./Resin/Resin.js";
import About from "./About/About.js";
const App = () =>{
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home/>}></Route>
        <Route path={"/Paint"} element={<Paint/>}></Route>
        <Route path={"/Resin"} element={<Resin/>}></Route>
        <Route path={"/About"} element={<About/>}></Route>
      </Routes>
    </div>
  );
}
export default App;
