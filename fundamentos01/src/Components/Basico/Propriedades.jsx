import React from 'react';

export default function Propriedades(Props) {
    return(
        <div>
            <h2>Nome: {Props.nome} {Props.sobrenome} </h2> 
            <h2>Idade: {Props.idade} </h2> 
        </div> 
    )
}