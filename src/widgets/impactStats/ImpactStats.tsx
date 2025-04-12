import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Users, Recycle, TreePine } from "lucide-react"

export function ImpactStats() {
  return (
    <section className="py-16 bg-lt-bg dark:bg-dk-bg flex justify-center">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Наше влияние</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard icon={<Users className="h-10 w-10 text-blue-500" />} value="10,000+" label="Активных участников" />
          <StatCard icon={<Leaf className="h-10 w-10 text-green-500" />} value="120+" label="Успешных проектов" />
          <StatCard icon={<Recycle className="h-10 w-10 text-amber-500" />} value="500 тонн" label="Сокращение CO₂" />
          <StatCard
            icon={<TreePine className="h-10 w-10 text-emerald-500" />}
            value="25,000+"
            label="Посаженных деревьев"
          />
        </div>
      </div>
    </section>
  )
}

interface StatCardProps {
  icon: React.ReactNode
  value: string
  label: string
}

function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center text-center p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-3xl font-bold mb-2">{value}</h3>
        <p className="text-lt-muted-foreground dark:text-dk-muted-foreground">{label}</p>
      </CardContent>
    </Card>
  )
}
