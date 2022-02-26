import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function ProtectedRoute ({ component: Component, ...rest }) {
  const { user } = useSelector(state => state.userReducer)
  return (
    <Route
      path={rest.path}
      render={props =>
        user.token !== undefined ? (
          <Component props />
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  )
}
