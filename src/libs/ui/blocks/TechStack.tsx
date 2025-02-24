import { type FC } from "react";
import { Zap, Palette, Code, FileCode, ShieldCheck } from "lucide-react";

type TechItem = {
    name: string;
    description: string;
    link: string;
    Icon: typeof Zap;
    benefits: string[];
};

export const TechStack: FC = () => {
    const technologies: TechItem[] = [
        {
            name: "Astro",
            description: "Modern Static Site Generator with partial hydration",
            link: "https://astro.build/",
            Icon: Zap,
            benefits: [
                "Zero-JS by default for better performance",
                "Partial hydration for interactive components",
                "Built-in image optimization",
                "Automatic sitemap generation",
            ],
        },
        {
            name: "React",
            description: "Component-Based UI library",
            link: "https://reactjs.org/",
            Icon: Code,
            benefits: [
                "Component-driven development",
                "Rich ecosystem of libraries",
                "Strong community support",
                "Reusable UI components",
            ],
        },
        {
            name: "Tailwind CSS",
            description: "Utility-First CSS Framework",
            link: "https://tailwindcss.com/",
            Icon: Palette,
            benefits: [
                "Rapid UI development",
                "No CSS file maintenance",
                "Consistent design system",
                "Built-in responsive design",
            ],
        },
        {
            name: "Lucide React",
            description: "Beautiful & consistent icons",
            link: "https://lucide.dev/",
            Icon: FileCode,
            benefits: [
                "Lightweight SVG icons",
                "Tree-shakeable imports",
                "Consistent design language",
                "TypeScript support",
            ],
        },
        {
            name: "TypeScript",
            description: "Type Safety & Enhanced Developer Experience",
            link: "https://www.typescriptlang.org/",
            Icon: ShieldCheck,
            benefits: [
                "Type safety across the project",
                "Better IDE support",
                "Reduced runtime errors",
                "Enhanced code maintainability",
            ],
        },
    ];

    return (
        <section className="py-20 px-4 bg-secondary">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-h2-md md:text-h2 text-primary text-center mb-4">
                    Tech Stack
                </h2>
                <p className="text-primary/80 text-center max-w-2xl mx-auto mb-16">
                    Carefully selected technologies for the best developer
                    experience and performance
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {technologies.map((tech) => (
                        <div
                            key={tech.name}
                            className="bg-primary/5 rounded-xl p-8 hover:bg-primary/10 transition-all"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <tech.Icon size={24} className="text-primary" />
                                <a
                                    href={tech.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-h4 font-semibold text-primary hover:text-primary/80 transition-colors"
                                >
                                    {tech.name}
                                </a>
                            </div>
                            <p className="text-primary/80 mb-4">
                                {tech.description}
                            </p>
                            <ul className="space-y-2">
                                {tech.benefits.map((benefit) => (
                                    <li
                                        key={benefit}
                                        className="text-primary/60 text-sm flex items-center gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
