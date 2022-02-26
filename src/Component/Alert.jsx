import React from 'react'
import { useSelector } from 'react-redux'
import { Snackbar } from '@material-ui/core'
import { hideAlert } from '../Redux/Action'
import { useDispatch } from 'react-redux'
import { Alert as ALt, AlertTitle } from '@material-ui/lab'
export default function Alert (props) {
  const { alertData } = useSelector(state => state.userReducer)
  console.log(alertData)
  const dispatch = useDispatch()

  const hide = () => {
    console.log('hide in action')
    dispatch(hideAlert())
  }

  return (
    <Snackbar
      autoHideDuration={6000}
      open={alertData.show}
      onClose={hide}
      anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
    >
      <ALt severity={alertData.type} onClose={hide}>
        <AlertTitle>{alertData.type}</AlertTitle>
        {alertData.msg}
      </ALt>
    </Snackbar>
  )
}
