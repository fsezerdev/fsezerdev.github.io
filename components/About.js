import React from 'react'
import { FiCode, FiLayout, FiSmartphone, FiDatabase, FiCheck } from 'react-icons/fi'

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Hakkımda</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Müşterilerimin ihtiyaçlarına özel çözümler sunan bir yazılım geliştiriciyim.
            Temiz kod yazmaya özen gösteriyor ve projelerin başarısı için teknik becerileri ve yaratıcılığı bir araya getiriyorum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Sol Taraf - Görselli kısım */}
          <div className="space-y-6">
            <div className="relative">
              {/* Ana bilgiler */}
              <div className="bg-white p-8 rounded-lg shadow-lg relative z-10">
                <h3 className="text-2xl font-bold mb-4">Sezer <span className="text-primary">Kimim?</span></h3>
                <p className="text-gray-600 mb-6">
                  Freelance yazılım geliştirici olarak oyun geliştirme, görüntü işleme, yapay zeka ve uygulama geliştirme alanlarında hizmet veriyorum. 
                  Projeleri tasarım aşamasından teslim edilene kadar tüm süreçlerde müşterilerimle yakın iletişim içinde çalışıyorum.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FiCheck className="text-primary mt-1 mr-2" />
                    <span>Modern ve temiz kod</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-primary mt-1 mr-2" />
                    <span>Optimize edilmiş uygulamalar</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-primary mt-1 mr-2" />
                    <span>Kullanıcı deneyimine odaklı tasarım</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-primary mt-1 mr-2" />
                    <span>Alanında yenilikçi çözümler</span>
                  </li>
                </ul>
              </div>

              {/* Arkaplan deseni - dekoratif */}
              <div className="absolute top-4 right-4 w-full h-full bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg -z-10"></div>
            </div>

            {/* İletişim bilgileri */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">İletişim Bilgileri</h3>
              <div className="space-y-3">
                <p className="flex items-center">
                  <span className="font-semibold mr-2">E-posta:</span>
                  <a href="mailto:sezerfurkandev@gmail.com" className="hover:underline">sezerfurkandev@gmail.com</a>
                </p>
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Konum:</span>
                  <span>İstanbul, Türkiye</span>
                </p>
              </div>
            </div>
          </div>

          {/* Sağ Taraf - Hizmetler */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Sunduğum <span className="text-primary">Hizmetler</span></h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-primary/20 transition-all">
                <div className="text-primary text-3xl mb-4">
                  <FiCode />
                </div>
                <h4 className="text-xl font-bold mb-2">Oyun Geliştirme</h4>
                <p className="text-gray-600">
                  Unity ve Unreal Engine ile 2D/3D oyunlar geliştiriyorum.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-primary/20 transition-all">
                <div className="text-primary text-3xl mb-4">
                  <FiSmartphone />
                </div>
                <h4 className="text-xl font-bold mb-2">Mobil Uygulama</h4>
                <p className="text-gray-600">
                  iOS ve Android platformları için kullanıcı dostu mobil uygulamalar.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-primary/20 transition-all">
                <div className="text-primary text-3xl mb-4">
                  <FiLayout />
                </div>
                <h4 className="text-xl font-bold mb-2">Görüntü İşleme</h4>
                <p className="text-gray-600">
                  OpenCV ve yapay zeka teknolojileri ile görüntü işleme çözümleri.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-primary/20 transition-all">
                <div className="text-primary text-3xl mb-4">
                  <FiDatabase />
                </div>
                <h4 className="text-xl font-bold mb-2">Yapay Zeka</h4>
                <p className="text-gray-600">
                  TensorFlow ve PyTorch ile makine öğrenmesi modelleri ve uygulamaları.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 