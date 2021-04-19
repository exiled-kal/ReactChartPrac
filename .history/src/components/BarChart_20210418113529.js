import React, {useEffect, useState} from 'react';

import * as d3 from 'd3';

const csvUrl =
  'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data.json';

const width = 960;
const height = 500;

const BarChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    d3.csv(csvUrl).then((data) => {
      // console.log('Fetching data');
      setData(data);
    });
  }, []);
  return (
    <svg width={width} height={height}>
      {data.map((d) => (
        <rect x={0} y width height />
      ))}
    </svg>
  );
};

export default BarChart;
