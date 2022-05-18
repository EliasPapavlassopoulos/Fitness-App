import { NavLink } from "react-router-dom";
export default function CloseWindowConfirmWindow() {
    return (
        <div id="closeWindow" className="bg-backgroundLight w-[400px] h-[326px] rounded-[25px] fixed z-40 drop-shadow-button left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="font-poppins font-bold text-h3 text-center text-highlighted-textcolor mt-[89px]">Möchtest du das Workout wirklich beenden?</h3>
            <button className="font-poppins text-ft text-highlighted-textcolor absolute ml-[41px] bottom-[34px]">Nein, weiter machen!</button>
            <NavLink to="/workout/information"><button className="absolute right-[25px] bottom-[22px] rounded-s drop-shadow-button bg-background pl-[25px] pr-[25px] text-highlighted-textcolor text-ft h-[45px]">Ja, beenden</button></NavLink>
        </div>
    );
}