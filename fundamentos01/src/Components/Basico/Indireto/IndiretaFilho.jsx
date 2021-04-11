import React, { useState } from 'react';

import IndiretaFilho from './IndiretaFilho'

export default props => {
    
    const [nome, setNome] = useState('Bartholomew Jojo Simpson')

    return ( 
        <div>
            <button onClick = {() => {
                props.quandoClicar(nome)
            }} >
                <u>Fornecer Informações do Aluno</u>
            </button>
        </div> 
    )
}