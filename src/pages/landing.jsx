import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 text-center">
      <h2 className="text-2xl font-bold mb-2">Welcome to PopX</h2>
      <p className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <Link to="/signup" className="w-full max-w-sm">
        <button className="w-full bg-purple-600 text-white py-3 rounded-lg mb-3">
          Create Account
        </button>
      </Link>

      <Link to="/login" className="w-full max-w-sm">
        <button className="w-full border border-purple-600 text-purple-600 py-3 rounded-lg">
          Already Registered? Login
        </button>
      </Link>
    </div>
  );
}
