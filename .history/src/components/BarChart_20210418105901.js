import React, {useEffect} from 'react';
import {useState} from 'react';
import * as d3 from 'd3';
import {message} from '../message'

const csvUrl =
  'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data.json';


const BarChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    d3.csv(csvUrl).then((data) => {
      // console.log('Fetching data');
      setData(data);
    });
  }, []);
  return <div>Data is {data ? message(data) : 'loading'}</div>;
};

export default BarChart;
