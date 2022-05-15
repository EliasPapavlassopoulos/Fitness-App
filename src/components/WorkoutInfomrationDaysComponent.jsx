import { NavLink } from "react-router-dom";
let WorkoutInformationDays = [['Tag 1', 'Tag 2', 'Tag 3'], ['26 Min.', '26 Min.', '26 Min.'], ['Beweglichkeit', 'Beweglichkeit', 'Beweglichkeit']];
let WorkoutInformationDaysComponentPackage = [];

WorkoutInformationDays[0].forEach((title, WorkoutID) => {
    if (WorkoutID % 3 == 0) {
        WorkoutInformationDaysComponentPackage.push(
            <NavLink to="/workout/information/start">
                <button className="w-full">
                    <div className="mb-[16px] h-[100px] ml-[15px] mr-[24px] bg-backgroundLight rounded-xs drop-shadow-button flex">
                        <div className="h-[100px] w-[100px] rounded-l-xs bg-gradient-to-tl from-gradient1-color1 to-gradient1-color2" key={WorkoutID}>
                        </div>
                        <div className="ml-[14px] mt-[9px]">
                            <h3 className="text-highlighted-textcolor text-h3 font-poppins font-bold">{title}
                            </h3>
                            <div className="absolute bottom-[11px]">
                                <p className="text-highlighted-textcolor text-left text-sm font-poppins">{WorkoutInformationDays[1][WorkoutID]}</p>
                                <p className="text-highlighted-textcolor text-sm font-poppins">{WorkoutInformationDays[2][WorkoutID]}</p>
                            </div>
                        </div>
                    </div>
                </button>
            </NavLink>
        )
    }
    if (WorkoutID % 3 == 1) {
        WorkoutInformationDaysComponentPackage.push(
            <NavLink to="/workout/information/start">
                <button className="w-full">
                    <div className="mb-[16px] h-[100px] ml-[15px] mr-[24px] bg-backgroundLight rounded-xs drop-shadow-button flex">
                        <div className="h-[100px] w-[100px] rounded-l-xs bg-gradient-to-tl from-gradient2-color1 to-gradient2-color2" key={WorkoutID}>
                        </div>
                        <div className="ml-[14px] mt-[9px]">
                            <h3 className="text-highlighted-textcolor text-h3 font-poppins font-bold">{title}
                            </h3>
                            <div className="absolute bottom-[11px]">
                                <p className="text-highlighted-textcolor text-sm text-left font-poppins">{WorkoutInformationDays[1][WorkoutID]}</p>
                                <p className="text-highlighted-textcolor text-sm font-poppins">{WorkoutInformationDays[2][WorkoutID]}</p>
                            </div>
                        </div>
                    </div>
                </button>
            </NavLink>
        )
    }
    if (WorkoutID % 3 == 2) {
        WorkoutInformationDaysComponentPackage.push(
            <NavLink to="/workout/information/start">
                <button className="w-full">
                    <div className="mb-[16px] h-[100px] ml-[15px] mr-[24px] bg-backgroundLight rounded-xs drop-shadow-button flex">
                        <div className="h-[100px] w-[100px] rounded-l-xs bg-gradient-to-tl from-gradient3-color1 to-gradient3-color2 to-gradient3-color3 to-gradient3-color4" key={WorkoutID}>
                        </div>
                        <div className="ml-[14px] mt-[9px]">
                            <h3 className="text-highlighted-textcolor text-h3 font-poppins font-bold">{title}
                            </h3>
                            <div className="absolute bottom-[11px]">
                                <p className="text-highlighted-textcolor text-sm text-left font-poppins">{WorkoutInformationDays[1][WorkoutID]}</p>
                                <p className="text-highlighted-textcolor text-sm font-poppins">{WorkoutInformationDays[2][WorkoutID]}</p>
                            </div>
                        </div>
                    </div>
                </button>
            </NavLink>
        )
    }
})

export default function WorkoutInfomrationDaysComponent() {
    return (
        <>
            {WorkoutInformationDaysComponentPackage}
        </>
    );
}