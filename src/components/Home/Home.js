import React, {useState} from "react";
import Class from "../Class/Class";
import ClassGraphQL from "../Class/ClassGraphQL";
import "./Home.css"


function Home(props){

    //setting state variables
    //these state variables persists every time the function is called
    //whenever that they are updated, the components got rerender
    const [value, setValue] = useState('');
    //the function setValue and setClasses are function used to update
    //the state of the variables value and favoriteClasses 

    const [favoriteClasses, setClasses] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!favoriteClasses.includes(value)){
            setClasses(favoriteClasses.concat(value));
            setValue('')
        }
        console.log(favoriteClasses);
    }

    return (
        <div>
            <h1>My Favorite Class</h1>
            <form onSubmit={handleSubmit}>
                <label>Add Favorite Class </label>
                <input type="text" value = {value } onChange = {handleChange}></input>
                <button type = "submit">Add Class!</button>
            </form>

            <div className="my-classes">
                {favoriteClasses.map((favClass)=>
                    <Class name = {favClass} key = {favClass}></Class>
                )}
            </div>


            <div className="my-classes">
                {favoriteClasses.map((favClass)=>
                    <ClassGraphQL name = {favClass} key = {favClass}></ClassGraphQL>
                )}
            </div>
        </div>
    )   
}


//export this in js so that other file can import this home file to use this home function
export default Home;