
const Header = () => {
    return (
        <>
            <header className="flex-space-between">
                <div className="search">
                    <input type="text" className="input-search" name="search" />
                </div>
                <ul className="menu">
                    <li><a href="#" className="nav-link">Category</a></li>
                    <li><a href="#" className="nav-link">About</a></li>
                    <li><a href="#" className="nav-link">Contact</a></li>
                </ul>
            </header>
        </>
    );
}

export default Header;