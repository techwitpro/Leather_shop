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
    <div className="container mx-auto p-6 cart-container justify-center bg-gray-100 mb-8">
      <h2 className="text-3xl font-bold mb-12 text-center">🛒 Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-red-400">Your cart is currently empty!</p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6 ">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center bg-white justify-between border border-gray-300 rounded-md p-4 hover:shadow-sm transition h-auto  md:h-[200px]"
              >
                <div className="flex flex-col md:flex-row items-center justify-around gap-4 w-full md:w-2/3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-52 h-50 object-cover rounded-none"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 text-center">{item.name}</h3>
                    <p className="text-gray-500 text-center">{item.price}$ each</p>
                    <div className="flex justify-center items-center gap-2 mt-2 text-center">
                      <button
                        onClick={() => handleDecrease(item)}
                        className="px-3 py-1 bg-white hover:bg-black hover:text-white rounded border border-gray-300 hover:scale-105 transition-all duration-300 ease-in-out"
                      >
                        -
                      </button>
                      <span className="text-gray-700 font-medium">{item.quantity}</span>
                      <button
                        onClick={() => handleIncrease(item)}
                        className="px-3 py-1 bg-white hover:bg-black hover:text-white rounded border border-gray-300 hover:scale-105 transition-all duration-300 ease-in-out"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center mt-4 md:mt-0 md:mr-4">
                  <p className="text-lg font-semibold text-gray-800">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 mt-0 mb-2 hover:underline text-center hover:scale-105 transition-all duration-300 ease-in-out"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Grand Total + Proceed to Checkout */}
          <div className="flex flex-col items-center md:items-end mt-8 text-center">
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              <span className="text-black mr-2">Grand Total:</span> ${cartTotal.toFixed(2)}
            </h3>
            <button
              onClick={() => navigate("/checkout")}
              className="bg-white text-black border border-gray-300 text-lg font-medium px-6 py-3 rounded-md hover:bg-black hover:text-white transform hover:scale-105 transition-all duration-300 ease-in-out"
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
