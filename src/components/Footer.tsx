
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-shl-blue py-6 text-white mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">SHL Assessment Spark</h3>
            <p className="text-sm opacity-80">
              Empowering talent decisions with intelligent assessment recommendations.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-shl-yellow transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-shl-yellow transition-colors">About</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Contact</h3>
            <p className="text-sm opacity-80">
              Have questions about our assessment recommendation engine?
              <br />
              <a href="mailto:info@shlassessmentspark.com" className="text-shl-teal hover:underline">
                info@shlassessmentspark.com
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-white/20 mt-6 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} SHL Assessment Spark. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
