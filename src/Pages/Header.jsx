import React from 'react'
import {
  AppBar,
  Container,
  Button,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  makeStyles,
  ThemeProvider,
  createTheme
} from '@material-ui/core'
import { useHistory } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { changeCurrency, userLogout } from '../Redux/Action'

const Header = () => {
  const { currency } = useSelector(state => state.coinReducer)
  const { user } = useSelector(state => state.userReducer)
  console.log('header user', user.token)
  const dispatch = useDispatch()
  const currencyList = [
    'btc',
    'eth',
    'ltc',
    'bch',
    'bnb',
    'eos',
    'xrp',
    'xlm',
    'link',
    'dot',
    'yfi',
    'usd',
    'aed',
    'ars',
    'aud',
    'bdt',
    'bhd',
    'bmd',
    'brl',
    'cad',
    'chf',
    'clp',
    'cny',
    'czk',
    'dkk',
    'eur',
    'gbp',
    'hkd',
    'huf',
    'idr',
    'ils',
    'inr',
    'jpy',
    'krw',
    'kwd',
    'lkr',
    'mmk',
    'mxn',
    'myr',
    'ngn',
    'nok',
    'nzd',
    'php',
    'pkr',
    'pln',
    'rub',
    'sar',
    'sek',
    'sgd',
    'thb',
    'try',
    'twd',
    'uah',
    'vef',
    'vnd',
    'zar',
    'xdr',
    'xag',
    'xau',
    'bits',
    'sats'
  ]

  const history = useHistory()
  const useStyles = makeStyles(theme => ({
    title: {
      flex: 1,
      fontFamily: 'Montserrat',
      color: '#F64c72',
      fontWeight: 'bold',
      cursor: 'pointer'
    },
    button: {
      '&:hover': {
        background: '#F64c72'
      }
    }
  }))
  const classes = useStyles()
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff'
      },
      type: 'dark'
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar className="headerComponent" color='default' position='static'>
        <Container>
          <Toolbar>
            <Typography
              variant='h6'
              onClick={() => history.push('/')}
              className={classes.title}
            >
              Crypto Watch
            </Typography>

            {user.token ? (
              <Select
                variant='outlined'
                value={currency}
                onChange={e => dispatch(changeCurrency(e.target.value))}
                defaultValue={currency}
                style={{
                  width: 100,
                  height: 40,
                  marginRight: 15,
                  color: '#fff'
                }}
              >
                {currencyList.map(d => {
                  return (
                    <MenuItem key={d} value={d.toUpperCase()}>
                      {d.toUpperCase()}
                    </MenuItem>
                  )
                })}
              </Select>
            ) : null}
            {user.token ? (
              <Button
                className={classes.button}
                style={{ marginLeft: 40, color: 'white' }}
                variant='outlined'
                onClick={() =>{ history.push('/login');dispatch(userLogout());} }
              >
                Logout
              </Button>
            ) : (
              <Button
                className={classes.button}
                style={{ marginLeft: 40, color: 'white' }}
                variant='outlined'
                onClick={() => history.push('/login')}
              >
                Login
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}

export default Header
