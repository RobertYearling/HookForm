import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from './components/UserForm';
import FormResults from './components/FormResults';

function App() {

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cfpassword:"",
  });

  return (
    <div className="App">
      <UserForm inputs={state} setInputs={setState}/>
      <FormResults data={state} />
    </div>
  );
}

export default App;
