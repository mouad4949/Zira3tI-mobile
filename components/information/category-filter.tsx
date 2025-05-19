"use client"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Category {
  id: string
  name: string
}

interface CategoryFilterProps {
  onCategoryChange: (categoryId: string) => void
  selectedCategory: string
}

export function CategoryFilter({ onCategoryChange, selectedCategory }: CategoryFilterProps) {
  const categories: Category[] = [
    
    { id: "irrigation", name: "الري" },
    { id: "pests", name: "الآفات" },
    { id: "fertilization", name: "التسميد" },
    { id: "seasons", name: "المواسم" },
  ]

  return (
    <div className="flex overflow-x-auto py-2 gap-2 no-scrollbar">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant="outline"
          size="sm"
          className={cn(
            "rounded-full whitespace-nowrap",
            selectedCategory === category.id && "bg-primary text-primary-foreground",
          )}
          onClick={() => onCategoryChange(category.id)}
        >
          {category.name}
        </Button>
      ))}
    </div>
  )
}
