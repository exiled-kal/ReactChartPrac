import React, {useEffect, useState} from 'react';

import {csv, arc, pie, scaleBand, scaleLinear} from 'd3';

const csvUrl =
  'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data.json';

const width = 960;
const height = 500;

const BarChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      d.MTBF = parseFloat(d['2020']);
      return d;
    };

    csv(csvUrl, row).then {
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

  // const xScale = scaleLinear()
  // .domain([0,])
  // return (
  //   <svg width={width} height={height}>
  //     {data.map((d) => (
  //       <rect x={0} y={yScale(d.StartDateTime)} width={} height="true" />
  //     ))}
  //   </svg>
  // );
};

export default BarChart;
