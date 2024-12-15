import React, { useState, useEffect } from "react";

interface WeatherData {
  temp_c: number;
  condition: {
    text: string;
    icon: string;
  };
  feelslike_c: number;
  forecast: {
    date: string;
    day: {
      maxtemp_c: number;
      mintemp_c: number;
      condition: {
        text: string;
        icon: string;
      };
    };
  }[];
}

const ClockWidget = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black/20 backdrop-blur-xl rounded-xl px-6 py-4 text-white">
      <div className="text-4xl font-bold tracking-wider">
        {time.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}
      </div>
    </div>
  );
};

const WeatherWidget = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setError(null);
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        const response = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Bengaluru&days=5&aqi=no`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        
        const data = await response.json();

        setWeather({
          temp_c: Math.round(data.current.temp_c),
          condition: {
            text: data.current.condition.text,
            icon: data.current.condition.icon,
          },
          feelslike_c: Math.round(data.current.feelslike_c),
          forecast: data.forecast.forecastday.map((day: any) => ({
            date: new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' }),
            day: {
              maxtemp_c: Math.round(day.day.maxtemp_c),
              mintemp_c: Math.round(day.day.mintemp_c),
              condition: {
                text: day.day.condition.text,
                icon: day.day.condition.icon
              }
            }
          }))
        });
      } catch (error) {
        console.error('Error fetching weather:', error);
        setError('Failed to fetch weather');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
    // Refresh every 30 minutes
    const interval = setInterval(fetchWeather, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-black via-black/95 to-blue-950/90 backdrop-blur-xl rounded-xl p-4 text-white w-96">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gradient-to-br from-black via-black/95 to-blue-950/90 backdrop-blur-xl rounded-xl p-4 text-white w-96">
        <div className="text-center">{error}</div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-black via-black/95 to-blue-950/90 backdrop-blur-xl rounded-xl p-4 text-white w-96">
      <div className="flex flex-col gap-4">
        {/* Current Weather */}
        <div className="flex justify-between items-center">
          <div>
            <div className="text-4xl font-light">{weather?.temp_c}°</div>
            <div className="text-sm">Bengaluru</div>
          </div>
          <img 
            src={weather?.condition.icon}
            alt="weather icon"
            className="w-16 h-16 -mt-2"
          />
          <div className="text-right">
            <div className="text-sm capitalize">{weather?.condition.text}</div>
            <div className="text-sm text-gray-300">
              Feels like: {weather?.feelslike_c}°
            </div>
          </div>
        </div>

        {/* 5-day forecast */}
        <div className="border-t border-white/10 pt-4">
          <div className="grid grid-cols-5 gap-2">
            {weather?.forecast.map((day) => (
              <div key={day.date} className="flex flex-col items-center">
                <div className="text-xs font-medium">{day.date}</div>
                <img 
                  src={day.day.condition.icon}
                  alt={day.day.condition.text}
                  className="w-8 h-8 my-1"
                />
                <div className="text-xs flex gap-1">
                  <span className="text-white">{day.day.maxtemp_c}°</span>
                  <span className="text-gray-400">{day.day.mintemp_c}°</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CalendarWidget = () => {
  const date = new Date();
  const dayName = date.toLocaleString("en-US", { weekday: "short" });
  const monthName = date.toLocaleString("en-US", { month: "short" });
  const dayNumber = date.getDate();
  return (
    <div className="bg-gray-900 backdrop-blur-xl rounded-2xl p-1 text-white w-48 h-48">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-[2.5rem] font-medium tracking-tight">
          <span className="text-red-400">{dayName}</span> {monthName}
        </div>
        <div className="text-[7.5rem] font-semibold leading-tight -mt-6">
          {dayNumber}
        </div>
      </div>
    </div>
  );
};

export { ClockWidget, WeatherWidget, CalendarWidget };
