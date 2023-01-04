import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ButtonsContainer from './Routes/Buttons';
import SortingListContainer from './Routes/SortingList';

const Home = () => (
  <div>
    <h1>Home</h1>
    <ul>
      <li>
        <Link to='/sorting-list'>Sorting List</Link>
      </li>
      <li>
        <Link to='/buttons'>Buttons</Link>
      </li>
    </ul>
  </div>
);

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sorting-list' element={<SortingListContainer />} />
      <Route path='/buttons' element={<ButtonsContainer />} />
    </Routes>
  </BrowserRouter>
);

export default App;
