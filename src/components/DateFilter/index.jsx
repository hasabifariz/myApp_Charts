import React, { useState } from 'react';
import { format, addDays } from 'date-fns';
import { Button } from '@mui/material';

const index = (props) => {
  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate
  } = props

  const handleDateChange = (type, date) => {
    if (type === 'startDate') {
      setStartDate(date);
    } else if (type === 'endDate') {
      if (date >= startDate) {
        setEndDate(date);
      } else {
        alert("tidak bisa memilih tanggal sebelum start date")
      }
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <button style={{ marginRight: 5 }}
        onClick={() => {
          setStartDate(null)
          setEndDate(null)
        }}
        disabled={startDate == null && endDate == null}
      >
        Clear
      </button>
      <input
        type="date"
        value={startDate ? format(startDate, 'yyyy-MM-dd') : ''}
        onChange={(e) => handleDateChange('startDate', new Date(e.target.value))}
      />
      <p style={{ margin: 0, padding: '0px 2px', verticalAlign: 'center' }}>&#8722;</p>
      <input
        type="date"
        value={endDate ? format(endDate, 'yyyy-MM-dd') : ''}
        onChange={(e) => handleDateChange('endDate', new Date(e.target.value))}
      />
    </div >
  )
}

export default index