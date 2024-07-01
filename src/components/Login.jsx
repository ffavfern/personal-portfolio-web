
import  { useState } from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (err) {
      setError('Login failed. Please check your credentials and try again.');
      console.error(err);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const { credential } = credentialResponse;
      const res = await axios.post('http://localhost:5000/api/auth/google', { tokenId: credential });
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };

  const handleGoogleFailure = (error) => {
    console.error('Google Sign-In Failure:', error);
  };

  return (
    <GoogleOAuthProvider clientId="1010958545296-f8cmiu0u7apk7kg9ofq1cq1se6qg7r68.apps.googleusercontent.com">
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-3xl font-bold mb-4 text-center">Welcome back</h2>
          <p className="text-center mb-4">Welcome back! Please enter your details.</p>
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 mt-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 mt-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="flex justify-between mb-4">
              <a href="#" className="text-sm text-teal-500 hover:underline">Forgot password</a>
            </div>
            <button type="submit" className="w-full bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">
              Login
            </button>
          </form>
          <div className="mt-4">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleFailure}
            />
          </div>
          <p className="mt-4 text-center">
            Don’t have an account? <a href="/register" className="text-teal-500 hover:underline">Sign up for free</a>
          </p>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
