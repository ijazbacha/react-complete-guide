import "./Person.css"

const person = (props) =>{
    return(
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and i'm {props.age}! </p>
            <p> {props.children} </p>
             <input onChange={props.changeHandler} value={props.name} />  {/*// two way binding*/}
        </div>
    )
}

export default person;