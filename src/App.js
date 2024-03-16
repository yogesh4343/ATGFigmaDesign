
import './App.css';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import Header from './Components/Header';
import LargeCard from './Components/LargeCard';
import NavBar from './Components/NavBar';
import Testnomials from './Components/Testnomials';

function App() {
  return (
    <div className="App">
    <NavBar   />
    <Header />
    <Cards />
    <LargeCard />
    <Testnomials />
    <Footer />
    </div>
  );
}

export default App;
