export default function Profile() {
    return (
        <div className="profile">
            <header>
                <h1 className="text-highlighted-textcolor text-h1 font-poppins font-bold pt-[41px]">Elias</h1>
            </header>
            <div className="w-[120px] h-[120px] rounded-[50%] bg-gradient-to-tl from-gradient3-color1 to-gradient3-color2 to-gradient3-color3 to-gradient3-color4 relative left-[50%] translate-x-[-50%] mt-[85px]"></div>
            <button className="text-highlighted-textcolor text-ft font-poppins mt-[13px] relative left-[50%] translate-x-[-50%]">Profil bearbeiten</button>
            <p className="text-highlighted-textcolor text-ft font-poppins mt-[36px]">Aktueller Trainingsplan</p>
            <div className="bg-backgroundLight h-[120px] rounded-xs drop-shadow-button mt-[9px]">
                <div className="h-[62px] w-[62px] rounded-[50%] bg-background relative top-[50%] translate-y-[-50%] ml-[19px]">
                    <div className="h-[52px] w-[52px] rounded-[50%] bg-backgroundLight relative top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                        <p className="text-highlighted-textcolor text-ft font-poppins relative top-[50%] translate-y-[-50%] text-center"> 0%</p>
                    </div>
                </div>
                <div className="ml-[105px] h-auto absolute top-[50%] translate-y-[-50%]">
                    <p className="text-highlighted-textcolor text-ft font-poppins">Titel des Programms</p>
                    <p className="pt-[7px] text-highlighted-textcolor text-sm font-poppins">0 von 8 geschafft</p>
                </div>
            </div>
        </div>
    );
}