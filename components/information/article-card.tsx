import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Article } from "@/app/actions/information-actions"

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3">
          <img
            src={article.imageUrl || "/placeholder.svg"}
            alt={article.title}
            className="w-full h-full object-cover aspect-video md:aspect-square"
          />
        </div>

        <CardContent className="p-4 flex flex-col justify-between w-full md:w-2/3">
          <div>
            <div className="mb-2">
              <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                {getCategoryName(article.category)}
              </span>
            </div>

            <h3 className="text-lg font-semibold mb-2" dir="rtl">
              {article.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4" dir="rtl">
              {article.description}
            </p>
          </div>

          <Button variant="ghost" className="self-end group" asChild>
            <a href={`/information/${article.id}`}>
              قراءة المزيد
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </CardContent>
      </div>
    </Card>
  )
}

function getCategoryName(category: string): string {
  const categories: Record<string, string> = {
    irrigation: "الري",
    pests: "الآفات",
    fertilization: "التسميد",
    seasons: "المواسم",
  }

  return categories[category] || category
}
