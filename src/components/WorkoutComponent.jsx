let Workouts = ['Workout 1', 'Workout 2', 'Workout 3', 'Workout 4', 'Workout 5'];
let WorkoutComponentPackage = [];
Workouts.forEach((data, WorkoutID) => {
    if (WorkoutID %3 == 0) {
        WorkoutComponentPackage.push(<button className="h-[215px] rounded-s bg-gradient-to-tl from-gradient1-color1 to-gradient1-color2" key={WorkoutID}> <h2 className="text-highlighted-textcolor text-h2 font-poppins font-bold text-center relative">{data}</h2></button>)
    } if (WorkoutID %3 == 1) {
        WorkoutComponentPackage.push(<button className="h-[215px] rounded-s bg-gradient-to-tl from-gradient2-color1 to-gradient2-color2" key={WorkoutID}> <h2 className="text-highlighted-textcolor text-h2 font-poppins font-bold text-center relative">{data}</h2></button>)
    } if (WorkoutID %3 == 2) {
        WorkoutComponentPackage.push(<button className="h-[215px] rounded-s bg-gradient-to-tl from-gradient3-color1 to-gradient3-color2 to-gradient3-color3 to-gradient3-color4" key={WorkoutID}> <h2 className="text-highlighted-textcolor text-h2 font-poppins font-bold text-center relative">{data}</h2></button>)
    }
})

function WorkoutComponent() {
    return (
        <>
            {WorkoutComponentPackage}
        </>
    );
}

export default WorkoutComponent;