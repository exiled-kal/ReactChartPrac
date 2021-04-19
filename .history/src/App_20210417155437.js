
import './App.css';
import {Navbar} from 'react-bootstrap';

import HomeScreen from './screen/HomeScreen';

function App() {
  return (
    <div className="App">
      <Navbar bg="danger">
        <div className="container">
          <Navbar.Brand className="text-white">QPP Chart Display</Navbar.Brand>
        </div>
      </Navbar>
      <HomeScreen/>
    </div>
  );
}

export default App;
