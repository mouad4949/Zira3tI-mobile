export interface Post {
  id: string
  author: string
  content: string
  timestamp: Date
  likes: number
  comments: number
  imageUrl?: string
}
