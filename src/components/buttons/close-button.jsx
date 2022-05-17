import { NavLink } from "react-router-dom";
export default function CloseButton() {
    return (
        <NavLink to="/browse"><img src="../images/close-button.svg" className="absolute right-[19px] top-[25px]" /></NavLink>
    );
}