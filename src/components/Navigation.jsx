// Home is active on startup
function Navigation() {
    return (
        <div className="bg-navigation bg-opacity-40 rounded-t-xs flex justify-around w-full h-12 p-3 items-center fixed bottom-0">
            <button><img src="../images/navigation-home.svg"/></button>
            <button><img src="../images/navigation-browse.svg"/></button>
            <button><img src="../images/navigation-profile.svg"/></button>
        </div>
    );
}

export default Navigation;