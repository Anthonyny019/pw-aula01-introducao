import React from 'react';
import './Card.css'

export default (props) => {

    const estiloCard = {
        backgroundColor: props.color,
        borderColor: props.color
    }

    return(
        <div className = 'Card' style = {estiloCard}>
            <div className = 'Title'> {props.titulo} </div>
            <div className = 'Content'> 
                {props.children} 
            </div> 
        </div>
    )
}