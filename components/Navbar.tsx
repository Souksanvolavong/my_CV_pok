import React from "react";

const Navbar: React.FC = () => {
  const menu = ["Profile", "Skills", "Languages", "Experience", "Hobbies", "Education"];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">CV POK </h1>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          {menu.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-500 transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
