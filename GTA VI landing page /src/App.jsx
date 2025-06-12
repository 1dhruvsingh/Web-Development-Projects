import React, { useState } from "react";
import {gsap} from 'gsap';
import { useGSAP } from "@gsap/react";
import 'remixicon/fonts/remixicon.css';

export default function App(){
  let [showContent, setShowContent] = useState(false);

    useGSAP(()=>{
    const tl= gsap.timeline();

    tl.to(".vi-mask-group",{
      rotate: 10, 
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    })
    .to(".vi-mask-group",{
      scale:10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      opacity: 0,
      onUpdate: function(){
        if(this.progress()>= .9){
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      }
    })
    })

    useGSAP(()=>{
     if (!showContent) return;

      gsap.to(".main",{
        scale: 1,
        rotate: 0,
        duration:2,
        delay: "-1",
        ease: "Expo.easeInOut"
      })

      gsap.to(".sky",{
        scale: 1.1,
        rotate: 0,
        duration:2,
        delay: "-.8",
        ease: "Expo.easeInOut"
      })

      gsap.to(".bg",{
        scale: 1.1,
        rotate: 0,
        duration:2,
        delay: "-.8",
        ease: "Expo.easeInOut"
      })

        gsap.to(".character", {
      scale: 1.4,
      x: "-50%",
      bottom: "-25%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

       const main = document.querySelector(".main");

      main?.addEventListener("mousemove", function(e){
        const xMove = (e.clientX / window.innerWidth - 0.5)* 40;
        gsap.to(".main .text",{
          x:`${xMove * 0.4}%`,
        });
       gsap.to(".sky",{
          x:`${xMove * 0.4}%`,
        });
        gsap.to(".bg", {
        x: xMove * 1.7,
      });
     
      const yMove = (e.clientY / window.innerHeight - 0.5)* 40;
        gsap.to(".main .text",{
          y:`${yMove * 0.4}%`,
        });
       gsap.to(".sky",{
          y:`${yMove * 0.4}%`,
        });

      })
    }, [showContent]);

  return(
    <div style={{ minHeight: '100vh', overflow: 'hidden', background: "black"}}>
      <div className="svg fixed flex item-center justify-center top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
         <defs>
          <mask id="viMask">
             <rect width="100%" height="100%" fill="black" />
               <g className="vi-mask-group">
                <text x="50%" y="50%" fontSize="250" textAnchor="middle" fill="white" dominantBaseline="middle" fontFamily="Arial Black">
                  VI
                </text>
               </g>
          </mask>
         </defs>
         <image 
           href="./bg.png"
           width="100%"
           height="100%"
           preserveAspectRatio="xMidYMid slice" 
           mask="url(#viMask)"
         />
        </svg>
      </div>
      { showContent && ( <div className="main w-full rotate-[-10deg] scale-[1.7]" > 
        <div className="landing overflow-hidden relative w-full h-screen bg-black">
          <div className="navbar absolute top-0 left-0 z-[10] w-full h-screen py-10 px-10 bg-red">
            <div className="logo flex gap-5">
              <div className="lines flex flex-col gap-[3px]">
                <div className="line w-10 h-2 bg-white"></div>
                <div className="line w-8 h-2 bg-white"></div>
                <div className="line w-6 h-2 bg-white"></div>
              </div>
              <h3 className="text-3xl text-white"> Rockstar </h3>
            </div>
          </div>
          <div className="imagesdiv relative overflow-hidden w-full h-screen">
            <img className="absolute sky scale-[1.2] rotate-[-20deg] top-0 left-0 w-full h-full object cover" src="./sky.png" /> 
            <img className="absolute bg scale-[1.3] rotate-[-3deg] top-0 left-0 w-full h-full object cover" src="./bg.png" />
            <div className="text text-white flex flex-col gap-3 absolute top-0 left-1/2 -translate-x-1/2">
              <h1 className="text-[12rem] leading-none -ml-40">grand</h1>
              <h1 className="text-[12rem] leading-none ml-20">theft</h1>
              <h1 className="text-[12rem] leading-none -ml-40">auto</h1>
            </div>
            <img className="absolute girl -bottom-[25%]  left-1/2 -translate-x-1/2 scale-[0.8] " src="./girlbg.png" />
          </div>
          <div className="bottombar bottom-0 left-0 absolute w-full py-20 px-10 bg-gradient-to-t from-black to-transparent ">
            <div className="flex text-white gap-4 item-center">
             <i className="text-4xl ri-arrow-down-fill"></i>
             <h3 className="text-xl font-[Helvetica_Now_Display]"> Scroll Down </h3>
            </div>
             <img className="absolute h-[60px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="./ps5.png" alt="" />
          </div>
        </div>

        <div className="w-full h-screen bg-black flex items-center justify-center">
          <div className="cntnr w-full h-[80%] text-white flex bg-black">
            <div className="limg relative w-1/2 h-full">
            <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="./imag.png" alt="" />
          </div>
          <div className="rg w-[30%] py-30">
            <h1 className="text-8xl"> NMIMS?? </h1>
            <h1 className="text-8xl"> STILL ??? </h1>
            <p className="mt-10 text-xl font-[hevatica_Now_Display]"> Nigga ,You are in NMIMS ,you are bound to fail once!</p>
            <button className="bg-yellow-500 px-5 py-5 text-black mt-10 text-4xl">
                  Re-Exam Form
                </button>
          </div>
          </div>
        </div>
      </div> )}
    </div>
    
  )
}