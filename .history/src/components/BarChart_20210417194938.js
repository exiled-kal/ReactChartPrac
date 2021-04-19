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
    
    message = message + Math.round(d3.csvFormat(data).length/1024) + 'k'
  });
  return <div></div>;
};

export default BarChart;
