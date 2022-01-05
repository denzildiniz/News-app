import './App.css';
import Navrbar from './components/navbar/Navrbar';
import News from './components/news/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


// 44050a4f3f6a48308b27288739475db6

function App() {
  return (
    
    <div className="App">
      <Router>
        <Navrbar />

        <Routes>
          <Route exact path="/general" element={<News key="general" pageSize={9} category={"general"} />} />
          <Route exact path="/business" element={<News key="business" pageSize={9} category={"business"} />} />
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={9} category={"entertainment"} />} />
          <Route exact path="/health" element={<News key="health" pageSize={9} category={"health"} />} />
          <Route exact path="/science" element={<News key="science" pageSize={9} category={"science"} />} />
          <Route exact path="/sports" element={<News key="sports" pageSize={9} category={"sports"} />} />
          <Route exact path="/technology" element={<News key="technology" pageSize={9} category={"technology"} />} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
