import { useState } from "react";
import Person from "./Person/Person";
import "./Person/Person.css";

function App() {
  const [showPerson, setShowPerson] = useState(false);
  const [persons, setPersons] = useState([
    { id: "1", name: "ijaz", age: "24" },
    { id: "2", name: "bacha", age: "20" },
    { id: "3", name: "zaid", age: "10" },
  ]);


  const changeHandler = (e, id) => {
    const personIndex = persons.findIndex((person) => person.id == id)
    // console.log("personIndex", personIndex)

    const person = {...persons[personIndex]}
    console.log('person', person)
    person.name = e.target.value

    const personsData = [...persons]
    console.log("persons", personsData)
    personsData[personIndex] = person
    console.log("persons2", personsData)

    setPersons([...personsData])
    // setPersons([
    //   { name: "ijaz bacha", age: "24" },
    //   { name: e.target.value, age: "20" },
    //   { name: "zaid", age: "30" },
    // ]);
  };

  const  deletePersonHandler = (personIndex) =>{
    const data = [...persons]
    console.log(data)
    data.splice(personIndex, 1)
    // console.log("delete person", data)
    setPersons([...data])
  }

  let person = null

  if(showPerson){
    person = (
      <div style={{ width: "100%" }}>
        {
          persons.map((person, index) =>(
            <Person key={index} name={person.name} age={person.age} changeHandler={(e) => changeHandler(e, person.id)}  click={() => deletePersonHandler(index)} />
          ))
        }
          
        </div>
    )
  }

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
