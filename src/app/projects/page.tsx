"use client";

import { ComponentProps, Ref, useEffect, useState } from "react";
import { Moon, Sun, HamburgerIcon, Hamburger, HamIcon, ListCollapse, Menu, Globe, CatIcon, Github, Linkedin, LinkedinIcon, LucideLinkedin } from "lucide-react";
import { useTheme } from "next-themes";
import { setTimeout } from "timers";
import { useRef } from "react";
import MS from "../../../public/MusiSense.png"
import GT from "../../../public/Games Today.png"
import VG from "../../../public/VGQT.png"
import Link from "next/link";
import { StaticImageData } from "next/image";





export default function Projects() {  

  const { theme, setTheme } = useTheme()
  

  const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
  }

  const [mounted, setMounted] = useState(false)

  const [theme2, setTheme2] = useState<string | null>(localStorage.getItem("theme2"))

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


  useEffect(() => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem("theme2")
    if (savedTheme) {
      setTheme2(savedTheme)
    } else {
      setTheme2("m") 
      localStorage.setItem("theme2", "m")
    }
  }
}, [])

  const toggleTheme2 = () => {
    if(theme2 === "m")
    {
      setTheme2("s")
      if (typeof window !== 'undefined' && window.localStorage)
      {
        localStorage.setItem("theme2", "s")
      }
    }
    else
    {
      setTheme2("m")
      if (typeof window !== 'undefined' && window.localStorage)
      { 
        localStorage.setItem("theme2", "m")
      }
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



  const projects = [
    {
      title: "MusiSense.ai",
      src: MS.src,
      url: "https://musisenseai.vercel.app",
      github: "https://github.com/nssharma2000/MusiSense.ai",
      description: "Music recommendation app that uses AI to recommend songs and music based on the user's preferences or mood."
    },
    {
      title: "Games Today",
      src: GT.src,
      url: "https://mern-blog-front-end-edeu.onrender.com/",
      github: "https://github.com/nssharma2000/MERN-Blog",
      description: "A gaming blog website where the user can create an account and comment on blog posts."
    },
    {
      title: "Video Game Quiz Time!",
      src: VG.src,
      url: "https://videogamequiztime.netlify.app/",
      github: "https://github.com/nssharma2000/Video-Game-Quiz-Time",
      description: "A quiz about Mario and Sonic video games where the user can answer questions and check their score at the end."
    } 
  ]

  type projectType = {
    title: string,
    src: string | Blob | undefined,
    url: string,
    github: string,
    description: string
  }

  function Project({ project }: { project: projectType })
  {
    return(
      <div className="mx-auto rounded-lg w-[90%] h-[70vh] lg:h-[80vh] xl:h-[60vh] flex flex-col justify-around items-center px-3 py-2 bg-slate-200 dark:bg-neutral-800 transition-all hover:scale-105 duration-300 shadow-lg">
        <div className="w-[80%] mx-auto flex justify-center items-start h-[20vh] md:h-[23vh]">
        <a href={ project.url }>
          <img src={ project.src } className="h-[23vh] object-cover" />
        </a>
        </div>
        <br />
        <div className="w-[80%] mx-auto text-justify text-xl font-semibold md:text-lg">
          { project.description }
        </div>
        <br />
        <div className="w-[40%] text-center flex justify-around items-center text-xl font-medium md:text-lg">
          <a href={ project.github } className="flex gap-2">
          <Github></Github>
          GitHub
          </a> 
        </div>
      </div>
    )
  }

  



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
          <div id="hamburger_menu" className={`absolute right-0 ${theme2 === "m" ? "bg-red-100 dark:bg-red-600" : "bg-blue-100 dark:bg-blue-600" } top-[10vh] w-[40vw] rounded-md animate-fadeIn transition-all duration-100 p-2 z-[100] flex flex-col justify-center gap-2`}
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
          <div id="franchise_message_box" className={`bg-gray-700 py-3 px-5 transition-opacity
            ${showFranchiseMessage ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} absolute left-[70%] top-[11vh] z-[1000] md:top-[15.5vh] duration-300 rounded-lg`}>
            <div className="mx-auto text-[4vw] md:text-[2vw] text-white">
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
            <div className="w-[80%] pt-[10vh] animate-appearBig mx-auto grid grid-cols-1 gap-6 md:grid-cols-3">
              {
                projects.map((project, key) =>
                  <Project key={key} project={ project }></Project>
                )
              }
            </div>
            
            <div className="mx-auto flex items-center justify-center mt-[10%] text-center w-[90vw] md:w-[80vw]">
              <a href="https://www.github.com/nssharma2000">
              <Github className="w-[10vw] h-[10vw] md:w-[2vw] md:h-[2vw]"></Github>
              </a>
              <a className="text-center ms-[2%] font-semibold text-4xl md:text-3xl">
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