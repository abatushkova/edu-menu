import React, { useState } from 'react';

interface IFilterModel {
  categories: string[],
  filterCards: (p: string) => void,
}

export const Filter = (props: IFilterModel) => {
  const { categories, filterCards } = props;
  const [activeClass, setActiveClass] = useState('all');

  const renderClassName = (category: string): string => {
    const name = 'text-xl font-bold uppercase border-b-4';

    return category === activeClass
      ? `${name} border-b-lime-300`
      : `${name} border-b-white hover:border-b-lime-300 transition-colors`;
  };

  const handleClick = (category: string) => {
    filterCards(category);
    setActiveClass(category);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 pb-10 md:pb-16">
      {categories.map((category, index) => (
        <button
          type="button"
          key={index}
          className={renderClassName(category)}
          onClick={() => handleClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
