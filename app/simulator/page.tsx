"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause, RotateCcw, Cpu, Zap, Binary } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function SimulatorPage() {
  const [isRunning, setIsRunning] = useState(false)
  const [currentLine, setCurrentLine] = useState(0)
  const [output, setOutput] = useState<string[]>([])
  const [registers, setRegisters] = useState({
    A: "00000000",
    B: "00000000",
    C: "00000000",
    ACC: "00000000",
  })

  const abcCode = [
    "LOAD A, 00000101  ; Load 5 into register A",
    "LOAD B, 00000011  ; Load 3 into register B",
    "ADD A, B          ; Add A and B",
    "STORE ACC, C      ; Store result in C",
    "SHIFT C, LEFT     ; Shift C left by 1",
    "OUTPUT C          ; Output result",
    "HALT              ; Stop execution",
  ]

  useEffect(() => {
    if (!isRunning) return

    const timer = setTimeout(() => {
      if (currentLine < abcCode.length) {
        executeLine(currentLine)
        setCurrentLine(currentLine + 1)
      } else {
        setIsRunning(false)
      }
    }, 1500)

    return () => clearTimeout(timer)
  }, [isRunning, currentLine])

  const executeLine = (lineNum: number) => {
    const line = abcCode[lineNum]
    const newOutput = [...output, `> Executing: ${line.split(";")[0].trim()}`]

    if (line.includes("LOAD A")) {
      setRegisters((prev) => ({ ...prev, A: "00000101" }))
      newOutput.push("  Register A = 00000101 (5)")
    } else if (line.includes("LOAD B")) {
      setRegisters((prev) => ({ ...prev, B: "00000011" }))
      newOutput.push("  Register B = 00000011 (3)")
    } else if (line.includes("ADD")) {
      setRegisters((prev) => ({ ...prev, ACC: "00001000" }))
      newOutput.push("  Accumulator = 00001000 (8)")
    } else if (line.includes("STORE")) {
      setRegisters((prev) => ({ ...prev, C: "00001000" }))
      newOutput.push("  Register C = 00001000 (8)")
    } else if (line.includes("SHIFT")) {
      setRegisters((prev) => ({ ...prev, C: "00010000" }))
      newOutput.push("  Register C = 00010000 (16)")
    } else if (line.includes("OUTPUT")) {
      newOutput.push("  OUTPUT: 16 (decimal)")
    } else if (line.includes("HALT")) {
      newOutput.push("  Program halted successfully")
    }

    setOutput(newOutput)
  }

  const handleReset = () => {
    setIsRunning(false)
    setCurrentLine(0)
    setOutput([])
    setRegisters({
      A: "00000000",
      B: "00000000",
      C: "00000000",
      ACC: "00000000",
    })
  }

  return (
    <div className="py-20 relative overflow-hidden min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto pt-20">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 vintage-label text-sm mb-6">ABC-1942</div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight uppercase tracking-wider">
                ABC Компютър <span className="text-primary">Симулатор</span>
              </h1>
              <div className="max-w-3xl mx-auto vintage-card p-8">
                <p className="text-lg leading-relaxed">
                  Вижте как работи Atanasoff-Berry Computer (ABC) с тази интерактивна симулация. Наблюдавайте как
                  машината изпълнява прости операции с двоична логика, точно както през 1942 година.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <ScrollReveal delay={0.1}>
              <div className="lg:col-span-2 flex justify-content-center items-center">
                <Card className="vintage-card p-6 border-4">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b-4 border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary border-2 border-border flex items-center justify-center">
                        <Cpu className="text-primary-foreground" size={20} />
                      </div>
                      <h2 className="text-2xl font-bold uppercase tracking-wider">Програмен код</h2>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => setIsRunning(!isRunning)}
                        disabled={currentLine >= abcCode.length && !isRunning}
                        className="retro-button bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
                        size="sm"
                      >
                        {isRunning ? <Pause size={16} /> : <Play size={16} />}
                      </Button>
                      <Button
                        onClick={handleReset}
                        className="retro-button bg-accent text-accent-foreground hover:bg-accent/90 font-bold"
                        size="sm"
                      >
                        <RotateCcw size={16} />
                      </Button>
                    </div>
                  </div>

                  <div className="terminal-window p-6 rounded-none font-mono text-sm">
                    {abcCode.map((line, index) => (
                      <div
                        key={index}
                        className={`py-2 px-3 mb-1 transition-all ${
                          index === currentLine && isRunning
                            ? "bg-primary/30 border-l-4 border-primary animate-pulse-border"
                            : index < currentLine
                              ? "opacity-50"
                              : ""
                        }`}
                      >
                        <span className="text-accent mr-4">{String(index + 1).padStart(2, "0")}</span>
                        <span>{line}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-6">
                <Card className="vintage-card p-6 border-4">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b-4 border-border">
                    <div className="w-10 h-10 bg-accent border-2 border-border flex items-center justify-center">
                      <Binary className="text-accent-foreground" size={20} />
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-wider">Регистри</h3>
                  </div>
                  <div className="space-y-4 font-mono">
                    {Object.entries(registers).map(([name, value]) => (
                      <div key={name} className="vintage-card p-4 border-2">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-bold text-sm uppercase tracking-widest">{name}:</span>
                          <span className="text-xs text-muted-foreground">({Number.parseInt(value, 2)})</span>
                        </div>
                        <div className="text-primary text-lg tracking-wider">{value}</div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="vintage-card p-6 border-4">
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b-4 border-border">
                    <div className="w-10 h-10 bg-secondary border-2 border-border flex items-center justify-center">
                      <Zap className="text-secondary-foreground" size={20} />
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-wider">Статус</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="uppercase tracking-wider">Състояние:</span>
                      <span className="font-bold">
                        {isRunning ? "РАБОТИ" : currentLine >= abcCode.length ? "ЗАВЪРШЕН" : "СПРЯН"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="uppercase tracking-wider">Линия:</span>
                      <span className="font-bold">
                        {currentLine}/{abcCode.length}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="uppercase tracking-wider">Цикли:</span>
                      <span className="font-bold">{currentLine * 60} Hz</span>
                    </div>
                  </div>
                </Card>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3}>
            <Card className="vintage-card p-6 border-4">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-4 border-border">
                <div className="w-10 h-10 bg-primary border-2 border-border flex items-center justify-center">
                  <Cpu className="text-primary-foreground" size={20} />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-wider">Изход от изпълнението</h3>
              </div>
              <div className="terminal-window p-6 rounded-none font-mono text-sm min-h-[300px] max-h-[400px] overflow-y-auto">
                {output.length === 0 ? (
                  <div className="text-muted-foreground italic">Натиснете PLAY за да стартирате симулацията...</div>
                ) : (
                  output.map((line, index) => (
                    <div key={index} className="py-1 animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                      {line}
                    </div>
                  ))
                )}
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="vintage-card p-6 border-4">
                <h4 className="text-lg font-bold mb-3 uppercase tracking-wider">Двоична система</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  ABC използва двоична система (0 и 1) за всички изчисления - революционна концепция за времето си.
                </p>
              </Card>
              <Card className="vintage-card p-6 border-4">
                <h4 className="text-lg font-bold mb-3 uppercase tracking-wider">Вакуумни лампи</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Машината използва 300 вакуумни лампи за логически операции и съхранение на данни.
                </p>
              </Card>
              <Card className="vintage-card p-6 border-4">
                <h4 className="text-lg font-bold mb-3 uppercase tracking-wider">Регенеративна памет</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Иновативна система за съхранение на данни, която стана основа за бъдещите компютри.
                </p>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
