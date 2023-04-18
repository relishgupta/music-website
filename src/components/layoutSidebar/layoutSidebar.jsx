import { useState,useEffect } from "react";
import Sidebar from "../sidebar/bar";

const LayoutSidebar=({children})=>{
const [sidebarWidth,setSidebarWidth]=useState(undefined);
const [sidebarTop,setSidebarTop]=useState(undefined);

useEffect(() => {
  const sidebarEl = document.querySelector(".sidebar").getBoundingClientRect()
  setSidebarWidth(sidebarEl.width)
  setSidebarTop(sidebarEl.top)
}, [])

useEffect(() => {
  if (!sidebarTop) return

  window.addEventListener("scroll", isSticky)
  return () => {
    window.removeEventListener("scroll", isSticky)
  }
})

const isSticky=(e)=>{
  const sidebarEl=document.querySelector('.sidebar');
  const scrollTop=window.scrollY;

  if(scrollTop>=sidebarTop-10){
    sidebarEl.classList.add('is-sticky');
  }
  else{
    sidebarEl.classList.remove('is-sticky');
  }
}

return (
    <>
      <main className='md:flex md:justify-between px-5 mt-8 h-[100vh]'>
        <div className='content w-full md:w-[73%]'>{children}</div>
        <div className='md:w-[25%] border-2 border-solid border-gray-100 rounded-xl p-5' style={{width:sidebarWidth}} >
          <Sidebar />
        </div>
      </main>
    </>
  )
}

export default LayoutSidebar;