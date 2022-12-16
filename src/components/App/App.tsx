import React, { useState } from 'react';
import { Header } from '../Header/Header';
import { Filter } from '../Filter/Filter';
import { Grid } from '../Grid/Grid';
import { cards } from '../../store/data';

const categoryList = ['all', ...Array.from(new Set(cards.map(card => card.category)))];

const App = () => {
  const [cardList, setCardList] = useState(cards);

  const filterCards = (category: string) => {
    if (category === 'all') {
      setCardList(cards);
      return;
    }

    const filteredCards = cards.filter(card => card.category === category);
    setCardList(filteredCards);
  };

  return (
    <div className="container mx-auto mb-10 px-5">
      <Header />
      <Filter categories={categoryList} filterCards={filterCards} />
      <Grid cards={cardList} />
    </div>
  );
}

export default App;
