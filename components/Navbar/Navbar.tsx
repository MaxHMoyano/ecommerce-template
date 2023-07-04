import { useMemo } from 'react';
import { Button } from '../Button/Button';

export const Navbar = () => {
  const links = useMemo(
    () => [
      { title: 'On Sale!', url: '/' },
      { title: 'Products', url: '/' },
      { title: 'Build your own PC', url: '/' },
      { title: 'Sell us your components!', url: '/' },
    ],
    [],
  );
  return (
    <header>
      <nav className="absolute w-full px-10 py-5 flex justify-between">
        <div className="Logo">Logo</div>
        <div className="flex-1 flex justify-end mr-8">
          {links.map((link) => (
            <Button key={link.title} title={link.title} />
          ))}
        </div>
        <div className="actions">
          <button>Carrito</button>
        </div>
      </nav>
    </header>
  );
};
