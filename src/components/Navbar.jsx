import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-7 backdrop-blur-lg border-b border-primary-mauve/30 bg-primary-offwhite/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-center items-center">
          <div className="flex items-center flex-shrink-0 absolute left-4">
            <img className="h-15 w-20 mr-2" src={logo} alt="Logo" />
            {/* <span className="text-xl tracking-tight">رحلة صنعة و طيف</span> */}
          </div>
          <ul className="hidden lg:flex space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          {/* <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an account
            </a>
          </div> */}
          <div className="lg:hidden md:flex flex-col justify-center absolute right-4">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? (
                <X className="text-primary-peach" />
              ) : (
                <Menu className="text-primary-peach" />
              )}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-primary-old-burgundy text-primary-cream w-full p-12 flex flex-col justify-center items-center lg:hidden border-t border-primary-mauve/30">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            {/* <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create an account
              </a>
            </div> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
