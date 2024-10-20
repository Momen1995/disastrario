import { NavLink } from "react-router-dom";

const NavLinks = ({ isMobile }) => {
  return (
    <div
      className={`flex w-full ${
        isMobile ? "flex-col items-start pl-4" : "flex-row"
      } gap-4 text-secondary text-sm font-normal`}
    >
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-primary font-bold ${isActive ? "underline" : ""}`
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/incident"
        className={({ isActive }) =>
          `text-secondary ${isActive ? "font-bold underline text-primary" : ""}`
        }
      >
        Incident
      </NavLink>
      <NavLink
        to="/locations"
        className={({ isActive }) =>
          `text-secondary ${isActive ? "font-bold underline text-primary" : ""}`
        }
      >
        Location
      </NavLink>
      <NavLink
        to="/activities"
        className={({ isActive }) =>
          `text-secondary ${isActive ? "font-bold underline text-primary" : ""}`
        }
      >
        Activities
      </NavLink>
      <NavLink
        to="/document"
        className={({ isActive }) =>
          `text-secondary ${isActive ? "font-bold underline text-primary" : ""}`
        }
      >
        Document
      </NavLink>
      <NavLink
        to="/cyphers"
        className={({ isActive }) =>
          `text-secondary ${isActive ? "font-bold underline text-primary" : ""}`
        }
      >
        Cyphers AI
      </NavLink>
    </div>
  );
};

export default NavLinks;
