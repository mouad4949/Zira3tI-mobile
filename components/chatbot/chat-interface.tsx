"use client"

import { useRef, useEffect } from "react"
import type { ChatMessage as ChatMessageType } from "@/types/chat"
import { ChatMessage } from "@/components/chatbot/chat-message"
import { ChatInput } from "@/components/chatbot/chat-input"

interface ChatInterfaceProps {
  messages: ChatMessageType[]
  onSendMessage: (content: string) => void
  isLoading: boolean
}

export function ChatInterface({ messages, onSendMessage, isLoading }: ChatInterfaceProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 rounded-lg">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}

        {isLoading && (
          <div className="self-start flex gap-3 max-w-[80%]">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="animate-pulse">...</span>
            </div>
            <div className="rounded-lg p-3 bg-white border text-foreground">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-primary/30 rounded-full animate-bounce"></div>
                <div
                  className="w-3 h-3 bg-primary/30 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-3 h-3 bg-primary/30 rounded-full animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-background border-t">
        <ChatInput onSendMessage={onSendMessage} disabled={isLoading} />
      </div>
    </div>
  )
}
