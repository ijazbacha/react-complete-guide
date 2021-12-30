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

  const switchNameHandler = () => {
    setPersons([
      { name: "ijaz bacha", age: "24" },
      { name: "bacha", age: "20" },
      { name: "zaid", age: "30" },
    ]);
  };

  const changeHandler = (e) => {
    setPersons([
      { name: "ijaz bacha", age: "24" },
      { name: e.target.value, age: "20" },
      { name: "zaid", age: "30" },
    ]);
  };

  let person = null

  if(showPerson){
    person = (
      <div style={{ width: "100%" }}>
        {
          persons.map((person, i) =>(
            <Person key={i} name={person.name} age={person.age} changeHandler={changeHandler} />
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
      {/* {showPerson ? (
        <div style={{ width: "100%" }}>
          <Person
            name={persons[0].name}
            age={persons[0].age}
            click={switchNameHandler}
          />
          <Person
            name={persons[1].name}
            age={persons[1].age}
            changeHandler={changeHandler}
          >
            Hobbies: Travling
          </Person>
          <Person name={persons[2].name} age={persons[2].age} />
        </div>
      ) : null} */}
    </div>
  );
}

export default App;
