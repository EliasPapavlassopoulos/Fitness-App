import Navigation from "../components/Navigation";
import WInfoSlide from "../components/workouts/workoutSite/WInfoSlide"
import WorkoutProgressBarComponent from "../components/workouts/workoutSite/WorkoutProgressBarComponent"
import CloseWindowConfirmWindow from "../components/CloseWindowConfirmWindow"

export default function WorkoutWrapper({children, nav = false, WInfoSlideCheck = false, closeWindowConfirmation = false }) {
    return (
        <>
           {children}
           {<WorkoutProgressBarComponent />}
           {WInfoSlideCheck && <WInfoSlide />}
           {nav && <Navigation />}
           {closeWindowConfirmation && <CloseWindowConfirmWindow />}
        </>
    );
}