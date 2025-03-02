import React from 'react'
import Layout from '../components/Layout'
import GameRequestForm from '../components/GameRequestForm'

export default function Home() {
  return (
    <Layout>
      <div className="bg-light min-h-screen">
        <div className="container mx-auto py-16 px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">2D Oyun Talebi</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sitemiz güncellenmektedir. Şu an sadece 2D oyun talebi formu aktiftir.
              Diğer bölümler yakında tekrar erişime açılacaktır.
            </p>
          </div>
          <GameRequestForm />
        </div>
      </div>
    </Layout>
  )
} 