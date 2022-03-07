import React, { useState } from 'react'
import { api } from '../Utils/axios'
import PropTypes from 'prop-types'
import { Chart as ChartJS } from 'chart.js/auto'
import {
  CircularProgress,
  createTheme,
  makeStyles,
  ThemeProvider,
  Button
} from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Line } from 'react-chartjs-2'
const ChartComp = props => {
  const { currency } = useSelector(state => state.coinReducer)
  const chartDays = [
    { label: '24 Hours', value: 1 },
    { label: '7 Days', value: 7 },
    { label: '30 Days', value: 30 },
    { label: '1 Year', value: 365 },
    { label: '5 Years', value: 1780 }
  ]
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff'
      },
      type: 'dark'
    }
  })
  const useStyles = makeStyles(theme => ({
    container: {
      width: '75%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 40,
      marginTop: 25,
      [theme.breakpoints.down('md')]: {
        width: '100%',
        marginTop: 0,
        padding: 20,
        paddingTop: 0
      }
    }
  }))
  const classes = useStyles()
  const [days, setDays] = useState(1)
  const [graphData, setGraphData] = useState([])

  const [loading, setLoading] = useState(false)
  const fetchGraphData = async () => {
    setLoading(true)
    const { data } = await api.get(
      `/${props.id}/market_chart?vs_currency=${currency}&days=${days}`
    )
    setGraphData(data.prices)
    setLoading(false)
  }
  console.log(graphData)
  useEffect(() => {
    fetchGraphData()
    return () => {}
  }, [currency, days])
  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.container}>
        {loading ? (
          <CircularProgress
            style={{ color: '#F64c72' }}
            size={250}
            thickness={1}
          />
        ) : (
          <>
            <Line
              data={{
                labels: graphData.map(coin => {
                  let date = new Date(coin[0])
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`
                  return days === 1 ? time : date.toLocaleDateString()
                }),
                datasets: [
                  {
                    data: graphData.map(coin => coin[1]),
                    label: `Price ( Past ${days} Days) in ${currency}`,
                    borderColor: '#F64c72'
                  }
                ]
              }}
              options={{
                elements: {
                  point: {
                    radius: 1
                  }
                }
              }}
            />
            <div
              style={{
                display: 'flex',
                marginTop: 20,
                justifyContent: 'space-around',
                width: '100%'
              }}
            >
              {chartDays.map(day => {
                return (
                  <Button
                    key={day.value}
                    onClick={() => {
                      setDays(day.value)
                    }}
                    variant='contained'
                    style={{
                      marginLeft: 10,
                      color: day.value === days ? '#eee' : '#F64c72',
                      backgroundColor: day.value === days ? '#F64c72' : '#fff'
                    }}
                  >
                    {day.label}
                  </Button>
                )
              })}
            </div>
          </>
        )}
      </div>
    </ThemeProvider>
  )
}
ChartComp.propTypes = {
  id: PropTypes.string
}
export default ChartComp
