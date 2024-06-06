import { useState } from 'react'
import SalesTable from "./components/SalesTable";
import Grid from '@mui/material/Grid'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Grid container>
          <Grid
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <h1>Statistik</h1>
          </Grid>
          <Grid
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <SalesTable />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default App
