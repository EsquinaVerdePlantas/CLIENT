/*Recursos */
import { Routes, Route } from "react-router-dom";

/*Componentes */
import Header from "./components/Header/Header";
import Home from "./views/Home/Home";
import DecorativePlants from "./views/Category/DecorativePlants";
import IndoorPlants from "./views/Category/IndoorPlants";
import OutdoorPlants from "./views/Category/OutdoorPlants.jsx";
import Detail from "./views/Detail/Detail";
import ShoppingCart from "./views/ShoppingCart/ShoppingCart";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <>
    
      <Header />
      <main className="mt-16 lg:mt-20">
        <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/indoor_plants" element={<IndoorPlants/>}/>
            <Route path="/outdoor_plants" element={<OutdoorPlants/>}/>
            <Route path="/decorative_plants" element={<DecorativePlants/>}/>
            <Route path="/detail/:id"  element={<Detail/>}/>
            <Route path="/cart"  element={<ShoppingCart/>}/>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
