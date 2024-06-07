import axios from 'axios';

const API_URL = 'http://localhost:8000';

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const getAll = () => {
  return axios.get(`${API_URL}/sales`);
};

export const getByProductName = (productName) => {
  return axios.get(`${API_URL}/sales?product=${productName}`);
};

export const getByRangeDate = (startDate, endDate) => {
  const formattedStartDate = startDate ? formatDate(new Date(startDate)) : null;
  const formattedEndDate = endDate ? formatDate(new Date(endDate)) : null;

  return axios.get(`${API_URL}/sales?date_gte=${formattedStartDate}&date_lte=${formattedEndDate}`);
};
