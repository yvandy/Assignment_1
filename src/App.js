import Salary from './Salary';
import './App.css';
import React, { useState } from 'react';


const App = () => {
  const [name, setName] = useState('');
  const [sal, setSal] = useState(0);

  const changeNameHandler = (event) => {
    setName(event.target.value);
  }
  const salaryShowHandler = (salary) => {
    setSal(salary);
  }
  const clearHandler = () => {
    setName('');
    setSal('');
  }

  return (
    <div style={{ textAlign: "center" }}>
      <input type="text" placeholder="type name" onChange={changeNameHandler} value={name} />
      <br />
      <Salary onClickMe={salaryShowHandler} />
      <button onClick={clearHandler}> Clear</button>
      <hr />
      <br />
      <span>  {name}  :  {sal} </span>
      <br />

    </div>
  )
}

export default App;
