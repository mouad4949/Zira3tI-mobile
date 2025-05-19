import { PageHeader } from "@/components/ui/page-header"
import { SensorCard } from "@/components/farm-monitoring/sensor-card"
import { AlertsList } from "@/components/farm-monitoring/alerts-list"
import { WeatherForecast } from "@/components/farm-monitoring/weather-forecast"

export default function FarmMonitoringPage() {
  return (
    <div className="space-y-6 py-4">
      <PageHeader title="مراقبة الضيعة" description="متابعة حالة المزرعة في الوقت الحقيقي" icon="activity" />

      <div className="grid grid-cols-2 gap-4">
        <SensorCard title="رطوبة التربة" value={68} unit="%" status="normal" icon="droplet" />
        <SensorCard title="درجة الحرارة" value={27} unit="°C" status="warning" icon="thermometer" />
        <SensorCard title="الرقم الهيدروجيني" value={6.8} unit="pH" status="normal" icon="flask" />
        <SensorCard title="الإضاءة" value={85} unit="%" status="normal" icon="sun" />
      </div>

      <AlertsList />

      <WeatherForecast />
    </div>
  )
}
