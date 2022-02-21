import "./Class.css";
import React, {useState, useEffect} from 'react';


//props variable: let us passing data between components
//whenever they are updated the component that take in this new prop will also be updated

function ClassGraphQL(props){
    const [classInfo, setClassInfo] = useState({});
    const url = "https://api.peterportal.org/graphql/"

    //useEffect was call whenever we update an element
    // the await tell use that the program must wait until the fetch function
    // is complete without executing the next code line
    useEffect(()=>{
        console.log("use effect is called");

        const fetchData = async () =>{

            const query = `
                query{
                    course(id:"${props.name}"){
                        title
                        department_name
                        description
                    }
                }

            `

            console.log(query);
            const response = await fetch(url,{
                method: "POST",
                body: JSON.stringify({query}), // what this do, why it need {} around the query
                headers: {
                    "Content-Type": "application/json" // api know that we are passing an json
                }
            }
            );

            const data = await response.json();
            console.log(data);
            setClassInfo(data.data.course);
        }

        fetchData();
    }, [props.name]); //this is the dependency list, so useEffect only called when the value of the variable in the dependency list has changed

    let info;
    if (classInfo){
        info = 
        <div className="information">
            <p id= "title"> {classInfo.title} </p>
            <p id = "department">{classInfo.department_name} </p>
            <p id = "description">{classInfo.description} </p>
        </div>
    }else if(classInfo == null){
        info = <p>Class Not Found</p>
    }
    else{
        info = <p>Loading ...</p>;
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

export default ClassGraphQL;