import React from 'react'

const Skills = () => {
  const gameDevSkills = [
    { name: "Unity" },
    { name: "Unreal Engine" },
    { name: "C#" },
    { name: "C++" },
    { name: "3D Modelleme" },
    { name: "Oyun Fiziği" },
    { name: "Game Design" },
  ]

  const aiAndImageSkills = [
    { name: "Python" },
    { name: "TensorFlow" },
    { name: "PyTorch" },
    { name: "OpenCV" },
    { name: "Derin Öğrenme" },
    { name: "Görüntü İşleme" },
    { name: "Makine Öğrenmesi" },
  ]

  const appDevSkills = [
    { name: "Flutter" },
    { name: "React Native" },
    { name: "Java/Kotlin" },
    { name: "Swift" },
    { name: "Electron" },
    { name: "C# WPF/WinForms" },
    { name: "Qt Framework" },
  ]

  return (
    <section id="skills" className="section bg-light">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Yeteneklerim</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Freelance projelerimde kullandığım teknolojiler ve becerilerim. Sürekli kendimi geliştirerek
            yeni teknolojileri öğrenmeye ve uygulamaya odaklanıyorum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Oyun Geliştirme Yetenekleri */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-primary text-2xl font-bold mb-6">Oyun Geliştirme</div>
            <div className="space-y-4">
              {gameDevSkills.map((skill, index) => (
                <div key={index} className="bg-gray-100 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors">
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Yapay Zeka ve Görüntü İşleme */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-secondary text-2xl font-bold mb-6">Yapay Zeka & Görüntü İşleme</div>
            <div className="space-y-4">
              {aiAndImageSkills.map((skill, index) => (
                <div key={index} className="bg-gray-100 px-4 py-3 rounded-lg hover:bg-secondary/10 transition-colors">
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobil ve Masaüstü Uygulama Geliştirme */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow lg:col-span-1 md:col-span-2 lg:col-start-3 lg:row-start-1">
            <div className="text-dark text-2xl font-bold mb-6">Mobil & Masaüstü Uygulama</div>
            <div className="space-y-4">
              {appDevSkills.map((skill, index) => (
                <div key={index} className="bg-gray-100 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Yetenekler hakkında ek bilgi */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6">Çalışma <span className="text-primary">Yaklaşımım</span></h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:border-primary/50 transition-colors">
              <h4 className="text-lg font-bold mb-3">Modern Teknolojiler</h4>
              <p className="text-gray-600">
                Projelerimde son teknolojileri kullanarak hızlı, güvenli ve ölçeklenebilir çözümler geliştiriyorum.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:border-primary/50 transition-colors">
              <h4 className="text-lg font-bold mb-3">Temiz Kod</h4>
              <p className="text-gray-600">
                Bakımı kolay, okunabilir ve sürdürülebilir kod yazmaya özen gösteriyorum.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:border-primary/50 transition-colors">
              <h4 className="text-lg font-bold mb-3">Detaylı Planlama</h4>
              <p className="text-gray-600">
                Her projeye başlamadan önce detaylı analiz ve planlama yaparak süreçleri yönetiyorum.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:border-primary/50 transition-colors">
              <h4 className="text-lg font-bold mb-3">Kullanıcı Odaklı</h4>
              <p className="text-gray-600">
                Geliştirdiğim uygulamalarda kullanıcı deneyimini ön planda tutuyorum.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:border-primary/50 transition-colors">
              <h4 className="text-lg font-bold mb-3">Performans Odaklı</h4>
              <p className="text-gray-600">
                Uygulamaların hızlı ve verimli çalışması için optimizasyon tekniklerini uyguluyorum.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:border-primary/50 transition-colors">
              <h4 className="text-lg font-bold mb-3">Sürekli Öğrenme</h4>
              <p className="text-gray-600">
                Teknoloji dünyasındaki yenilikleri takip ederek kendimi sürekli geliştiriyorum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 