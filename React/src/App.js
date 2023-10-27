import "./App.css";
import Accueil from "./pages/Accueil";
import Calendrier from "./pages/Calendrier";
import Registration from "./pages/Registration";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Navbar/>

        <Routes>
          <Route exact path="/" element={<Registration />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/calendrier" element={<Calendrier />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
