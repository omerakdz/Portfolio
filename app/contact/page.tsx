"use client";

import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: null, message: "" });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({
                    type: "success",
                    message: "Bericht succesvol verzonden! Ik neem zo snel mogelijk contact op.",
                });
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus({
                    type: "error",
                    message: data.error || "Er ging iets mis. Probeer het later opnieuw.",
                });
            }
        } catch (error) {
            setStatus({
                type: "error",
                message: "Er ging iets mis. Probeer het later opnieuw.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="flex min-h-screen items-center justify-center px-4">
            <main className="max-w-4xl w-full py-20">
                <div className="space-y-8">
                    <h1 className="text-5xl md:text-7xl font-bold text-foreground">
                        Neem Contact Op
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Heb je een vraag of wil je samenwerken? Stuur me een bericht!
                    </p>

                    {status.type && (
                        <div
                            className={`p-4 rounded-lg ${status.type === "success"
                                ? "bg-green-500/10 text-green-500 border border-green-500/20"
                                : "bg-red-500/10 text-red-500 border border-red-500/20"
                                }`}
                        >
                            {status.message}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6 pt-8">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-foreground mb-2"
                            >
                                Naam
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                                placeholder="Je naam"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-foreground mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                                placeholder="je@email.com"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-foreground mb-2"
                            >
                                Bericht
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
                                placeholder="Je bericht..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "Versturen..." : "Verstuur Bericht"}
                        </button>
                    </form>

                    <div className="pt-8 space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">
                            Of vind me hier:
                        </h2>
                        <div className="flex flex-col gap-3 text-muted-foreground">
                            <p>📧 Email: omerakdeniz1208@gmail.com</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
