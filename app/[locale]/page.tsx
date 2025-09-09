'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';

interface WeatherData {
  city: string;
  main?: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  weather?: {
    icon: string;
    description: string;
    main: string;
  }[];
  wind?: {
    speed: number;
    deg: number;
  };
  visibility?: number;
  sys?: {
    sunrise: number;
    sunset: number;
  };
  name?: string;
  cod?: number;
}

interface ForecastData {
  list: Array<{
    dt: number;
    main: {
      temp_max: number;
      temp_min: number;
    };
    weather: Array<{
      icon: string;
      description: string;
    }>;
    dt_txt: string;
  }>;
}

const API_KEY = "4829a94824a84f74b1ce56c06d1618f1";

export default function WeatherApp() {
  const t = useTranslations();
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchCity, setSearchCity] = useState("");
  const [currentCity, setCurrentCity] = useState("Istanbul");

  const fetchWeatherData = async (city: string) => {
    try {
      setLoading(true);
      setError(null);
      
      // Current weather
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},TR&appid=${API_KEY}&units=metric&lang=tr`
      );
      
      // 5-day forecast
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city},TR&appid=${API_KEY}&units=metric&lang=tr`
      );
      
      if (!weatherRes.ok || !forecastRes.ok) {
        throw new Error(t('weatherDataError'));
      }
      
      const weatherDataRes = await weatherRes.json();
      const forecastDataRes = await forecastRes.json();
      
      if (weatherDataRes.cod !== 200) {
        throw new Error(t('cityNotFound'));
      }
      
      setWeatherData({ city, ...weatherDataRes } as WeatherData);
      setForecastData(forecastDataRes);
      setCurrentCity(city);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError(`${city} ${t('weatherDataError')}`);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchCity.trim()) {
      fetchWeatherData(searchCity.trim());
      setSearchCity("");
    }
  };

  const formatTime = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleTimeString('tr-TR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getWeatherIcon = (iconCode: string) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  const getDayName = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('tr-TR', { weekday: 'long' });
  };

  const getUVIndex = () => Math.floor(Math.random() * 11) + 1;
  const getVisibility = () => weatherData?.visibility ? Math.round(weatherData.visibility / 1000) : 10;

  useEffect(() => {
    fetchWeatherData("Istanbul");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900">
      {/* Full page background overlay to ensure coverage */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-slate-900 -z-10"></div>
      
      <div className="relative min-h-screen p-4 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Sidebar */}
          <div className="fixed left-4 top-4 bottom-4 w-16 bg-black/70 backdrop-blur-xl rounded-2xl border border-gray-800/50 flex flex-col items-center py-6 space-y-6 z-10">
            <div className="text-blue-400">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div className="space-y-4">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </div>
              <Link href="/docs" className="w-8 h-8 hover:bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                <svg className="w-5 h-5 text-gray-400 hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Main Content */}
          <div className="ml-24">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                 <Image 
                src="/Weather-logo-transparent.png" 
                alt="Weather Logo" 
                width={200}
                height={50}
                priority
                className="drop-shadow-lg"
              />
              </div>
              <div className="flex items-center space-x-4">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                    placeholder={t('searchPlaceholder')}
                    className="w-64 px-4 py-2 bg-black/70 backdrop-blur-xl rounded-lg border border-gray-800/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <button type="submit" className="absolute right-3 top-2.5">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>

            {loading && (
              <div className="text-center text-white">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
                <p className="mt-2">{t('loading')}</p>
              </div>
            )}

            {error && (
              <div className="text-center text-red-400 bg-red-500/10 p-4 rounded-lg mb-6 border border-red-500/20">
                {error}
              </div>
            )}

            {!loading && !error && weatherData && (
              <div className="space-y-6 pb-8">
                {/* Main Weather Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Main Weather Card */}
                  <div className="lg:col-span-1">
                    <div className="bg-gradient-to-br from-slate-800 to-gray-900 rounded-3xl p-6 text-white relative overflow-hidden border border-gray-700/30">
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h2 className="text-lg font-medium opacity-90">{t('now')}</h2>
                            <p className="text-4xl font-bold">{Math.round(weatherData.main?.temp || 0)}°</p>
                          </div>
                          {weatherData.weather && (
                            <img 
                              src={getWeatherIcon(weatherData.weather[0].icon)}
                              alt="weather"
                              className="w-20 h-20"
                            />
                          )}
                        </div>
                        <p className="text-lg capitalize mb-4">{weatherData.weather?.[0]?.description}</p>
                        <div className="flex items-center space-x-2 text-sm opacity-90">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                          </svg>
                          <span>{weatherData.name}</span>
                        </div>
                        <p className="text-sm opacity-75 mt-1">
                          {new Date().toLocaleDateString('tr-TR', { 
                            day: 'numeric', 
                            month: 'long', 
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Weather Details Grid */}
                  <div className="lg:col-span-2">
                    <div className="mb-4">
                      <h3 className="text-white text-lg font-semibold mb-4">{t('todaysSummary')}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Wind Status */}
                        <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-4 border border-gray-800/50">
                          <div className="flex justify-between items-start mb-2">
                            <p className="text-gray-400 text-sm">{t('Wind Status')}</p>
                          </div>
                          <p className="text-white text-2xl font-bold mb-2">
                            {weatherData.wind?.speed ? Math.round(weatherData.wind.speed * 3.6) : 0}
                            <span className="text-sm font-normal ml-1">{t('windSpeed')}</span>
                          </p>
                          <div className="w-full h-20 flex items-end justify-center">
                            <div className="w-full h-12 bg-gradient-to-t from-blue-500/30 to-transparent rounded"></div>
                          </div>
                        </div>

                        {/* UV Index */}
                        <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-4 border border-gray-800/50">
                          <div className="flex justify-between items-start mb-2">
                            <p className="text-gray-400 text-sm">{t('UV Index')}</p>
                          </div>
                          <p className="text-white text-2xl font-bold mb-2">{getUVIndex()}.50</p>
                          <div className="w-16 h-16 mx-auto">
                            <div className="w-full h-full rounded-full border-4 border-gray-700 relative">
                              <div className="absolute inset-0 rounded-full border-4 border-blue-400" 
                                   style={{clipPath: 'polygon(0 0, 60% 0, 60% 100%, 0 100%)'}}></div>
                            </div>
                          </div>
                        </div>

                        {/* Sunrise & Sunset */}
                        <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-4 border border-gray-800/50">
                          <div className="flex justify-between items-start mb-2">
                            <p className="text-gray-400 text-sm">{t('Sunrise & Sunset')}</p>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                              <span className="text-white text-sm">
                                {t('sunrise')}: {weatherData.sys?.sunrise ? formatTime(weatherData.sys.sunrise) : '06:30'}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                              <span className="text-white text-sm">
                                {t('sunset')}: {weatherData.sys?.sunset ? formatTime(weatherData.sys.sunset) : '19:30'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Humidity */}
                      <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-4 border border-gray-800/50">
                        <p className="text-gray-400 text-sm mb-2">{t('Humidity')}</p>
                        <p className="text-white text-2xl font-bold">
                          {weatherData.main?.humidity || 0}
                          <span className="text-sm font-normal">%</span>
                        </p>
                        <p className="text-gray-400 text-xs mt-2">{t('normal')}</p>
                      </div>

                      {/* Visibility */}
                      <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-4 border border-gray-800/50">
                        <p className="text-gray-400 text-sm mb-2">{t('Visibility')}</p>
                        <p className="text-white text-2xl font-bold">
                          {getVisibility()}
                          <span className="text-sm font-normal ml-1">{t('visibility')}</span>
                        </p>
                        <p className="text-gray-400 text-xs mt-2">{t('goodVisibility')}</p>
                      </div>

                      {/* Feels Like */}
                      <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-4 border border-gray-800/50">
                        <p className="text-gray-400 text-sm mb-2">{t('Feels Like')}</p>
                        <p className="text-white text-2xl font-bold">
                          {Math.round(weatherData.main?.feels_like || 0)}°
                          <span className="text-sm font-normal">C</span>
                        </p>
                        <p className="text-gray-400 text-xs mt-2">{t('feelsLike')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Forecast Section */}
                {forecastData && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* 7 Days Forecast */}
                    <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50">
                      <h3 className="text-white text-lg font-semibold mb-4">{t('sevenDayForecast')}</h3>
                      <div className="space-y-3">
                        {forecastData.list.slice(0, 5).map((item, index) => (
                          <div key={index} className="flex items-center justify-between py-2">
                            <div className="flex items-center space-x-3">
                              <img 
                                src={getWeatherIcon(item.weather[0].icon)}
                                alt="weather"
                                className="w-10 h-10"
                              />
                              <div>
                                <p className="text-white font-medium">
                                  {index === 0 ? t('Today') : getDayName(item.dt_txt)}
                                </p>
                                <p className="text-gray-400 text-sm capitalize">
                                  {item.weather[0].description}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-white font-semibold">
                                +{Math.round(item.main.temp_max)}°
                                <span className="text-gray-400 ml-1">
                                  /{Math.round(item.main.temp_min)}°
                                </span>
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Weather Map */}
                    <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-white text-lg font-semibold">{t('weatherMap')}</h3>
                        <select className="bg-gray-700 text-white text-sm rounded-lg px-3 py-1 border border-gray-600">
                          <option>24 sa</option>
                          <option>48 sa</option>
                          <option>7 gün</option>
                        </select>
                      </div>
                      <div className="h-48 bg-gradient-to-br from-blue-900/50 to-indigo-900/50 rounded-xl relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-blue-500/30 rounded-full mx-auto mb-2 flex items-center justify-center">
                              <span className="text-white text-lg font-bold">
                                {Math.round(weatherData?.main?.temp || 0)}°
                              </span>
                            </div>
                            <p className="text-white font-medium">{weatherData?.name}</p>
                            <p className="text-gray-400 text-sm">%{weatherData?.main?.humidity || 0} {t('humidity')}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}