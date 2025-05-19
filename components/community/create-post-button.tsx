"use client"

import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CreatePostButtonProps {
  onClick: () => void
}

export function CreatePostButton({ onClick }: CreatePostButtonProps) {
  return (
    <Button onClick={onClick} className="fixed bottom-20 right-4 rounded-full shadow-lg" size="icon">
      <Plus size={24} />
    </Button>
  )
}
