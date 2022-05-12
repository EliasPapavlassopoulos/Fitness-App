function Dashboard() {
    // !PLACEHOLDER! 
    // Gets fetched from backend later
    const userName = "Elias";
    return (
        <div className="dashboard">
            <header>
                <h1 className="text-highlighted-textcolor text-h1 font-poppins font-bold pt-10">Hi {userName}!</h1>
            </header>
            <div className="flex justify-center pt-6">
                <img src="../images/dashboard1.svg" />
            </div>
            <div className="relative">
                <h1 className="text-highlighted-textcolor text-h2 font-poppins font-bold mt-10">Dein Workout heute</h1>
                <button className="text-highlighted-textcolor text-sm font-normal font-poppins absolute top-4 right-1">Trainingsplan</button>
            </div>
        </div>
    );
}
export default Dashboard;