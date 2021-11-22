import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const[plant, setPlant]=useState([])
  const[searchPlant, setSearchPlant] = useState("")

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then((response)=>response.json())
    .then(data=>setPlant(data));
  },[])

  function addPlant(newPlant){
    const updatedPlants = [...plant, newPlant]
    setPlant(updatedPlants)
  }
  const displayedPlants = plant.filter((plant)=>{
    return plant.name.toLowerCase().includes(searchPlant.toLowerCase())
  })
  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search searchPlant={searchPlant} onSearch={setSearchPlant}/>
      <PlantList plant={displayedPlants}/>
    </main>
  );
}

export default PlantPage;
