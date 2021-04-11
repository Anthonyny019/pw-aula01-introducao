import React, {Component} from 'react'

import OlaMundo from './Components/Basico/OlaMundo'
import Propriedades from './Components/Basico/Propriedades'
import Card from './Components/Layout/Card'
import './App.css'
import Aninhados from './Components/Basico/Familia'
import FamiliaClone from './Components/Basico/Clone/FamiliaClone'
import FamiliaMembroClone from './Components/Basico/Clone/MembroFamiliaClone'
import Estado from './Components/Basico/State/Estado'
import IndiretaPai from './Components/Basico/Indireto/IndiretaPai'

class App extends Component{
    render() {
        return(
            <div className = "App">

                <h1><b><u>EXEMPLOS REACT</u></b></h1>
              
               <div className="Cards">
                    <b><Card titulo="Comunicação indireta (de filho para pai)" color="#f7673b">
                        <IndiretaPai />
                    </Card></b>


                   <b><Card titulo="Estado" color="#ffb400">
                        <Estado />
                    </Card></b>

                     <b><Card titulo="Componentes aninhados (cloneElement)" color="#82212e">
                        <FamiliaClone sobrenome="Simpson">
                            <FamiliaMembroClone nome="Homer Jay" />
                            <FamiliaMembroClone nome="Marjorie" />
                            <FamiliaMembroClone nome="Bartholomew JoJo" />
                            <FamiliaMembroClone nome="Lisa Marie" />
                            <FamiliaMembroClone nome="Margareth" />
                        </FamiliaClone>
                    </Card></b>

                       <b><Card titulo = "Componentes Aninhados (Comuniação Direta)" color = "#d1495b">
                        <Aninhados sobrenome = "Simpson"/>
                    </Card></b>
                    
                   <b><Card titulo="Propriedades" color="#91cb3e">
                        <Propriedades nome="Homer" sobrenome="Jay Simpson" idade={38}/>
                    </Card></b>
                    

                <b><Card titulo="Olá mundo!" color="#226ce0">
                        <OlaMundo />
                    </Card></b>
                </div>
            </div>
        )
    }
}

export default App;