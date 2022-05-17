export default function WorkoutProgressBarComponent() {
    return (
        <div className="h-[25px] w-[436px] fixed left-[50%] top-[75px] z-30 flex translate-x-[-12.5px]">
            <div className="w-[25px] h-[25px] rounded-[50%] drop-shadow-button bg-gradient-to-tl from-gradient1-color1 to-gradient1-color2">
            </div>
            <hr className="w-[52px] h-0 border-dotted border-backgroundLight border-t-[4px] relative top-[50%] translate-y-[-50%] mr-[6px] ml-[6px]"></hr>
            <div className="w-[25px] h-[25px] rounded-[50%] border-backgroundLight border-[3px]"></div>
            <hr className="w-[52px] h-0 border-dotted border-backgroundLight border-t-[4px] relative top-[50%] translate-y-[-50%] mr-[6px] ml-[6px]"></hr>
            <div className="w-[25px] h-[25px] rounded-[50%] border-backgroundLight border-[3px]"></div>
            <hr className="w-[52px] h-0 border-dotted border-backgroundLight border-t-[4px] relative top-[50%] translate-y-[-50%] mr-[6px] ml-[6px]"></hr>
            <div className="w-[25px] h-[25px] rounded-[50%] border-backgroundLight border-[3px]"></div>
            <hr className="w-[52px] h-0 border-dotted border-backgroundLight border-t-[4px] relative top-[50%] translate-y-[-50%] mr-[6px] ml-[6px]"></hr>
            <div className="w-[25px] h-[25px] rounded-[50%] border-backgroundLight border-[3px]"></div>
        </div>
    );
}