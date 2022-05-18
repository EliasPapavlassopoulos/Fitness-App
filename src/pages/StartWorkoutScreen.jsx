import { NavLink } from "react-router-dom";
import PageWrapper from "../templates/PageWrapper";

export default function StartWorkoutScreen() {
    return (
        <PageWrapper nav = {false}>
            <p className="text-center text-sm text-highlighted-textcolor font-poppins pt-[25px]">Titel des Programms</p>
            <NavLink to="/workout/information"><button className="absolute top-[23px] right-[18px]"><img src="/images/back-button.svg" /></button></NavLink>
            <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h1 className="text-center text-h1 font-bold text-highlighted-textcolor font-poppins">Tag 1</h1>
                <p className="text-center text-sm text-highlighted-textcolor font-poppins">26 Min. · Kraft und Koordination</p>
            </div>
            <NavLink to="/workout/[id]"><button className="fixed left-[50%] bottom-[55px] z-10 translate-x-[-50%] rounded-s drop-shadow-button bg-gradient-to-tl from-gradient1-color1 to-gradient1-color2 pl-[25px] pr-[25px] text-background text-ft h-[45px]">los!</button></NavLink>
        </PageWrapper>
    );
}