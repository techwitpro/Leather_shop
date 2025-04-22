import React from 'react';
import { monk, brogue, oxford, derby } from '../../assets';

const CardSlider = () => {
  const products = [
    { id: 1, title: 'Classic Oxford', price: '$99.99', image: monk },
    { id: 2, title: 'Wingtip Brogue', price: '$149.99', image: brogue },
    { id: 3, title: 'Derby Lace-Up', price: '$199.99', image: oxford },
    { id: 4, title: 'Monk Strap', price: '$299.99', image: derby }
  ];

  return (
    <div className="mx-auto ">
      <h1 className="primary-header mt-20">Top Products</h1>
      <p className="primary-paragraph">
        Discover our top products quality, <br />
        innovation, and customer satisfaction.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 px-2 md:px-0">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 rounded-none shadow-sm overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-50% h-[150px] object-cover mx-auto mt-10 transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <div className="p-6">
              <h2 className="card-title text-center text-black">{product.title}</h2>
              <button className="button-accent">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
