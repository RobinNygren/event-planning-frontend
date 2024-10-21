import { Menu } from "@headlessui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-eventPlanner-colors-primary text-eventPlanner-colors-detail p-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Menu as="div" className="relative">
            {/* Optional: You can add Menu button here if needed in the future */}
          </Menu>
          <NavLink
            to="/event-page"
            className="px-4 py-2 rounded hover:bg-eventPlanner-colors-accent text-eventPlanner-colors-detail"
          >
            Event Page
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
