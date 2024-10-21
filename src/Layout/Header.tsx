import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-eventPlanner-colors-primary text-eventPlanner-colors-detail p-2">
      <div className="container mx-auto flex justify-center items-center">
        <NavLink
          to="/"
          className="text-xl font-bold text-eventPlanner-colors-detail hover:text-eventPlanner-colors-accent"
        >
          <h1 className="font-roboto-slab text-2xl font-bold">
            EventPlanner 2000
          </h1>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
