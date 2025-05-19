import { Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function TipOfTheDay() {
  // In a real app, this would be fetched from an API or a database
  const tip = "قم بتغطية التربة بالقش للحفاظ على رطوبتها وتقليل نمو الأعشاب الضارة."

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Lightbulb size={18} className="text-amber-500" />
          <h2 className="text-lg font-semibold">نصيحة اليوم</h2>
        </div>
        <p className="text-sm">{tip}</p>
      </CardContent>
    </Card>
  )
}
