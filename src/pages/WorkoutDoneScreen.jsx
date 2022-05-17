import PageWrapper from "../templates/PageWrapper";
import CloseButton from "../components/close-button";
export default function WorkoutDoneScreen() {
    return (
        <PageWrapper nav = {false}>
            <div className="relative h-[100vh] pt-[50%]">
                <CloseButton></CloseButton>
                <h1 className="text-highlighted-textcolor text-h1 font-poppins font-bold text-center">Glückwunsch!</h1>
                <h3 className="text-highlighted-textcolor text-h3 font-poppins font-bold text-center mt-[10px]">Du hast 3 Tage<br />am Stück trainiert!</h3>
                <p className="text-highlighted-textcolor text-ft font-poppins text-center mt-[43px]">Wie war das Workout?</p>
                <div className="flex justify-around mt-[23px]">
                    <button className="w-[120px] h-[78px] drop-shadow-button bg-backgroundLight rounded-xxs text-highlighted-textcolor text-ft font-poppins text-center">zu leicht</button>
                    <button className="w-[120px] h-[78px] drop-shadow-button bg-backgroundLight rounded-xxs text-highlighted-textcolor text-ft font-poppins text-center">genau richtig</button>
                    <button className="w-[120px] h-[78px] drop-shadow-button bg-backgroundLight rounded-xxs text-highlighted-textcolor text-ft font-poppins text-center">zu schwer</button>
                </div>
                <button className="text-backgroundLight text-ft font-poppins text-center w-full mt-[23px]">Bewertung überspringen</button>
            </div>
        </PageWrapper>
    );
}