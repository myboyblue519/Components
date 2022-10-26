// Styling / Images
import logo from './logo.svg';
import './App.css';
// Components
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import PetListComponent from './components/PetListComponent';
// Data - Plugins
import animals from './utils/animals';

function App() {
  return (
    <div>
      <HeaderComponent />
      <PetListComponent animalsList={animals}/>
      <FooterComponent />
    </div>
  );
}

export default App;