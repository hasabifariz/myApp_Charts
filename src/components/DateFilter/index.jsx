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

  const handleDateChange = (date) => {
    if (!startDate) {
      setStartDate(date);
    } else if (!endDate) {
      if (date >= startDate) {
        setEndDate(date);
      } else {
        setEndDate(startDate);
        setStartDate(date);
      }
    } else {
      setStartDate(date);
      setEndDate(null);
    }
  };
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <Button variant='outlined' color='primary' size='small' sx={{ mr: 1 }}>Clear</Button>
      <input
        type="date"
        value={startDate ? format(startDate, 'yyyy-MM-dd') : ''}
        onChange={(e) => handleDateChange(new Date(e.target.value))}
      />
      <p style={{ margin: 0, padding: '0px 2px', verticalAlign: 'center' }}>&#8722;</p>
      <input
        type="date"
        value={endDate ? format(endDate, 'yyyy-MM-dd') : ''}
        onChange={(e) => handleDateChange(new Date(e.target.value))}
      />
    </div >
  )
}

export default index