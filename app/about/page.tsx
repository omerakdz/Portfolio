export default function About() {
    return (
        <div className="flex min-h-screen items-center justify-center px-4">
            <main className="max-w-4xl w-full py-20">
                <div className="space-y-8">
                    <h1 className="text-5xl md:text-7xl font-bold text-foreground">
                        Over Mij
                    </h1>

                    <div className="space-y-6">
                        <section>
                            <h2 className="text-3xl font-semibold text-foreground mb-4">
                                Wie ben ik?
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Ik ben Ömer, student aan AP hogeschool en volg graduaat programmeren. Ik vind het leuk om me bezig te houden met programmeren, het is iets wat ik al van jong graag doe.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-foreground mb-4">
                                Vaardigheden
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {[
                                    "React", "Next.js", "TypeScript", "Node.js",
                                    "C#", "Git", "JavaScript"
                                ].map((skill) => (
                                    <div
                                        key={skill}
                                        className="px-4 py-3 bg-secondary rounded-lg text-center hover:bg-accent transition-colors"
                                    >
                                        <span className="font-medium text-foreground">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-foreground mb-4">
                                Mijn doelen
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Mijn doel is om mezelf te ontwikkelen in de IT wereld. Of het nu web/software development , testing of database beheer is: Ik ben klaar en gemotiveerd om ervaring op te doen en mijn vaardigehden en kennis verder te ontwikkelen.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
