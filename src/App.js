import logo from './logo.svg';
import './App.css';
import DashBoard from './Container/DashBoard';
import { SelectedPostProvider } from './Components/SelectedPostProvider';


function App() {

  return (
    <div className="App">
      <SelectedPostProvider>
     <DashBoard/>
     </SelectedPostProvider>

    </div>
  );
}

export default App;
