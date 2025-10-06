"use client"

import type React from "react"

import Image from "next/image"
import { Calendar, Award, BookOpen, Star, Lightbulb, Trophy, Rocket, Brain, Heart, Sparkles } from "lucide-react"
import { Card } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { motion } from "framer-motion"
import { useState } from "react"

export default function BiographyPage() {
  return (
    <div className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-blob-bounce" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-blob-bounce animation-delay-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto mb-32 pt-20">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card mb-8">
                <Star size={20} className="text-accent animate-pulse" />
                <span className="text-sm font-semibold">Глава 1: Биография</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
                Биография на <br />
                <span className="gradient-text animate-gradient text-glow">Джон Атанасов</span>
              </h1>
              <p className="text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-6">
                Пътят на българския гений, който промени света на технологиите
              </p>
              <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-2xl mx-auto italic">
                "От скромно начало до световна слава - историята на човека, който мечтаеше в двоична логика"
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl mb-12 hover-lift group">
              <div className="absolute inset-0 z-10" />
              <Image
                src="/john-atanasoff-portrait-professional-photo-vintage.jpg"
                alt="Джон Винсент Атанасов"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-10 z-20">
                <h3 className="text-4xl font-bold text-white mb-3">Джон Винсент Атанасов</h3>
                <p className="text-white/90 text-xl">4 октомври 1903 - 15 юни 1995</p>
                <p className="text-white/80 text-lg mt-2">Американски физик и изобретател от български произход</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ParallaxSection speed={0.3}>
          <section className="max-w-6xl mx-auto mb-32">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                  Ранни <span className="gradient-text">години</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Историята започва в малко градче в Ню Йорк, където един момък с български корени мечтае за
                  невъзможното
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <ScrollReveal direction="left">
                <Card className="p-10 glass-card border-2 border-transparent hover:border-accent/50 transition-all duration-500 hover-lift">
                  <Heart className="w-12 h-12 text-accent mb-6" />
                  <h3 className="text-3xl font-bold mb-6">Семейство и произход</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                    Роден на 4 октомври 1903 година в Хамилтън, Ню Йорк, Джон е син на български имигранти. Баща му,
                    Иван Атанасов, е електроинженер, който емигрира от България в търсене на по-добър живот.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Още от малък Джон показва изключителни математически способности. На 9 години той помага на баща си
                    с електрически изчисления, а на 10 години вече чете учебници по висша математика.
                  </p>
                </Card>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl hover-lift">
                  <Image
                    src="/young-student-studying-mathematics-vintage-photo.jpg"
                    alt="Млад студент"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl hover-lift order-2 lg:order-1">
                  <Image
                    src="/university-campus-vintage-education-building.jpg"
                    alt="Университет"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <Card className="p-10 glass-card border-2 border-transparent hover:border-secondary/50 transition-all duration-500 hover-lift order-1 lg:order-2">
                  <BookOpen className="w-12 h-12 text-secondary mb-6" />
                  <h3 className="text-3xl font-bold mb-6">Образование и развитие</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                    През 1925 година Атанасов завършва бакалавърска степен по електроинженерство във Флоридския
                    университет с отличен успех. Неговата жажда за знание го води към Айова и Уисконсин, където
                    продължава образованието си.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    През 1930 година получава докторска степен по теоретична физика от Университета на Уисконсин.
                    Дисертацията му е в областта на квантовата механика - тема, която изисква сложни математически
                    изчисления.
                  </p>
                </Card>
              </ScrollReveal>
            </div>
          </section>
        </ParallaxSection>

        <div className="max-w-6xl mx-auto mb-32">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center">
              Времева <span className="gradient-text">линия</span>
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto leading-relaxed">
              Следвайте ключовите моменти от живота на Атанасов - всеки от тях е стъпка към революцията
            </p>
          </ScrollReveal>

          <div className="space-y-16">
            <TimelineItem
              year="1903"
              title="Раждане"
              description="Роден на 4 октомври в Хамилтън, Ню Йорк, в семейство на български имигранти. Баща му Иван Атанасов е електроинженер, който вдъхновява младия Джон."
              icon={<Calendar className="text-accent-foreground" size={32} />}
              color="accent"
              delay={0}
            />

            <TimelineItem
              year="1925"
              title="Бакалавърска степен"
              description="Завършва бакалавърска степен по електроинженерство във Флоридския университет с отличен успех. Показва изключителни способности в математиката и физиката."
              icon={<BookOpen className="text-secondary-foreground" size={32} />}
              color="secondary"
              delay={0.1}
            />

            <TimelineItem
              year="1930"
              title="Докторска степен"
              description="Получава докторска степен по теоретична физика от Университета на Уисконсин. Дисертацията му изисква сложни изчисления, които го карат да мисли за по-бързи методи."
              icon={<Trophy className="text-primary-foreground" size={32} />}
              color="primary"
              delay={0.2}
            />

            <TimelineItem
              year="1937"
              title="Моментът на прозрението"
              description="През студена зимна нощ, докато шофира из Айова, Атанасов има епохално прозрение. Той си представя електронна изчислителна машина, използваща двоична логика и вакуумни лампи."
              icon={<Lightbulb className="text-accent-foreground" size={32} />}
              color="accent"
              delay={0.3}
              highlight={true}
            />

            <TimelineItem
              year="1939"
              title="Начало на работата"
              description="Заедно с дипломирания студент Клифърд Бери, Атанасов започва да строи първия електронен цифров компютър в мазето на физическия факултет в Айова."
              icon={<Rocket className="text-secondary-foreground" size={32} />}
              color="secondary"
              delay={0.4}
            />

            <TimelineItem
              year="1942"
              title="ABC Компютърът"
              description="Завършва Atanasoff-Berry Computer (ABC) - първият електронен цифров компютър в света. Машината използва двоична логика, електронни лампи и регенеративна памет."
              icon={<Award className="text-primary-foreground" size={32} />}
              color="primary"
              delay={0.5}
              highlight={true}
            />

            <TimelineItem
              year="1973"
              title="Съдебно признание"
              description="Федералният съд на САЩ официално признава Атанасов за изобретател на електронния цифров компютър, отменяйки патента на ENIAC."
              icon={<Trophy className="text-accent-foreground" size={32} />}
              color="accent"
              delay={0.6}
            />

            <TimelineItem
              year="1990"
              title="Национална медал"
              description="Получава Националната медал на технологиите от президента Джордж Буш за изобретяването на електронния цифров компютър - най-високото признание в областта."
              icon={<Award className="text-secondary-foreground" size={32} />}
              color="secondary"
              delay={0.7}
              highlight={true}
            />

            <TimelineItem
              year="1995"
              title="Наследство"
              description="На 15 юни, на 91-годишна възраст, Атанасов почива, оставяйки след себе си наследство, което промени света. Неговата визия живее във всеки компютър днес."
              icon={<Star className="text-primary-foreground" size={32} />}
              color="primary"
              delay={0.8}
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto mb-32">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center">
              Ключови <span className="gradient-text">постижения</span>
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto leading-relaxed">
              Иновациите, които промениха света и положиха основите на дигиталната ера
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ScrollReveal delay={0.1}>
              <Card className="p-10 hover:shadow-2xl transition-all duration-500 glass-card hover-lift border-2 border-transparent hover:border-accent/50 group">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 shadow-lg">
                  <Image
                    src="/abc-computer-atanasoff-berry-computer-vintage.jpg"
                    alt="ABC Компютър"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">ABC Компютърът</h3>
                <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                  Първият електронен цифров компютър, използващ вакуумни лампи за изчисления и двоична система. Машината
                  тежи 320 кг и съдържа около 300 вакуумни лампи.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Електронен</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Двоичен</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Революционен</span>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="p-10 hover:shadow-2xl transition-all duration-500 glass-card hover-lift border-2 border-transparent hover:border-secondary/50 group">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 shadow-lg">
                  <Image
                    src="/binary-system-computing-technology-vintage.jpg"
                    alt="Двоична система"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-secondary transition-colors">Двоична логика</h3>
                <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                  Пионер в използването на двоичната система за електронни изчисления. Това решение стана основа на
                  всички съвременни компютри и дигитални устройства.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">0 и 1</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">Логика</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">Основа</span>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card className="p-10 hover:shadow-2xl transition-all duration-500 glass-card hover-lift border-2 border-transparent hover:border-primary/50 group">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 shadow-lg">
                  <Image
                    src="/electronic-circuits-vacuum-tubes-vintage-technolog.jpg"
                    alt="Електронни схеми"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Електронни схеми</h3>
                <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                  Разработи иновативни електронни схеми и концепцията за регенеративна памет, които станаха основа за
                  бъдещите компютърни системи и паметта.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Схеми</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Памет</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Иновация</span>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <Card className="p-10 hover:shadow-2xl transition-all duration-500 glass-card hover-lift border-2 border-transparent hover:border-accent/50 group">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 shadow-lg">
                  <Image
                    src="/patent-documents-legal-technology-innovation.jpg"
                    alt="Патенти"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">Правно признание</h3>
                <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                  През 1973 г. федералният съд на САЩ официално признава Атанасов за изобретател на електронния цифров
                  компютър след дълга съдебна битка.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Съд</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Признание</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Справедливост</span>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>

        <ParallaxSection speed={0.4}>
          <section className="max-w-5xl mx-auto">
            <ScrollReveal>
              <Card className="p-16 text-center glass-card border-2 border-accent/30 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse animation-delay-400" />
                <Brain className="w-20 h-20 text-accent mx-auto mb-8 animate-float" />
                <h2 className="text-4xl sm:text-5xl font-bold mb-6 relative z-10">
                  Наследството на <span className="gradient-text">гения</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8 relative z-10">
                  Джон Атанасов не просто изобрети компютър - той промени начина, по който човечеството мисли, работи и
                  комуникира. Всеки път, когато използваме компютър, смартфон или дигитално устройство, ние използваме
                  плодовете на неговата визия и упоритост.
                </p>
                <p className="text-lg text-muted-foreground/80 italic relative z-10">
                  Неговото наследство живее във всеки бит и байт на дигиталния свят.
                </p>
              </Card>
            </ScrollReveal>
          </section>
        </ParallaxSection>
      </div>
    </div>
  )
}

function TimelineItem({
  year,
  title,
  description,
  icon,
  color,
  delay,
  highlight = false,
}: {
  year: string
  title: string
  description: string
  icon: React.ReactNode
  color: "accent" | "secondary" | "primary"
  delay: number
  highlight?: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)

  const colorClasses = {
    accent: {
      gradient: "from-accent to-secondary",
      text: "text-accent",
      border: "border-accent/50",
      bg: "bg-accent",
    },
    secondary: {
      gradient: "from-secondary to-primary",
      text: "text-secondary",
      border: "border-secondary/50",
      bg: "bg-secondary",
    },
    primary: {
      gradient: "from-primary to-accent",
      text: "text-primary",
      border: "border-primary/50",
      bg: "bg-primary",
    },
  }

  const colors = colorClasses[color]

  return (
    <ScrollReveal delay={delay}>
      <motion.div
        className="flex gap-12 items-start"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ x: 10 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex-shrink-0 w-40 text-right pt-2">
          <motion.span
            className={`text-5xl font-bold gradient-text inline-block ${isHovered ? "text-glow" : ""}`}
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {year}
          </motion.span>
        </div>
        <div className="flex-grow">
          <Card
            className={`p-8 hover:shadow-2xl transition-all duration-500 glass-card border-2 border-transparent hover:${colors.border} hover-lift ${highlight ? "ring-2 ring-accent/20" : ""}`}
          >
            <div className="flex items-start gap-6">
              <motion.div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
                animate={{
                  scale: isHovered ? 1.15 : 1,
                  rotate: isHovered ? 5 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {icon}
              </motion.div>
              <div className="flex-grow">
                <h3 className={`text-2xl font-bold mb-3 transition-colors ${isHovered ? colors.text : ""}`}>
                  {title}
                  {highlight && <Sparkles className="inline-block ml-2 w-5 h-5 text-accent animate-pulse" />}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{description}</p>
              </div>
            </div>
          </Card>
        </div>
      </motion.div>
    </ScrollReveal>
  )
}
