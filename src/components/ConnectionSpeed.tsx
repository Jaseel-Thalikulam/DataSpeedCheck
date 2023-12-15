import  { useState } from "react";
import "../../node_modules/react-internet-meter/dist/index.css";
import { ReactInternetSpeedMeter } from "react-internet-meter";

function ConnectionSpeed() {

  const [checkSpeed, SetCheckSpeed] = useState(0);
 
  
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