import Navigation from "../components/Navigation";
import WorkoutProgressBarComponent from "../components/WorkoutProgressBarComponent";

export default function WorkoutWrapper({children, nav = false, progressBar = true}) {
    return (
        <>
           {children}
           {progressBar &&<WorkoutProgressBarComponent />}
           {nav && <Navigation />}
        </>
    );
}