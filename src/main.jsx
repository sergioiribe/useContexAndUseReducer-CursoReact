import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

export const UserContext = React.createContext()
const username = 'Sergio'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <UserContext.Provider value={username}>
      <App />
    </UserContext.Provider>
  </React.StrictMode>,
)
