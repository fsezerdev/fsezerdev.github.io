import React from 'react'
import { FiMapPin, FiMail } from 'react-icons/fi'

const Contact = () => {
  return (
    <section id="contact" className="section bg-light">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">İletişime Geçin</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Freelance projeniz, iş birliği teklifiniz veya sorularınız için Bionluk üzerinden 
            benimle iletişime geçebilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* İletişim Bilgileri */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <FiMail className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Bionluk</h3>
                  <p className="text-gray-600">@fsezer</p>
                  <a 
                    href="https://bionluk.com/fsezer" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary text-sm mt-1 inline-block hover:underline"
                  >
                    Bionluk Profilimi Ziyaret Et
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <FiMapPin className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Konum</h3>
                  <p className="text-gray-600">İstanbul, Türkiye</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Uzaktan çalışma ve gerektiğinde yerinde toplantı
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bionluk CTA */}
          <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-lg shadow-md">
            <h3 className="font-bold text-2xl mb-4">Proje mi Görüşmek İstiyorsunuz?</h3>
            <p className="mb-6 text-lg">
              Oyun geliştirme, görüntü işleme, yapay zeka veya uygulama geliştirme projeleriniz için Bionluk üzerinden iletişime geçin. 
              Fikirlerinizi hayata geçirelim!
            </p>
            <a 
              href="https://bionluk.com/fsezer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition-colors text-lg"
            >
              Bionluk'ta Mesaj Gönder
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 