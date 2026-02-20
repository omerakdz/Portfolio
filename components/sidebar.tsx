"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Home, User, FolderGit2, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: User },
    { name: "Projects", href: "/projects", icon: FolderGit2 },
    { name: "Contact", href: "/contact", icon: Mail },
];

export function Sidebar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const pathname = usePathname();

    return (
        <>
            {/* Mobile menu button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-4 left-4 z-50 p-4 rounded-lg bg-secondary hover:bg-accent transition-colors md:hidden"
                aria-label="Toggle menu"
            >
                {isOpen ? (
                    <X className="h-7 w-7 text-foreground" />
                ) : (
                    <Menu className="h-7 w-7 text-foreground" />
                )}
            </button>

            {/* Desktop menu button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="hidden md:block fixed top-4 left-4 z-50 p-4 rounded-lg bg-secondary hover:bg-accent transition-colors"
                aria-label="Toggle menu"
            >
                {isOpen ? (
                    <X className="h-7 w-7 text-foreground" />
                ) : (
                    <Menu className="h-7 w-7 text-foreground" />
                )}
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed top-0 left-0 z-40 h-full w-64 bg-card border-r border-border transition-transform duration-300 ease-in-out",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex flex-col h-full pt-20 pb-4 px-4">
                    {/* Profile Image */}
                    <div className="flex justify-center mb-8">
                        <div className="relative w-32 h-32 rounded-full border-4 border-primary overflow-hidden shadow-lg">
                            <Image
                                src="/img/Foto.png"
                                alt="Profile"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    <nav className="flex-1 space-y-2">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                                        isActive
                                            ? "bg-primary text-primary-foreground"
                                            : "hover:bg-accent text-foreground"
                                    )}
                                >
                                    <item.icon className="h-5 w-5" />
                                    <span className="font-medium">{item.name}</span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </aside>
        </>
    );
}
