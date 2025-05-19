import type React from "react"
import Link from "next/link"
import { Brain, Users, BookOpen, Activity } from "lucide-react"
import { cn } from "@/lib/utils"

interface QuickAccessItemProps {
  href: string
  label: string
  icon: React.ReactNode
  color: string
}

function QuickAccessItem({ href, label, icon, color }: QuickAccessItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-col items-center justify-center p-4 rounded-lg transition-transform hover:scale-105",
        color,
      )}
    >
      <div className="bg-white/90 rounded-full p-3 mb-2">{icon}</div>
      <span className="text-sm font-medium text-white">{label}</span>
    </Link>
  )
}

export function QuickAccessGrid() {
  const items = [
    {
      href: "/chatbot",
      label: "المساعد الذكي",
      icon: <Brain size={24} className="text-primary" />,
      color: "bg-primary",
    },
    {
      href: "/community",
      label: "المنتدى",
      icon: <Users size={24} className="text-amber-600" />,
      color: "bg-amber-600",
    },
    {
      href: "/information",
      label: "معلومات",
      icon: <BookOpen size={24} className="text-emerald-600" />,
      color: "bg-emerald-600",
    },
    {
      href: "/farm-monitoring",
      label: "مراقبة الضيعة",
      icon: <Activity size={24} className="text-blue-600" />,
      color: "bg-blue-600",
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item) => (
        <QuickAccessItem key={item.href} {...item} />
      ))}
    </div>
  )
}
