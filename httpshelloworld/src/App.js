import './App.css';
import Phase4NASAComponent from './components/Phase4NASAComponent';
import ShowReturningMoviesComponent from './components/ShowReturningMoviesComponent';

function App() {

  return (
    <div className="App">
      <div className="text-center hero my-5">
        <ShowReturningMoviesComponent/>
        <Phase4NASAComponent />
      </div>
    </div>
  );
}

export default App;
