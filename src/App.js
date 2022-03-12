//styles
import './App.css';

//components
import Activity from './components/Activity';
import Sidebar from './components/Sidebar';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Cards />
      <Activity />
    </div>
  );
}

export default App;
