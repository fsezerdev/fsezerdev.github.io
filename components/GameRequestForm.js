import React, { useState } from 'react'
import { FiCheck, FiAlertCircle, FiSend, FiDollarSign, FiCalendar, FiUsers, FiMonitor, FiTarget, FiLayers, FiStar, FiCpu, FiFeather } from 'react-icons/fi'
import { FaGamepad } from 'react-icons/fa'

const GameRequestForm = () => {
  // Form durumunu takip etmek için state
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  // Form alanları için state
  const [formData, setFormData] = useState({
    gameTitle: '',
    gameType: '',
    platforms: [],
    budget: '',
    timeline: '',
    targetAudience: '',
    gameDescription: '',
    gameplayDescription: '',
    visualStyle: '',
    soundMusic: '',
    mainCharacters: '',
    mainMechanics: '',
    levelDesign: '',
    monetization: '',
    references: '',
    additionalFeatures: '',
    bionlukUsername: '',
    isMultiplayer: 'false', // Çok oyunculu seçeneği
    multiplayerType: '', // Çok oyunculu oyun türü
    maxPlayers: '', // Maksimum oyuncu sayısı
    serverInfrastructure: '', // Sunucu altyapısı
    networkFeatures: '', // Ağ özellikleri
    multiplayerModes: [], // Çok oyunculu modlar
    socialFeatures: '' // Sosyal özellikler
  });

  // Input değişikliklerini takip eden fonksiyon
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Çoklu seçim için checkbox işleyicisi
  const handlePlatformChange = (e) => {
    const { value, checked } = e.target;
    
    if (checked) {
      setFormData(prevData => ({
        ...prevData,
        platforms: [...prevData.platforms, value]
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        platforms: prevData.platforms.filter(platform => platform !== value)
      }));
    }
  };

  // Form gönderimi
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form doğrulama
    if (!formData.gameTitle || !formData.gameDescription || !formData.bionlukUsername) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Lütfen zorunlu alanları doldurun.'
      });
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xrbenyqn", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: new FormData(e.target)
      });

      if (response.ok) {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Oyun talebiniz başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğim.'
        });

        // Form alanlarını sıfırla
        setFormData({
          gameTitle: '',
          gameType: '',
          platforms: [],
          budget: '',
          timeline: '',
          targetAudience: '',
          gameDescription: '',
          gameplayDescription: '',
          visualStyle: '',
          soundMusic: '',
          mainCharacters: '',
          mainMechanics: '',
          levelDesign: '',
          monetization: '',
          references: '',
          additionalFeatures: '',
          bionlukUsername: '',
          isMultiplayer: 'false',
          multiplayerType: '',
          maxPlayers: '',
          serverInfrastructure: '',
          networkFeatures: '',
          multiplayerModes: [],
          socialFeatures: ''
        });
      } else {
        throw new Error('Form gönderimi başarısız oldu.');
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.'
      });
    }
  };

  // Oyun türleri
  const gameTypes = [
    'Platform Oyunu',
    'Aksiyon/Macera',
    'Bulmaca',
    'RPG',
    'Strateji',
    'Simülasyon',
    'Yarış',
    'Eğitim',
    'Hyper-Casual',
    'Arcade',
    'Beat\'em up',
    'Card Battler',
    'Endless Runner',
    'Fighting',
    'Idle Game',
    'Interactive Fiction',
    'Metroidvania',
    'Roguelike/Roguelite',
    'Shooter',
    'Stealth',
    'Tower Defense',
    'Diğer'
  ];

  // Platformlar
  const platforms = [
    'Android',
    'iOS',
    'Windows',
    'Linux',
  ];
  
  // Hedef kitle
  const audiences = [
    'Çocuklar (3-12)',
    'Gençler (13-18)',
    'Yetişkinler (18+)',
    'Tüm Yaş Grupları',
    'Hardcore Oyuncular',
    'Casual Oyuncular'
  ];
  
  // Görsel stiller
  const visualStyles = [
    'Pixel Art',
    'Karikatür/Cartoon',
    'Minimalist',
    'El Çizimi',
    'Realistik',
    'Low Poly',
    'Stylized 3D',
    'Anime/Manga',
    'Vektörel',
    'Diğer'
  ];
  
  // Monetizasyon modelleri
  const monetizationModels = [
    'Tek Seferlik Ödeme',
    'Ücretsiz (Reklam Destekli)',
    'Freemium (Temel Ücretsiz + Premium İçerik)',
    'Abonelik Modeli',
    'Oyun İçi Satın Alımlar',
    'Tamamen Ücretsiz',
    'Diğer'
  ];

  // Çok oyunculu mod seçenekleri
  const multiplayerTypes = [
    'PvP (Oyuncu vs Oyuncu)',
    'Co-op (İş Birlikli)',
    'Team-Based (Takım Tabanlı)',
    'Diğer'
  ];

  // Sunucu altyapı seçenekleri
  const serverTypes = [
    'Dedicated Servers (Özel Sunucular)',
    'Peer-to-Peer (Eşler Arası)',
    'Belirli değil / Önerinize açığım'
  ];

  // Çok oyunculu oyun modları
  const multiplayerModes = [
    'Rekabetçi Mod',
    'Arkadaş Oyunu',
    'Özel Odalar',
    'Sıralama Tablosu',
    'Turnuva Sistemi',
    'Sezonluk Etkinlikler',
    'Cross-Platform (Platformlar Arası)',
    'Eşleştirme Sistemi',
    'Diğer'
  ];

  // Anti-hile seçenekleri
  const antiCheatOptions = [
    'Temel Güvenlik',
    'Gelişmiş Anti-Hile Sistemi',
    'Üçüncü Parti Çözüm',
    'Özel Geliştirme',
    'Belirli değil / Önerinize açığım',
    'Gerekli değil'
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex items-center mb-6">
        <FaGamepad className="text-primary text-3xl mr-3" />
        <h2 className="text-2xl font-bold">2D Oyun <span className="text-primary">Talep Formu</span></h2>
      </div>
      
      <p className="text-gray-600 mb-8">
        2D oyun projenizi hayata geçirmek için aşağıdaki ayrıntılı formu doldurarak oyununuzun GDD (Game Design Document) taslağını oluşturun. 
        Ne kadar detay sağlarsanız, geliştirme süreci o kadar verimli olacaktır.
      </p>
      
      <form 
        onSubmit={handleSubmit}
        action="https://formspree.io/f/xrbenyqn"
        method="POST"
        className="space-y-6"
        encType="multipart/form-data"
      >
        {/* FormSpree için gerekli hidden input'lar */}
        <input type="hidden" name="_subject" value="2D Oyun Talebi (GDD)" />
        <input type="hidden" name="_next" value="https://fsezerdev.github.io/thanks" />
        {/* Form içeriği */}
        {/* 1. Temel Bilgiler */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
          <h3 className="text-lg font-bold mb-4 flex items-center">
            <FiMonitor className="text-primary mr-2" /> Temel Oyun Bilgileri
          </h3>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="gameTitle" className="block mb-1 font-medium">
                Oyun Adı / Proje Başlığı <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="gameTitle"
                name="gameTitle"
                value={formData.gameTitle}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Oyununuzun adı veya proje başlığı"
                required
              />
            </div>
            
            <div>
              <label htmlFor="gameType" className="block mb-1 font-medium">
                Oyun Türü
              </label>
              <select
                id="gameType"
                name="gameType"
                value={formData.gameType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Seçiniz</option>
                {gameTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block mb-1 font-medium">
                Hedeflenen Platform(lar) (Birden fazla seçebilirsiniz)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {platforms.map((platform, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`platform-${index}`}
                      name="platforms"
                      value={platform}
                      checked={formData.platforms.includes(platform)}
                      onChange={handlePlatformChange}
                      className="mr-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor={`platform-${index}`}>{platform}</label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <label htmlFor="targetAudience" className="block mb-1 font-medium">
                Hedef Kitle
              </label>
              <select
                id="targetAudience"
                name="targetAudience"
                value={formData.targetAudience}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Seçiniz</option>
                {audiences.map((audience, index) => (
                  <option key={index} value={audience}>{audience}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="gameDescription" className="block mb-1 font-medium">
                Oyun Açıklaması <span className="text-red-500">*</span>
              </label>
              <textarea
                id="gameDescription"
                name="gameDescription"
                value={formData.gameDescription}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Oyununuzun genel bir açıklaması, ana fikri ve hikayesi"
                required
              ></textarea>
            </div>
          </div>
        </div>
        
        {/* 2. Oynanış ve Mekanikler */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
          <h3 className="text-lg font-bold mb-4 flex items-center">
            <FiCpu className="text-primary mr-2" /> Oynanış ve Mekanikler
          </h3>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="gameplayDescription" className="block mb-1 font-medium">
                Oynanış Detayları
              </label>
              <textarea
                id="gameplayDescription"
                name="gameplayDescription"
                value={formData.gameplayDescription}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Oyuncunun neler yapacağı, oynanış döngüsü, kullanıcı etkileşimleri"
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="mainMechanics" className="block mb-1 font-medium">
                Ana Mekanikler
              </label>
              <textarea
                id="mainMechanics"
                name="mainMechanics"
                value={formData.mainMechanics}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Oyundaki temel mekanikler (zıplama, ateş etme, yetenek sistemi, vb.)"
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="mainCharacters" className="block mb-1 font-medium">
                Ana Karakterler ve Düşmanlar
              </label>
              <textarea
                id="mainCharacters"
                name="mainCharacters"
                value={formData.mainCharacters}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Oyuncu karakterinin ve düşmanların özellikleri, yetenekleri, hikayedeki rolleri"
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="levelDesign" className="block mb-1 font-medium">
                Seviye Tasarımı / Dünya
              </label>
              <textarea
                id="levelDesign"
                name="levelDesign"
                value={formData.levelDesign}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Seviyelerin nasıl yapılandırılacağı, dünya tasarımı, zorluk eğrisi"
              ></textarea>
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Çok Oyunculu Oyun
              </label>
              <div className="flex items-center space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="isMultiplayer"
                    value="true"
                    checked={formData.isMultiplayer === 'true'}
                    onChange={handleChange}
                    className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                  />
                  <span className="ml-2">Evet</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="isMultiplayer"
                    value="false"
                    checked={formData.isMultiplayer === 'false'}
                    onChange={handleChange}
                    className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                  />
                  <span className="ml-2">Hayır</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        
        {/* Çok Oyunculu Oyun Detayları - Koşullu Render */}
        {formData.isMultiplayer === 'true' && (
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <FiUsers className="text-primary mr-2" /> Çok Oyunculu Oyun Detayları
            </h3>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="multiplayerType" className="block mb-1 font-medium">
                  Çok Oyunculu Oyun Türü
                </label>
                <select
                  id="multiplayerType"
                  name="multiplayerType"
                  value={formData.multiplayerType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Seçiniz</option>
                  {multiplayerTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="maxPlayers" className="block mb-1 font-medium">
                  Maksimum Oyuncu Sayısı
                </label>
                <input
                  type="number"
                  id="maxPlayers"
                  name="maxPlayers"
                  value={formData.maxPlayers}
                  onChange={handleChange}
                  min="2"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Örn: 2, 4, 8, 16, 100"
                />
              </div>

              <div>
                <label htmlFor="serverInfrastructure" className="block mb-1 font-medium">
                  Sunucu Altyapısı
                </label>
                <select
                  id="serverInfrastructure"
                  name="serverInfrastructure"
                  value={formData.serverInfrastructure}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Seçiniz</option>
                  {serverTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Çok Oyunculu Modlar (Birden fazla seçebilirsiniz)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {multiplayerModes.map((mode, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`mode-${index}`}
                        name="multiplayerModes"
                        value={mode}
                        checked={formData.multiplayerModes.includes(mode)}
                        onChange={(e) => {
                          const { value, checked } = e.target;
                          setFormData(prev => ({
                            ...prev,
                            multiplayerModes: checked
                              ? [...prev.multiplayerModes, value]
                              : prev.multiplayerModes.filter(m => m !== value)
                          }));
                        }}
                        className="mr-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor={`mode-${index}`}>{mode}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="socialFeatures" className="block mb-1 font-medium">
                  Sosyal Özellikler
                </label>
                <textarea
                  id="socialFeatures"
                  name="socialFeatures"
                  value={formData.socialFeatures}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Arkadaş sistemi, sohbet, klan/guild sistemi, sosyal medya entegrasyonu vb."
                ></textarea>
              </div>
            </div>
          </div>
        )}
        
        {/* 3. Sanat ve Ses */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
          <h3 className="text-lg font-bold mb-4 flex items-center">
            <FiFeather className="text-primary mr-2" /> Sanat ve Ses Tasarımı
          </h3>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="visualStyle" className="block mb-1 font-medium">
                Görsel Stil / Sanat Yönü
              </label>
              <select
                id="visualStyle"
                name="visualStyle"
                value={formData.visualStyle}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Seçiniz</option>
                {visualStyles.map((style, index) => (
                  <option key={index} value={style}>{style}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="soundMusic" className="block mb-1 font-medium">
                Ses ve Müzik Tercihleri
              </label>
              <textarea
                id="soundMusic"
                name="soundMusic"
                value={formData.soundMusic}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Müzik türü, ses efektleri, atmosfer için özel ses gereksinimleri"
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="references" className="block mb-1 font-medium">
                Referans Oyunlar / İlham Kaynakları
              </label>
              <textarea
                id="references"
                name="references"
                value={formData.references}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Benzer oyunlar, ilham aldığınız projeler veya görsel stilleri"
              ></textarea>
            </div>
          </div>
        </div>
        
        {/* 4. İş ve İletişim */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
          <h3 className="text-lg font-bold mb-4 flex items-center">
            <FiDollarSign className="text-primary mr-2" /> İş Detayları ve İletişim
          </h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="budget" className="block mb-1 font-medium">
                  Yaklaşık Bütçe Aralığı
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Seçiniz</option>
                  <option value="0-5000 TL">0-5000 TL</option>
                  <option value="5000-10000 TL">5000-10000 TL</option>
                  <option value="10000-20000 TL">10000-20000 TL</option>
                  <option value="20000-50000 TL">20000-50000 TL</option>
                  <option value="50000+ TL">50000+ TL</option>
                  <option value="Belirli değil">Belirli değil / Görüşmek istiyorum</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="timeline" className="block mb-1 font-medium">
                  Hedeflenen Tamamlanma Süresi
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Seçiniz</option>
                  <option value="1 ay içinde">1 ay içinde</option>
                  <option value="1-3 ay">1-3 ay</option>
                  <option value="3-6 ay">3-6 ay</option>
                  <option value="6 ay+">6 ay+</option>
                  <option value="Belirli değil">Belirli değil / Görüşmek istiyorum</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="monetization" className="block mb-1 font-medium">
                Monetizasyon / Gelir Modeli
              </label>
              <select
                id="monetization"
                name="monetization"
                value={formData.monetization}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Seçiniz</option>
                {monetizationModels.map((model, index) => (
                  <option key={index} value={model}>{model}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="additionalFeatures" className="block mb-1 font-medium">
                Ek Özellikler / İstekler
              </label>
              <textarea
                id="additionalFeatures"
                name="additionalFeatures"
                value={formData.additionalFeatures}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Eklemek istediğiniz diğer özellikler, özel istekler veya açıklamalar"
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="bionlukUsername" className="block mb-1 font-medium">
                Bionluk.com Kullanıcı Adınız <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="bionlukUsername"
                name="bionlukUsername"
                value={formData.bionlukUsername}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="bionluk.com kullanıcı adınızı giriniz"
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                Sizinle iletişim kurmak için sadece bionluk.com üzerinden mesajlaşma kullanılacaktır.
              </p>
            </div>
          </div>
        </div>
        
        {/* Submit button and status message */}
        <div className="space-y-4">
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center"
          >
            <FiSend className="mr-2" />
            Talebi Gönder
          </button>

          {formStatus.submitted && (
            <div 
              className={`p-4 rounded-lg flex items-center ${
                formStatus.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
              }`}
            >
              {formStatus.success ? (
                <FiCheck className="mr-2 flex-shrink-0" />
              ) : (
                <FiAlertCircle className="mr-2 flex-shrink-0" />
              )}
              <p>{formStatus.message}</p>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default GameRequestForm 