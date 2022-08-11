import NavBar from './components/NavBar/NavBar';
/* import ItemListContainer from './components/ItemListContainer/ItemListContainer';  */
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';
import { BrowserRouter, } from 'react-router-dom';




function App() {
  return (

    <BrowserRouter>
      <>
        <NavBar />
        <div className='main__container'>
          {/* <ItemListContainer title={'BASS SHOP'} /> */}
          <ItemDetailContainer title={'BASS SHOP'} />
        </div>
      </> 
    </BrowserRouter>

  );
}

export default App;
