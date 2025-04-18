import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {


    constructor(props){

        super(props);

        // console.log(" Parent Constructor")
       
        };
       
        componentDidMount(){
            // console.log("Parent ComponentDidMount")
       } 

  render() {

    // console.log("Parent Render")
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This Is React Series</h2>
        {/* <User name={"Rahul Patil (function)"}/> */}
        {/* <UserClass name={"First"} location={"Surat Class"} /> */}
        {/* <UserClass name={"Second"} location={"USA Class"} /> */}
        <User/>

      </div>
    );
  }
}

export default About;

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This Is React Series</h2>
//       {/* <User name={"Rahul Patil (function)"}/> */}
//       <UserClass name={"Rahul Patil(class)"} location={"Surat Class"} />
//     </div>
//   );
// };
// export default About;
