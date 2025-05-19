import { Brain, Users, BookOpen, Activity, Home, type LucideIcon } from "lucide-react"

interface PageHeaderProps {
  title: string
  description: string
  icon?: "brain" | "users" | "book-open" | "activity" | "home"
}

const iconMap: Record<string, LucideIcon> = {
  brain: Brain,
  users: Users,
  "book-open": BookOpen,
  activity: Activity,
  home: Home,
}

export function PageHeader({ title, description, icon }: PageHeaderProps) {
  const Icon = icon ? iconMap[icon] : null

  return (
    <div className="flex items-center gap-3 mb-6">
      {Icon && (
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
          <Icon size={20} />
        </div>
      )}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
