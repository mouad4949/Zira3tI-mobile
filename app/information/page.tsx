"use client"

import { useState, useEffect } from "react"
import { PageHeader } from "@/components/ui/page-header"
import { ArticleCard } from "@/components/information/article-card"
import { CategoryFilter } from "@/components/information/category-filter"
import { getArticlesByCategory } from "@/app/actions/information-actions"
import type { Article } from "@/app/actions/information-actions"

export default function InformationPage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [selectedCategory, setSelectedCategory] = useState("irrigation")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadArticles() {
      setIsLoading(true)
      try {
        const fetchedArticles = await getArticlesByCategory(selectedCategory)
        setArticles(fetchedArticles)
      } catch (error) {
        console.error("Erreur lors du chargement des articles:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadArticles()
  }, [selectedCategory])

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
  }

  return (
    <div className="space-y-6 py-4">
      <PageHeader title="معلومات و توعية" description="مقالات ونصائح زراعية" icon="book-open" />

      <CategoryFilter onCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} />

      {isLoading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="space-y-4">
          {articles.length > 0 ? (
            articles.map((article) => <ArticleCard key={article.id} article={article} />)
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">لا توجد مقالات في هذه الفئة</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
