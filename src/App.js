import Navbar from './components/Navbar';
import Home from './components/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>App Content</h1>
        <Home />
      </div>
    </div>
  );
}

export default App;