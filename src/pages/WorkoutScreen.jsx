//import { NavLink } from "react-router-dom";
export default function WorkoutScreen() {
    function WorkoutInfoSlideUp() {
        document.getElementById("WorkoutInfoSlide").style.bottom = "0";
        document.getElementById("WorkoutInfoSlideButton").style.display = "none"
        document.getElementById("WorkoutInfoSlideContent").style.display = "block"
    }
    function WorkoutInfoSlideDown() {
        document.getElementById("WorkoutInfoSlide").style.bottom = "-503px";
        document.getElementById("WorkoutInfoSlideButton").style.display = "block"
        document.getElementById("WorkoutInfoSlideContent").style.display = "none"
    }
    return (
        <div id="workoutContent" className="w-[300%] flex">
            {/* close button has no function by now */}
            <button id="closeWorkoutButton" onClick={WorkoutScreen}><img src="../images/close-button.svg" className="absolute right-[19px] top-[25px]" /></button>
            <div id="WorkoutInfoSlide" className="duration-[150ms] z-10 h-[560px] w-full rounded-t-xs bg-backgroundLight fixed bottom-[-503px] left-0">
                <button id="WorkoutInfoSlideButton" className="mt-[15px] h-[28px] w-[28px] bg-background rounded-[50%] absolute right-[14px]">
                    <p className="text-center text-highlighted-textcolor relative left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] text-ft font-poppins font-bold leading-[30px]" onClick={() => WorkoutInfoSlideUp()}>i</p>
                </button>
                <div id="WorkoutInfoSlideContent" className="hidden">
                    <h1 className="text-highlighted-textcolor text-h1 font-poppins font-bold relative mt-[32px] ml-[36px]">Plank</h1>
                    <p className="ml-[36px] mr-[34px] mt-[5px] text-highlighted-textcolor text-ft font-poppins">Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen.</p>
                    <button className="absolute left-[50%] bottom-[81px] z-10 translate-x-[-50%] rounded-s drop-shadow-button bg-background pl-[25px] pr-[25px] text-ft h-[45px] text-highlighted-textcolor" onClick={() => WorkoutInfoSlideDown()}>ok!</button>
                </div>
            </div>
            <div className="h-[25px] w-[436px] fixed left-[50%] top-[75px] z-30 flex translate-x-[-12.5px]">
                <div className="w-[25px] h-[25px] rounded-[50%] drop-shadow-button bg-gradient-to-tl from-gradient1-color1 to-gradient1-color2">
                </div>
                <hr className="w-[52px] h-0 border-dotted border-backgroundLight border-t-[3px] relative top-[50%] translate-y-[-50%] mr-[6px] ml-[6px]"></hr>
                <div className="w-[25px] h-[25px] rounded-[50%] border-backgroundLight border-[3px]"></div>
                <hr className="w-[52px] h-0 border-dotted border-backgroundLight border-t-[3px] relative top-[50%] translate-y-[-50%] mr-[6px] ml-[6px]"></hr>
                <div className="w-[25px] h-[25px] rounded-[50%] border-backgroundLight border-[3px]"></div>
                <hr className="w-[52px] h-0 border-dotted border-backgroundLight border-t-[3px] relative top-[50%] translate-y-[-50%] mr-[6px] ml-[6px]"></hr>
                <div className="w-[25px] h-[25px] rounded-[50%] border-backgroundLight border-[3px]"></div>
                <hr className="w-[52px] h-0 border-dotted border-backgroundLight border-t-[3px] relative top-[50%] translate-y-[-50%] mr-[6px] ml-[6px]"></hr>
                <div className="w-[25px] h-[25px] rounded-[50%] border-backgroundLight border-[3px]"></div>
            </div>
            <div className="w-[33.33%] h-[100vh] bg-background">
                <div className="relative left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]">
                    <div className="w-[234px] h-[234px] rounded-[50%] bg-backgroundLight drop-shadow-button relative left-[50%] translate-x-[-50%]">
                        <div className="w-[195px] h-[195px] rounded-[50%] bg-background relative left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]"><h1 className=" relative left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] text-center text-highlighted-textcolor text-h1 font-poppins font-bold ">30 sec</h1></div>
                        <button><img src="../images/slide-left.svg" className="absolute left-[-62px] top-[50%] translate-y-[-50%]" /></button>
                        <button><img src="../images/slide-right.svg" className="absolute right-[-62px] top-[50%] translate-y-[-50%]" /></button>
                    </div>
                    <h1 className="text-highlighted-textcolor text-h1 font-poppins font-bold text-center relative left-[50%] translate-x-[-50%] mt-[32px]">Plank</h1>
                </div>
            </div>
            <div className="w-[33.33%] h-[100vh] bg-background z-20">
            </div>
            <div className="w-[33.33%] h-[100vh] bg-background">
            </div>
        </div>
    );
}