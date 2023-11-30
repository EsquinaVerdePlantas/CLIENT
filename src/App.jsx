/*Recursos */
import { Routes, Route } from "react-router-dom";

/*Componentes */
import Home from "./views/Home/Home";
import Category from "./views/Category/Category";
import Detail from "./views/Detail/Detail";
import ShoppingCart from "./views/ShoppingCart/ShoppingCart";


function App() {

  return (
    <>
      <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/category" element={<Category/>}/>
          <Route path="/detail/:id"  element={<Detail/>}/>
          <Route path="/cart"  element={<ShoppingCart/>}/>
      </Routes>
    </>
  )
}

export default App
