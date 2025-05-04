import { useState } from "react";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cartItems } = useCart();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    phone: "",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    if (!formData.fullName || !formData.email || !formData.address || !formData.phone) {
      alert("Please fill in all fields");
      return;
    }

    console.log("Order Info:", { formData, cartItems });
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="container mx-auto p-6 text-center cart-container justify-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-4 text-green-600">🎉 Thank you for your order!</h2>
        <p className="text-gray-600">We'll process your order shortly.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 bg-gray-100 justify-center items-center">
      <h2 className="text-3xl font-bold mb-6 text-center mt-20">🧾 Billing Information</h2>
      <div className="max-w-lg mx-auto cart-container">
        <div className="grid grid-cols-1 gap-6">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            className="border rounded-none p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            className="border rounded-none p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="address"
            placeholder="Shipping Address"
            value={formData.address}
            onChange={handleInputChange}
            className="border rounded-none p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            className="border rounded-none p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handlePlaceOrder}
            className="bg-white text-black border border-black text-lg font-medium px-6 py-3 rounded-none hover:bg-black hover:text-white transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
