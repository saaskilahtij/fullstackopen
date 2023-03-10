
import React from "react";
import ShowPerson from "./ShowPerson";

const PersonList = ({ persons, handleDeletion }) => {

    return (
        <div>
            {persons.map((person) =>
                <ul>
                    <ShowPerson key={person.key}
                    personNumber={person.number}
                    personName={person.name}/>
                    <button onClick={handleDeletion}>
                        delete
                    </button>
                </ul>
            )}
        </div>
    );
}

export default PersonList;