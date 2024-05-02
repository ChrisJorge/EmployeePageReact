import React from 'react'

function EmployeeListItem({info}) {

  return (
    <div className='EmployeeListItem'>
      <div className="imageBorder">
        <img src="" alt="Profile" className='EmployeeListImage'/>
      </div>
      <div className="information">
        <h3 className="name">{info.name}</h3>
        <h5 className="title">{info.position}</h5>
      </div>
    </div>
  )
}

export default EmployeeListItem