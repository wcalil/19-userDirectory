import React, {useState} from 'react';
import EmployeeTable from './components/EmployeeTable'
import './App.css';

function App() {
  const [ search, setSearch]= useState('')



  const employeeList = [
    {
      name: 'bob',
      job: 'developer',
      pay: 100
    },
    {
      name: 'john',
      job: 'designer',
      pay: 120
    }
  ]
  
  return (
    <div className="App">
      <input onChange={e=>setSearch(e.target.value)} value={search} />
      <EmployeeTable employeeList={employeeList} search={search} />
    </div>
  );
}

export default App;
