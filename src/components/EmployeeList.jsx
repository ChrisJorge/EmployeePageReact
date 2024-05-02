import React from 'react'
import EmployeeListItem from './EmployeeListItem'
function EmployeeList({staff}) {
  // const names = ["James King", "Julie Taylor", "Eugene Lee", "John Williams", "Ray Moore", "Paul Jones"]
  // const roles = ["President and CEO", "VP of Marketing", "CFO", "VP of Engineering", "VP of Sales", "QA Manager"]
  return (
    <div>
{/*       
      <EmployeeListItem employee = {names[0]} role = {roles[0]}/>
      <EmployeeListItem employee = {names[1]} role = {roles[1]}/>
      <EmployeeListItem employee = {names[2]} role = {roles[2]}/>
      <EmployeeListItem employee = {names[3]} role = {roles[3]}/>
      <EmployeeListItem employee = {names[4]} role = {roles[4]}/>
      <EmployeeListItem employee = {names[5]} role = {roles[5]}/>
         */}

    {staff.map((worker, i) => {
      return <EmployeeListItem key = {i} info = {worker}/>
    })}


    </div>
  )
}

export default EmployeeList