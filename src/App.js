import './App.css';
import Grid from './Components/Grid';
import PuttyGrid from './Components/PuttyGrid';
import TeamsGrid from './Components/TeamsGrid';

function App() {
  return (
    <div className="App">

      <u><h1>Developer Collaboration Tool</h1></u>

      <Grid name="Jenkins"/>

      <PuttyGrid name="Putty"/>
      
      <TeamsGrid name="Teams"/>

    </div>
  );
}

export default App;
