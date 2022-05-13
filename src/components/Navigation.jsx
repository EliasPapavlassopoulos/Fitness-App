import { NavLink } from "react-router-dom";
// Home is active on startup
function Navigation() {
    return (
        <nav className="bg-navigation bg-opacity-40 rounded-t-xs flex justify-around w-full h-12 p-3 items-center fixed bottom-0">
            <NavLink to="/">
                <img src="../images/navigation-home-active.svg" />
            </NavLink>
            <NavLink to="/browse">
                <img src="../images/navigation-browse.svg" />
            </NavLink>
            <NavLink to="/profile">
                <img src="../images/navigation-profile.svg" />
            </NavLink>
        </nav>
    );
}

export default Navigation;