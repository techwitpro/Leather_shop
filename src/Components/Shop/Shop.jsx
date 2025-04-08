import React from 'react';

const products = [
  {
    id: 1,
    name: 'Leather Backpack',
    price: '$89.99',
    image: 'https://via.placeholder.com/300x200?text=Product+1',
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    price: '$149.99',
    image: 'https://via.placeholder.com/300x200?text=Product+2',
  },
  {
    id: 3,
    name: 'Smart Watch',
    price: '$199.99',
    image: 'https://via.placeholder.com/300x200?text=Product+3',
  },
  {
    id: 4,
    name: 'Sunglasses',
    price: '$59.99',
    image: 'https://via.placeholder.com/300x200?text=Product+4',
  },
];

const Shop = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Shop Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Shop Our Collection</h1>
        <p className="text-gray-600">Explore our handpicked products just for you.</p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <div key={product.id} className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <button className="mt-4 bg-black text-white px-4 py-2 text-sm rounded hover:bg-gray-800">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
