import { useState } from "react";
import Person from "./Person/Person";
import "./Person/Person.css";

function App() {
  const [showPerson, setShowPerson] = useState(false);
  const [persons, setPersons] = useState([
    { name: "ijaz", age: "24" },
    { name: "bacha", age: "20" },
    { name: "zaid", age: "10" },
  ]);


  const changeHandler = (e) => {
    setPersons([
      { name: "ijaz bacha", age: "24" },
      { name: e.target.value, age: "20" },
      { name: "zaid", age: "30" },
    ]);
  };

  const  deletePersonHandler = (personIndex) =>{
    persons.splice(personIndex, 1)
    console.log("delete person", persons)
    setPersons(result => [ ...result])
  }

  let person = null

  if(showPerson){
    person = (
      <div style={{ width: "100%" }}>
        {
          persons.map((person, index) =>(
            <Person key={index} name={person.name} age={person.age}  click={() => deletePersonHandler(index)} />
          ))
        }
          
        </div>
    )
  }

  console.log('====================================');
  console.log("persons", persons);
  console.log('====================================');

  return (
    <div className="App">
      <h1>React Complete Guide</h1>
      <button
        style={{
          padding: 15,
          backgroundColor: "#2E1b",
          fontWeight: "bold",
          border: "none",
          borderRadius: 10,
          cursor: "pointer",
        }}
        onClick={() => setShowPerson(!showPerson)}
      >
        SwitchName
      </button>
      {person}
      
    </div>
  );
}

export default App;
