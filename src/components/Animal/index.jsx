import React, {useState} from "react";
import './style.css';

const Animal = ({animal, onPick}) => {

    const handleClick = () => {
        onPick(animal.id)
    }

    return(
        <div className="animal" onClick={handleClick}>
            <div className="animal__image">
                <img src={animal.foto} alt={animal.nazev} />
            </div>
            <div className="animal__desc">
                <div className="animal__name">{animal.nazev}</div>
                <div className="animal__latin">{animal.nazevLatinsky}</div>
            </div>
        </div>
    )
}

export default Animal;