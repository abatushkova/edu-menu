import React from 'react';
import { Header } from '../Header/Header';
import { Filter } from '../Filter/Filter';
import { Grid } from '../Grid/Grid';
import { menu } from '../../store/data';

const categoryList = ['all', new Set(menu.map(item => item.category))];

const App = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Filter />
      <Grid />
    </div>
  );
}

export default App;
