import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BarChart from "../BarChart";
import LineChart from "../LineChart";

const index = (props) => {
  const {
    data
  } = props
  const [x, setX] = useState([])
  const [yForLine, setYForLine] = useState([])
  const [yForBar, setYForBar] = useState([])

  useEffect(() => {
    if (data.length !== 0) {
      data.map((item) => {
        setX(prevItems => [...prevItems, item.product]);
        setYForLine(prevItems => [...prevItems, item.sales]);
        setYForBar(prevItems => [...prevItems, item.revenue]);
      })
    } else {
      setX([]);
      setYForLine([]);
      setYForBar([]);
    }
  }, [data.length])

  return (
    <Grid container>
      <Grid item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        xl={6}
      >
        <LineChart
          x={x}
          y={yForLine}
        />
      </Grid>
      <Grid item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        xl={6}
      >
        <BarChart
          x={x}
          y={yForBar}
        />
      </Grid>

    </Grid >
  )
}

export default index