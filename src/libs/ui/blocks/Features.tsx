import { type FC } from "react";
import { Zap, Code, Layout, FileJson, Image, Palette } from "lucide-react";
import { FeatureCard } from "../components/FeatureCard";

export const Features: FC = () => {
    const features = [
        {
            title: "Project Structure",
            description:
                "Organized using a libs system for reusability and modular architecture.",
            Icon: Layout,
        },
        {
            title: "Static Media",
            description:
                "Self-hosted fonts and optimized images with TypeScript support.",
            Icon: Image,
        },
        {
            title: "SEO Ready",
            description:
                "Automatic sitemap generation and meta configurations.",
            Icon: FileJson,
        },
        {
            title: "Modern Stack",
            description: "Astro + React + TypeScript + Tailwind CSS.",
            Icon: Code,
        },
        {
            title: "Performance",
            description: "Optimized assets and lightweight HTML structure.",
            Icon: Zap,
        },
        {
            title: "Styling System",
            description: "Utility-first approach with Tailwind CSS.",
            Icon: Palette,
        },
    ];

    return (
        <section id="features" className="py-20 px-4 bg-secondary">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-h2-md md:text-h2 text-primary text-center mb-4">
                    Features
                </h2>
                <p className="text-primary/80 text-center max-w-2xl mx-auto mb-16">
                    Everything you need to build modern, SEO-friendly static
                    websites
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <FeatureCard key={feature.title} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};
