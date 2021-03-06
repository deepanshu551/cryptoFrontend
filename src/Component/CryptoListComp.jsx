import React, { useState } from 'react'
import { api } from '../Utils/axios'

import { Pagination } from '@material-ui/lab'
import { useSelector } from 'react-redux'
import {
  makeStyles,Box,
  Container,
  Typography,
  TableContainer,
  LinearProgress,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField
} from '@material-ui/core'

import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const CryptoListComp = props => {
  const useStyles = makeStyles(theme => ({
    row: {
      cursor: 'pointer',

      fontFamily: 'Montserrat'
    },
    pagination: {
      '& .MuiPaginationItem-root': {
        color: 'black'
      }
    },
    textFontColor: {
      color: 'black'
    },
    borderColor: {
      borderColor: '#b6b3b3'
    },
    root: {
      '& label.Mui-focused': {
        color: '#F64c72'
      },

      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderColor: '#F64c72'
        }
      }
    }
  }))

  const classes = useStyles()

  const { currency } = useSelector(state => state.coinReducer)
  const history = useHistory()
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const handleSearch = () => {
    let t = coins.filter(
      coin =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    )
    console.log(t)
    return t
  }
  const fetchCoins = async () => {
    setLoading(true)
    const { data } = await api.get(`/markets/?vs_currency=${currency}`)

    setPage(1)
    setCoins(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchCoins()
  }, [currency, search])
  return (
    <Container style={{ textAlign: 'center', fontFamily: 'Montserrat' }}>
      <Typography
        variant='h2'
        style={{
          margin: 18,
          color: '#242582',
          fontWeight: 'bold',
          fontFamily: 'Montserrat'
        }}
      >
        Welcome To The World Of Crypto
      </Typography>
      <TextField
        InputProps={{
          classes: {
            input: classes.textFontColor,
            notchedOutline: classes.borderColor
          }
        }}
        className={classes.root}
        variant='outlined'
        label='search your favorit crypto here...'
        style={{ marginBottom: 20, width: '100%' }}
        onChange={e => setSearch(e.target.value)}
        value={search}
      />

      {loading ? (
        <LinearProgress
          data-test='linearProgress'
          style={{ backgroundColor: '#F64c72' }}
        />
      ) : (
        <div>
          <TableContainer>
            <Table>
              <TableHead style={{ backgroundColor: '#F64c72' }}>
                <TableRow>
                  {['Coin', 'Price', 'Market Cap', '24hr Change'].map(head => {
                    return (
                      <TableCell
                        style={{
                          color: 'black',
                          fontWeight: '700',
                          fontFamily: 'Montserrat'
                        }}
                        key={head}
                        align={head === 'Coin' ? 'inherit' : 'right'}
                      >
                        {head}
                      </TableCell>
                    )
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {handleSearch().length!==0?handleSearch() 
                  .slice(page * 10 - 10, page * 10)
                  .map(row => {          
                    return (
                      <TableRow
                        data-testid='#rowItem'
                        hover
                        className={classes.row}
                        onClick={() =>
                          history.push(`/coin/${row.id.toLowerCase()}`)
                        }
                        key={row.name}
                      >
                        <TableCell
                          component='th'
                          scope='row'
                          style={{
                            display: 'flex',
                            gap: 15
                          }}
                        >
                          <img
                            src={row?.image}
                            alt={row?.name}
                            height='50'
                            style={{ marginBottom: 10 }}
                          />
                          <div
                            style={{ display: 'flex', flexDirection: 'column' }}
                          >
                            <span
                              style={{
                                textTransform: 'uppercase',
                                fontSize: 22
                              }}
                            >
                              {row?.symbol}
                            </span>

                            <span
                              data-test='name'
                              style={{ color: 'darkgrey' }}
                            >
                              {row?.name}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell align='right'>
                          {currency} {row?.current_price}
                        </TableCell>
                        <TableCell align='right'>
                          {currency} {row?.market_cap.toString().slice(0, -6)}{' '}
                          Million
                        </TableCell>
                        <TableCell
                          align='right'
                          style={{
                            color:
                              parseFloat(row?.price_change_percentage_24h) > 0
                                ? 'rgb(14,203,129'
                                : 'red'
                          }}
                        >
                          {parseFloat(row?.price_change_percentage_24h) > 0 &&
                            '+'}{' '}
                          {row?.price_change_percentage_24h}%
                        </TableCell>
                      </TableRow>
                    )
                  }): <TableCell colSpan={4} align='center'>
                 <Typography>No Data Found ...</Typography>
                </TableCell>}
              </TableBody>
            </Table>
          </TableContainer>
          <Pagination
            variant='outlined'
            color='primary'
            classes={{ ul: classes.pagination }}
            onChange={(_, value) => {
              setPage(value)
              window.scroll(0, 0)
            }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '20px',
              width: '100%'
            }}
            count={Math.ceil(handleSearch()?.length / 10)}
          />
        </div>
      )}
    </Container>
  )
}
export default CryptoListComp
