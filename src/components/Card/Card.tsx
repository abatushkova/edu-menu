import React from 'react';

export interface ICardModel {
  id: number,
  title: string,
  category: string,
  price: number,
  img: string,
  desc: String,
}

export const Card = (props: ICardModel) => {
  const {
    title,
    price,
    img,
    desc
  } = props;

  return (
    <div className="flex flex-col md:flex-row">
      <figure className="mb-2">
        <img src={img} alt={title} className="" />
      </figure>
      <div className="">
        <div className="relative mb-2 pr-14">
          <p className="text-lg font-bold">{title}</p>
          <span className="absolute top-0 right-0 text-lg font-bold">{price}</span>
        </div>
        <p className="">{desc}</p>
      </div>
    </div>
  );
}
