"use client"

import { useState } from "react"
import { PageHeader } from "@/components/ui/page-header"
import { ChatInterface } from "@/components/chatbot/chat-interface"
import type { ChatMessage } from "@/types/chat"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"

export default function ChatbotPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "مرحبا بك في المساعد الذكي! كيف يمكنني مساعدتك اليوم؟",
      timestamp: new Date(),
    },
  ])
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = (content: string) => {
    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)

    // Simulate AI response (for MVP)
    setTimeout(() => {
      const botResponses = [
        "يمكنني مساعدتك في اختيار أفضل البذور لموسم الزراعة الحالي.",
        "بالنسبة للري، أنصحك باستخدام نظام التنقيط لتوفير المياه وتحسين المحصول.",
        "أنصحك بمراقبة مستوى الرطوبة في التربة خلال هذا الأسبوع.",
        "هناك توقعات بهطول أمطار في منطقتك خلال الأيام القادمة.",
        "لمكافحة الآفات بطريقة طبيعية، يمكنك استخدام خليط من الثوم والفلفل الحار.",
        "الوقت المناسب لزراعة الطماطم هو بداية فصل الربيع عندما تكون درجة الحرارة معتدلة.",
        "للحصول على تربة خصبة، يمكنك إضافة السماد العضوي قبل شهر من الزراعة.",
        "تأكد من تناوب المحاصيل كل موسم للحفاظ على خصوبة التربة ومنع انتشار الأمراض.",
      ]

      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: botResponses[Math.floor(Math.random() * botResponses.length)],
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
      setIsLoading(false)
    }, 1500)
  }

  const clearChat = () => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content: "مرحبا بك في المساعد الذكي! كيف يمكنني مساعدتك اليوم؟",
        timestamp: new Date(),
      },
    ])
  }

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <PageHeader title="المساعد الذكي" description="اسأل أي سؤال عن الزراعة" icon="brain" />
        <Button variant="ghost" size="icon" onClick={clearChat} className="text-muted-foreground">
          <Trash2 size={20} />
        </Button>
      </div>

      <ChatInterface messages={messages} onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  )
}
