import { useState } from "react";
import Person from "./Person/Person";

function App() {
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

  return (
    <div className="App">
      <h1>React Complete Guide</h1>
      <button onClick={switchNameHandler}>SwitchName</button>
      <Person name={persons[0].name} age={persons[0].age} />
      <Person name={persons[1].name} age={persons[1].age}>
        Hobbies: Travling
      </Person>
      <Person name={persons[2].name} age={persons[2].age} />
    </div>
  );
}

export default App;
