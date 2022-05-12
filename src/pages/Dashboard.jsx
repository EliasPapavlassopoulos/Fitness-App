function Dashboard() {
    // !PLACEHOLDER! 
    // Gets fetched from backend later
    const userName = "Elias";
    return (
        <div className="dashboard">
            <header>
                <h1 className="text-highlighted-textcolor text-h1 font-poppins font-bold pt-[41px]">Hi {userName}!</h1>
            </header>
            <div className="flex justify-center pt-[23px]">
                <img src="../images/dashboard1.svg" />
            </div>
            <div className="relative">
                <h1 className="text-highlighted-textcolor text-h2 font-poppins font-bold mt-[40.04px]">Dein Workout heute</h1>
                <button className="text-highlighted-textcolor text-sm font-normal font-poppins absolute top-[15px] right-[22px]">Trainingsplan</button>
            </div>
            <div className="bg-backgroundLight h-[13.75rem] flex flex-col justify-end p-7 rounded-s mt-[11px] drop-shadow-lg">
                <p className="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-textcolor text-ft font-poppins">Keine aktiven Workouts! <br /> <button className="absolute left-[50%] translate-x-[-50%] rounded-s mt-[11px drop-shadow-button bg-background pl-[25px] pr-[25px] mt-[20px] text-ft h-[45px]">Browse</button></p>
            </div>
        </div>
    );
}
export default Dashboard;