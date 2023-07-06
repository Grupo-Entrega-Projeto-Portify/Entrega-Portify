import { useEffect, useState } from "react";
import { SectionStartPerfilLink } from "./styled";

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
      <SectionStartPerfilLink>
        <div className="perfilLink__div">
          <h2 className="perfilLink__h2">Seu Portfólio está online</h2>
          <p className="perfilLink__p">Acesse em</p>
          <p>
            <a target="blank_" href={portfolioLink}>
              www.portify.com.br{portfolioLink}
            </a>
          </p>
        </div>
      </SectionStartPerfilLink>
    </>
  );
};
