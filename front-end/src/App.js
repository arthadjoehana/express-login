import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createContext, useState, useEffect } from 'react';
import './App.css';



import Login from './components/Login';
import Signup from './components/Signup';



//connected or not
export const AllContext = createContext()

export default function App() {
  const [connected, setConnected] = useState(false)
  const value = {
    connected: connected,
    setConnected: setConnected,
  }
  if (connected) {
    return (
      <AllContext.Provider value={value}>
      <Router>
        <div className="app">
          <div className="main">
            <Switch>

            </Switch>
          </div>
        </div>
      </Router>
      </AllContext.Provider>
    );
  } else {
    return (
      <AllContext.Provider value={value}>
        <Router>
          <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Signup} />
          </Switch>  
        </Router>
      </AllContext.Provider>
    )
  }
  
}

