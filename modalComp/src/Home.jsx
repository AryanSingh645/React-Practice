import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (
      <div className="page">
        <h1>Home Page</h1>
        <Link to="/overlay-page" className="overlay-link">Open Overlay Page</Link>
      </div>
    );
  }

export default Home