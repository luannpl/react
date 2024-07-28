import { useState } from "react";
import NavBar from "../components/menu/NavBar";

const Home = () => {
    let [numero, setNumero] = useState([1, 2]);
    function contar(){
        setNumero([...numero, 3, 4]);
    }
    return (
        <div>
            <h1>Home</h1>
            <p>Bem-Vindo à página inicial</p>
            <button onClick={contar}>{numero}</button>
            <NavBar/>

        </div>
    )
}


export default Home;
