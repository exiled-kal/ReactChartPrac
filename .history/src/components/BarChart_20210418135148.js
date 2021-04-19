import React, {useEffect, useState} from 'react';

import {csv, arc, pie, scaleBand, scaleLinear, max} from 'd3';

const csvUrl =
  'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data.csv';

const width = 960;
const height = 500;

const BarChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      d.MTBF = +d['2020'];
      return d;
    };

    csv(csvUrl, row).then(setData);
    // console.log('Fetching data');
  }, []);

  if (!data) {
    return 'Loading';
  }

  console.log(data[1]);

  const yScale = scaleBand()
    .domain(data.map((d) => d.StartDateTime))
    .range([0, height]);

  const xScale = scaleLinear()
    .domain([0, max(data, (d) => d.MTBF)])
    .range([0, width]);
  return (
    <svg width={width} height={height}>
      {data.map((d, index) => (
        <rect
          key={index}
          x={0}
          y={yScale(d.StartDateTime)}
          width={xScale(d.MTBF)}
          height={yScale.bandwidth()}
        />
      ))}
    </svg>
  );
};

export default BarChart;
