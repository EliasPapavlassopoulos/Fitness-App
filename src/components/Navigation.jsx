import { NavLink } from "react-router-dom";
import { ReactComponent as NavigationHomeComponent } from "../images/navigation-home.svg";
import { ReactComponent as NavigationBrowseComponent } from "../images/navigation-browse.svg";
import { ReactComponent as NavigationProfileComponent } from "../images/navigation-profile.svg";

export default function Navigation() {
    return (
        <nav className="bg-navigation bg-opacity-40 rounded-t-xs flex justify-around w-full h-12 p-3 items-center fixed bottom-0">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive
                        ? "stroke-highlighted-textcolor"
                        : "stroke-navigationDefault"
                }
            >
                <NavigationHomeComponent />
            </NavLink>
            <NavLink
                to="/browse"
                className={({ isActive }) =>
                    isActive
                        ? "stroke-highlighted-textcolor"
                        : "stroke-navigationDefault"
                }
            >
                <NavigationBrowseComponent />
            </NavLink>
            <NavLink
                to="/profile"
                className={({ isActive }) =>
                    isActive
                        ? "stroke-highlighted-textcolor"
                        : "stroke-navigationDefault"
                }
            >
                <NavigationProfileComponent />
            </NavLink>
        </nav>
    );
}