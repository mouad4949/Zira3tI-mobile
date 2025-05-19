"use client"

import { useState, useEffect } from "react"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HomeHeader() {
  const [greeting, setGreeting] = useState("")
  const [userName, setUserName] = useState("المزارع")

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) {
      setGreeting("صباح الخير")
    } else if (hour < 18) {
      setGreeting("مساء الخير")
    } else {
      setGreeting("مساء الخير")
    }

    // In a real app, you would fetch the user's name from an API or local storage
  }, [])

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-xl font-bold tracking-tight">
          {greeting}, {userName}!
        </h1>
        <p className="text-sm text-muted-foreground">ماذا تريد أن تفعل اليوم؟</p>
      </div>
      <img src="logo_zira3ti.png" className="rounded-xl w-20 h-20">
      </img> 
    </div>
  )
}
