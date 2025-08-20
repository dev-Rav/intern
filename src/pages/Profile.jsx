export default function Profile() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-6">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm text-center">
        <img
          src="https://via.placeholder.com/100"
          alt="profile"
          className="w-20 h-20 rounded-full mx-auto mb-4"
        />
        <h2 className="text-lg font-bold">Harry Doe</h2>
        <p className="text-gray-600 mb-4">harry@domain.com</p>
        <p className="text-gray-800">Account Settings</p>
      </div>
    </div>
  );
}
