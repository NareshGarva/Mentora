import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  PlaySquare,
  Bookmark,
  Users,
  Settings,
  ArrowRightFromLine,
} from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: <Home size={20} /> },
  { name: "Sessions", path: "/learner/sessions", icon: <PlaySquare size={20} /> },
  { name: "Resources", path: "resources", icon: <Bookmark size={20} /> },
  { name: "Community", path: "community", icon: <Users size={20} /> },
  { name: "Settings", path: "settings", icon: <Settings size={20} /> },
];

const learnerData = {};

export default function LearnerSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`learner-sidebar sticky left-0 top-0 bg-secondary-100 h-screen px-4 py-8 transition-all duration-300 drop-shadow-xl ${
        collapsed ? "w-20 pr-0" : "w-fit"
      }`}
      onMouseEnter={()=>{setCollapsed(false)}}
      onMouseLeave={()=>{setCollapsed(true)}}
    >
      <div className="learner-sidebar-contents flex flex-col gap-8">
        <div className="profile-pic-and-name-container flex items-center gap-4 p-4">
          <img
            src={learnerData.profile_pic_url}
            className="w-10 h-10 rounded-full"
            alt="Learner-profile-pic"
          />
          {!collapsed && (
            <span className="text-base font-medium">{learnerData.name || "Sample Name"}</span>
          )}
        </div>

        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <NavLink
              to={item.path}
              key={item.name}
              className={({ isActive }) =>
                `learner-sidebar-link flex items-center gap-3 pl-4 pr-4 py-3.5 rounded-lg transition-colors
              ${
                isActive
                  ? "bg-secondary-600 text-white pr-8"
                  : "text-black hover:bg-white"
              }
              ${collapsed ? "justify-center rounded-r-none pr-8" : ""}`
              }
            >
              {item.icon}
              {!collapsed && <span>{item.name}</span>}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto flex justify-center p-4">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-400 hover:text-gray-600 mt-6"
          >
            <ArrowRightFromLine
              size={16}
              className={`transition-transform ${
                collapsed ? "" : "rotate-180"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
