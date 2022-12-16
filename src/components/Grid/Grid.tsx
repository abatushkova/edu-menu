import React from 'react';
import { Card } from '../Card/Card';
import { ICardModel } from '../Card/Card';

interface GridModel {
  cards: ICardModel[];
}

const renderCards = (cards: ICardModel[]) => {
  return cards.map(card => <Card key={card.id} {...card} />);
}

export const Grid = (props: GridModel) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
      {renderCards(props.cards)}
    </div>
  );
}
