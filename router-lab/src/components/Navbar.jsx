import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
              <div>
       <Link to="/"> <h1>Kalvium❤️</h1></Link>
      </div>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:"50px"}}>
        <Link to="/contact"><p>Contact</p></Link>
        <Link to="/about">
        <p>About</p>
        </Link>
      </div>
        </div>
    );
}

export default Navbar;