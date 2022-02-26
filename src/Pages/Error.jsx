import React from 'react'
import { Button, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
const Error = () => {
  const history = useHistory()
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 150
      }}
    >
      <Typography variant='h3' style={{ fontWeight: 'bold', marginBottom: 60 }}>
        Oops Bad Request....
      </Typography>
      <Button
        variant='outlined'
        style={{ borderColor: '#F64c72', color: '#F64c72' }}
        onClick={() => history.push('/')}
      >
        Go Back To Home
      </Button>
    </div>
  )
}

export default Error
