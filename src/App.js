import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'; 
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (

    <BrowserRouter>
      <>
        <NavBar />
        <div className='main__container'>
        <Routes>
            <Route path='/' element={<ItemListContainer title={'BAJOS ELECTRICOS'} />} />
            <Route path='/detail/:id' element={<ItemDetailContainer title={'Detalle de producto'} />} />
            <Route path='/category/:category' element={<ItemListContainer title={'Listado de Marcas'} />} />
            <Route path='*' element={<h1>Nada encontrado</h1>} />
          </Routes>
        </div>
      </> 
    </BrowserRouter>

  );
}

export default App;
