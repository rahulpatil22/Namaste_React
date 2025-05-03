import React from "react";

class UserClass extends React.Component{

    constructor(props){

        super(props);

        // console.log(props);
        this.state = {
            userInfo:{
                name:"Dummy",
                location:"Default",
              
            }
            
        };
        // console.log( this.props.name + "Child Constructor")
    }

  async componentDidMount(){
        //  console.log(this.props.name +"Child ComponentDidMount")
         //API Call
        //  const data = await fetch ("https://api.github.com/users/rahulpatil22")
        //  const json = await data.json();
        

        //  this.setState({
        //     userInfo:json
        //  })
        //  console.log(json) 


        this. timer=setInterval(()=>{
            // console.log("Namaste React OP")
        },1000)
        // when we load the component ,it will start calling OP after each 1 sec
        // if i move to another comp/page still it continued calling
        }

        componentDidUpdate(prevProps,prevState){
            if(
            this.state.count ===! prevState.count || 
            this.state.count ===! prevState.count);else{
                // for count2
                //thats why in useEffect there will be [] , because get the rid of this,
                // there can be multiple state varibales ,if else want to do

            };
            if(
                this.state.count2 ===! prevState.count2 || 
                this.state.count2 ===! prevState.count2);else{
                    // there will be different usecase for count2 for do something
                   // there wi
                };
            // console.log("Component Did Update")
        }

        componentWillUnmount(){
            clearInterval(this.timer)
            // console.log("Component Will Unmount")
        }

    render(){

        // const {name,location} = this.props;
        
        // console.log(this.props.name + "Child Render")
        //render method which returns some piece of  JSX
        const {name,location,avatar_url}= this.state.userInfo;
        // debugger;

        return (
            <div className='user-card'>
              <img src={avatar_url}></img> 
              <h2>Name:{name}</h2>
              <h3>Location:{location}</h3>
           
              <h4>Contact:@rahulpatil</h4>
            </div>
          )
    }
};

export default UserClass;