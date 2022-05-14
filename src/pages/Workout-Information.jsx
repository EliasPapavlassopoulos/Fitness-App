import { NavLink } from "react-router-dom";
import WorkoutInformationDaysComponentPackage from "../components/WorkoutInfomrationDaysComponent"
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
            <h3 className="text-highlighted-textcolor text-h3 font-poppins font-bold mt-[28px] ml-[24px]">So ist das Programm aufgeteilt:</h3>
            <div className="ml-[24px] mr-[24px] mt-[37px] flex justify-around">
                <div className="rounded-[50%] bg-backgroundLight h-[160px] w-[160px]"></div>
                <div className=" relative w-[150px]">
                    <div className="relative top-[50%] translate-y-[-50%]">
                        <div className="flex">
                            <div className="bg-backgroundLight rounded-[50%] h-[14px] w-[14px]"></div>
                            <p className="text-center text-sm mb-[19px] text-highlighted-textcolor leading-[14px] ml-[12px] font-poppins">Krafttraining</p>
                        </div>
                        <div className="flex">
                            <div className="bg-backgroundLight rounded-[50%] h-[14px] w-[14px]"></div>
                            <p className="text-center text-sm mb-[19px]  text-highlighted-textcolor leading-[14px] ml-[12px] font-poppins">Koordination</p>
                        </div>
                        <div className="flex">
                            <div className="bg-backgroundLight rounded-[50%] h-[14px] w-[14px]"></div>
                            <p className="text-center text-sm mb-[19px]  text-highlighted-textcolor leading-[14px] ml-[12px] font-poppins">Cardio</p>
                        </div>
                        <div className="flex">
                            <div className="bg-backgroundLight rounded-[50%] h-[14px] w-[14px]"></div>
                            <p className="text-center text-sm text-highlighted-textcolor leading-[14px] ml-[12px] font-poppins">Beweglichkeit</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex">
                <h3 className="text-highlighted-textcolor text-h3 font-poppins font-bold mt-[66px] ml-[24px]">21 Tage</h3>
                <button className="text-highlighted-textcolor text-sm font-poppins mt-[72px] absolute right-[18px]">Alle anzeigen</button>
            </div>
            <div className="mt-[21px]">
                <WorkoutInformationDaysComponentPackage />
            </div>
            <div className="h-[110px]"></div>
        </div>
    );
}