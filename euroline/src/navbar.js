import logo from './logo.png'
const Navbar = () => {
    return (  
        <nav className="navbar">
            <div className="links">
                <a href="/">Home</a>
                <a href="/findus">Find Us</a>
                <img src={logo} alt="" />
                <a href="/reservation">Reservation</a>
                <a href="/contact">Contact</a>
            </div>
        </nav>
    );
}
 
export default Navbar;
