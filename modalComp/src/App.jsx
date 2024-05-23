import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Modal from 'react-modal';
import './App.css';
// import Home from './Home';
// import OverlayPage from './OverlayPage';

// Set the root element for accessibility
Modal.setAppElement('#root');

function Home() {
  return (
    <div className="page">
      <h1>Home Page</h1>
      <Link to="/overlay-page" className="overlay-link">Open Overlay Page</Link>
    </div>
  );
}

function OverlayPage() {
  return (
    <div className="overlay-page">
      <h1>Overlay Page</h1>
    </div>
  );
}



function App() {
  const [showOverlay, setShowOverlay] = useState(false);

  const openOverlay = () => setShowOverlay(true);
  const closeOverlay = () => setShowOverlay(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/overlay-page" element={<OverlayPage/>} />
        </Routes>
        {showOverlay && (
          <Modal
            isOpen={showOverlay}
            onRequestClose={closeOverlay}
            contentLabel="Overlay Page"
            overlayClassName="overlay"
            className="overlay-content"
          >
            <OverlayPage />
          </Modal>
        )}
      </div>
    </Router>
  );
}

export default App;
