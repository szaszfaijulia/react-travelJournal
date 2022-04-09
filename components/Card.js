import React from 'react'

export default function Card(prop) {
  return(
    <div>
      <div className="card">
        <img src={prop.imageUrl} className="card--image"/>
        <div className="card--text">
          <div>
            <img src="https://raw.githubusercontent.com/szaszfaijulia/react-travelJournal/master/src/pin.png" className="card--pin"/>
            <span className="card--location">{prop.location}</span>
            <a href={prop.googleMapsUrl} className="gray">View on Google Maps</a>
          </div>
          <p className="card--title">{prop.title}</p>
          <p className="card--date">{prop.startDate} - {prop.endDate}</p>
          <p className="card--descr">{prop.description}</p>
        </div>
      </div>
      <hr/>
    </div>
  )
}