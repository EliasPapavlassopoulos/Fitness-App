import { NavLink } from "react-router-dom";
import PageWrapper from "../templates/PageWrapper";

export default function Dashboard() {
    // !PLACEHOLDER! 
    // Gets fetched from backend later
    const userName = "Elias";
    return (
        <PageWrapper>
            <div className="dashboard">
                <header>
                    <h1 className="text-highlighted-textcolor text-h1 font-poppins font-bold pt-[41px]">Hi {userName}!</h1>
                </header>
                <div className="flex justify-center pt-[23px]">
                    <img src="../images/dashboard-title.svg" />
                </div>
                <div className="relative">
                    <h2 className="text-highlighted-textcolor text-h2 font-poppins font-bold mt-[40.04px]">Dein Workout heute</h2>
                    <div className="text-highlighted-textcolor text-sm font-normal font-poppins absolute top-[15px] right-[22px]">Trainingsplan</div>
                </div>
                <div className="bg-backgroundLight h-[13.75rem] flex flex-col justify-end p-7 rounded-s mt-[11px] drop-shadow-button">
                    <p className="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-textcolor text-ft font-poppins">Keine aktiven Workouts! <br /> <NavLink to="/browse"><button className="absolute left-[50%] translate-x-[-50%] rounded-s mt-[11px drop-shadow-button bg-gradient-to-tl from-gradient1-color1 to-gradient1-color2 pl-[25px] pr-[25px] mt-[20px] text-background text-ft h-[45px]">Browse</button></NavLink></p>
                </div>
            </div>
        </PageWrapper>
    );
}