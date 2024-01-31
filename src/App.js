import Banner from './components/Banner';
import Exhibition from './components/Exhibition';
import Reward from './components/Reward';
import Navbar from './constants/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Exhibition />
      <Reward />
    </div>
  );
}

export default App;
