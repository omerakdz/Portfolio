import { Linkedin, Github } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <main className="max-w-4xl w-full">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground">
            Welkom bij mijn Portfolio
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Hallo ik ben Ömer, ik ben een student van AP hogeschool en zit nu in mijn 2de jaar graduaat programmeren.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 pt-2">
            <a
              href="https://www.linkedin.com/in/%C3%B6mer-akdeniz/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary hover:bg-accent rounded-lg transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-foreground group-hover:text-primary" />
            </a>
            <a
              href="https://github.com/omerakdz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary hover:bg-accent rounded-lg transition-colors group"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6 text-foreground group-hover:text-primary" />
            </a>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="/projects"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              Bekijk Projecten
            </a>
            <a
              href="/contact"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-accent transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

