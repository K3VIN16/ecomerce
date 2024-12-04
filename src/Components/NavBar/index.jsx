import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { ShoppingCardContext } from "../../Contexts";

const NavBar = () => {
  const activeStyle = "underline underline-offset-4";

  const context = useContext(ShoppingCardContext);

  const findLabel = (label, category) => {
    return (
      <NavLink
        to={`/${category}`}
        className={({ isActive }) => (isActive ? activeStyle : undefined)}
        onClick={() => context.setSearchByCategory(category)}
      >
        {label}
      </NavLink>
    );
  };

  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 bg-gray-300">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>{findLabel("All", "")}</li>
        <li>{findLabel("Men's clothing", "men's clothing")}</li>
        <li>{findLabel("Women's clothing", "women's clothing")}</li>
        <li>{findLabel("Electronics", "electronics")}</li>
        <li>{findLabel("Jewelery", "jewelery")}</li>
      </ul>

      <ul className="flex items-center gap-3">
        <li className="text-black/60">tapiok16@gmail.com</li>
        <li>
          <NavLink
            to="/my-order"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Order
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li> */}
        <li className="flex items-center">
          <ShoppingCartIcon className="size-6 text-gray-600" />
          <div>{context.count}</div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
