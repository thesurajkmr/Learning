import logo from './logo.svg';
import './App.css';
import UseState from './components/UseState/UseState';
import { UseReducer } from './components/UseReducer/UseReducer';

function App() {
  return (
    <div className="App">
        {/* <UseState/> */}
        <UseReducer/>
    </div>
  );
}

export default App;
