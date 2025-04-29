import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, editCartItem } = useCart();
  const navigate = useNavigate();

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      editCartItem(item.id, item.quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };

  const handleIncrease = (item) => {
    editCartItem(item.id, item.quantity + 1);
  };

  const cartTotal = cartItems.reduce((sum, item) => {
    return sum + Number(item.price) * item.quantity;
  }, 0);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">🛒 Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is currently empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-4 w-full md:w-2/3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-52 h-50 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-500">{item.price} each</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => handleDecrease(item)}
                        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                      >
                        -
                      </button>
                      <span className="text-gray-700 font-medium">{item.quantity}</span>
                      <button
                        onClick={() => handleIncrease(item)}
                        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end mt-4 md:mt-0">
                  <p className="text-lg font-semibold text-gray-800">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 mt-2 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Grand Total + Proceed to Checkout */}
          <div className="text-right mt-8">
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              <span className="text-black">Grand Total:</span> ${cartTotal.toFixed(2)}
            </h3>
            <button
              onClick={() => navigate("/checkout")}
              className="bg-white text-black border border-black text-lg font-medium px-6 py-3 rounded-none hover:bg-black hover:text-white transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
