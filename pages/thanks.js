import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { FiCheck, FiArrowLeft } from 'react-icons/fi'

export default function Thanks() {
  return (
    <Layout>
      <div className="py-20 md:py-32 container text-center">
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-md">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-green-100 text-green-500">
            <FiCheck size={30} />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Teşekkürler!</h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Mesajınız başarıyla alındı. En kısa sürede size dönüş yapacağım.
          </p>
          
          <Link 
            href="/" 
            className="btn btn-primary inline-flex items-center gap-2"
          >
            <FiArrowLeft /> Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </Layout>
  )
} 