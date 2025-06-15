import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Me', path: '/about' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Blogs', path: '/blogs' },
    { label: 'Designs', path: '/designs' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-transparent p-4 w-full">
      <div className="container mx-auto flex justify-end">
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link key={item.path} to={item.path} className={`text-white hover:text-gray-300 transition duration-300 ${currentPath === item.path ? 'border-b-2 border-white' : ''}`}>               
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;