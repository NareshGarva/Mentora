import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../components/Logo';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorCount, setErrorCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const intervalRef = useRef(null);

  const handleLogin = () => {
    if (username === 'naresh@123' && password === '123456') {
      alert('Login successful');
      setUsername('');
      setPassword('');
      setErrorCount(0);
      setShowErrors(false);
    } else {
      setErrorCount((prev) => prev + 1);
      setShowErrors(true);
      setUsername('');
      setPassword('');

      if (errorCount + 1 >= 3) {
        setDisabled(true);
        setTimer(10);

        intervalRef.current = setInterval(() => {
          setTimer((prev) => {
            if (prev <= 1) {
              clearInterval(intervalRef.current);
              setDisabled(false);
              setErrorCount(0);
              setShowErrors(false);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      }
    }
  };

  return (
    <section className="w-full py-10 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md px-6 py-8 mx-4 bg-gradient-to-br from-indigo-100 via-yellow-50 to-pink-100">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-3">
            <span className="w-12 h-12">
              <Logo />
            </span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-sm text-gray-500">Sign in to continue your mentorship journey</p>
        </div>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div>
            <label htmlFor="username" className="block text-xs text-gray-700 font-medium mb-1">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter Username"
              required
            />
            {showErrors && <p className="text-xs text-red-500 mt-1">Invalid username</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-xs text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter Password"
              required
            />
            {showErrors && <p className="text-xs text-red-500 mt-1">Invalid password</p>}
          </div>

          <button
            type="submit"
            className={`w-full py-2 rounded-lg text-white font-semibold transition ${
              disabled
                ? 'bg-gray-200 cursor-not-allowed'
                : 'bg-black hover:bg-black/80'
            }`}
            disabled={disabled}
          >
            Login
          </button>

          {disabled && (
            <p className="text-xs text-gray-500 text-center mt-2">
              You can try again after <span>{timer}</span> seconds
            </p>
          )}
        </form>

        <div className="text-center mt-1">
          <NavLink to="/Reset" className="text-blue-600 text-sm hover:underline">
            Forgot Password?
          </NavLink>
        </div>

        <div className="mt-3 flex items-center justify-center gap-1 text-sm bg-gray-50/30 border border-gray-300 py-2 rounded-md">
          <p>Don't have an account? </p>
          <NavLink to="/register" className="text-blue-600 font-medium hover:underline">
             Create Account
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Login;
