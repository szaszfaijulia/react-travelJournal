import React from 'react'

export default function Card(prop) {
  return(
    <div className="card">
      <img src={prop.imageUrl}/>
      <div>
        <img src="https://raw.githubusercontent.com/szaszfaijulia/react-travelJournal/master/src/pin.png" className="card--pin"/>
        <a href={prop.googleMapsUrl}>View on Google Maps</a>
      </div>
      <span>{prop.title}</span>
      <span>{prop.startDate} - {prop.endDate}</span>
      <span>{prop.description}</span>
    </div>
  )
}