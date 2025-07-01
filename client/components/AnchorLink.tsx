import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface AnchorLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string; // exemple: "/#accueil"
  children: React.ReactNode;
}

export function AnchorLink({ to, children, ...props }: AnchorLinkProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    const [path, hash] = to.split("#");

    if (location.pathname === path) {
      // Même page, scroll vers l’ancre
      if (hash) {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    } else {
      // Navigation vers la bonne route + scroll après un petit délai
      navigate(path + (hash ? `#${hash}` : ""));
      setTimeout(() => {
        if (hash) {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }
      }, 300);
    }
  };

  return (
    <a href={to} {...props} onClick={handleClick}>
      {children}
    </a>
  );
}
