import react from 'react';

const ShowPerson = ({ personName, personNumber }) => {
    return (
        <p>{personName} {personNumber}</p>
    );
}

export default ShowPerson;