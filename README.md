# 🌤️ Modern Weather App

<div align="center">

![Weather App Logo](./assets/Weather-logo-transparent.png)

**Türkiye'nin en modern ve kullanışlı hava durumu uygulaması** ⚡

[![Next.js](https://img.shields.io/badge/Next.js-15.3.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![OpenWeatherMap](https://img.shields.io/badge/OpenWeatherMap-API-orange?style=for-the-badge)](https://openweathermap.org/)

[🚀 Demo'yu Dene](#) • [📋 Docs](./app/docs) • [🐛 Bug Bildir](#) • [💡 Özellik İste](#)

</div>

---

## 🎯 Öne Çıkan Özellikler

<div align="center">

### 🏆 **Profesyonel Tasarım & Modern UI**
Koyu tema, glass morphism efektleri ve responsive tasarım ile mükemmel kullanıcı deneyimi

### 🌍 **Gerçek Zamanlı Hava Durumu**
OpenWeatherMap API ile anlık, güvenilir ve doğru hava durumu verileri

### 📱 **Tam Responsive**
Masaüstü, tablet ve mobil cihazlarda kusursuz görünüm

</div>

---

## 🎨 Uygulama Önizleme

<div align="center">

| Ana Sayfa | Dokümantasyon |
|:---------:|:-------------:|
| ![Ana Sayfa](./assets/preview-home.png) | ![Docs](./assets/preview-docs.png) |

</div>

---

## ⚡ Hızlı Başlangıç

### 📋 Gereksinimler

- Node.js 18+ 🟢
- npm, yarn, pnpm veya bun 📦
- OpenWeatherMap API Key 🔑

### 🚀 Kurulum

```bash
# Projeyi klonla
git clone https://github.com/egeaydn/Weather-App.git

# Proje dizinine git
cd Weather-App

# Bağımlılıkları yükle
npm install
# veya
yarn install
# veya
pnpm install
```

### 🔧 Yapılandırma

1. **API Key Ayarla:**
   ```bash
   # .env.local dosyası oluştur
   NEXT_PUBLIC_WEATHER_API_KEY=your_openweathermap_api_key
   ```

2. **Geliştirme Sunucusunu Başlat:**
   ```bash
   npm run dev
   ```

3. **Tarayıcıda Aç:**
   ```
   http://localhost:3000
   ```

---

## 🛠️ Teknoloji Yığını

<div align="center">

| Frontend | Styling | API | Development |
|:--------:|:-------:|:---:|:-----------:|
| ![Next.js](https://img.shields.io/badge/Next.js-15.3.1-black?style=flat-square&logo=next.js) | ![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css) | ![OpenWeather](https://img.shields.io/badge/OpenWeatherMap-API-orange?style=flat-square) | ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript) |
| ![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react) | ![HeroUI](https://img.shields.io/badge/HeroUI-v2-9333EA?style=flat-square) | ![REST](https://img.shields.io/badge/REST-API-green?style=flat-square) | ![ESLint](https://img.shields.io/badge/ESLint-8.0-4B32C3?style=flat-square&logo=eslint) |

</div>

### 🎯 **Core Technologies:**
- **⚛️ React 18** - Modern React hooks ve Suspense
- **▲ Next.js 15** - App Router, Server Components, Turbopack
- **🔷 TypeScript** - Tip güvenliği ve geliştirici deneyimi
- **🎨 Tailwind CSS** - Utility-first CSS framework
- **🌟 HeroUI** - Modern React component library

### 🌐 **API & Data:**
- **🌤️ OpenWeatherMap API** - Güncel hava durumu verileri
- **📊 5-Day Forecast** - Haftalık hava durumu tahminleri
- **🇹🇷 Turkish Cities** - 15+ Türk şehri desteği

---

## 📊 Uygulama Özellikleri

### 🌡️ **Hava Durumu Verileri**
- ✅ Anlık sıcaklık ve hissedilen sıcaklık
- ✅ Nem oranı ve atmosfer basıncı
- ✅ Rüzgar hızı ve yönü
- ✅ Görüş mesafesi
- ✅ UV indeksi
- ✅ Gün doğumu ve batım saatleri

### 📈 **Tahmin Özellikleri**
- 🗓️ 7 günlük detaylı tahmin
- 📊 Maksimum ve minimum sıcaklıklar
- 🌦️ Hava durumu ikonu ve açıklaması
- 📅 Günlük hava durumu özeti

### 🏙️ **Şehir Yönetimi**
- 🔍 Akıllı şehir arama
- 🇹🇷 Türkiye'nin popüler şehirleri
- ⚡ Hızlı şehir seçim butonları
- 📍 Lokasyon bazlı hava durumu

### 🎨 **UI/UX Özellikleri**
- 🌙 Koyu tema (Dark Mode)
- 💎 Glass morphism efektleri
- 📱 Tam responsive tasarım
- ⚡ Smooth animasyonlar
- 🎯 Kullanıcı dostu arayüz

---

## 📁 Proje Yapısı

```
Weather-App/
├── 📂 app/                    # Next.js App Router
│   ├── 📄 page.tsx           # Ana sayfa
│   ├── 📄 layout.tsx         # Root layout
│   ├── 📄 providers.tsx      # Context providers
│   └── 📂 docs/              # Dokümantasyon
│       ├── 📄 page.tsx       # Docs sayfası
│       └── 📄 layout.tsx     # Docs layout
├── 📂 components/            # React bileşenleri
│   ├── 📄 navbar.tsx         # Navigation bar
│   ├── 📄 theme-switch.tsx   # Tema değiştirici
│   └── 📄 icons.tsx          # SVG ikonları
├── 📂 config/                # Yapılandırma dosyaları
│   ├── 📄 site.ts            # Site konfigürasyonu
│   └── 📄 fonts.ts           # Font ayarları
├── 📂 assets/                # Statik dosyalar
│   └── 🖼️ *.png              # Logo ve görseller
├── 📂 public/                # Public assets
├── 📂 styles/                # Global stiller
└── 📂 types/                 # TypeScript tip tanımları
```

---

## 🔧 Geliştirme Komutları

```bash
# Geliştirme sunucusu
npm run dev

# Production build
npm run build

# Production'ı başlat
npm run start

# Linting
npm run lint

# Type checking
npm run type-check
```

---

## 🌍 Desteklenen Şehirler

<div align="center">

| Marmara | Ege | Akdeniz | İç Anadolu | Karadeniz |
|:-------:|:---:|:-------:|:----------:|:---------:|
| 🏙️ İstanbul | 🌊 İzmir | ☀️ Antalya | 🏛️ Ankara | 🌲 Trabzon |
| 🏭 Bursa | 🌸 Denizli | 🌴 Mersin | 🏺 Konya | ⚓ Samsun |
| | | 🌶️ Adana | 🏔️ Kayseri | |
| | | | 🥙 Gaziantep | |
| | | | 🦃 Diyarbakır | |
| | | | 🎓 Eskişehir | |

</div>

---

## 📱 API Dokümantasyonu

### 🔗 Endpoints

```typescript
// Güncel hava durumu
GET /data/2.5/weather?q={city},TR&appid={API_KEY}&units=metric&lang=tr

// 5 günlük tahmin
GET /data/2.5/forecast?q={city},TR&appid={API_KEY}&units=metric&lang=tr
```

### 📊 Response Örneği

```json
{
  "name": "İstanbul",
  "main": {
    "temp": 22.5,
    "feels_like": 23.1,
    "humidity": 65,
    "pressure": 1013
  },
  "weather": [{
    "main": "Clear",
    "description": "açık",
    "icon": "01d"
  }],
  "wind": {
    "speed": 3.6,
    "deg": 210
  }
}
```

---

## 🤝 Katkıda Bulunma

Projeye katkıda bulunmak isterseniz:

1. 🍴 **Fork** edin
2. 🌿 **Feature branch** oluşturun (`git checkout -b feature/amazing-feature`)
3. 💾 **Commit** yapın (`git commit -m 'Add amazing feature'`)
4. 📤 **Push** edin (`git push origin feature/amazing-feature`)
5. 🔄 **Pull Request** açın

---

## 📞 İletişim & Destek

<div align="center">

| 📧 Email | 🐛 Issues | 💬 Discussions |
|:--------:|:---------:|:--------------:|
| [egeaydin@ogr.iu.edu.tr](#) | [GitHub Issues](#) | [GitHub Discussions](#) |

### 🌟 **Projeyi Beğendiniz Mi?**
⭐ **Star** vererek destekleyebilirsiniz!

</div>

---

## 📄 Lisans

Bu proje **MIT Lisansı** altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakınız.

---

## 🎉 Teşekkürler

- 🌤️ **OpenWeatherMap** - Güvenilir hava durumu verileri için
- ⚛️ **Next.js Team** - Harika framework için
- 🎨 **Tailwind CSS** - Güzel styling araçları için
- 🌟 **HeroUI** - Modern component library için

---

<div align="center">

**⚡ Modern Weather App ile her zaman hazırlıklı olun! ⚡**

Made with ❤️ by [Ege Aydın](https://github.com/egeaydn)

</div>

## License

Licensed under the [MIT license](https://github.com/heroui-inc/next-app-template/blob/main/LICENSE).
