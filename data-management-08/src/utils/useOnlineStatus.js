import { useEffect, useState } from "react";
const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  //true means internet is working , when int is offline it will update the value with false
  //check if online

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
        setOnlineStatus(true);
      });

      // second logic 
    // const handleOnline = () => {
    //     setOnlineStatus(true);
    //   }
    //   const handleOffline = () => {
    //     setOnlineStatus(false);
    //   }

    //    // Event Listeners
    // window.addEventListener("online", handleOnline);
    // window.addEventListener("offline", handleOffline);

    // // Cleanup - Taught in Live Clsses
    // return () => {
    //   window.removeEventListener("online", handleOnline);
    //   window.removeEventListener("offline", handleOffline);
    // };


  }, []);
  //caller means - wherever this hook will be used
  return onlineStatus; // it should be boolean
};

export default useOnlineStatus;
