import Navigation from "../components/Navigation";

export default function PageWrapper({children, nav = true}) {
    return (
        <>
           {children}
           {nav && <Navigation />}
        </>
    );
}