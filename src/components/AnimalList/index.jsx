import React, {useState} from "react";
import Animal from "../Animal";

const AnimalList = ({animal, onPick}) => {

    return(
        <div className="animal-list">
         {animal.map((singleAnimal => 
            {return <Animal key={singleAnimal.nazev} animal={singleAnimal} onPick={onPick}/>}
            ))}
        </div>
    )
}

export default AnimalList;