import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <div className="flex gap-4 text-secondary text-sm font-normal">
        <NavLink to="/" className={`text-primary font-bold`}>
          Dashboard
        </NavLink>
        <NavLink to="/incident">Incident</NavLink>
        <NavLink to="/location">Location</NavLink>
        <NavLink to="/activities">Activities</NavLink>
        <NavLink to="/document">Document</NavLink>
        <NavLink to="/cyphers">Cyphers AI</NavLink>
      </div>
    </>
  );
};

export default NavLinks;
