"use client"
import Image from "next/image"
import { ModeToggle } from "./ui/mode-toogle"
export default function Nav()
{ return (

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <li>
      <button>Learn More</button>
    </li>
    <li>
    <button>Learn Even More</button>
    </li>
     <li><ModeToggle/></li> 
    </div>)
}