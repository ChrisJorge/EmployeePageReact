import './App.css';

// This is the Main [CEO] file --> PRIMARY state lives here 
// --> Components are housed here 
// --> Hooks  === useState, useEffect

import Homepage from './components/Homepage';
import EmployeePage from './components/EmployeePage';


function App() {
  const topics = ["Employee Directory", "Employee"]

  let allEmployees = [
    {
      name : "James King",
      position: "President and CEO",
      image: ""
    },
    {
      name : "Julie Taylor",
      position: "VP of Marketing",
      image: ""
    },
    {
      name : "Eugene Lee",
      position: "CFO",
      image: ""
    },
    {
      name : "John Williams",
      position: "VP of Engineering ",
      image: ""
    },
    {
      name : "Ray Moore",
      position: "VP of Sales",
      image: ""
    },
    {
      name : "Paul Jones",
      position: "QA Manager",
      image: ""
    }
  ]
  return (
    <div className="App">
        <Homepage title = {topics[0]} workers={allEmployees}/>
        <EmployeePage title = {topics[1]} workers={allEmployees}/>
    </div>
  );
}

export default App;
