import { type FC } from "react";
import { type LucideIcon } from "lucide-react";

interface FeatureCardProps {
    title: string;
    description: string;
    Icon: LucideIcon;
}

export const FeatureCard: FC<FeatureCardProps> = ({
    title,
    description,
    Icon,
}) => {
    return (
        <div className="p-8 bg-primary/5 rounded-xl hover:bg-primary/10 transition-all">
            <Icon className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-h4 font-semibold text-primary mb-2">{title}</h3>
            <p className="text-primary/80">{description}</p>
        </div>
    );
};
