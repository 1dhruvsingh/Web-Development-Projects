import React from '@vitejs/plugin-react'

export default function App(){
  return (
    <main>
     <div className="pattern"/>
     <div className="warapper">
      <header>
        <img src="./hero.png" alt="hero banner" />
        <h1> Find <span className="text-gradient"> movies  </span> you enjoy!! </h1>
      </header>
      <p>Search</p>
     </div>
    </main>
  )
}
