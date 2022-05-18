//import { NavLink } from "react-router-dom";
import PageWrapper from "../templates/PageWrapper";
import { ReactComponent as CloseButton } from "../images/close-button.svg";
import { useState } from "react";
import CloseWindowConfirmWindow from "../components/CloseWindowConfirmWindow"
import WorkoutProgressBarComponent from "../components/WorkoutProgressBarComponent";

export default function WorkoutScreen() {
    //Counter state for active Workout
    const [workoutCounter, setWorkoutCounter] = useState(30);
    const startWorkoutTimer = () => {
        setTimeout(() => {
            if (workoutCounter > 0) {
                setWorkoutCounter(workoutCounter - 1);
            }
        }, 1000);
    }

    //Close-window state (open/close)
    function CloseWindowConfirmation() {
        return (
            <CloseWindowConfirmWindow></CloseWindowConfirmWindow>
        );
    }
    const [ConfirmationWindowActive, setConfirmationWindowActive] = useState(true);
    const [ConfirmWindow, setConfirmWindow] = useState([]);
    const setConfirmationWindowToActive = () => {
        setConfirmationWindowActive(ConfirmationWindowActive ? false : true);
    };
    const CloseButtonClick = () => {
        if (ConfirmationWindowActive) setConfirmWindow(<CloseWindowConfirmation />);
        else setConfirmWindow();
    };
    const openCinfirmationWindow = () => {
        setConfirmationWindowToActive();
        CloseButtonClick();
    }


    function runWorkoutAnimation (){
        setTimeout(() => {
            
        }, 30_000);
    }


    return (
        <PageWrapper nav={false}>
            <div className="w-full flex" onLoad={runWorkoutAnimation}>
                {/* close button has no function by now */}
                <button onClick={openCinfirmationWindow}><CloseButton className = "fixed right-[19px] top-[25px]" /></button>
                {ConfirmWindow}
                <div className="duration-[150ms] z-10 h-[560px] w-full rounded-t-xs bg-backgroundLight fixed bottom-[-503px] left-0">
                    <button className="mt-[15px] h-[28px] w-[28px] bg-background rounded-[50%] absolute right-[14px]">
                        <p className="text-center text-highlighted-textcolor relative left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] text-ft font-poppins font-bold leading-[30px]">i</p>
                    </button>
                </div>
                <WorkoutProgressBarComponent />
                <div className="w-full h-[100vh] bg-background">
                    <div className="relative left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]">
                        <div className="w-[234px] h-[234px] rounded-[50%] bg-backgroundLight drop-shadow-button relative left-[50%] translate-x-[-50%]">
                            <div className="w-[195px] h-[195px] rounded-[50%] bg-background relative left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]"><h1 className=" relative left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] text-center text-highlighted-textcolor text-h1 font-poppins font-bold" onLoad={startWorkoutTimer()}>{workoutCounter} sec</h1></div>
                            <button><img src="../images/slide-left.svg" className="absolute left-[-62px] top-[50%] translate-y-[-50%]" /></button>
                            <button><img src="../images/slide-right.svg" className="absolute right-[-62px] top-[50%] translate-y-[-50%]" /></button>
                        </div>
                        <h1 className="text-highlighted-textcolor text-h1 font-poppins font-bold text-center relative left-[50%] translate-x-[-50%] mt-[32px]">Plank</h1>
                    </div>
                </div>

            </div>
        </PageWrapper>
    );
}


/*
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
<div className="hidden">
    <h1 className="text-highlighted-textcolor text-h1 font-poppins font-bold relative mt-[32px] ml-[36px]">Plank</h1>
    <p className="ml-[36px] mr-[34px] mt-[5px] text-highlighted-textcolor text-ft font-poppins">Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen.</p>
    <button className="absolute left-[50%] bottom-[81px] z-10 translate-x-[-50%] rounded-s drop-shadow-button bg-background pl-[25px] pr-[25px] text-ft h-[45px] text-highlighted-textcolor" onClick={() => WorkoutInfoSlideDown()}>ok!</button>
</div>
*/