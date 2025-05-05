
import React from 'react';
import { Link } from 'react-router-dom';
import { BrainCog } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-shl-blue py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-white">
          <BrainCog size={32} />
          <span className="text-xl font-bold">SHL Assessment Spark</span>
        </Link>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link 
                to="/" 
                className="text-white hover:text-shl-yellow transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="text-white hover:text-shl-yellow transition-colors"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
