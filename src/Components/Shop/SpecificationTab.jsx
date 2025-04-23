import React, { useState } from "react";

// Mock review data with avatar URLs (use placeholder images)
const reviews = [
  {
    name: "John Doe",
    rating: 5,
    comment: "Amazing quality! Highly recommend this product.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Janny Smith",
    rating: 4,
    comment: "Very good, although delivery was slightly delayed.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Ali Khan",
    rating: 5,
    comment: "Perfect for my needs. Great customer service too.",
    avatar: "https://i.pravatar.cc/150?img=7",
  },
];

// Review Component with avatar
const ReviewList = () => (
  <div className="space-y-6">
    {reviews.map((review, index) => (
      <div key={index} className="p-4 border border-gray-200 rounded-lg shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <img
              src={review.avatar}
              alt={`${review.name} avatar`}
              className="w-10 h-10 rounded-full object-cover"
            />
            <h4 className="font-semibold">{review.name}</h4>
          </div>
          <div className="text-yellow-500 text-sm">
            {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
          </div>
        </div>
        <p className="text-gray-700">{review.comment}</p>
      </div>
    ))}
  </div>
);

// Tab definitions
const tabs = [
  {
    id: 1,
    title: "Specification",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  },
  {
    id: 2,
    title: "Additional Information",
    content:
      "Here are the full technical specifications of the product, including materials, dimensions, and weight...loerm ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  },
  {
    id: 3,
    title: "Reviews",
    component: <ReviewList />,
  },
];

const SpecificationTab = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const active = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="container flex flex-col items-center justify-center mt-8 px-4">
      {/* Tab container */}
      <div className="flex border-b mb-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-4 py-2 cursor-pointer transition-colors duration-300 text-lg ${
              activeTab === tab.id ? "text-black font-semibold" : "text-gray-500"
            } group`}
          >
            {tab.title}
            <span
              className={`absolute left-0 -bottom-0.5 h-1 bg-black transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 ${
                activeTab === tab.id ? "scale-x-100" : ""
              } origin-left w-full`}
            />
          </div>
        ))}
      </div>

      {/* Tab content */}
      <div className="text-start max-w-2xl text-start text-gray-700 text-lg transition-opacity duration-300 leading-[146%] w-full mt-4">
        {active.component || active.content}
      </div>
    </div>
  );
};

export default SpecificationTab;
