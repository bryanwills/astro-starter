import { type FC } from "react";

interface Command {
    command: string;
    npm: string;
    yarn: string;
    description: string;
}

export const Commands: FC = () => {
    const commands: Command[] = [
        {
            command: "Install",
            npm: "npm install",
            yarn: "yarn install",
            description: "Installs dependencies",
        },
        {
            command: "Dev",
            npm: "npm run dev",
            yarn: "yarn dev",
            description: "Starts local dev server at localhost:4321",
        },
        {
            command: "Build",
            npm: "npm run build",
            yarn: "yarn build",
            description: "Build your production site to ./dist/",
        },
        {
            command: "Preview",
            npm: "npm run preview",
            yarn: "yarn preview",
            description: "Preview your build locally, before deploying",
        },
    ];

    return (
        <section className="py-20 px-4 bg-secondary">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-h2-md md:text-h2 text-primary text-center mb-16">
                    Commands
                </h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-primary/10">
                                <th className="p-4 text-primary">Command</th>
                                <th className="p-4 text-primary">npm</th>
                                <th className="p-4 text-primary">yarn</th>
                                <th className="p-4 text-primary">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {commands.map((cmd) => (
                                <tr
                                    key={cmd.command}
                                    className="border-b border-primary/10"
                                >
                                    <td className="p-4 text-primary">
                                        {cmd.command}
                                    </td>
                                    <td className="p-4">
                                        <code className="bg-primary/10 px-2 py-1 rounded text-primary">
                                            {cmd.npm}
                                        </code>
                                    </td>
                                    <td className="p-4">
                                        <code className="bg-primary/10 px-2 py-1 rounded text-primary">
                                            {cmd.yarn}
                                        </code>
                                    </td>
                                    <td className="p-4 text-primary/80">
                                        {cmd.description}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};
