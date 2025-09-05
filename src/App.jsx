import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen w-screen bg-black animate-fadeIn animate-once">
        <div className="flex justify-center items-center h-full">
          <div className="card bg-neutral-950 p-30 shadow-sm flex justify-center align-center">
            <div className="card-body">
              <div className="avatar flex justify-center">
                <div className="w-24 rounded-full hover:animate-wiggle hover:animate-infinite">
                  <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                </div>
            </div>
              <h2 className="card-title justify-center font-[Poppins]">UNDEFINED</h2>
              <p className="flex justify-center font-[Poppins] font-light">
                Front End Developer | React, TailwindCSS, NextJS
              </p>
              
              <p className="flex justify-center pb-5 font-[Poppins] font-light">
                Music Producer
              </p>
              <div className="card-actions flex-col items-center justify-center gap-3">
                <button className="btn bg-sky-500 w-40 hover:text-black hover:bg-white"><svg aria-label="X logo" width="16" height="12" viewBox="0 0 300 271" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"/></svg>Twitter</button>
                <button className="btn bg-zinc-800 w-40 hover:text-black hover:bg-white"><svg className="hover:fill-black"aria-label="GitHub" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>GitHub</button>
                <button className="btn bg-red-600 w-40 hover:text-black hover:bg-white"><svg aria-label="LinkedIn logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 -3 20 20"><path fill="white" d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289" fillRule="evenodd"></path></svg>YouTube</button>
                <button className="btn bg-blue-400 w-40 hover:text-black hover:bg-white"></button>
              </div>
            </div>
          </div>{" "}
          {/* yo */}
        </div>
      </div>
    </>
  );
}

export default App;