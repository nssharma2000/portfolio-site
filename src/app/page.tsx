"use client";

import { Ref, useEffect, useState } from "react";
import { Moon, Sun, HamburgerIcon, Hamburger, HamIcon, ListCollapse, Menu, Globe, CatIcon, Github, Linkedin, LinkedinIcon, LucideLinkedin } from "lucide-react";
import { useTheme } from "next-themes";
import { setTimeout } from "timers";
import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import DP from '../../public/DP.jpg'
import MERN_logo from '../../public/MERN-logo.png'






export default function Home() {  

  const { theme, setTheme } = useTheme()
  

  const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
  }

  const [mounted, setMounted] = useState(false)

  const [theme2, setTheme2] = useState<string>("m")

  const [showFranchiseMessage, setShowFranchiseMessage] = useState(false)

  const [isMenuShown, setIsMenuShown] = useState(false)



  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    function handleClickOutside(event: Event)
    {
        if(menuRef.current && !menuRef.current.contains(event.target as Node))
        {
            setIsMenuShown(false)
        }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleTheme2 = () => {
    if(theme2 === "m")
    {
      setTheme2("s")
    }
    else
    {
      setTheme2("m")
    }
  }

  const hideTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleFranchiseMouseEnter = () => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
    }
    setShowFranchiseMessage(true);
  };

  const handleFranchiseMouseLeave = () => {
    hideTimeout.current = setTimeout(() => {
      setShowFranchiseMessage(false);
      }, 200);
  };


  

  



  const navbarButtonStyle: string = `px-4 py-2 rounded-full text-[1em] md:text-[1.5em] font-[Trebuchet_MS] text-gray-600 lg:text-[2em] font-semibold
  ${theme2 === "m" ? "hover:bg-red-500" : "hover:bg-blue-500" } hidden md:block hover:text-slate-100 dark:text-slate-100 transition-all duration-300 cursor-pointer`

  if(!mounted)
  {
      return null
  }

  const hmItemStyle: string = `px-4 py-2 rounded-md text-center text-[2em] font-[Trebuchet_MS] font-semibold
      hover:bg-red-500 hover:text-slate-100 transition-all duration-300 cursor-pointer` 


  return (
    <div id="main_container" className="w-full mx-auto">
      <div id="wrapper" className="w-full mx-auto">
        { isMenuShown &&
          <div id="hamburger_menu" className={`absolute right-0 ${theme2 === "m" ? "bg-red-100 dark:bg-red-600" : "bg-blue-100 bg-blue-600" } top-[10vh] w-[40vw] rounded-md animate-fadeIn transition-all duration-100 p-2 z-[100] flex flex-col justify-center gap-2`}
          ref={ menuRef }>
            <Link href="/" className={ hmItemStyle }>
              About
            </Link>
            <Link href="/skills" className={ hmItemStyle }>
              My Skills
            </Link>
            <Link href="/projects" className={ hmItemStyle }>
              Projects
            </Link>
            <Link href="/contact" className={ hmItemStyle }>
              Contact
            </Link>
          </div>
          }
          <div id="franchise_message_box" className={`bg-gradient-to-b from-gray-900/80 py-3 px-5 to-gray-700/80 transition-opacity
            ${showFranchiseMessage ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} absolute left-[70%] top-[11vh] md:top-[15.5vh] duration-300 rounded-lg`}>
            <div className="mx-auto text-[2vw] text-white">
              Change game franchise?
            </div>
          </div>
        <div id="navbar" className={`w-full h-[10vh] sticky shadow-xl md:h-[15vh] bg-slate-100 dark:bg-gray-700 flex justify-around items-center`}>
          <Link href="/" className={ navbarButtonStyle }>
            About
          </Link>
          <Link href="/skills" className={ navbarButtonStyle }>
            My Skills
          </Link>
          <Link href="/projects" className={ navbarButtonStyle }>
            Projects
          </Link>
          <Link href="/contact" className={ navbarButtonStyle }>
            Contact
          </Link>
          <button className="w-[8vw] h-[8vw] md:w-[5vw] md:h-[5vw] bg-[#EEEEEE] dark:bg-gray-500 dark:inset-shadow-sm/50 inset-shadow-sm/10 rounded-full flex justify-center items-center cursor-pointer" onClick={ toggleTheme }>
            { mounted &&
            
               
                theme === "light" ||  theme === undefined ? 
                  
                    <Moon className="w-[40%] h-[40%]">

                    </Moon>
                    :
                    <Sun className="w-[40%] h-[40%]">

                    </Sun>
            }
          
          </button>
          <button className="w-[8vw] h-[8vw] md:w-[5vw] md:h-[5vw] bg-[#EEEEEE] dark:bg-gray-500 dark:inset-shadow-sm/50 inset-shadow-sm/10 rounded-lg flex justify-center items-center cursor-pointer" onClick={ toggleTheme2 }
          onMouseEnter={ handleFranchiseMouseEnter } onMouseLeave={ handleFranchiseMouseLeave }
          >
            { mounted &&
            
               
                theme === "light" ||  theme === undefined ? 
                  
                    <div className={`w-[70%] h-[50%] text-center mx-auto ${theme2 === "s" ? "text-blue-500" : "text-red-500" } flex justify-center items-center font-[Calibri] text-[5vw] md:text-[3vw] cursor-pointer`}>
                    {
                      theme2 === "m" ?
                      <>
                      M
                      </>
                      :
                      <>
                      S
                      </>
                    }
                    </div>
                    :
                    <div className={`w-[70%] h-[90%] text-center mx-auto ${theme2 === "s" ? "text-blue-500" : "text-red-500" } flex justify-center items-center font-[Calibri] text-[3vw] cursor-pointer`}>
                    {
                      theme2 === "m" ?
                      <>
                      M
                      </>
                      :
                      <>
                      S
                      </>
                    }
                    </div>

            }
          
          </button>
          <Menu className="md:hidden" onClick={ () => setIsMenuShown(true) }>
          </Menu>

        </div>
        
        <div className={`w-[100%] mx-auto bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-slate-700 dark:to-slate-800`}>
            <div className={`mx-auto text-center text-[2rem] animate-appearSmall md:text-[5rem] font-[Arial] font-bold`}>Naman Sharma</div>
            <div className="w-[100%] mx-auto text-center grid grid-cols-1 gap-4 mt-[10vh] items-center md:grid-cols-2">
              <div id="intro" className={`p-[3vw] w-[90%] order-2 md:order-1 md:w-[80%] animate-appearBig rounded-lg flex flex-col justify-center items-center text-center font-[Segoe_UI] text-[2rem] bgAnimate shadow-lg mx-auto bg-slate-100/80 dark:bg-gray-600/80`}>
                  
                  Hi! 👋 I&apos;m a full-stack developer passionate about building modern and scalable systems as well as solving real world problems. With experience in MERN, I&apos;m capable of building robust web apps that make an impact. I love coding and using Tailwind CSS for front-end development. Let&apos;s connect!
              </div>
              <div className="mx-auto order-1 md:order-2 animate-appearSmall">
                <img src={ DP.src } className="w-[60vw] h-[60vw] rounded-lg shadow-lg shadow-gray-800/30 dark:shadow-gray-900/60 hover:scale-105 transition-transform duration-300 md:w-[30vw] md:h-[30vw]" />
              </div>
            </div>

            <div className="text-center mt-[10vh] mx-auto py-8 text-[2em] md:text-[3em] font-semibold dark:text-white">
              <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}>
                  <div className="text-center">
                  ⚙️ Main Tech Stack: MERN
                  </div>
              </motion.div>
            </div>
            <div className="mx-auto flex justify-center items-center text-center mt-[10%]">
              <Globe className="w-[10vw] h-[10vw] md:w-[3vw] md:h-[3vw]">
              </Globe>
              <div className="text-center ms-[1%] text-4xl md:text-3xl font-semibold">
                India
              </div>
            </div>
            <div className="mx-auto flex items-center justify-center mt-[10%] text-center w-[90vw] md:w-[80vw]">
              <a href="https://www.github.com/nssharma2000">
              <Github className="w-[10vw] h-[10vw] md:w-[2vw] md:h-[2vw]"></Github>
              </a>
              <a href="https://www.github.com/nssharma2000" className="text-center ms-[2%] font-semibold text-4xl md:text-3xl">
                GitHub
              </a>
            </div>
            <div className="mx-auto flex justify-center text-center w-[90vw] md:w-[80vw]">
              <a href="https://www.linkedin.com/in/naman-sharma-893363262/">
              <LucideLinkedin className="w-[10vw] h-[10vw] md:w-[2vw] md:h-[2vw]"></LucideLinkedin>
              </a>
              <a href="https://www.linkedin.com/in/naman-sharma-893363262/" className="text-center ms-[2%] font-semibold text-4xl md:text-3xl">
                LinkedIn
              </a>
            </div>
            <div className="h-[5vh]">
            </div>
            <div className="h-[20vh] w-full text-center flex justify-center items-center">
                <a href="/Naman-Sharma-Resume.pdf">
                  <button className={`text-center mx-auto h-[40%] px-6 py-3 ${theme2 === "m" ? "bg-red-500" : "bg-blue-500" } hover:text-sky-300 transition-all duration-300 font-semibold rounded-md text-white text-xl cursor-pointer`}>
                    View Resume
                  </button>
                </a>
            </div>

        </div>
        

        
        
      </div>
    </div>
  );
}