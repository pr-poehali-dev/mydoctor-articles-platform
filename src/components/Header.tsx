import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Главная', path: '/' },
    { name: 'Обо мне', path: '/about' },
    { name: 'Статьи', path: '/blog' },
    { name: 'Галерея', path: '/gallery' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-primary rounded-lg p-2">
              <Icon name="Stethoscope" size={28} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground">Мой Доктор</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-base font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? 'text-primary' : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 text-base font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? 'text-primary' : 'text-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
