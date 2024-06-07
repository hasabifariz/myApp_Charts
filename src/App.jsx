import { useEffect, useState } from 'react'
import SalesTable from "./components/SalesTable";
import SalesChart from "./components/SalesChart";
import DateFilter from "./components/DateFilter";
import Grid from '@mui/material/Grid'
import { getAll, getByProductName, getByRangeDate } from './services/product';


function App() {
  const [page, setPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchValue, setSearchValue] = useState(null)
  const [startDate, setStartDate] = useState(null);
  console.log("🚀 ~ App ~ startDate:", startDate)
  const [endDate, setEndDate] = useState(null);
  console.log("🚀 ~ App ~ endDate:", endDate)

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
          <Grid item sx={{ mt: 7 }}
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
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
