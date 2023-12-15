import  { useEffect, useState } from "react";
import "../../node_modules/react-internet-meter/dist/index.css";
import { ReactInternetSpeedMeter } from "react-internet-meter";

import { ILocationData } from "../interface/ILocatiionData";
import axios from "axios";
function ConnectionSpeed() {

  
  const [checkSpeed, SetCheckSpeed] = useState(0);
  const [location, setLocation] = useState<ILocationData|null>(null);
  const VITE_IP_STACK_ACCESS_KEY = import.meta.env.VITE_IP_STACK_ACCESS_KEY as string
  
    const getIP = async () => {
        const res = await axios.get("https://api.ipify.org/?format=json");
    
      return res.data.ip
       
    };
  
  
  const fetchNetworkDetails = async (ip: number) => {
    const result = await axios.get(`http://api.ipstack.com/${ip}?access_key=${VITE_IP_STACK_ACCESS_KEY}`)
    setLocation(result.data)
  }
 

  

  useEffect(() => {
   
    (async function bundle() {
      
      
      fetchNetworkDetails(await getIP())
    })()


  }, []);

   
  return (
<>
      <ReactInternetSpeedMeter
        txtSubHeading="Slow Connection"
        outputType="" // "alert"/"modal"/"empty"
        customClassName={null}
        pingInterval={2000} // milliseconds
        txtMainHeading="Opps..."
        thresholdUnit="megabyte" // "byte" , "kilobyte", "megabyte"
        threshold={50}
        imageUrl="https://m.media-amazon.com/images/I/51uJlT2sH+L.png"
        downloadSize="58675.2" //bytes
        callbackFunctionOnNetworkDown={() => {
         
       }}
        
        callbackFunctionOnNetworkTest={(data:number) => SetCheckSpeed(data)}
      />
      

      
      <div className="h-screen flex justify-center items-center select-none insp">
  <div className=" lg:flex lg:space-x-80 "> 
    <div className="md: mb-10 text-violet-700"> 
      <h1 className="font-black text-9xl">{checkSpeed} <span className="text-5xl">MB/s</span></h1>
    </div>



  </div>
</div>

      </>
  );
}
export default ConnectionSpeed;