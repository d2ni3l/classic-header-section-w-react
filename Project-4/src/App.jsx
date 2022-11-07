import { useState } from 'react'


function App() {
    const [theme, setTheme] = useState('forest')
  return (
    <div  data-theme={theme} >
       <nav>

        <div className='pt-6 flex justify-between px-10'> 
        <a href="/" aria-current="page" aria-label="Homepage" class="flex-0 btn btn-ghost px-2"><div class="font-title text-primary inline-flex text-lg transition-all duration-200 md:text-3xl"><span class="capitalize ">Klaus</span> <span class="text-base-content lowercase">.io</span></div></a>
        <div className="dropdown">
        <div tabindex={0} className="btn outline outline-primary gap-1 normal-case btn-ghost hover:bg-[#9a999935]"><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg> <span class="hidden md:inline tracking-wider">Theme</span> <svg width="12px" height="12px" class="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg></div>
         <ul tabIndex={0} className="dropdown-content mt-2 relative right-[2px] justify-center gap-4 menu p-1   shadow bg-base-100 rounded-box w-[5rem] md:w-[10rem]">
                <li onClick={() => {setTheme('dark')}}><a className='bg-[#2a303c] text-white font-bold'>Dark</a></li>
                <li onClick={() => {setTheme('retro')}}><a className='bg-[#e4d8b4] text-black font-bold'>Retro</a></li>
                <li onClick={() => {setTheme('light')}}><a className='font-bold   text-black bg-[#e4e0e061]'>Light</a></li>
                <li onClick={() => {setTheme('aqua')}}><a className='font-bold   text-black bg-[#345ca8]'>Acqua</a></li>
                <li onClick={() => {setTheme('emerald')}}><a className='font-bold   text-white bg-[#66cc8a]'>emerald</a></li>
                <li onClick={() => {setTheme('coffee')}}><a className='font-bold   text-white bg-[#211720]'>Coffee</a></li>
         </ul>
         </div>
        </div>
       </nav>

    <header data-theme={theme} className="pt-16  w-[100vw] ">
    <div className="px-12 mx-auto  ">
        <div className="w-full mx-auto text-left  md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="mb-8 text-4xl font-extrabold leading-[1] tracking-normal text-center md:text-6xl md:tracking-tight">
                Start <span className="block w-full pb-1 text-primary lg:inline">building a buzz</span> around your product?
            </h1>
            <p className="px-0 mb-8 text-center  text-lg  md:text-xl lg:px-24">
                    Use <span className="text-primary"><a className='hover:underline' href="https://daisyui.com/" target='_blank'>DaisyUi</a></span> Components and designs. Crafted to help you with your UI. Thank you DaisyUI for your special UI library
            </p>
            <div className="mb-4 flex flex-col sm:flex-row justify-center space-x-0 md:space-x-2 md:mb-8">
                <a href="#" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white hover:text-white hover:underline  transition duration-500 bg-primary rounded-2xl sm:w-auto sm:mb-0">
                    Get Started
                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
                <a href="#_" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-100 hover:shadow rounded-2xl sm:w-auto sm:mb-0">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                </a>
            </div>
        </div>
        <div className="w-full mx-auto mt-20 text-center md:w-10/12">
            <div className="relative z-0 w-full mt-8">
                <div className="relative overflow-hidden shadow-2xl">

                </div>
            </div>
        </div>
     </div>
    </header>
    <div data-theme={theme} className="stats hidden md:grid justify-center pt-6 md:pt-0   shadow">
  <div className="stat" >
    <div className="stat-figure text-secondary">
    <svg xmlns="http://www.w3.org/2000/svg"   className={`inline-block w-8 h-8 stroke-current  fill-primary`} viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"/></svg>
    </div>
    <div className="stat-title">Downloads</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat items-center gap-2">
    <div className="stat-figure text-secondary">
    <svg xmlns="http://www.w3.org/2000/svg"   className={`inline-block w-8 h-8 stroke-current fill-primary`} viewBox="0 0 640 512"><path d="M144 160c-44.2 0-80-35.8-80-80S99.8 0 144 0s80 35.8 80 80s-35.8 80-80 80zm368 0c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM416 224c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/></svg>
    </div>
    <div className="stat-title">New Users</div>
    <div className="stat-value">4,200</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
</div>
     <div data-theme={theme} className="pt-10"></div>
    <footer data-theme={theme}   className=" footer rounded-t-lg footer-center pt-3 pb-[0.30rem] bg-base-300 text-base-content">
  <div>
    <p>Copyright © 2022 - All right reserved by Klaus.io </p>
  </div>
</footer>
    </div>
  );
}

export default App
