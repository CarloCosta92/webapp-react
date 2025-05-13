import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MoviesList from './pages/MoviesList';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="movies" element={<MoviesList />} />
        <Route path="movies/:id" element={<MovieDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
