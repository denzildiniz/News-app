import './App.css';
import Navrbar from './components/navbar/Navrbar';
import News from './components/news/News';
// 44050a4f3f6a48308b27288739475db6

function App() {
  return (
    <div className="App">
      <Navrbar />
      <News pageSize={9} />
    </div>
  );
}

export default App;
