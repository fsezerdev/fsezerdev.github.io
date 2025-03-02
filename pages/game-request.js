import React from 'react'
import Layout from '../components/Layout'
import GameRequestForm from '../components/GameRequestForm'
import Head from 'next/head'
import { FiArrowLeft } from 'react-icons/fi'
import Link from 'next/link'

const GameRequestPage = () => {
  return (
    <Layout>
      <Head>
        <title>2D Oyun Talep Formu | FSEzer.dev</title>
        <meta name="description" content="2D oyun projeniz için talep formu. Hayalinizdeki oyun fikrini gerçeğe dönüştürmek için detayları paylaşın." />
      </Head>

      <div className="bg-light py-20">
        <div className="container">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-primary hover:underline">
              <FiArrowLeft className="mr-2" /> Ana Sayfaya Dön
            </Link>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">2D Oyun Geliştirme <span className="text-primary">Talep Formu</span></h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hayalinizdeki 2D oyun projesini gerçeğe dönüştürmek için ilk adımı atın. 
                Aşağıdaki formu doldurarak projenizin detaylarını paylaşın ve size özel bir teklif alın.
              </p>
            </div>
            
            <GameRequestForm />
            
            <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Neden 2D Oyun Geliştirme?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-2">Hızlı Geliştirme</h3>
                  <p className="text-gray-600">
                    2D oyunlar, 3D oyunlara göre genellikle daha hızlı ve düşük bütçeyle geliştirilebilir. 
                    Bu sayede fikrinizi daha kısa sürede pazara sunabilirsiniz.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Geniş Platform Desteği</h3>
                  <p className="text-gray-600">
                    Düşük sistem gereksinimleri sayesinde mobil cihazlardan masaüstü platformlara kadar geniş bir yelpazede oyununuzu yayınlayabilirsiniz.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Kendine Özgü Sanat Stili</h3>
                  <p className="text-gray-600">
                    2D oyunlar, farklı sanat stillerini kullanarak benzersiz bir görsel deneyim sunabilir ve akılda kalıcı bir etki bırakabilir.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Bağımlılık Yapan Oynanış</h3>
                  <p className="text-gray-600">
                    2D oyunlar, basit kontrolleri ve anlaşılır mekanikleriyle her yaştan oyuncuya hitap eden, bağımlılık yapan bir oynanış deneyimi sunabilir.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Formu gönderdikten sonra en kısa sürede sizinle iletişime geçerek projeniz hakkında detaylı görüşme yapacağım.
                Sorularınız için <a href="mailto:sezerfurkandev@gmail.com" className="text-primary hover:underline">sezerfurkandev@gmail.com</a> adresinden bana ulaşabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default GameRequestPage 