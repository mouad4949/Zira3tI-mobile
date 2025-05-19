import { HomeHeader } from "@/components/home/home-header"
import { QuickAccessGrid } from "@/components/home/quick-access-grid"
import { AlertsSection } from "@/components/home/alerts-section"
import { TipOfTheDay } from "@/components/home/tip-of-the-day"

export default function HomePage() {
  return (
    <div className="space-y-6 py-4">
      <HomeHeader />
      <QuickAccessGrid />
      <AlertsSection />
      <TipOfTheDay />
    </div>
  )
}
