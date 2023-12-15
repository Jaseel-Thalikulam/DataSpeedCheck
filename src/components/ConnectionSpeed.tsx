import  { useState } from "react";
import "../../node_modules/react-internet-meter/dist/index.css";
import { ReactInternetSpeedMeter } from "react-internet-meter";
import LOGO from '../assets/SpeedWay (1).png'
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
      
      <div className="h-screen flex flex-col">

<div className="flex-none">
  {/* Add your logo image or content here */}
  <img src={LOGO} alt="Logo" className="h-40 w-40" />
</div>

<div className="flex-grow flex justify-center items-center ">
 

  <div className="h-auto flex justify-center items-center select-none insp pb-16">
    <div className="md:mb-10 text-violet-700"> 
      <h1 className="font-black text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-10xl">
        {checkSpeed} <span className="lg:text-4xl md:text-xl xl:text-2xl 2xl:text-5xl">MB/s</span>
      </h1>
    </div>
  </div>
</div>
</div>






      </>
  );
}
export default ConnectionSpeed;