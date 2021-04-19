import React from 'react';
import {useState} from 'react';
import * as d3 from 'd3';

const csvUrl =
  'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data.json';

const width = 960;
const height = 500;

const message = (data) => {
  let message = '';

  message = message + Math.round(d3.csvFormat(data).length / 1024) + 'k';
  message = message + data.length + ' rows\n';
  message = message + data.columns.length;

  return message;
};

const BarChart = () => {
  const [data, setData] = useState(null);

  d3.csv(csvUrl).then((data) => {
    setData(data);
  });
  return <div>Data is {data ? message(data) : 'loading'}</div>;
};

export default BarChart;
