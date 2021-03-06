import "./Class.css";
import React, {useState, useEffect} from 'react';


//props variable: let us passing data between components
//whenever they are updated the component that take in this new prop will also be updated

function Class(props){
    const [classInfo, setClassInfo] = useState({});
    const url = "https://api.peterportal.org/rest/v0/courses/"

    //useEffect was call whenever we update an element
    // the await tell use that the program must wait until the fetch function
    // is complete without executing the next code line
    useEffect(()=>{
        console.log("use effect is called");
        const fetchData = async () =>{
            const response = await fetch(url + props.name);
            const data = await response.json();
            console.log(data);
            setClassInfo(data)
        }

        fetchData();
    }, [props.name]) //this is the dependency list, so useEffect only called when the value of the variable in the dependency list has changed

    let info;
    if (classInfo.id){
        info = 
        <div className="information">
            <p id= "title"> {classInfo.title} </p>
            <p id = "department">{classInfo.department_name} </p>
            <p id = "description">{classInfo.description} </p>
        </div>
    }else if(classInfo.error){
        info = <p>Class Not Found</p>
    }
    else{
        info = <p>Loanding ...</p>;
    }


    return(
        <div className ="class">
            <p id = "className">{props.name}</p> 
            <div>
                {info}
            </div>
        </div>
    )
}

export default Class;