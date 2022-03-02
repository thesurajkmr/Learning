import logo from './logo.svg';
import './App.css';
import UseState from './components/UseState/UseState';
import { UseReducer } from './components/UseReducer/UseReducer';
import { ObjectUseState } from './components/Immutable State/ObjectUseState';
import { ArrayUseState } from './components/Immutable State/ArrayUseState';
import Parent from './components/ParentChild/Parent';

function App() {
  return (
    <div className="App">
        {/* <UseState/> */}
        {/* <UseReducer/> */}
        {/* <ObjectUseState/> */}
        <Parent/>
    </div>
  );
}

export default App;
