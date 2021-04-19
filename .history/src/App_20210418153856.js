import './App.css';
import {CSVLink} from 'react-csv';

import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Cell,
} from 'recharts';

const data = [
  {
    StartDateTime: '31/03/2120 Time:09:24',
    SystemUpTime: 6,
    OperationTime: 0,
    DownTime: 0,
    IdleTime: 0,
    MTBF: 0,
    MTBA: 0,
    TotalQuantityIn: 0,
    TotalQuantityOut: 0,
    TotalPassed: 0,
    TotalFailed: 0,
    TotalYield: 0,
    SoftJam: 0,
    HardJam: 0,
    SprintUPH: 514,
  },
  {
    LotID: 'QPP_Test',
    ProductType: 'RB',
    StartDateTime: '31/03/2120 Time:13:56',
    SystemUpTime: 499,
    OperationTime: 129,
    DownTime: 0,
    IdleTime: 364,
    MTBF: 129,
    MTBA: 129,
    TotalQuantityIn: 33,
    TotalQuantityOut: 12,
    TotalPassed: 2,
    TotalFailed: 10,
    TotalYield: 16,
    SoftJam: 0,
    HardJam: 0,
    SprintUPH: 514,
  },
  {
    LotID: 'QPP_Test',
    ProductType: 'RB',
    StartDateTime: '31/03/2120 Time:14:10',
    SystemUpTime: 1481,
    OperationTime: 444,
    DownTime: 0,
    IdleTime: 1028,
    MTBF: 444,
    MTBA: 444,
    TotalQuantityIn: 33,
    TotalQuantityOut: 28,
    TotalPassed: 4,
    TotalFailed: 24,
    TotalYield: 14,
    SoftJam: 0,
    HardJam: 0,
    SprintUPH: 514,
  },
  {
    LotID: 'QPP_Test',
    ProductType: 'RB',
    StartDateTime: '31/03/2120 Time:14:25',
    SystemUpTime: 2680,
    OperationTime: 999,
    DownTime: 0,
    IdleTime: 1581,
    MTBF: 999,
    MTBA: 999,
    TotalQuantityIn: 33,
    TotalQuantityOut: 170,
    TotalPassed: 61,
    TotalFailed: 109,
    TotalYield: 35,
    SoftJam: 0,
    HardJam: 0,
    SprintUPH: 514,
  },
];
console.log(data);

const csvReport = {
  filename: './data/data.csv',

  data: data,
};


function App() {
  return (
    <div style={{textAlign: 'center'}}>
      <h2>QPP Chart</h2>
      <CSVLink {...csvReport}>Export to csv</CSVLink>
      <br />
      <div className="App">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="MTBF"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="StartDateTime"
            scale="point"
            padding={{left: 10, right: 10}}
          />
          Start Date Time
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="MTBF" fill="#8884d8" background={{fill: '#eee'}} />
        </BarChart>
      </div>
    </div>
  );
}

export default App;
