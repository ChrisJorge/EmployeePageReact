import React from 'react'
import Header from './Header'

function EmployeePage({title}) {
  return (
    <div className="employeePage">
        EmployeePage
        <Header topic = {title}/>
        <div className="topContainer">
            <img src="" alt = "" className='profile'/>
            <div className="topContainer">
                <img className='image' src="" alt="profile"/>
                <div className="info">
                    <p>Julie Taylor</p>
                    <p>VP Marketing</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default EmployeePage