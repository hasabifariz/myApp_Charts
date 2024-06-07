import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchBar from '../SearchBar';

const index = (props) => {
  const {
    numbering,
    tableStructure,
    data,
    page,
    rowsPerPage,
    searchBar,
    setSearchValue
  } = props

  return (
    <>
      <TableContainer component={Paper}>
        {searchBar && <SearchBar setSearchValue={setSearchValue} />}
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {
                numbering ? <TableCell className='w-[15px]'>No.</TableCell> : null
              }
              {
                tableStructure.map((item) => {
                  return (
                    <TableCell key={item.label}>{item.label}</TableCell>
                  )
                })
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length === 0 ?
              <TableRow>
                <TableCell align='center' colSpan={numbering ? tableStructure.length + 1 : tableStructure.length}><strong>There is no data</strong></TableCell>
              </TableRow>
              : data.map((item, index) => {
                const rowsNum = ((page - 1) * rowsPerPage) + (index + 1)
                return (
                  <TableRow key={index}>
                    {
                      numbering ? <TableCell sx={{ width: "8px" }}>{rowsNum}</TableCell> : null
                    }
                    {
                      tableStructure.map((row, index) => {
                        return (
                          <TableCell key={row.key}>{item[row.key]}</TableCell>
                        )
                      })
                    }
                  </TableRow>
                )
              })
            }
            {/* {
              data.map((item, index) => {
                const rowsNum = ((page - 1) * rowsPerPage) + (index + 1)
                return (
                  <TableRow key={index}>
                    {
                      numbering ? <TableCell sx={{ width: "8px" }}>{rowsNum}</TableCell> : null
                    }
                    {
                      tableStructure.map((row, index) => {
                        return (
                          <TableCell key={row.key}>{item[row.key]}</TableCell>
                        )
                      })
                    }
                  </TableRow>
                )
              })
            } */}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default index