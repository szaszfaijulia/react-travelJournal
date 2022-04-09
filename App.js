import React from "react";
import "./style.css";
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'

export default function App() {
  const card = data.map(item =>{
    return(
      <Card
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <section className="card--list">
        {card}
      </section>
    </div>
  );
}
