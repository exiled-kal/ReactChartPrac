import React from 'react';
import {useState} from 'react';

const csvUrl =
  'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data.json';

const width = 960;
const height = 500;

const BarChart = () => {
  const [data, setData] = useState([]);

  d3.csv(csvUrl).then((data) => {
    let message = '';
    
    message = message + Math.round
  });
  return <div></div>;
};

export default BarChart;
