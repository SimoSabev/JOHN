"use client"

import type React from "react"

import { useState } from "react"
import { Send, CheckCircle2, Mail, MessageSquare, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float animation-delay-400" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto mb-20 text-center pt-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card mb-8 opacity-0 animate-fade-in-up">
            <MessageSquare size={20} className="text-accent" />
            <span className="text-sm font-semibold">Свържете се с нас</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 opacity-0 animate-fade-in-up animation-delay-200 leading-tight">
            Свържете се <span className="gradient-text animate-gradient">с нас</span>
          </h1>
          <p className="text-2xl text-muted-foreground opacity-0 animate-fade-in-up animation-delay-400 leading-relaxed max-w-3xl mx-auto">
            Имате въпроси или искате да споделите вашите мисли? Ще се радваме да чуем от вас!
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="opacity-0 animate-slide-in-left">
              <Card className="p-10 glass-card border-2 border-transparent hover:border-accent/50 transition-all duration-500 shadow-xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                    <Mail className="text-accent-foreground" size={24} />
                  </div>
                  <h2 className="text-3xl font-bold">Изпратете съобщение</h2>
                </div>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 animate-scale-in">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center mb-6 shadow-lg">
                      <CheckCircle2 className="text-accent-foreground" size={40} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Благодарим ви!</h3>
                    <p className="text-muted-foreground text-center text-lg">
                      Вашето съобщение беше изпратено успешно. Ще се свържем с вас скоро.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <Label htmlFor="name" className="text-base font-semibold mb-3 flex items-center gap-2">
                        <User size={18} className="text-accent" />
                        Име
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Вашето име"
                        required
                        className="mt-2 h-12 text-base glass-card border-2 focus:border-accent transition-all"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-base font-semibold mb-3 flex items-center gap-2">
                        <Mail size={18} className="text-accent" />
                        Имейл
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="mt-2 h-12 text-base glass-card border-2 focus:border-accent transition-all"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-base font-semibold mb-3 flex items-center gap-2">
                        <MessageSquare size={18} className="text-accent" />
                        Съобщение
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Вашето съобщение..."
                        required
                        className="mt-2 min-h-[180px] text-base glass-card border-2 focus:border-accent transition-all"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-14 text-lg bg-gradient-to-r from-accent via-secondary to-accent animate-gradient hover:shadow-xl transition-all"
                    >
                      Изпрати
                      <Send className="ml-2" size={20} />
                    </Button>
                  </form>
                )}
              </Card>
            </div>

            <div className="opacity-0 animate-slide-in-right animation-delay-200">
              <Card className="p-10 glass-card border-2 border-transparent hover:border-secondary/50 transition-all duration-500 shadow-xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                    <CheckCircle2 className="text-secondary-foreground" size={24} />
                  </div>
                  <h2 className="text-3xl font-bold">Интерактивна времева линия</h2>
                </div>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  Изследвайте ключовите моменти от живота на Джон Атанасов
                </p>

                <div className="space-y-6">
                  <TimelineItem year="1903" title="Раждане" description="Роден в Хамилтън, Ню Йорк" />
                  <TimelineItem year="1925" title="Образование" description="Завършва електроинженерство" />
                  <TimelineItem year="1937" title="Идеята" description="Концепцията за електронен компютър" />
                  <TimelineItem year="1942" title="ABC Компютър" description="Завършва първия електронен компютър" />
                  <TimelineItem year="1973" title="Признание" description="Съдът го признава за изобретател" />
                  <TimelineItem year="1990" title="Награда" description="Национална медал на технологиите" />
                </div>
              </Card>
            </div>
          </div>

          <div className="opacity-0 animate-fade-in-up animation-delay-400">
            <Card className="p-12 glass-card border-2 border-transparent hover:border-primary/50 transition-all duration-500 shadow-xl">
              <h2 className="text-4xl font-bold mb-6 text-center">
                <span className="gradient-text">Анкета</span>
              </h2>
              <p className="text-muted-foreground text-center mb-12 leading-relaxed text-xl">
                Какво ви вдъхновява най-много в историята на Джон Атанасов?
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <PollOption text="Неговата упоритост и визия" percentage={35} />
                <PollOption text="Техническата иновация" percentage={28} />
                <PollOption text="Българският му произход" percentage={22} />
                <PollOption text="Влиянието върху съвременността" percentage={15} />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

function TimelineItem({
  year,
  title,
  description,
}: {
  year: string
  title: string
  description: string
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="flex gap-6 cursor-pointer transition-all duration-300 hover:translate-x-3 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex-shrink-0 w-20 text-right pt-1">
        <span
          className={`text-2xl font-bold transition-all duration-300 ${isHovered ? "text-accent scale-110 inline-block" : "text-muted-foreground"}`}
        >
          {year}
        </span>
      </div>
      <div className="flex-grow pb-8 border-l-2 border-border pl-8 relative">
        <div
          className={`absolute left-0 top-2 w-4 h-4 rounded-full -translate-x-[9px] transition-all duration-300 ${
            isHovered ? "bg-gradient-to-br from-accent to-secondary scale-150 shadow-lg" : "bg-border"
          }`}
        />
        <h3 className={`font-bold text-lg mb-2 transition-colors duration-300 ${isHovered ? "text-accent" : ""}`}>
          {title}
        </h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

function PollOption({
  text,
  percentage,
}: {
  text: string
  percentage: number
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      className="relative p-6 rounded-2xl border-2 border-border hover:border-accent transition-all duration-300 text-left overflow-hidden group glass-card hover-lift"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-accent/20 via-secondary/20 to-primary/20 transition-all duration-500"
        style={{
          width: isHovered ? "100%" : `${percentage}%`,
        }}
      />
      <div className="relative z-10 flex items-center justify-between">
        <span className="font-semibold text-lg">{text}</span>
        <span className="text-2xl font-bold gradient-text">{percentage}%</span>
      </div>
    </button>
  )
}
