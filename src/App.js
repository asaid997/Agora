import './App.css';
import Market from './components/Market';
import { observer } from 'mobx-react'

function App(props) {
  return (
    <div className="App">
      <Market  />
    </div>
  );
}

export default  observer(App)
