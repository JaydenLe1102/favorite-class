import "./Class.css"


//props variable: let us passing data between components
//whenever they are updated the component that take in this new prop will also be updated

function Class(props){
    return(
        <div className ="class">
            {props.name}
        </div>
    )
}

export default Class;