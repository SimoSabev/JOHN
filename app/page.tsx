import Link from "next/link"
import { ArrowRight, Cpu, Lightbulb, Users, Calendar, Zap, Award, Code, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 opacity-0 animate-fade-in-up text-center">
              <span className="inline-block px-6 py-3 vintage-label text-sm">БАЩАТА НА КОМПЮТЪРА</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 opacity-0 animate-fade-in-up animation-delay-200 text-center leading-tight tracking-wider">
              ДЖОН ВИНСЕНТ
              <br />
              <span className="text-primary">АТАНАСОВ</span>
            </h1>

            <div className="max-w-4xl mx-auto mb-12">
              <div className="vintage-card p-8 opacity-0 animate-fade-in-up animation-delay-400">
                <p className="text-xl leading-relaxed text-center">
                  Изследвайте живота и наследството на човека, който промени света с изобретяването на първия електронен
                  цифров компютър - Atanasoff-Berry Computer (ABC), завършен през 1942 година.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up animation-delay-600 mb-16">
              <Button
                asChild
                size="lg"
                className="text-lg px-10 py-7 retro-button bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider"
              >
                <Link href="/biography">
                  Започнете историята
                  <ArrowRight className="ml-2" size={22} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-10 py-7 retro-button bg-card text-foreground hover:bg-accent hover:text-accent-foreground font-bold uppercase tracking-wider"
              >
                <Link href="/simulator">
                  <Code className="mr-2" size={22} />
                  ABC Симулатор
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto opacity-0 animate-fade-in-up animation-delay-800">
              <div className="vintage-card p-6 vintage-hover cursor-pointer">
                <Calendar className="w-10 h-10 text-primary mb-3 mx-auto" />
                <div className="text-4xl font-bold text-primary mb-2 text-center">1903</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider text-center">Раждане</div>
              </div>
              <div className="vintage-card p-6 vintage-hover cursor-pointer animation-delay-100">
                <Zap className="w-10 h-10 text-accent mb-3 mx-auto" />
                <div className="text-4xl font-bold text-accent mb-2 text-center">1942</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider text-center">ABC Компютър</div>
              </div>
              <div className="vintage-card p-6 vintage-hover cursor-pointer animation-delay-200">
                <Trophy className="w-10 h-10 text-secondary mb-3 mx-auto" />
                <div className="text-4xl font-bold text-secondary mb-2 text-center">1990</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider text-center">
                  Национална медал
                </div>
              </div>
              <div className="vintage-card p-6 vintage-hover cursor-pointer animation-delay-300">
                <Award className="w-10 h-10 text-primary mb-3 mx-auto" />
                <div className="text-4xl font-bold text-primary mb-2 text-center">∞</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider text-center">Наследство</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-block px-6 py-2 vintage-label text-sm mb-6">ИСТОРИЯТА</div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight uppercase tracking-wider">
                Историята на <span className="text-primary">един гений</span>
              </h2>
              <div className="vintage-card p-8">
                <p className="text-lg leading-relaxed">
                  През 1937 година, в студена зимна нощ, докато шофира из Айова, Джон Атанасов има прозрение, което ще
                  промени света завинаги. Той си представя машина, която използва електричество и двоична логика за
                  изчисления - концепция, която звучи като научна фантастика за времето си.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="max-w-6xl mx-auto">
            <ScrollReveal direction="left">
              <div className="vintage-card p-4 vintage-hover mb-12">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src="/john-atanasoff-working-on-abc-computer-in-laborato.jpg"
                    alt="Джон Атанасов и компютърът ABC"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 border-t-4 border-border mt-4">
                  <h3 className="text-3xl font-bold mb-3 uppercase tracking-wider">ABC Компютърът</h3>
                  <p className="text-lg leading-relaxed">
                    Първият електронен цифров компютър в света - революция, родена от упоритост и визия. Машината
                    използва 300 вакуумни лампи и тежи 320 килограма.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 relative bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 vintage-label text-sm mb-6">ИЗСЛЕДВАЙТЕ</div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 uppercase tracking-wider">
                Открийте неговото <span className="text-primary">наследство</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <ScrollReveal delay={0.1}>
              <Card className="vintage-card p-8 vintage-hover border-4">
                <div className="w-16 h-16 bg-primary border-4 border-border flex items-center justify-center mb-6 mx-auto">
                  <Cpu size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center uppercase tracking-wider">Биография</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-center">
                  От детството в семейство на имигранти до световно признание.
                </p>
                <Link
                  href="/biography"
                  className="text-primary hover:text-accent inline-flex items-center gap-2 font-bold uppercase tracking-wider mx-auto block w-fit border-b-2 border-primary hover:border-accent transition-colors"
                >
                  Прочетете
                  <ArrowRight size={18} />
                </Link>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="vintage-card p-8 vintage-hover border-4">
                <div className="w-16 h-16 bg-accent border-4 border-border flex items-center justify-center mb-6 mx-auto">
                  <Lightbulb size={32} className="text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center uppercase tracking-wider">Иновации</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-center">
                  Как изобретението постави основите на дигиталната ера.
                </p>
                <Link
                  href="/innovation"
                  className="text-accent hover:text-primary inline-flex items-center gap-2 font-bold uppercase tracking-wider mx-auto block w-fit border-b-2 border-accent hover:border-primary transition-colors"
                >
                  Изследвайте
                  <ArrowRight size={18} />
                </Link>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card className="vintage-card p-8 vintage-hover border-4">
                <div className="w-16 h-16 bg-secondary border-4 border-border flex items-center justify-center mb-6 mx-auto">
                  <Code size={32} className="text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center uppercase tracking-wider">Симулатор</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-center">
                  Вижте как работи ABC компютърът с интерактивна симулация.
                </p>
                <Link
                  href="/simulator"
                  className="text-secondary hover:text-primary inline-flex items-center gap-2 font-bold uppercase tracking-wider mx-auto block w-fit border-b-2 border-secondary hover:border-primary transition-colors"
                >
                  Симулирайте
                  <ArrowRight size={18} />
                </Link>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <Card className="vintage-card p-8 vintage-hover border-4">
                <div className="w-16 h-16 bg-primary border-4 border-border flex items-center justify-center mb-6 mx-auto">
                  <Users size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center uppercase tracking-wider">Контакт</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-center">
                  Споделете вашите мисли и участвайте в анкетата.
                </p>
                <Link
                  href="/contact"
                  className="text-primary hover:text-accent inline-flex items-center gap-2 font-bold uppercase tracking-wider mx-auto block w-fit border-b-2 border-primary hover:border-accent transition-colors"
                >
                  Свържете се
                  <ArrowRight size={18} />
                </Link>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <Card className="vintage-card p-12 text-center border-4">
                <div className="w-16 h-16 bg-accent border-4 border-border flex items-center justify-center mx-auto mb-8">
                  <Zap className="text-accent-foreground" size={32} />
                </div>
                <blockquote className="text-2xl sm:text-3xl font-bold mb-6 leading-tight uppercase tracking-wide">
                  "Компютърът е само инструмент. Важното е какво правим с него."
                </blockquote>
                <p className="text-lg text-muted-foreground uppercase tracking-widest">— Джон Винсент Атанасов</p>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 relative bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Card className="max-w-4xl mx-auto vintage-card p-16 text-center border-4">
              <div className="w-20 h-20 bg-primary border-4 border-border flex items-center justify-center mx-auto mb-8">
                <Award className="text-primary-foreground" size={40} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 uppercase tracking-wider">
                Готови да научите повече?
              </h2>
              <p className="text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
                Потопете се в историята на компютърните технологии и открийте как един човек промени света завинаги
              </p>
              <Button
                asChild
                size="lg"
                className="text-lg px-12 py-8 retro-button bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider"
              >
                <Link href="/biography">
                  Започнете пътешествието
                  <ArrowRight className="ml-2" size={24} />
                </Link>
              </Button>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
