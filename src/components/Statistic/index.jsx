import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const index = (props) => {
  const {
    totalPenjualan,
    totalPendapatan,
    terlaris
  } = props
  console.log("🚀 ~ index ~ terlaris:", terlaris)
  return (
    <Grid container sx={{ mt: 1 }} >
      <Typography variant="body1" color="initial">Summary</Typography>
      <Paper sx={{ py: 5, px: 3, width: '100%' }}>
        <Grid container spacing={3} direction='row' justifyContent={'space-evenly'} >
          <Grid item>
            <Paper elevation={12} sx={{ padding: '7px 10px', minWidth: 180, maxWidth: 250, minHeight: 142 }} >
              <div style={{ width: '100%', height: '100%' }}>
                <Typography variant="body3" >Total Penjualan</Typography>
                <div style={{ textAlign: 'center', fontSize: '63px', width: '100%', }}>
                  <strong>{totalPenjualan ? totalPenjualan : '0'}</strong>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item>
            <Paper elevation={12} sx={{ padding: '7px 10px', minWidth: 180, maxWidth: 250, minHeight: 142 }} >
              <Typography variant="body3" >Total Pendapatan</Typography>
              <div style={{ textAlign: 'center', fontSize: '63px' }}>
                <strong>{totalPendapatan ? totalPendapatan : '0'}</strong>
              </div>
            </Paper>
          </Grid>
          <Grid item>
            <Paper elevation={12} sx={{ padding: '7px 10px', minWidth: 180, maxWidth: 250, minHeight: 142 }} >
              <Typography variant="body3" >Produk Terlaris</Typography>
              <div style={{ textAlign: 'center', fontSize: '63px' }}>
                <strong>{terlaris ? terlaris.sales : '0'}</strong>
              </div>
              <div style={{ textAlign: 'center' }}>
                {terlaris ? terlaris.product : 'xxxx'}
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Paper >
    </Grid >

  )
}

export default index