import React, {useEffect, useState} from 'react';

import {csv, arc, pie, scaleBand} from 'd3';

const csvUrl =
  'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data.json';

const width = 960;
const height = 500;

const BarChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl).then((data) => {
      // console.log('Fetching data');
      setData(data);
    });
  }, []);

  if (!data) {
    return 'Loading';
  }

  console.log(data[0]);
  const yScale = scaleBand()
    .domain(data.map((d) => d.StartDateTime))
    .range([0, height]);

  return (
    <svg width={width} height={height}>
      {data.map((d) => (
        <rect x={0} y={yScale} width height="true" />
      ))}
    </svg>
  );
};

export default BarChart;
