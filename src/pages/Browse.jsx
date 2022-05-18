import WorkoutComponent from "../components/WorkoutComponent";
import PageWrapper from "../templates/PageWrapper";

export default function Browse() {
    return (
        <PageWrapper>
            <div className="browse">
                <h2 className="text-highlighted-textcolor text-h2 font-poppins font-bold pt-[55px] pb-[53.5px] bg-background w-full">Browse</h2>
                <div className="flex flex-col gap-[20.5px]">
                    <WorkoutComponent></WorkoutComponent>
                </div>
                <div className="h-[60px]"></div>
            </div>
        </PageWrapper>
    );
}