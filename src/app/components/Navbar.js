// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-transparent absolute top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <img
                className="h-14 w-14 mr-2"
                src="./AquaSenseLogo.svg"
                alt="AquaSense Logo"
                />
                <h1 className='font-bold text-lg color-AquaSenseTextGrey'>AquaSense</h1>
            </div>
          <div className="flex items-center">
            {/* Logo */}
            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Service
                </Link>
                <Link href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Feature
                </Link>
                <Link href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Product
                </Link>
                <Link href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Testimonial
                </Link>
                <Link href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  FAQ
                </Link>
              </div>
            </div>
          </div>
          {/* Login and Sign up Buttons */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Link href="#" className="text-white hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium border border-white">
                Login
              </Link>
              <Link href="#" className="ml-4 bg-AquaSenseBlue text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
