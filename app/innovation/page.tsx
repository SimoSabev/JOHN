import Image from "next/image"
import { Rocket, Brain, Globe, Sparkles, Zap, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function InnovationPage() {
  return (
    <div className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl animate-float animation-delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto mb-32 text-center pt-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card mb-8 opacity-0 animate-fade-in-up">
            <Sparkles size={20} className="text-accent" />
            <span className="text-sm font-semibold">Иновации и влияние</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 opacity-0 animate-fade-in-up animation-delay-200 leading-tight">
            Влиянието на <span className="gradient-text animate-gradient">иновациите</span>
          </h1>
          <p className="text-2xl text-muted-foreground opacity-0 animate-fade-in-up animation-delay-400 leading-relaxed max-w-4xl mx-auto">
            Как изобретението на Атанасов промени света и какво означава за бъдещето на технологиите
          </p>
        </div>

        <div className="max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="opacity-0 animate-slide-in-left order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl hover-lift">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                <Image
                  src="/modern-computer-technology-digital-innovation.jpg"
                  alt="Съвременни технологии"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="opacity-0 animate-slide-in-right animation-delay-200 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 mb-6">
                <TrendingUp size={20} className="text-accent" />
                <span className="text-sm font-semibold text-accent">От идея до революция</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                От идея до <span className="gradient-text">революция</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                Изобретението на Джон Атанасов не е просто технологично постижение - то е началото на дигиталната ера.
                ABC компютърът постави основите на всички съвременни компютърни системи.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                Днес, когато използваме смартфони, лаптопи или суперкомпютри, всички те се основават на принципите,
                които Атанасов разработи преди повече от 80 години.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Неговата визия за електронни изчисления трансформира не само науката, но и начина, по който живеем,
                работим и комуникираме.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="opacity-0 animate-slide-in-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 mb-6">
                <Zap size={20} className="text-secondary" />
                <span className="text-sm font-semibold text-secondary">Бъдещето на технологиите</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                Бъдещето на <span className="gradient-text">технологиите</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                Наследството на Атанасов продължава да вдъхновява нови поколения иноватори. Квантовите компютри,
                изкуственият интелект и машинното обучение са естествено продължение на неговата работа.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                Принципите на двоичната логика и електронните изчисления остават фундаментални за всички нови
                технологии, които разработваме днес.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Бъдещето на технологиите е изградено върху основите, които Атанасов положи - иновация, упоритост и визия
                за по-добър свят.
              </p>
            </div>
            <div className="opacity-0 animate-slide-in-right animation-delay-200">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl hover-lift">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                <Image
                  src="/future-technology-ai-quantum-computing-innovation.jpg"
                  alt="Бъдещи технологии"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mb-32">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center">
            Ключови <span className="gradient-text">теми</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card className="p-10 hover:shadow-2xl transition-all duration-500 opacity-0 animate-fade-in-up hover-lift glass-card border-2 border-transparent hover:border-accent/50 group">
              <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Rocket size={40} className="text-accent-foreground" />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/50 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Иновацията като двигател</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Атанасов ни показва, че истинската иновация изисква смелост да мислим различно. Неговият подход към
                решаването на проблеми - комбинация от теория и практика - е модел за всички иноватори.
              </p>
            </Card>

            <Card className="p-10 hover:shadow-2xl transition-all duration-500 opacity-0 animate-fade-in-up animation-delay-200 hover-lift glass-card border-2 border-transparent hover:border-secondary/50 group">
              <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Brain size={40} className="text-secondary-foreground" />
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Ролята на младите в науката</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Младите хора са бъдещето на науката и технологиите. Атанасов започна своята работа като млад учен,
                доказвайки че възрастта не е пречка за революционни открития. Всеки млад човек може да бъде следващият
                Атанасов.
              </p>
            </Card>

            <Card className="p-10 hover:shadow-2xl transition-all duration-500 opacity-0 animate-fade-in-up animation-delay-400 hover-lift glass-card border-2 border-transparent hover:border-primary/50 group">
              <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Globe size={40} className="text-primary-foreground" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Глобално влияние</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Изобретението на Атанасов надхвърля границите и култури. То показва как една идея може да промени целия
                свят и да обедини хората чрез технологии. Днес милиарди хора използват плодовете на неговата работа.
              </p>
            </Card>

            <Card className="p-10 hover:shadow-2xl transition-all duration-500 opacity-0 animate-fade-in-up animation-delay-600 hover-lift glass-card border-2 border-transparent hover:border-accent/50 group">
              <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-accent via-secondary to-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg animate-pulse-glow">
                <Sparkles size={40} className="text-accent-foreground" />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/50 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Вдъхновение за бъдещето</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Историята на Атанасов ни учи, че упоритостта и вярата в идеите си могат да преодолеят всякакви
                препятствия. Неговото наследство продължава да вдъхновява нови поколения да мечтаят смело и да създават
                бъдещето.
              </p>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="p-16 text-center relative overflow-hidden border-0 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-secondary/20 to-primary/20 animate-gradient" />
            <div className="absolute inset-0 glass-card" />
            <div className="relative z-10">
              <Sparkles className="w-16 h-16 text-accent mx-auto mb-8 opacity-0 animate-scale-in" />
              <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-balance leading-tight">
                "Бъдещето принадлежи на тези, които вярват в красотата на мечтите си."
              </blockquote>
              <p className="text-xl text-muted-foreground">Вдъхновено от духа на Джон Атанасов</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
