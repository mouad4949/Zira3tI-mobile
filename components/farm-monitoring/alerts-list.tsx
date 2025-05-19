import { AlertTriangle, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface Alert {
  id: string
  message: string
  severity: "high" | "medium" | "low"
  timestamp: Date
}

export function AlertsList() {
  // Mock data for MVP
  const alerts: Alert[] = [
    {
      id: "1",
      message: "خطر الإصابة بالبياض الدقيقي مرتفع. يرجى فحص محصول الطماطم.",
      severity: "high",
      timestamp: new Date(Date.now() - 3600000 * 2),
    },
    {
      id: "2",
      message: "مستوى رطوبة التربة منخفض في القطعة الشمالية.",
      severity: "medium",
      timestamp: new Date(Date.now() - 3600000 * 5),
    },
    {
      id: "3",
      message: "تم اكتمال دورة الري بنجاح.",
      severity: "low",
      timestamp: new Date(Date.now() - 3600000 * 12),
    },
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "text-red-500 bg-red-50"
      case "medium":
        return "text-amber-500 bg-amber-50"
      case "low":
        return "text-emerald-500 bg-emerald-50"
      default:
        return "text-slate-500 bg-slate-50"
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "high":
      case "medium":
        return <AlertTriangle size={16} />
      case "low":
        return <CheckCircle size={16} />
      default:
        return null
    }
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>التنبيهات والإشعارات</CardTitle>
      </CardHeader>

      <CardContent className="p-4">
        <div className="space-y-3">
          {alerts.map((alert) => (
            <div key={alert.id} className="flex items-start gap-3 p-3 rounded-lg border">
              <div className={cn("p-1.5 rounded-full flex-shrink-0", getSeverityColor(alert.severity))}>
                {getSeverityIcon(alert.severity)}
              </div>

              <div>
                <p className="text-sm" dir="rtl">
                  {alert.message}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{alert.timestamp.toLocaleTimeString("ar-MA")}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
