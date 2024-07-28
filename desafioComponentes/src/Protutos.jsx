import React from "react";
import Titulo from "./Titulo";
import Produto from "./Produto";

const Produtos = () =>{
    const produtos = [
        {nome: 'Notebook', propriedades:['16gb ram', '512gb']},
        {nome: 'Celular', propriedades:['2gb ram', '128gb']},
    ];
    return(
        <>
        <Titulo texto={"Produtos"}/>
        {produtos.map(produto => (<Produto key={produto.nome} {...produto}/>))}
        </>
    )
}
export default Produtos