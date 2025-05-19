import { formatDistanceToNow } from "date-fns"
import { ar } from "date-fns/locale"
import type { ChatMessage as ChatMessageType } from "@/types/chat"
import { cn } from "@/lib/utils"
import { Bot, User } from "lucide-react"

interface ChatMessageProps {
  message: ChatMessageType
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.role === "assistant"

  return (
    <div className={cn("flex gap-3 max-w-[80%]", isBot ? "self-start" : "self-end ml-auto")}>
      {isBot && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          <Bot size={16} className="text-primary" />
        </div>
      )}

      <div>
        <div
          className={cn(
            "rounded-lg p-3",
            isBot ? "bg-white border text-foreground" : "bg-primary text-primary-foreground",
          )}
          dir={isBot ? "rtl" : "ltr"}
        >
          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
        </div>

        <div className={cn("text-xs text-muted-foreground mt-1", isBot ? "text-left" : "text-right")}>
          {formatDistanceToNow(message.timestamp, {
            addSuffix: true,
            locale: ar,
          })}
        </div>
      </div>

      {!isBot && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          <User size={16} className="text-primary" />
        </div>
      )}
    </div>
  )
}
