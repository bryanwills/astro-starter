import { type FC } from "react";
import { Folder, File, ChevronRight } from "lucide-react";

type FileItem = {
    name: string;
    description?: string;
    type: "file" | "folder";
    items?: FileItem[];
};

export const Structure: FC = () => {
    const structure: FileItem[] = [
        {
            name: "src",
            type: "folder",
            items: [
                {
                    name: "layouts",
                    type: "folder",
                    description: "Base layouts and SEO meta configurations",
                },
                {
                    name: "libs",
                    type: "folder",
                    items: [
                        {
                            name: "ui",
                            type: "folder",
                            description:
                                "All components, blocks, modules - reusable elements",
                            items: [
                                { name: "blocks", type: "folder" },
                                { name: "components", type: "folder" },
                                { name: "modules", type: "folder" },
                            ],
                        },
                    ],
                },
                {
                    name: "pages",
                    type: "folder",
                    description: "Astro pages (each file maps to a route)",
                },
                {
                    name: "static",
                    type: "folder",
                    description: "All static assets - images, icons, fonts",
                },
            ],
        },
        {
            name: "public",
            type: "folder",
            description: "Public assets (served as-is)",
        },
        {
            name: "astro.config.mjs",
            type: "file",
            description: "Astro configuration",
        },
        {
            name: "tailwind.config.js",
            type: "file",
            description: "Tailwind configuration",
        },
        {
            name: "tsconfig.json",
            type: "file",
            description: "TypeScript configuration",
        },
    ];

    const renderItem = (item: FileItem, depth = 0) => {
        const Icon = item.type === "folder" ? Folder : File;

        return (
            <div
                key={item.name}
                className={`flex flex-col gap-2 ${depth > 0 ? "ml-6" : ""}`}
            >
                <div className="flex items-center gap-3 group">
                    {depth > 0 && (
                        <ChevronRight size={14} className="text-primary/40" />
                    )}
                    <Icon
                        size={18}
                        className={`${
                            item.type === "folder"
                                ? "text-blue-400"
                                : "text-primary/60"
                        }`}
                    />
                    <span className="text-primary font-mono">{item.name}</span>
                    {item.description && (
                        <span className="text-primary/60 text-sm hidden md:inline-block">
                            # {item.description}
                        </span>
                    )}
                </div>
                {item.items?.map((subItem) => renderItem(subItem, depth + 1))}
            </div>
        );
    };

    return (
        <section className="py-20 px-4 bg-secondary">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-h2-md md:text-h2 text-primary text-center mb-4">
                    Project Structure
                </h2>
                <p className="text-primary/80 text-center max-w-2xl mx-auto mb-16">
                    Organized using a libs system for better modularity and
                    scalability
                </p>
                <div className="bg-primary/5 rounded-xl p-8">
                    <div className="flex flex-col gap-4">
                        {structure.map((item) => renderItem(item))}
                    </div>
                </div>
            </div>
        </section>
    );
};
