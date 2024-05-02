import React from 'react'
import Header from './Header'
import EmployeeList from './EmployeeList'
import SearchBar from './SearchBar'
function Homepage({title,workers}) {
  return (
    <div className="homePage">
        Homepage
        <Header topic ={title}/>
        <SearchBar/>
        <EmployeeList staff = {workers}/>
    
    
    
    </div>
  )
}

export default Homepage