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
    Start Date Time: '31/03/2120 Time:09:24',
    System Up Time: 6,
    Operation Time: 0,
    Down Time: 0,
    Idle Time: 0,
    MTBF: 0,
    MTBA: 0,
    Total Quantity In: 0,
    Total Quantity Out: 0,
    Total Passed: 0,
    Total Failed: 0,
    Total Yield: 0,
    Soft Jam: 0,
    Hard Jam: 0,
    Sprint UPH: 514,
  },
  {
    LotID: 'QPP_Test',
    Product Type: 'RB',
    Start Date Time: '31/03/2120 Time:13:56',
    System Up Time: 499,
    Operation Time: 129,
    Down Time: 0,
    Idle Time: 364,
    MTBF: 129,
    MTBA: 129,
    Total Quantity In: 33,
    Total Quantity Out: 12,
    Total Passed: 2,
    Total Failed: 10,
    Total Yield: 16,
    Soft Jam: 0,
    Hard Jam: 0,
    Sprint UPH: 514,
  },
  {
    LotID: 'QPP_Test',
    Product Type: 'RB',
    Start Date Time: '31/03/2120 Time:14:10',
    System Up Time: 1481,
    Operation Time: 444,
    Down Time: 0,
    Idle Time: 1028,
    MTBF: 444,
    MTBA: 444,
    Total Quantity In: 33,
    Total Quantity Out: 28,
    Total Passed: 4,
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

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#ff0000'];

const csvReport = {
  filename: './data/data.csv',
  data: data,
};

function App() {
  return (
    <div style={{textAlign: 'center'}}>
      <h2>QPP Chart</h2>

      <br />
      <div className="App">
        <PieChart width={500} height={500}>
          <h5>PieChart Of QPP</h5>
          <Pie
            dataKey="MTBF"
            isAnimationActive={true}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label="Start Date Time"
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
          width={600}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: 30,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="StartDateTime"
            scale="point"
            padding={{left: 10, right: 10}}
          />

          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="MTBF" fill="#8884d8" background={{fill: '#eee'}} />
        </BarChart>
      </div>
      <button className="csv__button">
        <CSVLink {...csvReport}>Export to csv</CSVLink>
      </button>
    </div>
  );
}

export default App;
