"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="fixed top-4 right-4 z-50 p-4 rounded-lg bg-secondary hover:bg-accent transition-colors"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <Sun className="h-7 w-7 text-foreground" />
            ) : (
                <Moon className="h-7 w-7 text-foreground" />
            )}
        </button>
    );
}
