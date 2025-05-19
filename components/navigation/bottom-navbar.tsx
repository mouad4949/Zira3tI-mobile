"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Brain, Users, BookOpen, Activity } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  href: string
  label: string
  icon: React.ReactNode
}

export default function BottomNavbar() {
  const pathname = usePathname()

  const navItems: NavItem[] = [
    {
      href: "/",
      label: "الرئيسية",
      icon: <Home size={20} />,
    },
    {
      href: "/chatbot",
      label: "المساعد",
      icon: <Brain size={20} />,
    },
    {
      href: "/community",
      label: "المنتدى",
      icon: <Users size={20} />,
    },
    {
      href: "/information",
      label: "معلومات",
      icon: <BookOpen size={20} />,
    },
    {
      href: "/farm-monitoring",
      label: "المراقبة",
      icon: <Activity size={20} />,
    },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t">
      <div className="container max-w-md mx-auto">
        <nav className="flex items-center justify-between">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center py-2 px-3 min-w-[4rem] transition-colors",
                pathname === item.href ? "text-primary" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
