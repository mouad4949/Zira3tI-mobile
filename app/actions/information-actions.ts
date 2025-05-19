"use server"

import { Article, ARTICLES } from '@/lib/articles'

export async function getArticles(): Promise<Article[]> {
  return ARTICLES
}

export async function getArticleById(id: string): Promise<Article | undefined> {
  return ARTICLES.find(article => article.id === id)
}

export async function getArticlesByCategory(category: string): Promise<Article[]> {
  return ARTICLES.filter(article => article.category === category)
}
