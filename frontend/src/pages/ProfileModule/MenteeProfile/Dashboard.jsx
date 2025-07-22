import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../context/auth.context';

function DashboardLayout() {
  const { user } = useContext(AuthContext);

  const tabs = [
    { name: "Overview", path: '' },
    { name: "My Sessions", path: 'my-session' },
    { name: "Favorites Mentor", path: 'my-favorite-mentor' },
    { name: "Settings", path: 'settings' }
  ];

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
