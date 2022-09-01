import Home from './containers/Home/Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './common/Header';
import PokemonDetails from './containers/PokemonDetails/PokemonDetails';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Navigate replace to="/pokedex" />} />
      <Route path="/pokedex" element={<Home />} />
      <Route path="/pokedex/:name" element={<PokemonDetails />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
