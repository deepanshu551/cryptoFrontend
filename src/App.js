import './App.css'
import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Component/Header'
import HomePage from './Pages/HomePage'
import CoinPage from './Pages/CoinPage'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import Error from './Pages/Error'
import { makeStyles } from '@material-ui/core'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'
import Alert from './Component/Alert'

function App () {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: 'white',
      color: 'black',
      minHeight: '100vh'
    }
  }))
  const classes = useStyles()
  return (
    <Router>
      <div className={classes.App}>
        <Header />
        <Alert />
        <Switch>
          <Route exact path='/' component={HomePage} />{' '}
          <Route exact path='/login' component={LoginPage} />{' '}
          <Route exact path='/register' component={RegisterPage} />{' '}
          <ProtectedRoute path='/coin/:id' component={CoinPage} />
          <Route path='**' component={Error} />{' '}
        </Switch>{' '}
      </div>{' '}
    </Router>
  )
}

export default App
