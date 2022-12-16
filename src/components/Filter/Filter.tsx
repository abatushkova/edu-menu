import React from 'react';

interface IFfilterModel {
  categories: string[],
  filterCards: (p: string) => void,
}


export const Filter = (props: IFfilterModel) => {
  const { categories, filterCards } = props;

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 pb-10 md:pb-16">
      {categories.map((category, index) => (
        <button
          type="button"
          key={index}
          className="
            text-xl font-bold uppercase
            border-b-4 border-b-white
            hover:border-b-lime-300
            transition-colors
          "
          onClick={() => filterCards(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
