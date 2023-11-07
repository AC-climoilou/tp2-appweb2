import "./App.css";
import Accueil from "./pages/Accueil";
import Calendrier from "./pages/Calendrier";
import Navbar from "./pages/Navbar";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEvent from "./pages/addEvent";
import { useEffect, useState } from "react";
import { Axios } from "axios";

function App() {


  let [login, setLogin] = useState(false);

  useEffect = () => {
    Axios.get("http://localhost:3001/login").then(
      (response) => {
          setLogin(response);
      }
    );
  }

  

  return (
    <BrowserRouter>
      <div className="App">


        

        <Navbar />

        <Routes>
          <Route exact path="/register" element={<Registration  />} />
          <Route exact path="/login" element={<Login  />} />
          <Route exact path="/" element={<Accueil />} />
          <Route exact path="/calendrier" element={<Calendrier />} />
          <Route exact path="/addEvent" element={<AddEvent />} />
          <Route exact path="/deleteEvent" element={<AddEvent />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
//Vercel du React https://tp2-appweb2.vercel.app/