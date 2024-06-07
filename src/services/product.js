import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const getAll = () => {
  return axios.get(`${API_URL}/sales`);
};

export const getByProductName = (productName) => {
  return axios.get(`${API_URL}/sales?product=${productName}`);
};

export const getByRangeDate = ({ startDate, endDate }) => {
  return axios.get(`${API_URL}/sales?start_date=${startDate}&end_date=${endDate}`);
};
