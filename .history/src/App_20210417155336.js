import logo from './logo.svg';
import './App.css';
import {Navbar} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="danger">
        <div className="container">
          <Navbar.Brand className="text-white">QPP Chart Display</Navbar.Brand>
        </div>
      </Navbar>
      <BarChart
    </div>
  );
}

export default App;
