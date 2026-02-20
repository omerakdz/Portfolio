import { ExternalLink } from "lucide-react";

interface Language {
    name: string;
    color: string;
}

interface Project {
    title: string;
    description: string;
    languages: Language[];
    github: string;
}

export default function Projects() {
    const projects: Project[] = [
        {
            title: "Portfolio Website",
            description: "Persoonlijke portfolio waar ik mezelf voorstel",
            languages: [
                { name: "Next.js", color: "#000000" },
                { name: "TypeScript", color: "#3178c6" },
                { name: "Tailwind CSS", color: "#38bdf8" },
                { name: "Shadcn/ui", color: "#000000" },
            ],
            github: "https://github.com/omerakdz/portfolio",
        },
        {
            title: "Fortnite game",
            description:
                "Een interactieve Fortnite app gemaakt met Node.js, Express en MongoDB waar de level, vrienden, record etc. van de gebruiker worden opgeslagen in een database.",
            languages: [
                { name: "Node.js", color: "#68a063" },
                { name: "Express", color: "#444444" },
                { name: "MongoDB", color: "#4db33d" },
                { name: "EJS", color: "#a91e50" },
            ],
            github: "https://github.com/omerakdz/ScriptLab",
        },
        {
            title: "Mini Text Adventure Game",
            description: "Een mini game gemaakt met een groepje in C# waarin je keuzes maakt om verder te komen in het verhaal.",
            languages: [
                { name: "C#", color: "#178600" },
                { name: ".NET", color: "#512bd4" },
            ],
            github: "https://github.com/omerakdz/MiniTextAdventure",
        },
        {
            title: "School bib",
            description: "Een schoolbibliotheek gemaakt in C# met OOP-principes.",
            languages: [
                { name: "C#", color: "#178600" },
                { name: ".NET", color: "#512bd4" },
            ],
            github: "https://github.com/omerakdz/schoolbib",
        },
        {
            title: "Webshop",
            description: "Een simpele webshop gemaakt met HTML, CSS en JavaScript.",
            languages: [
                { name: "JavaScript", color: "#f7df1e" },
            ],
            github: "https://github.com/omerakdz/webshop",
        },
        {
            title: "Pokemon project",
            description:
                "Een project gemaakt met Node.js en Express waar je een overzicht krijgt van alle Pokémons, inclusief gegevens wijzigen en opslaan in een MongoDB-database met middlewares.",
            languages: [
                { name: "Node.js", color: "#68a063" },
                { name: "Express", color: "#444444" },
                { name: "MongoDB", color: "#4db33d" },
            ],
            github: "https://github.com/AP-G-1PRO-Webontwikkeling/projectopdracht-omerakdz",
        },
    ];

    return (
        <div className="flex min-h-screen items-center justify-center px-4">
            <main className="max-w-6xl w-full py-20">
                <div className="space-y-8">
                    <h1 className="text-5xl md:text-7xl font-bold text-foreground">
                        Mijn Projecten
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        Een selectie van projecten waar ik aan heb gewerkt.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors group flex flex-col"
                            >
                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 hover:bg-accent rounded-lg transition-colors"
                                            aria-label="View on GitHub"
                                        >
                                            <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary" />
                                        </a>
                                    </div>
                                    <p className="text-muted-foreground mb-4">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.languages.map((lang) => (
                                        <span
                                            key={lang.name}
                                            className="px-3 py-1 text-sm rounded-full text-white font-medium"
                                            style={{ backgroundColor: lang.color }}
                                        >
                                            {lang.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
