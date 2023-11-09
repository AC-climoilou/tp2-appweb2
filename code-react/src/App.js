import "./App.css";
import Accueil from "./pages/Accueil";
import Calendrier from "./pages/Calendrier";
import Navbar from "./pages/Navbar";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import AddEvent from "./pages/addEvent";
import DeleteEvent from "./pages/deleteEvent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Navbar />

        <Routes>
          <Route exact path="/register" element={<Registration />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Accueil />} />
          <Route exact path="/calendrier" element={localStorage.getItem("logged") === "true" ?  <Calendrier /> : <redirect to="/"/>} />
          <Route exact path="/addEvent" element={localStorage.getItem("logged") === "true" ?  <AddEvent /> : <redirect to="/"/>} />
          <Route exact path="/deleteEvent" element={localStorage.getItem("logged") === "true" ?  <DeleteEvent /> : <redirect to="/"/>} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
//Vercel du React https://tp2-appweb2.vercel.app/