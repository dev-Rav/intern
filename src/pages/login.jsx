import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex flex-col justify-center h-screen px-6">
      <h2 className="text-xl font-bold mb-6">Sign in to your PopX account</h2>

      <input
        type="email"
        placeholder="Email"
        className="border p-3 mb-4 rounded w-full"
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-3 mb-6 rounded w-full"
      />

      <Link to="/profile">
        <button className="w-full bg-purple-600 text-white py-3 rounded-lg">
          Login
        </button>
      </Link>
    </div>
  );
}
