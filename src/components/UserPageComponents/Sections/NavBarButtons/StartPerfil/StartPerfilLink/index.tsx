import { useEffect, useState } from "react";

export const SectionStartPerfilLinkUserPage = () => {
    const [userID, setUserID] = useState<string | null>(null);

    useEffect(() => {
        const userString = localStorage.getItem("@USER");
        if (userString) {
            const user = JSON.parse(userString);
            const userId = user.id;
            setUserID(userId);
        }
    }, []);

    const portfolioLink = `/portfolios/${userID}`;

    return (
        <>
            <section>
                <h2>Seu Portfólio está online</h2>
                <p>Acesse em</p>
                <p>
                    <a href={portfolioLink}>{portfolioLink}</a>
                </p>
            </section>
        </>
    );
};
