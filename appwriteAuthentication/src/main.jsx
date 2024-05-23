import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GitHubAuth from './GitHubAuth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <GitHubAuth /> */}
    <App />
  </React.StrictMode>,
)
