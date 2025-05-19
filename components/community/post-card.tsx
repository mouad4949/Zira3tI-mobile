"use client"

import { formatDistanceToNow } from "date-fns"
import { ar } from "date-fns/locale"
import { Heart, MessageCircle, Share2 } from "lucide-react"
import { useState } from "react"
import type { Post } from "@/types/community"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(post.likes)

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1)
    } else {
      setLikeCount(likeCount + 1)
    }
    setLiked(!liked)
  }

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-medium">{post.author}</h3>
            <p className="text-xs text-muted-foreground">
              {formatDistanceToNow(post.timestamp, {
                addSuffix: true,
                locale: ar,
              })}
            </p>
          </div>
        </div>

        <p className="text-sm mb-3" dir="rtl">
          {post.content}
        </p>

        {post.imageUrl && (
          <div className="mt-3 rounded-md overflow-hidden">
            <img
              src={post.imageUrl || "/placeholder.svg"}
              alt="Post attachment"
              className="w-full h-auto object-cover"
            />
          </div>
        )}
      </CardContent>

      <CardFooter className="p-2 border-t flex justify-between">
        <Button
          variant="ghost"
          size="sm"
          className={cn("text-muted-foreground", liked && "text-red-500")}
          onClick={handleLike}
        >
          <Heart size={18} className={cn(liked && "fill-current")} />
          <span className="ml-1">{likeCount}</span>
        </Button>

        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <MessageCircle size={18} />
          <span className="ml-1">{post.comments}</span>
        </Button>

        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <Share2 size={18} />
        </Button>
      </CardFooter>
    </Card>
  )
}
