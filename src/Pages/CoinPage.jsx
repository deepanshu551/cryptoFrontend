import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { makeStyles, Typography } from '@material-ui/core'
import ChartComp from '../Component/ChartComp'
import parser from 'html-react-parser'
import { useSelector } from 'react-redux'
import { api } from '../Utils/axios'

const CoinPage = () => {
  const [loading, setLoading] = useState(false)
  const useStyles = makeStyles(theme => ({
    container: {
      height: '100%',
      display: 'flex',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignItems: 'center'
      }
    },
    sidebar: {
      width: '30%',
      [theme.breakpoints.down('md')]: {
        width: '100%'
      },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 25
    },
    heading: {
      fontWeight: 'bold',
      marginBottom: 20,
      fontFamily: 'Montserrat'
    },
    description: {
      width: '100%',
      fontFamily: 'Montserrat',
      padding: 25,
      paddingBottom: 15,
      paddingTop: 0,
      textAlign: 'justify'
    },
    marketData: {
      alignSelf: 'start',
      padding: 25,
      paddingTop: 10,
      width: '100%',
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        justifyContent: 'space-around'
      },
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center'
      },
      [theme.breakpoints.down('xs')]: {
        alignItems: 'start'
      }
    }
  }))
  const classes = useStyles()
  const { currency } = useSelector(state => state.coinReducer)
  const { id } = useParams()
  const [coin, setCoin] = useState()

  const fetchCoin = async () => {
    setLoading(true)
    const { data } = await api.get(`/${id}`)
    setCoin(data)
    setLoading(false)
  }
  useEffect(() => {
    fetchCoin()
  }, [])
  return (
    <div className={classes.container}>
      {loading ? null : (
        <div className={classes.sidebar}>
          <img
            src={coin?.image.large}
            alt={coin?.name}
            height='200'
            style={{ marginBottom: 20 }}
          />

          <Typography variant='h3' className={classes.heading}>
            {coin?.name}
          </Typography>
          <Typography variant='h6' className={classes.description}>
            {parser(`${coin?.description.en.split('. ')[0]}`)}
          </Typography>

          <div className={classes.marketData}>
            <span style={{ display: 'flex' }}>
              <Typography variant='h6' className={classes.heading}>
                Rank :
              </Typography>{' '}
              &nbsp;&nbsp;
              <Typography variant='h6' style={{ fontFamily: 'Montserrat' }}>
                {coin?.market_cap_rank}
              </Typography>
            </span>
            <span style={{ display: 'flex' }}>
              <Typography variant='h6' className={classes.heading}>
                Current Price :
              </Typography>{' '}
              &nbsp;&nbsp;
              <Typography variant='h6' style={{ fontFamily: 'Montserrat' }}>
                {currency}{' '}
                {coin?.market_data.current_price[currency.toLowerCase()]}
              </Typography>
            </span>
          </div>
        </div>
      )}

      <ChartComp id={id} />
    </div>
  )
}

export default CoinPage
