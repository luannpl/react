import "./App.css";
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";

function App() {
  return (
    <>
      <HelloWorld />
      <SayMyName nome="Luan" />
      <SayMyName nome="Michele" />
      <Pessoa nome="Luan" idade="22" profissao="programador" foto="https://via.placeholder.com/150"  />

    </>
  );
}

export default App;
