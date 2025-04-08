import React from 'react'
import Hero from './Hero'
const Home = () => {
  return (
    <div>
      <Hero />
      <section className="bg-white p-8">
        <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Replace with actual product data */}
          <div className="border p-4">
            <h3 className="text-xl font-semibold">Product 1</h3>
            <p className="text-gray-600">$19.99</p>
          </div>
          <div className="border p-4">
            <h3 className="text-xl font-semibold">Product 2</h3>
            <p className="text-gray-600">$29.99</p>
          </div>
          <div className="border p-4">
            <h3 className="text-xl font-semibold">Product 3</h3>
            <p className="text-gray-600">$39.99</p>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 p-8">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-600">
          We are a leading online store offering a wide range of products at competitive prices.
          Our mission is to provide quality products and excellent customer service.
        </p>
      </section>
    </div>
  )
}

export default Home