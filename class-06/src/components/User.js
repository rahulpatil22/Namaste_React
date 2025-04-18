import React,{useEffect, useState} from 'react'

const User = ({name}) => {

const [count, setCount] = useState(0)
const [count2, setCount2] = useState(1)

useEffect(()=>{
  //API Call

 const timer= setInterval(()=>{
    console.log("Namaste React OP")
},1000)
console.log("useEffect")

// this is like unmounting
return ()=>{
  clearInterval(timer);
console.log("useEffect return")

}

},[])
console.log ("render")

useEffect(()=>{
  //there will be different usecase for count2 for do something
  // so we have another useEffect for count2
  

  },[count2])

  return (
    <div className='user-card'>
        <h1>Count = {count}</h1>
        <h1>Count2 = {count2}</h1>
      <h2>Name:{name}</h2>
      <h3>Location:Surat</h3>
      <h4>Contact:@rahulpatil</h4>
    </div>
  )
}

export default User;
