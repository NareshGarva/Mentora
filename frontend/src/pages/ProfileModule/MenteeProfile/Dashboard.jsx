import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/auth.context';
import { useEffect } from 'react';
import Loading from '../../../components/Loading';

function DashboardLayout() {
  const { user, isLoggedIn, isLoading, verifyUser } = useAuth();
  const navigate = useNavigate();

const tabs = [
  { name: "Overview", path: '' },
  { name: "My Sessions", path: 'my-session' },
  // { name: "Favorites Mentor", path: 'my-favorite-mentor' },
  ...(user.role === "Mentor" ? [{ name: "Earnings", path: 'earnings' }] : []),
  ...(user.role === "Mentee" ? [{ name: "Favorites Mentor", path: 'my-favorite-mentor' }] : []),
  { name: "Settings", path: 'settings' }
];

useEffect(() => {
  const checkUser = async () => {
    if (isLoading) return;

    if (!isLoggedIn || !user.username || !user.role) {
      navigate('/login');
      return;
    }

    const isValid = await verifyUser(user.username, user.role);
    if (!isValid) {
      navigate('/login');
    }
  };

  checkUser();
}, [user, isLoggedIn, isLoading, navigate, verifyUser]);

  if (isLoading) {
    return (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-3xl bg-white/30">
    <Loading />
  </div>
);
}
  // Show login redirect if not logged in
  if (!isLoggedIn || !user.username) {
    return <div className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-3xl bg-white/30">Redirecting to login...</div>;
  }


  return (
    <section className="w-full bg-gradient-to-t from-transparent via-green-50 to-transparent py-10">
      <div className="mx-5 md:mx-28 flex justify-center items-center">
        <div className="w-full">
          <h1 className="text-3xl text-gray-800 font-bold">
            Welcome back, <span className='bg-gradient-to-br from-rose-500 to-indigo-500 bg-clip-text text-transparent'>{user.name}!</span>
          </h1>
          <p className="text-gray-500">
            Continue your learning journey with personalized mentorship.
          </p>

          {/* Tabs */}
          <div className="w-4/6 flex p-1.5 bg-white rounded-2xl overflow-x-auto my-10">
            {tabs.map((tab) => (
              <NavLink
                to={tab.path}
                key={tab.name}
                end
                className={({ isActive }) =>
                  `px-4 py-2 w-full text-center transition rounded-xl ${
                    isActive
                      ? "bg-gray-200 font-semibold"
                      : "text-gray-500 hover:text-black"
                  }`
                }
              >
                {tab.name}
              </NavLink>
            ))}
          </div>

          {/* Dynamic Content based on Route */}
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default DashboardLayout;
