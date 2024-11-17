import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo Section */}
          <div>
            <h2 className="text-xl font-bold text-primary mb-4">Coddunity</h2>
          </div>

          {/* Links - Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Company</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-primary">Home</a></li>
              <li><a href="#" className="hover:text-primary">About</a></li>
              <li><a href="#" className="hover:text-primary">Pricing</a></li>
              <li><a href="#" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>

          {/* Links - Help */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Help</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-primary">Support</a></li>
              <li><a href="#" className="hover:text-primary">Blog</a></li>
              <li><a href="#" className="hover:text-primary">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Links - Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Resources</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-primary">Free eBooks</a></li>
              <li><a href="#" className="hover:text-primary">Development Tutorial</a></li>
              <li><a href="#" className="hover:text-primary">How-to Blog</a></li>
              <li><a href="#" className="hover:text-primary">YouTube Playlist</a></li>
            </ul>
          </div>

          {/* Links - Social */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Links</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-primary">BlazeX</a></li>
              <li><a href="#" className="hover:text-primary">CharityX</a></li>
              <li><a href="#" className="hover:text-primary">Devton</a></li>
              <li><a href="#" className="hover:text-primary">Dover</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Coddunity. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
