import React, { useState } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "E-Ticaret Sitesi",
      description: "Modern ve kullanıcı dostu bir e-ticaret platformu. Sipariş yönetimi, ürün kataloğu ve ödeme entegrasyonları içerir.",
      image: "/projects/ecommerce.jpg",
      tags: ["web", "frontend", "backend"],
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "https://example-ecommerce.com",
      githubLink: "https://github.com/fsezerdev/ecommerce"
    },
    {
      id: 2,
      title: "Emlak Portföy Uygulaması",
      description: "Emlak ofisleri için geliştirilen portföy yönetim sistemi. İlan yönetimi, müşteri takibi ve raporlama özellikleri sunar.",
      image: "/projects/realestate.jpg",
      tags: ["web", "frontend", "fullstack"],
      technologies: ["Vue.js", "Firebase", "Google Maps API"],
      liveLink: "https://example-realestate.com",
      githubLink: "https://github.com/fsezerdev/realestate"
    },
    {
      id: 3,
      title: "Fitness Takip Uygulaması",
      description: "Kullanıcıların egzersiz programlarını ve beslenme alışkanlıklarını takip edebilecekleri mobil uygulama.",
      image: "/projects/fitness.jpg",
      tags: ["mobile", "frontend"],
      technologies: ["React Native", "Redux", "Firebase"],
      liveLink: "https://example-fitness.com",
      githubLink: "https://github.com/fsezerdev/fitness-app"
    },
    {
      id: 4,
      title: "Kurumsal İntranet Çözümü",
      description: "Şirketler için özel intranet sistemi. Döküman yönetimi, görev takibi ve iletişim araçları içerir.",
      image: "/projects/intranet.jpg",
      tags: ["web", "backend", "fullstack"],
      technologies: ["Next.js", "MongoDB", "Socket.io", "AWS"],
      liveLink: "https://example-intranet.com",
      githubLink: "https://github.com/fsezerdev/intranet"
    },
    {
      id: 5,
      title: "Etkinlik Yönetim Platformu",
      description: "Etkinlik organizatörleri için bilet satışı, katılımcı yönetimi ve etkinlik programı oluşturma aracı.",
      image: "/projects/events.jpg",
      tags: ["web", "fullstack"],
      technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
      liveLink: "https://example-events.com",
      githubLink: "https://github.com/fsezerdev/event-platform"
    },
    {
      id: 6,
      title: "Blog & İçerik Yönetim Sistemi",
      description: "İçerik oluşturucular için özelleştirilebilir blog ve içerik yönetim sistemi.",
      image: "/projects/blog.jpg",
      tags: ["web", "frontend", "cms"],
      technologies: ["Gatsby", "GraphQL", "Netlify CMS"],
      liveLink: "https://example-blog.com",
      githubLink: "https://github.com/fsezerdev/blog-cms"
    }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter))

  return (
    <section id="projects" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projelerim</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Freelance çalışmalarım ve kişisel projelerimden oluşan portföyüm. Her proje benzersiz 
            ihtiyaçlara çözüm sunmak için titizlikle geliştirilmiştir.
          </p>
        </div>

        {/* Filtre Butonları */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'all' 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Tümü
          </button>
          <button 
            onClick={() => setFilter('web')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'web' 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Web
          </button>
          <button 
            onClick={() => setFilter('mobile')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'mobile' 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Mobil
          </button>
          <button 
            onClick={() => setFilter('frontend')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'frontend' 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Frontend
          </button>
          <button 
            onClick={() => setFilter('backend')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'backend' 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Backend
          </button>
          <button 
            onClick={() => setFilter('fullstack')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'fullstack' 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Fullstack
          </button>
        </div>

        {/* Proje Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card group">
              <div className="relative overflow-hidden bg-gray-100 h-56">
                {/* Proje resmi yerine gradient kullanıyoruz şimdilik */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{project.title.split(' ')[0]}</h3>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-dark p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  )}
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-dark p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                    >
                      <FiGithub size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="inline-block text-xs font-medium bg-gray-100 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="inline-block text-xs font-medium text-primary"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Daha fazla proje CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Daha fazla projemi incelemek ve iş birliği yapmak için benimle iletişime geçin.
          </p>
          <a 
            href="https://github.com/fsezerdev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline inline-flex items-center gap-2"
          >
            GitHub Profilim <FiGithub />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects 