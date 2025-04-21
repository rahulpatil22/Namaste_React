import { useEffect,useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu =(resID)=>{

   // caller is- RestaurantMenu Comp

    const [restInfo ,setRestInfo] = useState(null)
   // fetchData
   useEffect(()=>{

fetchData ();
   },[]);

   const fetchData = async () => {
      const data = await fetch(MENU_API + resID);
     
  
      const json = await data.json();
      console.log(json);
  
      setRestInfo(json.data);
    };
  

    return restInfo;
}

export default useRestaurantMenu;