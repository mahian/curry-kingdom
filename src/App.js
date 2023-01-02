import './App.css';
import Main from './layout/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import SingleProduct from './components/single-product/SingleProduct';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Main />} >
          <Route path="/" element={<Home />} />
          <Route path="singleFood/:id" element={<SingleProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;