import { useEffect, useState } from 'react'
import SalesTable from "./components/SalesTable";
import SalesChart from "./components/SalesChart";
import DateFilter from "./components/DateFilter";
import StatisticSummary from "./components/Statistic";
import Grid from '@mui/material/Grid'
import { getAll, getByProductName, getByRangeDate } from './services/product';
import Typography from '@mui/material/Typography'


function App() {
  const [page, setPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchValue, setSearchValue] = useState(null)
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [totalPendapatan, setTotalPendapatan] = useState(0)
  const [totalPenjualan, setTotalPenjualan] = useState(0)
  const [terlaris, setTerlaris] = useState(null)

  useEffect(() => {
    if (sales.length !== 0) {
      const objectWithHighestValue = sales.reduce((maxObject, currentObject) => {
        return currentObject.sales > maxObject.sales ? currentObject : maxObject;
      }, sales[0]);
      setTerlaris(objectWithHighestValue)
    }
  }, [sales.length])

  useEffect(() => {

    if (searchValue !== null && searchValue.length >= 1) {
      getByProductName(searchValue)
        .then(response => {
          setSales(response.data);
          setLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setLoading(false);
        });
    } else if (startDate !== null && endDate !== null) {
      getByRangeDate(startDate, endDate)
        .then(response => {
          setSales(response.data);
          setLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setLoading(false);
        });
    } else {
      getAll()
        .then(response => {
          setSales(response.data);
          setLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, [searchValue, startDate, endDate]);

  useEffect(() => {
    if (sales.length !== 0) {
      let tempSales = 0, tempRevenue = 0, terlaris
      sales.map((item) => {
        tempSales += item.sales
        tempRevenue += item.revenue
      })
      setTotalPenjualan(tempSales)
      setTotalPendapatan(tempRevenue)
    }

  }, [sales.length])


  const tableStructure = [
    { label: 'Product', key: 'product' },
    { label: 'Sales', key: 'sales' },
    { label: 'Revenue', key: 'revenue' },
    { label: 'Date', key: 'date' },
  ]

  return (
    <>
      <div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <DateFilter
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
        </div>
        <Grid container>

          <SalesChart data={sales} />

          <StatisticSummary
            totalPenjualan={totalPenjualan}
            totalPendapatan={totalPendapatan}
            terlaris={terlaris}
          />

          <Grid item sx={{ mt: 1 }}
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <Typography variant="body1" color="initial">Table Sales Data</Typography>
            <SalesTable
              tableStructure={tableStructure}
              numbering
              data={sales}
              page={page}
              rowsPerPage={rowsPerPage}
              searchBar
              setSearchValue={setSearchValue}
            />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default App
