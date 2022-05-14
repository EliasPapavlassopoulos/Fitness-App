import { NavLink } from "react-router-dom";
export default function WorkoutInformation() {
    return (
        <div className="workoutInformation">
            <div className="h-[540px] bg-gradient-to-tl from-gradient1-color1 to-gradient1-color2">
                <NavLink to="/browse"><img src="../images/close-button.svg" className="absolute right-[19px] top-[25px]" /></NavLink>
                <h1 className="text-highlighted-textcolor text-h1 font-poppins font-bold relative top-[50%] translate-y-[-50%] text-center ml-[33px] mr-[33px]" >Titel des Programms</h1>
                <div className="flex justify-around w-full items-center absolute top-[483px]">
                    <div>
                        <div className="bg-backgroundLight rounded-[50%] h-[25px] w-[25px] relative left-[50%] translate-x-[-50%]"></div>
                        <p className="pt-[5px] text-center text-xs text-highlighted-textcolor uppercase tracking-[3px]">Kraft</p>
                    </div>
                    <div>
                        <div className="bg-backgroundLight rounded-[50%] h-[25px] w-[25px] relative left-[50%] translate-x-[-50%]"></div>
                        <p className="pt-[5px] text-center text-xs text-highlighted-textcolor uppercase tracking-[3px]">Leicht</p>
                    </div>
                    <div>
                        <div className="bg-backgroundLight rounded-[50%] h-[25px] w-[25px] relative left-[50%] translate-x-[-50%]"></div>
                        <p className="pt-[5px] text-center text-xs text-highlighted-textcolor uppercase tracking-[3px]">6 Wochen</p>
                    </div>
                </div>
            </div>
            <div className="bg-backgroundLight pl-[24px] pt-[20px] pr-[31px] pb-[17px]">
                <p className="text-textcolor text-ft font-poppins">
                    Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen.
                </p>
                <NavLink to="/workout/[id]"><button className="fixed left-[50%] bottom-[55px] z-10 translate-x-[-50%] rounded-s drop-shadow-button bg-gradient-to-tl from-gradient1-color1 to-gradient1-color2 pl-[25px] pr-[25px] text-background text-ft h-[45px]">jetzt starten</button></NavLink>
            </div>
            <div className="h-[60px]"></div>
        </div>
    );
}