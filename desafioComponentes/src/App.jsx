import React from "react";
import Home from "./Home";
import Header from "./Header";
import Produtos from "./Protutos";

const App = () =>{
  const {pathname} = window.location;
  let Pagina = Home;
  if(pathname === '/produtos'){
    Pagina = Produtos;
  }else{
    Pagina = Home;
  }

  return(
    <>
    
    <Header/>
    <Pagina/>
    </>
  )

}

export default App;