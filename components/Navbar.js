import React, { useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FiAlertTriangle } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="text-xl font-bold text-primary">
            <span>fsezer<span className="text-secondary">.dev</span></span>
          </a>

          {/* Maintenance Notice */}
          <div className="hidden md:flex items-center text-yellow-600">
            <FiAlertTriangle className="mr-2" />
            <span className="text-sm">Site güncellenmektedir</span>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-500 hover:text-gray-600 focus:outline-none"
          >
            {isOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenuAlt3 className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="flex items-center text-yellow-600 p-2">
                <FiAlertTriangle className="mr-2" />
                <span className="text-sm">Site güncellenmektedir</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar