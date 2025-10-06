import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl font-mono">JA</span>
              </div>
              <span className="font-bold text-lg">Джон Атанасов</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Проект, посветен на бащата на компютъра и неговия принос към технологиите.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Начало
                </Link>
              </li>
              <li>
                <Link href="/biography" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Биография
                </Link>
              </li>
              <li>
                <Link href="/innovation" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Иновации
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Контакт
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Свържете се</h3>
            <div className="flex gap-4">
              <a
                href="mailto:info@atanasoff.bg"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-all flex items-center justify-center"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-all flex items-center justify-center"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-all flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Проект Джон Атанасов. Всички права запазени.</p>
        </div>
      </div>
    </footer>
  )
}
