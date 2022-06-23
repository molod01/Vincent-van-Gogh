import './index.css';
import Artist from './components/Artist/Artist';
import Layout from './components/Layout/Layout';
import Galery from './components/Galery/Galery';
import Masterpiece from './components/Masterpiece/Masterpiece'
import { 
  BrowserRouter,
  Routes,
  Route,
  HashRouter
} from "react-router-dom";

function App() {
  return (
    <HashRouter basename='/'>
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Artist />}/>
              <Route path="painting" element={<Masterpiece />}/>
              <Route path="galery" element={<Galery />}/>
          </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
