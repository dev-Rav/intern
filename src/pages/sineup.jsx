import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="flex flex-col justify-center h-screen px-6">
      <h2 className="text-xl font-bold mb-6">Create your PopX account</h2>

      <input placeholder="Full Name" className="border p-3 mb-3 rounded w-full" />
      <input placeholder="Phone" className="border p-3 mb-3 rounded w-full" />
      <input placeholder="Email" type="email" className="border p-3 mb-3 rounded w-full" />
      <input placeholder="Company Name" className="border p-3 mb-3 rounded w-full" />
      <input placeholder="Password" type="password" className="border p-3 mb-6 rounded w-full" />

      <Link to="/profile">
        <button className="w-full bg-purple-600 text-white py-3 rounded-lg">
          Create Account
        </button>
      </Link>
    </div>
  );
}
