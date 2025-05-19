import { AlertTriangle, Info } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface AlertProps {
  type: "warning" | "info"
  message: string
}

function Alert({ type, message }: AlertProps) {
  return (
    <div className="flex items-start gap-3 mb-3 last:mb-0">
      <div className={`mt-0.5 ${type === "warning" ? "text-amber-500" : "text-blue-500"}`}>
        {type === "warning" ? <AlertTriangle size={18} /> : <Info size={18} />}
      </div>
      <p className="text-sm">{message}</p>
    </div>
  )
}

export function AlertsSection() {
  const alerts: AlertProps[] = [
    {
      type: "warning",
      message: "خطر الإصابة بالبياض الدقيقي مرتفع هذا الأسبوع. يرجى فحص محصول الطماطم.",
    },
    {
      type: "info",
      message: "موعد الري القادم: غداً في الساعة 6:00 صباحاً.",
    },
  ]

  return (
    <Card>
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold mb-3">التنبيهات</h2>
        {alerts.map((alert, index) => (
          <Alert key={index} {...alert} />
        ))}
      </CardContent>
    </Card>
  )
}
