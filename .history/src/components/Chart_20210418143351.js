import React, {useState, useEffect} from 'react';

import {fetchData} from '../';
import {Line, Bar} from 'react-chartjs-2';

import styles from './Chart.module.css';

export default function Chart({data: StartDateTime, MTBF}) {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  }, []);

  const barChart = (
    <Bar
      data={{
        labels: [StartDateTime],
        datasets: [
          {
            label: 'People',
            backgroundColor: [
              'rgba(0, 0, 255, 0.5)',
              'rgba(0, 255, 136, 0.5)',
              'rgba(255, 0, 0, 0.5)',
            ],
            data: [StartDateTime.value, MTBF.value],
          },
        ],
      }}
      options={{
        legend: {display: false},
        title: {
          display: true,
          text: `Current status in`,
        },
      }}
    />
  );

  return (
    <div className={styles.container}>
      <barChart />
    </div>
  );
}
