import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';


 

function App() {
  return (
    <body>
      <NavBar />
      <div className='main__container'>
        <ItemListContainer title={'BASS SHOP'} />
      </div>
    </body>
  );
}

export default App;
