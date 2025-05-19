import { Droplet, Thermometer, FlaskRoundIcon as Flask, Sun, type LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface SensorCardProps {
  title: string
  value: number
  unit: string
  status: "normal" | "warning" | "critical"
  icon: "droplet" | "thermometer" | "flask" | "sun"
}

const iconMap: Record<string, LucideIcon> = {
  droplet: Droplet,
  thermometer: Thermometer,
  flask: Flask,
  sun: Sun,
}

const statusColorMap = {
  normal: "text-emerald-500",
  warning: "text-amber-500",
  critical: "text-red-500",
}

const statusBgMap = {
  normal: "bg-emerald-50",
  warning: "bg-amber-50",
  critical: "bg-red-50",
}

export function SensorCard({ title, value, unit, status, icon }: SensorCardProps) {
  const Icon = iconMap[icon]

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium">{title}</h3>
          <div className={cn("p-1.5 rounded-full", statusBgMap[status])}>
            <Icon size={16} className={statusColorMap[status]} />
          </div>
        </div>

        <div className="flex items-end">
          <span className="text-2xl font-bold">{value}</span>
          <span className="text-sm text-muted-foreground ml-1">{unit}</span>
        </div>
      </CardContent>
    </Card>
  )
}
