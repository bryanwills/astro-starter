import { Container } from "@components/Container";
import { Icon } from "@static/icons";
import { Image, type ImageProps } from "@static/images";
import { type FC } from "react";

export type ImageContentProps = {
    data: {
        imagePosition: "left" | "right";
        aboveTitle: string;
        title: string;
        description: string;
        image: ImageProps["srcLocal"];
    };
};

export const ImageContent: FC<ImageContentProps> = ({
    data: { aboveTitle, title, description, imagePosition, image },
}) => {
    /**
     * Do not render if there are no elements
     */
    if (!image && !title) {
        return null;
    }

    return (
        <section className="mt-20 mb-40">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div
                        className={`${
                            imagePosition === "left"
                                ? "md:order-1"
                                : "md:order-2"
                        }`}
                    >
                        <Image srcLocal={image} alt="hero image" />
                    </div>

                    <div
                        className={`${
                            imagePosition === "left"
                                ? "md:order-2"
                                : "md:order-1"
                        } `}
                    >
                        <div>
                            <div className="text-xl text-tertiary mb-2">
                                {aboveTitle}
                            </div>
                            <h3 className="text-h3 mb-3">{title}</h3>
                            <p className="text-p-md md:text-xl text-primary opacity-50 mb-4 max-w-lg">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
