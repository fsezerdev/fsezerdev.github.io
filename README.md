# Freelance Yazılım Geliştirici Portfolyo Sitesi

Bu repo, freelance yazılım geliştirme hizmetleri sunan kişisel portfolyo sitemi içerir. Site, GitHub Pages üzerinde barındırılmaktadır.

## Özellikler

- Kişisel bilgiler ve yetenekler
- Tamamlanmış projeler portfolyosu
- Sunulan hizmetlerin detaylı açıklaması
- İletişim formu (FormSubmit ile entegre)
- Responsive tasarım

## Teknolojiler

- React.js
- Next.js
- Tailwind CSS
- FormSubmit

## Kurulum

Projeyi yerel olarak çalıştırmak için:

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

## GitHub Pages'de Yayınlama

GitHub Pages'e deploy etmek için aşağıdaki adımları izleyin:

1. Repository'i GitHub'a push edin
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Static export oluşturun
```bash
npm run build
```

3. GitHub Pages için ayarları yapılandırın:
   - GitHub'da reponuza gidin
   - "Settings" > "Pages" bölümüne gidin
   - Source olarak "GitHub Actions" seçin
   - Öneri edilen workflow'u kullanın veya aşağıdaki adımlarla özel bir workflow oluşturun

4. Özel bir workflow için, repo'nun kök dizininde `.github/workflows/deploy.yml` dosyası oluşturun ve içeriğini şu şekilde düzenleyin:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 16
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: out
          branch: gh-pages
```

5. FormSubmit Entegrasyonu:
   - Formu test etmek için, `components/Contact.js` dosyasındaki `action` URL'sindeki e-postayı kendi e-postanızla değiştirin.
   - FormSubmit servisine kaydolun ve kurulum talimatlarını izleyin.

## İletişim

İş teklifleri ve işbirlikleri için lütfen site üzerindeki iletişim formunu kullanın. 