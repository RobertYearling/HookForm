import React, { useState } from 'react';

const UserForm = () => {

    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        cfpassword: "",
    })

    const [userList, setUserList] = useState([])

    const handleChange = (e) => {
        console.log("Value Entered", e.target.name)
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setUserList([...userList, userInfo])
        setUserInfo({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            cfpassword: "",
        })
    }

    return (
        <>
            <div>
                <form onSubmit={submitHandler} className="col-4 mx-auto text-left">
                    <h1>Create User:</h1>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input type="text" name="firstName" className="form-control" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input type="text" name="lastName" className="form-control" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="text" name="email" className="form-control" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="text" name="password" className="form-control" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password:</label>
                        <input type="text" name="cfpassword" className="form-control" onChange={handleChange} />
                    </div>
                    <div>
                        <p><input type="submit" value="Add" /></p>
                    </div>
                </form>
            </div>
            <div>
                <h1>User Info:</h1>
                {
                    userList.map((user) => {
                        return <div>
                            <p>{user.firstName}</p>
                            <p>{user.lastName}</p>
                            <p>{user.email}</p>
                            <p>{user.password}</p>
                            <p>{user.cfpassword}</p>
                            </div>
                    })
                }
            </div>

        </>

    );
}

export default UserForm;