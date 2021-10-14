import React, { useState } from 'react'
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
const HomePage = () => {
  return (
    <>
    <Home />
    <About />
    <Services />
    <Contact />
    </>
  )

}
const App = () => {
  const [user, setUser] = useState(true)
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" >
            { user  ? <HomePage /> : <Login /> }
          </Route>
          <Route path="/login" > <Login /></Route>
          <Route path="/register"> <Register /> </Route>
        </Switch>
      </Router>

    </div>
  )
}

export default App;
