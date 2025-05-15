import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Layout from './components/Layout';
import MoviesList from './pages/MoviesList';
import MovieDetail from './pages/MovieDetail';
import LoaderContext from './contexts/LoaderContext';

function App() {

  const [loading, setLoading] = useState(false)


  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="movies" element={<MoviesList />} />
          <Route path="movies/:id" element={<MovieDetail />} />
        </Route>
      </Routes>
    </LoaderContext.Provider>
  );
}

export default App;
