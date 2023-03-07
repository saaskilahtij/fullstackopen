import React from "react";
import ShowPerson from "./ShowPerson";

const PersonList = ({ persons }) => {

    return (
        <div>
            {persons.map((person) =>
                <ShowPerson key={person.key}
                personNumber={person.number}
                personName={person.name}/>
            )}
        </div>
    );

}

export default PersonList;