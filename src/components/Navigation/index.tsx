import * as S from "./styled";
import { useState, type FC } from "react";
import { Hamburger } from "./components/Hamburger";

export const Navigation: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <S.NavigationStyled>
            <S.NavigationListWrapper $isOpen={isOpen}>
                <S.NavigationList>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a
                            href="https://www.codexcode.store/"
                            className="active-shop"
                        >
                            Shop
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.codexcode.store/collections/all-themes"
                            className="active"
                        >
                            Themes
                        </a>
                    </li>
                    <li>
                        <a href="/web-development">Web development</a>
                    </li>
                    <li>
                        <a href="/about">About us</a>
                    </li>
                    <li>
                        <a href="https://www.codexcode.store/pages/contact">
                            Contact
                        </a>
                    </li>
                </S.NavigationList>
            </S.NavigationListWrapper>
            <Hamburger
                state={{
                    open: isOpen,
                    setOpen: setIsOpen,
                }}
            />
        </S.NavigationStyled>
    );
};
