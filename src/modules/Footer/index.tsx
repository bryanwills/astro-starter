import { type FC } from "react";
import * as S from "./styled";
import { Logo } from "@components/Logo";
import { Container } from "@components/Container";

export const Footer: FC = () => {
    return (
        <footer className="py-12 md:py-16 border-t border-tertiary border-opacity-50">
            <Container>
                <div className="md:flex md:items-center md:justify-between">
                    <div className="text-primary opacity-50 text-sm mr-4">
                        &copy; trail-landing.com. All rights reserved.
                    </div>
                </div>
            </Container>
        </footer>
    );
};
