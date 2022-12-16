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
    <div className="flex flex-col md:flex-row md:items-start">
      <figure className="
        shrink-0
        w-full max-w-sm md:w-32 lg:w-60
        mx-auto mb-2 md:mx-0
        border-8 md:border-4 lg:border-8 border-slate-200
      ">
        <img src={img} alt={title} className="aspect-video object-cover" />
      </figure>
      <div className="grow md:ml-4">
        <div className="relative mb-2 pr-14">
          <p className="text-lg font-bold">{title}</p>
          <span className="absolute top-0 right-0 text-lg text-slate-500 font-bold italic">{price}</span>
        </div>
        <p className="">{desc}</p>
      </div>
    </div>
  );
}
