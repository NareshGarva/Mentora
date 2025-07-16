import React, { useState, useRef, useEffect, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from "js-cookie";
import Logo from '../../components/Logo';
import Loading from '../../components/Loading';
import { AuthContext } from '../../context/auth.context';

function Login() {
const {login} = useContext(AuthContext)

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    usernameORemail: '',
    password: '',
  });

  const [errorCount, setErrorCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const intervalRef = useRef(null);

  
  const handleRedirect = ()=>{
    navigate("/");
  }

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Basic Validation
  const validateFields = () => {
    return formData.usernameORemail.trim() !== '' && formData.password.trim() !== '';
  };

  // Handle Lockout Countdown
  useEffect(() => {
    if (timer > 0) {
      intervalRef.current = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setDisabled(false);
            setErrorCount(0);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [timer]);

  // Handle Login Submission
  const handleLogin = async () => {
    setShowErrors(false);
    if (!validateFields()) {
      setShowErrors(true);
      return;
    }
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', formData);

      if (response.status === 200) {
        alert(response.data.message);
        Cookies.set("accessToken", response.data.accessToken, {
 expires: 0.0104, // 15 min = 15 / 1440 ≈ 0.0104
  path: "/"
});
login(response.data.user)
handleRedirect();
      } else {
        alert(response.data.message || 'Invalid credentials');
        throw new Error(response.data.message || 'Invalid credentials');
      }

    } catch (error) {
      console.error(`Login error: ${error}`);
      setShowErrors(true);
      setErrorCount((prev) => prev + 1);
      if (errorCount + 1 >= 3) {
        setDisabled(true);
        setTimer(Math.floor(Math.random()*100)); 
      }
    } finally {
      setLoading(false);
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
            <label htmlFor="usernameORemail" className="block text-xs text-gray-700 font-medium mb-1">
              Username or Email
            </label>
            <input
              id="usernameORemail"
              type="text"
              name="usernameORemail"
              value={formData.usernameORemail}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter Username or Email"
            />
            {showErrors && !formData.usernameORemail && (
              <p className="text-xs text-red-500 mt-1">Invalid username or email</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-xs text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter Password"
            />
            {showErrors && !formData.password && (
              <p className="text-xs text-red-500 mt-1">Invalid password</p>
            )}
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
            {isLoading ? <Loading /> : 'Login'}
          </button>

          {disabled && (
            <p className="text-xs text-gray-500 text-center mt-2">
              You can try again after <span>{timer}</span> seconds
            </p>
          )}
        </form>

        <div className="text-center mt-1">
          <NavLink to="/reset" className="text-blue-600 text-sm hover:underline">
            Forgot Password?
          </NavLink>
        </div>

        <div className="mt-3 flex items-center justify-center gap-1 text-sm bg-gray-50/30 border border-gray-300 py-2 rounded-md">
          <p>Don't have an account?</p>
          <NavLink to="/register" className="text-blue-600 font-medium hover:underline">
            Create Account
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Login;
