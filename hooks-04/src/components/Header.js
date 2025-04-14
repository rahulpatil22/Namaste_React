import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";
const Header = () => {

  const [ btnNameReact, setbtnNameReact] = useState("Login")
  // console.log("Header Render")
  //normal js variable
  // let  btnName = "log-in"
  return (
    <div className="header"> 
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="log-in" onClick={()=>{
           
            // btnName = "Logout";
            // console.log(btnName) 
            btnNameReact === "Login"
             ?setbtnNameReact("Logout")
             :setbtnNameReact("Login");
              console.log(btnNameReact)

            }}>{/*btnName*/}
            {btnNameReact}
            </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
