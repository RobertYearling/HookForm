import React from 'react';

const FormResults = props => {
    const { firstName, lastName, email, password, cfpassword } = props.data;

    return(
        <div className="col-4 mx-auto text-left">
            <h2>Results</h2>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {cfpassword}</p>
        </div>
    );
}

export default FormResults;

