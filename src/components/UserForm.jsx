import React, { useState } from 'react';

const UserForm = props => {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        cfpassword: "",
    });

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }
    return (
        <form className="col-4 mx-auto text-left">
            <h1>Create User:</h1>
            <div className="form-group">
                <label>First Name:</label>
                <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    onChange={handleChange}
                    />
            </div>
            <div className="form-group">
                <label>Last Name:</label>
                <input type="text"
                    name="lastName"
                    className="form-control"
                    onChange={handleChange}
                    />
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input type="text"
                    name="email"
                    className="form-control"
                    onChange={handleChange}
                    />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input
                    type="text"
                    name="password"
                    className="form-control"
                    onChange={handleChange}
                    />
            </div>
            <div className="form-group">
                <label>Confirm Password:</label>
                <input
                    type="text"
                    name="cfpassword"
                    className="form-control"
                    onChange={handleChange}
                    />
            </div>
        </form>
    );
}

export default UserForm;