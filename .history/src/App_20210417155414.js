import logo from './logo.svg';
import './App.css';
import {Navbar} from 'react-bootstrap';
import BarChartScreen from './charts/BarChartScreen';

function App() {
  return (
    <div className="App">
      <Navbar bg="danger">
        <div className="container">
          <Navbar.Brand className="text-white">QPP Chart Display</Navbar.Brand>
        </div>
      </Navbar>
      <HomeScreen
    </div>
  );
}

export default App;
