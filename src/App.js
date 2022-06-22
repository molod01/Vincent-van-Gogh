import './index.css';
import '../src/components/Artist/Artist'
import '../src/components/Layout/Layout'
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
              {/* <Route path="game" element={<MemoryGame />}/> */}
          </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
