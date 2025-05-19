import type React from "react"
import { Cloud, CloudRain, Sun, Wind } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface WeatherDay {
  day: string
  icon: React.ReactNode
  tempHigh: number
  tempLow: number
  precipitation: number
}

export function WeatherForecast() {
  // Mock data for MVP
  const forecast: WeatherDay[] = [
    {
      day: "اليوم",
      icon: <Sun size={24} className="text-amber-500" />,
      tempHigh: 28,
      tempLow: 18,
      precipitation: 0,
    },
    {
      day: "غداً",
      icon: <CloudRain size={24} className="text-blue-500" />,
      tempHigh: 24,
      tempLow: 17,
      precipitation: 60,
    },
    {
      day: "الثلاثاء",
      icon: <Cloud size={24} className="text-slate-500" />,
      tempHigh: 25,
      tempLow: 16,
      precipitation: 20,
    },
    {
      day: "الأربعاء",
      icon: <Wind size={24} className="text-slate-500" />,
      tempHigh: 26,
      tempLow: 17,
      precipitation: 10,
    },
  ]

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>توقعات الطقس</CardTitle>
      </CardHeader>

      <CardContent className="p-4">
        <div className="grid grid-cols-4 gap-2">
          {forecast.map((day, index) => (
            <div key={index} className="flex flex-col items-center text-center p-2">
              <span className="text-sm font-medium mb-2">{day.day}</span>
              {day.icon}
              <div className="mt-2">
                <span className="text-sm font-medium">{day.tempHigh}°</span>
                <span className="text-xs text-muted-foreground">/{day.tempLow}°</span>
              </div>
              <span className="text-xs mt-1">{day.precipitation > 0 ? `${day.precipitation}%` : "-"}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
