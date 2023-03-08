import React from "react";


const PersonForm =  (props) => {

    return (
        <div>
            <h2>add a new</h2>
            <div>
                name: <input value={props.name} onChange={props.onNameChange}/>
            </div>
            <div>
                number: <input value={props.number} onChange={props.onNumberChange}/>
            </div>
            <div>
                <button type="submit" onClick={props.onSubmit}>add</button>
            </div>
        </div>
    );
}


export default PersonForm;