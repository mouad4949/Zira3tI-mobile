"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getArticleById } from "@/app/actions/information-actions"
import type { Article } from "@/app/actions/information-actions"

export default function ArticleDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [article, setArticle] = useState<Article | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadArticle() {
      setIsLoading(true)
      try {
        const id = Array.isArray(params.id) ? params.id[0] : params.id
        const fetchedArticle = await getArticleById(id)

        if (fetchedArticle) {
          setArticle(fetchedArticle)
        } else {
          // Article non trouvé, rediriger vers la page d'information
          router.push("/information")
        }
      } catch (error) {
        console.error("Erreur lors du chargement de l'article:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadArticle()
  }, [params.id, router])

  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!article) {
    return null
  }

  return (
    <div className="space-y-6 py-4">
      <Button variant="ghost" className="group" onClick={() => router.back()}>
        <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" />
        العودة
      </Button>

      <Card>
        <div className="w-full">
          <img
            src={article.imageUrl || "/placeholder.svg"}
            alt={article.title}
            className="w-full h-auto object-cover aspect-video"
          />
        </div>

        <CardContent className="p-6">
          <div className="mb-4">
            <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
              {getCategoryName(article.category)}
            </span>
          </div>

          <h1 className="text-2xl font-bold mb-4" dir="rtl">
            {article.title}
          </h1>

          <div className="prose max-w-none" dir="rtl">
            <p className="text-muted-foreground mb-4">{article.description}</p>

            {/* Contenu fictif de l'article */}
            <p className="mb-4">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك
              أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
            </p>
            <p className="mb-4">
              إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو
              مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير
              من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
            </p>
            <h2 className="text-xl font-semibold my-4">النقاط الرئيسية</h2>
            <ul className="list-disc list-inside mb-4">
              <li className="mb-2">النقطة الأولى المهمة في هذا الموضوع</li>
              <li className="mb-2">النقطة الثانية وتفاصيلها</li>
              <li className="mb-2">النقطة الثالثة مع شرح إضافي</li>
            </ul>
            <p className="mb-4">
              ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن
              يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
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
