"use client"

import { useState, useEffect } from "react"
import { X, ImageIcon, Loader2 } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface CreatePostModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (content: string, imageUrl?: string) => void
}

export function CreatePostModal({ isOpen, onClose, onSubmit }: CreatePostModalProps) {
  const [content, setContent] = useState("")
  const [imageUrl, setImageUrl] = useState<string | undefined>()
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Ajouter une image par défaut à l'ouverture du modal
  useEffect(() => {
    if (isOpen && !imageUrl) {
      setImageUrl("/placeholder.svg?height=200&width=400&text=صورة+جديدة")
    }
  }, [isOpen, imageUrl])

  const handleSubmit = () => {
    if (!content.trim()) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      onSubmit(content, imageUrl)
      setContent("")
      setImageUrl(undefined)
      setIsSubmitting(false)
    }, 1000)
  }

  const handleAddImage = () => {
    // Générer une image aléatoire parmi plusieurs options
    const imageOptions = [
      "/placeholder.svg?height=200&width=400&text=محصول+زراعي",
      "/placeholder.svg?height=200&width=400&text=حقل+القمح",
      "/placeholder.svg?height=200&width=400&text=أشجار+الفاكهة",
      "/placeholder.svg?height=200&width=400&text=الخضروات+الطازجة",
      "/placeholder.svg?height=200&width=400&text=معدات+زراعية",
    ]
    setImageUrl(imageOptions[Math.floor(Math.random() * imageOptions.length)])
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>إنشاء منشور جديد</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="ماذا تريد أن تشارك مع المجتمع؟"
            className="min-h-[120px]"
            dir="rtl"
          />

          {imageUrl && (
            <div className="relative">
              <img src={imageUrl || "/placeholder.svg"} alt="Post attachment" className="w-full h-auto rounded-md" />
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2 h-6 w-6 rounded-full"
                onClick={() => handleAddImage()} // Changer l'image au lieu de la supprimer
              >
                <X size={14} />
              </Button>
            </div>
          )}

          <div className="flex justify-between">
            <Button type="button" variant="outline" size="sm" onClick={handleAddImage}>
              <ImageIcon size={18} className="mr-2" />
              تغيير الصورة
            </Button>

            <Button type="button" onClick={handleSubmit} disabled={!content.trim() || isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="mr-2 animate-spin" />
                  جاري النشر...
                </>
              ) : (
                "نشر"
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
