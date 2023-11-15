import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCardContext } from "../../Context";

const Navbar = () => {
  const context = useContext(ShoppingCardContext);
  const activeStyle = 'underline underline-offset-4';

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
            isActive ? activeStyle : undefined}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={({ isActive }) =>
            isActive ? activeStyle : undefined}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/elctronics"
            className={({ isActive }) =>
            isActive ? activeStyle : undefined}
          >
            Elctronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            className={({ isActive }) =>
            isActive ? activeStyle : undefined}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            className={({ isActive }) =>
            isActive ? activeStyle : undefined}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            className={({ isActive }) =>
            isActive ? activeStyle : undefined}
          >
            Others
          </NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-3">
        <li className="text-black/60">Mauricio</li>
        <li>
          <NavLink
          to="/my-orders"
          className={({isActive}) =>
            isActive ? activeStyle : undefined}
            >
              My orders
          </NavLink>
        </li>
        <li>
          <NavLink
          to="/my-account"
          className={({isActive}) =>
            isActive ? activeStyle : undefined}>
              My Account
          </NavLink>
        </li>
        <li>
          <NavLink
          to="/sig-in"
          className={({isActive}) =>
            isActive ? activeStyle : undefined}>
            Sig in
          </NavLink>
        </li>
        <li className="flex items-center">
          <ShoppingBagIcon className="h-6 w-6 text-black"></ShoppingBagIcon>
          <div>
            {context.count}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
