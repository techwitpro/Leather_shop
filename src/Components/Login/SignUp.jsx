// Signup.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const Signup = () => {
  const { signup } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password, name);
      toast.success("Account created successfully!");
      navigate("/home");
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    }
  };


  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      setLoading(true); // disable button
      await signInWithPopup(auth, provider);
      toast.success("Logged in with Google!");
      navigate("/home");
    } catch (err) {
      console.error(err);
      if (err.code !== 'auth/cancelled-popup-request') {
        toast.error("Google sign-in failed");
      }
    } finally {
      setLoading(false); // re-enable button
    }
  };

  return (
    <div className="container flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-none shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-none focus:outline-none focus:ring-2 focus:ring-green-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-none focus:outline-none focus:ring-2 focus:ring-green-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-none focus:outline-none focus:ring-2 focus:ring-green-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-none hover:bg-green-700 transition-all duration-300"
          >
            Sign Up
          </button>
          {error && <p className="text-red-500 text-center">{error}</p>}
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="mt-4 w-full bg-red-500 text-white py-3 rounded-none hover:bg-red-600 transition-all duration-300 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Loading..." : "Sign Up with Google"}
        </button>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
