import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Learn more about who we are, what we do, and why we’re passionate about delivering quality.
        </p>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text content */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2023, YourBrand started with a simple idea — to make quality products easily accessible to everyone. Our journey began in a small warehouse with just a handful of passionate people and a dream.
          </p>
          <p className="text-gray-700">
            Today, we’re proud to serve thousands of happy customers. From tech gadgets to fashion essentials, we carefully curate everything we sell, ensuring top-notch quality and customer satisfaction.
          </p>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://via.placeholder.com/600x400?text=Our+Team"
            alt="Team working"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Mission and Values */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
          <p className="text-gray-700">
            To provide exceptional online shopping experiences with innovative solutions and a customer-first mindset.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">Our Values</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Integrity & Transparency</li>
            <li>Customer Satisfaction</li>
            <li>Innovation & Quality</li>
            <li>Teamwork & Growth</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
