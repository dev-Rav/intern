import { useState } from "react";

function Landing({ onNavigate }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to PopX</h1>
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      <div className="flex flex-col gap-4 w-full max-w-xs">
        <button
          onClick={() => onNavigate('signup')}
          className="bg-purple-600 text-white py-3 rounded-lg text-center font-medium hover:bg-purple-700 transition-colors"
        >
          Create Account
        </button>
        <button
          onClick={() => onNavigate('login')}
          className="bg-gray-200 text-gray-800 py-3 rounded-lg text-center font-medium hover:bg-gray-300 transition-colors"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

function Signup({ onNavigate }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    companyName: ''
  });
  const [accountType, setAccountType] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <button onClick={() => onNavigate('landing')} className="text-purple-600 text-sm mb-4">← Back to Home</button>
          <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
          <p className="text-gray-600 mt-2 text-sm">
            Choose your account type and fill in the details
          </p>
        </div>

        <form>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Are you an individual or a business? *
            </label>
            <div className="flex gap-4">
              <button
                type="button"
                className={`flex-1 py-3 rounded-lg border ${
                  accountType === 'individual' 
                    ? 'bg-purple-100 border-purple-600 text-purple-600' 
                    : 'border-gray-300 text-gray-600'
                }`}
                onClick={() => setAccountType('individual')}
              >
                Individual
              </button>
              <button
                type="button"
                className={`flex-1 py-3 rounded-lg border ${
                  accountType === 'business' 
                    ? 'bg-purple-100 border-purple-600 text-purple-600' 
                    : 'border-gray-300 text-gray-600'
                }`}
                onClick={() => setAccountType('business')}
              >
                Business
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Password *
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                required
              />
            </div>

            {accountType === 'business' && (
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => onNavigate('profile')}
            className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-medium mt-8 hover:bg-purple-700 transition-colors"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-6">
          Already have an account?{" "}
          <button onClick={() => onNavigate('login')} className="text-purple-600 font-medium">
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

function Login({ onNavigate }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <button onClick={() => onNavigate('landing')} className="text-purple-600 text-sm mb-4">← Back to Home</button>
          <h2 className="text-2xl font-bold text-gray-800">Login to PopX</h2>
          <p className="text-gray-600 mt-2 text-sm">
            Welcome back! Please enter your details
          </p>
        </div>

        <form>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('profile')}
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium mt-6 hover:bg-purple-700 transition-colors"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-6">
          Don't have an account?{" "}
          <button onClick={() => onNavigate('signup')} className="text-purple-600 font-medium">
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}

function Profile({ onNavigate }) {
  const userData = {
    name: "John Doe",
    username: "johndoe",
    bio: "UX Designer & Frontend Developer with 5+ years of experience",
    posts: 38,
    connections: 5,
    groups: 12
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-purple-600 h-48 relative">
        <div className="absolute -bottom-12 left-6">
          <div className="w-24 h-24 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center">
            <span className="text-2xl text-gray-600 font-bold">
              {userData.name.charAt(0)}
            </span>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="pt-16 px-6 pb-6">
        <div className="mb-6">
          <button onClick={() => onNavigate('landing')} className="text-purple-600 text-sm mb-4">← Back to Home</button>
          <h1 className="text-2xl font-bold text-gray-800">{userData.name}</h1>
          <p className="text-gray-600">@{userData.username}</p>
          <p className="text-gray-700 mt-2">{userData.bio}</p>
        </div>
        
        {/* Stats */}
        <div className="flex justify-between text-center border-t border-gray-200 pt-4 mt-4">
          <div>
            <p className="text-xl font-bold text-gray-800">{userData.posts}</p>
            <p className="text-gray-600 text-sm">Posts</p>
          </div>
          <div>
            <p className="text-xl font-bold text-gray-800">{userData.connections}</p>
            <p className="text-gray-600 text-sm">Connections</p>
          </div>
          <div>
            <p className="text-xl font-bold text-gray-800">{userData.groups}</p>
            <p className="text-gray-600 text-sm">Groups</p>
          </div>
        </div>
        
        {/* Actions */}
        <div className="mt-8 space-y-3">
          <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
            Edit Profile
          </button>
          <button
            onClick={() => onNavigate('landing')}
            className="w-full border border-gray-300 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [currentScreen, setCurrentScreen] = useState('landing');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'signup':
        return <Signup onNavigate={setCurrentScreen} />;
      case 'login':
        return <Login onNavigate={setCurrentScreen} />;
      case 'profile':
        return <Profile onNavigate={setCurrentScreen} />;
      default:
        return <Landing onNavigate={setCurrentScreen} />;
    }
  };

  return renderScreen();
}

export default App;