import { NavLink } from "react-router-dom";
let Workouts = ['Titel des Programms', '100 Push-Ups Challenge', 'Titel des Programms', 'Stretch and Relax', 'Titel des Programms'];
let WorkoutComponentPackage = [];

Workouts.forEach((data, WorkoutID) => {
    if (WorkoutID % 3 == 0) {
        WorkoutComponentPackage.push(<NavLink to="/workout/information" key={WorkoutID}><button className="h-[215px] w-full rounded-s bg-gradient-to-tl from-gradient1-color1 to-gradient1-color2" key={WorkoutID}> <h2 className="text-highlighted-textcolor text-h2 font-poppins font-bold text-center relative">{data}</h2></button></NavLink>)
    } if (WorkoutID % 3 == 1) {
        WorkoutComponentPackage.push(<NavLink to="/workout/information" key={WorkoutID}><button className="h-[215px] w-full rounded-s bg-gradient-to-tl from-gradient2-color1 to-gradient2-color2" key={WorkoutID}> <h2 className="text-highlighted-textcolor text-h2 font-poppins font-bold text-center relative">{data}</h2></button></NavLink>)
    } if (WorkoutID % 3 == 2) {
        WorkoutComponentPackage.push(<NavLink to="/workout/information" key={WorkoutID}><button className="h-[215px] w-full rounded-s bg-gradient-to-tl from-gradient3-color1 to-gradient3-color2 to-gradient3-color3 to-gradient3-color4" key={WorkoutID}> <h2 className="text-highlighted-textcolor text-h2 font-poppins font-bold text-center relative">{data}</h2></button></NavLink>)
    }
})

export default function WorkoutComponent() {
    return (
        <>
            {WorkoutComponentPackage}
        </>
    );
}