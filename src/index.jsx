import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import AnimalList from './components/AnimalList';
import AnimalDetail from './components/AnimalDetail';

const App = () => {

  const [animals, setAnimals] = useState([]);
  const [pickedId, setPickedId] = useState(1);

  const setPickedIdFunction = (pickedAnimal) => {
    setPickedId(pickedAnimal - 1);
  }

  const pickedAnimalId = animals[pickedId]
/*   console.log(pickedAnimalId);
  console.log(pickedId) */

  useEffect(() => {
      fetch('https://lrolecek.github.io/zviratka-api/zvirata.json')
      .then(response => response.json())
      .then(data => {
        setAnimals(data.zvirata)
      })
  }, []);
/*   console.log(animals); */
  return (
    <>
      <h1>Zvířátka v ZOO</h1>

      <div className="container">
        {/* zde budou jednotlivé komponenty */}
        <AnimalList animal={animals} onPick={setPickedIdFunction} />
        <AnimalDetail animal={pickedAnimalId}/>
      
       
      </div>
    </>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
