'use client';
import React from "react";
import { title } from "@/components/primitives";
import Image from "next/image";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900">
      {/* Full page background overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-slate-900 -z-10"></div>
      
      <div className="relative min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-8">
            <Image 
              src="/Weather-logo-transparent.png" 
              alt="Weather Logo" 
              width={150}
              height={40}
              priority
              className="drop-shadow-lg"
            />
            <div className="h-8 w-px bg-gray-600"></div>
            <h1 className="text-3xl font-bold text-white">Dokümantasyon</h1>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Overview */}
            <section className="bg-black/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Genel Bakış
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Modern Weather App, Türkiye'deki şehirler için güncel hava durumu bilgilerini sunan gelişmiş bir web uygulamasıdır. 
                OpenWeatherMap API kullanarak gerçek zamanlı hava durumu verileri, 7 günlük tahminler ve detaylı meteoroloji bilgileri sağlar.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/50">
                  <div className="text-blue-400 text-2xl font-bold">15+</div>
                  <div className="text-gray-400 text-sm">Türk Şehri</div>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/50">
                  <div className="text-green-400 text-2xl font-bold">7 Gün</div>
                  <div className="text-gray-400 text-sm">Hava Tahmini</div>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/50">
                  <div className="text-purple-400 text-2xl font-bold">Real-time</div>
                  <div className="text-gray-400 text-sm">Güncel Veri</div>
                </div>
              </div>
            </section>

            {/* Features */}
            <section className="bg-black/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Özellikler
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium">Güncel Hava Durumu</h3>
                      <p className="text-gray-400 text-sm">Sıcaklık, nem, rüzgar hızı ve hissedilen sıcaklık</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium">7 Günlük Tahmin</h3>
                      <p className="text-gray-400 text-sm">Haftalık hava durumu projeksiyonları</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium">Şehir Arama</h3>
                      <p className="text-gray-400 text-sm">Özel şehir arama ve hızlı seçim butonları</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium">UV İndeksi</h3>
                      <p className="text-gray-400 text-sm">Güneş ışığı yoğunluğu ve korunma önerileri</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium">Gün Doğumu & Batımı</h3>
                      <p className="text-gray-400 text-sm">Günlük güneş vakitleri</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium">Görüş Mesafesi</h3>
                      <p className="text-gray-400 text-sm">Atmosferik görüş koşulları</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* API Documentation */}
            <section className="bg-black/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                API Entegrasyonu
              </h2>
              <p className="text-gray-300 mb-4">
                Uygulama OpenWeatherMap API'sini kullanarak güncel hava durumu verilerini alır.
              </p>
              <div className="bg-gray-900/70 rounded-lg p-4 border border-gray-700/50">
                <h3 className="text-white font-medium mb-2">API Endpoints:</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">GET</span>
                    <code className="text-gray-300">api.openweathermap.org/data/2.5/weather</code>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">GET</span>
                    <code className="text-gray-300">api.openweathermap.org/data/2.5/forecast</code>
                  </div>
                </div>
              </div>
            </section>

            {/* Technical Stack */}
            <section className="bg-black/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                </svg>
                Teknoloji Yığını
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/50 text-center">
                  <div className="text-2xl mb-2">⚛️</div>
                  <h3 className="text-white font-medium text-sm">React 18</h3>
                  <p className="text-gray-400 text-xs">Frontend Framework</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/50 text-center">
                  <div className="text-2xl mb-2">🔷</div>
                  <h3 className="text-white font-medium text-sm">TypeScript</h3>
                  <p className="text-gray-400 text-xs">Type Safety</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/50 text-center">
                  <div className="text-2xl mb-2">▲</div>
                  <h3 className="text-white font-medium text-sm">Next.js 15</h3>
                  <p className="text-gray-400 text-xs">React Framework</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/50 text-center">
                  <div className="text-2xl mb-2">🎨</div>
                  <h3 className="text-white font-medium text-sm">Tailwind CSS</h3>
                  <p className="text-gray-400 text-xs">Styling</p>
                </div>
              </div>
            </section>

            {/* Usage Guide */}
            <section className="bg-black/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
                Kullanım Kılavuzu
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h3 className="text-white font-medium">1. Şehir Seçimi</h3>
                  <p className="text-gray-400 text-sm">Ana sayfadaki şehir butonlarından birini tıklayın veya arama kutusunu kullanın.</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <h3 className="text-white font-medium">2. Hava Durumu Görüntüleme</h3>
                  <p className="text-gray-400 text-sm">Seçilen şehir için güncel sıcaklık, nem, rüzgar ve diğer veriler otomatik yüklenir.</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h3 className="text-white font-medium">3. Tahmin İnceleme</h3>
                  <p className="text-gray-400 text-sm">7 günlük tahmin bölümünden gelecek günler için hava durumu projeksiyonlarını görün.</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h3 className="text-white font-medium">4. Detay Analizi</h3>
                  <p className="text-gray-400 text-sm">UV indeksi, görüş mesafesi ve gün doğumu/batımı gibi detaylı bilgileri inceleyin.</p>
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="text-center py-8">
              <p className="text-gray-400 text-sm">
                Weather App © 2025 - Powered by OpenWeatherMap API
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
