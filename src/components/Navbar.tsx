import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Me', path: '/about' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Blogs', path: '/blogs' },
    { label: 'Designs', path: '/designs' }
  ];

  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  useEffect(() => {
    setTimeout(() => {
      setShowMenu(toggleMenu)
  }, 0) }, [toggleMenu])
  
  return (
    <>
      <nav className={`py-2 w-full sm:hidden transition-all duration-100 ${toggleMenu ? 'bg-slate-800/90' : ''}`}>
        {toggleMenu ? <X className="text-white w-6 mx-4 my-2 h-6 cursor-pointer max-sm:block" onClick={handleMenu}/> : <Menu className="text-white w-6 mx-4 my-2 h-6 cursor-pointer max-sm:block" onClick={handleMenu}/>}
        {toggleMenu && (<div className={`mx-auto fixed px-4 w-full h-full z-10 bg-slate-800/90 transition-all ${showMenu ? 'opacity-100 translate-x-1' : 'opacity-0'} duration-100 max-sm:block`}>
            <ul>
              {navItems.map((item) => (
                <li key={item.path} className="pt-4">
                  <Link key={item.path} to={item.path} className={`text-white hover:text-gray-300 transition duration-300 ${currentPath === item.path ? 'border-b-2 border-white' : ''}`} onClick={handleMenu}>               
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4"><a href='mailto:contact@mplennon.com' className="text-white hover:text-gray-300 transition duration-300 " target='_blank'>Contact</a></li>
            </ul>
          </div>)}
      </nav>
      <nav className="bg-transparent p-4 w-full max-sm:hidden">
        <div className="container mx-auto flex justify-end">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link key={item.path} to={item.path} className={`text-white hover:text-gray-300 transition duration-300 ${currentPath === item.path ? 'border-b-2 border-white' : ''}`}>               
                  {item.label}
                </Link>
              </li>
            ))}
            <li><a href='mailto:contact@mplennon.com' className="text-white hover:text-gray-300 transition duration-300" target='_blank'>Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;