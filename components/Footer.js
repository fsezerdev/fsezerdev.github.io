import React from 'react'
import { FiMail } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col items-center justify-center">
          <span className="text-xl font-bold text-primary mb-6">
            fsezer<span className="text-secondary">.dev</span>
          </span>
          
          <a
            href="https://bionluk.com/fsezer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <FiMail className="mr-2" />
            <span>İletişime Geç</span>
          </a>

          <p className="mt-6 text-sm text-gray-500">
            © {new Date().getFullYear()} fsezer.dev. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 