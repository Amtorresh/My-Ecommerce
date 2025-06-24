import './App.css'
import NavBar from './components/NavBar.jsx';
import CartWidget from './components/CartWidget.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';

function App() {
  return (
    <div className='app-container'>
      <NavBar />
      <ItemListContainer  />
    </div>
  );
}

export default App;