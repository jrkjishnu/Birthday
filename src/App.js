import logo from './logo.svg';
import './App.css';
import ImageInfo from './image';
import data from './data';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <ImageInfo data={data}/>
      </header>
    </div>
  );
}

export default App;
