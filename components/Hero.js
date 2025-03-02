import React from 'react'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

const Hero = () => {
  return (
    <div className="relative bg-light pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Arka Plan Deseni */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.9),rgba(255,255,255,0.7))] bg-fixed"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              👋 Freelance Yazılım Geliştirici
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Modern çözümler<br />
              <span className="text-primary">kreatif fikirler</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Merhaba, ben Sezer. Oyun geliştirme, yapay zeka, görüntü işleme, mobil ve masaüstü uygulamalar geliştiriyorum. 
              Temiz kod yazımı ve modern teknolojileri kullanarak hayalinizdeki projeleri hayata geçiriyorum.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/#contact" className="btn btn-primary flex items-center gap-2">
                İletişime Geç <FiArrowRight />
              </Link>
              <Link href="/#projects" className="btn btn-outline">
                Projelerimi Gör
              </Link>
            </div>
          </div>
          
          <div className="w-full md:w-2/5">
            <div className="relative bg-white p-1 rounded-lg shadow-xl">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-lg z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-lg z-0"></div>
              <div className="relative z-10 overflow-hidden rounded-lg bg-gray-100 aspect-square">
                {/* Bu kısımda bir resim eklenebilir */}
                <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary/50 to-secondary/50 text-white text-5xl font-bold">
                  FS
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* İstatistikler */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-3xl font-bold text-primary mb-2">5+</h3>
            <p className="text-gray-600">Yıllık Deneyim</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-3xl font-bold text-primary mb-2">50+</h3>
            <p className="text-gray-600">Tamamlanan Proje</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-3xl font-bold text-primary mb-2">20+</h3>
            <p className="text-gray-600">Mutlu Müşteri</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-3xl font-bold text-primary mb-2">100%</h3>
            <p className="text-gray-600">Müşteri Memnuniyeti</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 