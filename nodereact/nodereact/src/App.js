import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './main/Main';
import Header from "./header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
