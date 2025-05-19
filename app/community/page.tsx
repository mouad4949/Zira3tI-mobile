"use client"

import { useState } from "react"
import { PageHeader } from "@/components/ui/page-header"
import { PostCard } from "@/components/community/post-card"
import { CreatePostButton } from "@/components/community/create-post-button"
import { CreatePostModal } from "@/components/community/create-post-modal"
import type { Post } from "@/types/community"

// Mock data for MVP with images for all posts
const MOCK_POSTS: Post[] = [
  {
    id: "1",
    author: "محمد العلوي",
    content: "هل يعرف أحد كيفية التعامل مع الآفات التي تصيب أشجار الزيتون؟",
    timestamp: new Date(Date.now() - 3600000 * 2),
    likes: 5,
    comments: 3,
    imageUrl: "https://www.invictory.org/articles/wp-content/uploads/sites/3/2017/12/olives-1752187_1280.jpg",
  },
  {
    id: "2",
    author: "فاطمة الزهراء",
    content: "حصدت اليوم أول محصول من الطماطم! الإنتاج كان أفضل من المتوقع بفضل نصائح هذا التطبيق.",
    timestamp: new Date(Date.now() - 3600000 * 8),
    likes: 12,
    comments: 4,
    imageUrl:"https://static.seekingalpha.com/cdn/s3/uploads/getty_images/519663318/image_519663318.jpg?io=getty-c-w1280",
  },
  {
    id: "3",
    author: "عبد الرحيم",
    content: "هل هناك أي دعم حكومي متاح للمزارعين الصغار لشراء معدات الري الحديثة؟",
    timestamp: new Date(Date.now() - 3600000 * 24),
    likes: 8,
    comments: 7,
    imageUrl: "https://avatars.mds.yandex.net/i?id=a882650d622d54b59b9c6d6cede2a3b76ec963fb-9263927-images-thumbs&n=13",
  },
  {
    id: "4",
    author: "سعيد المراكشي",
    content: "شاركت اليوم في ورشة عمل حول الزراعة العضوية.!",
    timestamp: new Date(Date.now() - 3600000 * 36),
    likes: 15,
    comments: 5,
   
  },
  {
    id: "5",
    author: "نادية البيضاوي",
    content: "هذه صورة لمزرعتي بعد تطبيق نظام الري بالتنقيط. لاحظوا الفرق في نمو النباتات!",
    timestamp: new Date(Date.now() - 3600000 * 48),
    likes: 20,
    comments: 8,
    imageUrl: "https://avatars.mds.yandex.net/i?id=5aa2b2ea04232b99ed257fb26275166102daba2e-5276366-images-thumbs&n=13",
  },
]

export default function CommunityPage() {
  const [posts, setPosts] = useState<Post[]>(MOCK_POSTS)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCreatePost = (content: string, imageUrl?: string) => {
    // Ensure all posts have images - use a default if none provided
    const newPost: Post = {
      id: Date.now().toString(),
      author: "أنت",
      content,
      timestamp: new Date(),
      likes: 0,
      comments: 0,
      imageUrl: imageUrl || "/placeholder.svg?height=200&width=400&text=صورة+جديدة",
    }

    setPosts([newPost, ...posts])
    setIsModalOpen(false)
  }

  return (
    <div className="space-y-4 py-4">
      <PageHeader title="المنتدى" description="تواصل مع مزارعين آخرين" icon="users" />

      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <CreatePostButton onClick={() => setIsModalOpen(true)} />

      <CreatePostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleCreatePost} />
    </div>
  )
}
