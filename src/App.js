import Person from "./Person/Person";


function App() {
  return (
    <div className="App">
     <h1>React Complete Guide</h1>
     <Person name="ijaz" age="25" />
     <Person name="bacha" age="20" > Hobbies: Travling </Person>
     <Person name="zaid" age='10' />
    </div>
  );
}

export default App;
