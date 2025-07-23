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
    <div className="section-bg bg-white">
      <section className="w-full bg-gradient-to-t from-transparent via-primary-100 to-transparent py-16">
        <main className=''>
          <div className="  flex justify-center items-center gap-8">
            <div className="w-full mx-5 md:mx-28 space-y-4">
              <div className="text-container">
              <h1 className="text-3xl text-gray-800 font-bold">
                Welcome back, <span className='bg-gradient-to-br from-rose-500 to-indigo-500 bg-clip-text text-transparent'>{user.name}!</span>
              </h1>
              <p className="text-gray-500">
                Continue your learning journey with personalized mentorship.
              </p>
              </div>

              {/* Tabs */}
              <div className="flex justify-center items-center px-2 py-1 w-full font-medium text-center transition rounded-full bg-m-gray-100">
                {tabs.map((tab) => (
                  <NavLink
                    to={tab.path}
                    key={tab.name}
                    end
                    className={({ isActive }) =>
                      `px-4 py-2 w-full font-medium transition rounded-full ${isActive
                        ? "bg-white text-black shadow-xs"
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
        </main>
      </section>
    </div>
  );
}

export default DashboardLayout;
