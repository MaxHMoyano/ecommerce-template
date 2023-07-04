import { footerLinks } from '@/constants/FooterLinks';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-slate-100 p-10 h-1/2 w-100 flex flex-row">
      <div className="flex-1">
        <h2 className="font-bold">TronStore</h2>
        <h3>All rights reserved &copy; {new Date().getFullYear()} </h3>
      </div>
      <div className="flex flex-1 flex-col gap-10 flex-wrap">
        {footerLinks.map((category) => (
          <div key={category.title} className="flex flex-1 flex-col gap-1">
            <h3 className="font-bold mb-2">{category.title}</h3>
            {category.links.map((link) => (
              <Link
                key={link.title}
                className="font-light text-neutral-400"
                href={link.url}
              >
                {link.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};
