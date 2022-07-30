import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer';
import './App.css';

 

function App() {
  /* const greeting = {name:'GREETING'} */
  return (
    <div>
      <NavBar />
      <div>
        <ItemListContainer name='greeting' />
      </div>
      
    </div>
  );
}

export default App;
