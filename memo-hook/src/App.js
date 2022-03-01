import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import FocusInput from './components/FocusInput';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';

function App() {

  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <FocusInput/> */}
      <ClassTimer/>
      <HookTimer/>
    </div>
  );
}

export default App;
