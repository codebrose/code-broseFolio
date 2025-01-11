
function Projects() {
  return (
    <div className="projects w-full py-16 relative">
        <div className="bg-box w-full h-2/5 bg-custom-soft absolute left-0 bottom-40"></div>
        <div className="header lg:w-3/4 w-full mx-auto flex justify-between p-2 relative">
            <div className="text">
                <h1 className="font-black text-5xl text-white py-2">Featured Projects</h1>
                <p className="text-slate-400 pb-7">Explore the projects I have worked on</p>
            </div>
            <div className="button"><button className="py-3 px-6 bg-sky-600 hover:bg-sky-500 text white rounded-lg">View All</button></div>
        </div>
        <div className="project-container lg:w-3/4 mx-auto grid md:grid-cols-2 grid-cols-1 gap-6 p-4 relative">
            <div className="project bg-custom-card p-6">
              <div className="description pb-6 flex justify-between">
                <h2 className="text-white font-semibold text-2xl">iFlash</h2>
                <div className="icons flex gap-3">
                  <img src="/react.svg" alt="vite" className="w-6 h-6" />
                  <img src="/tailwind.svg" alt="vite" className="w-6 h-6 filter-sky-600" />
                </div>
              </div>
              <img src="/iflash.PNG" alt="project1" className="w-full mx-auto" />
            </div>
            <div className="project bg-custom-card p-6">
              <div className="description pb-6 flex justify-between">
                <h2 className="text-white font-semibold text-2xl">Platinum Pictures</h2>
                <div className="icons flex gap-3">
                  <img src="/react.svg" className="w-6 h-6" />
                  <img src="/tailwind.svg" className="w-6 h-6 filter-sky-600" />
                  <img src="/typescript.svg" className="w-6 h-6" />
                </div>
              </div>
              <img src="/gig1.PNG" alt="project1" className="w-full mx-auto" />
            </div>
        </div>
        <div className="contact lg:w-3/4 w-full mx-auto bg-custom-card px-8 py-16 flex sm:justify-between justify-center items-center mt-24 relative sm:flex-nowrap flex-wrap sm:text-left text-center sm:gap-0 gap-8">
          <div className="text sm:basis-auto basis-full">
            <h2 className="text-white font-bold text-4xl pb-5">Lets Work on Your <br /> Next Project Together</h2>
            <p className="text-slate-400">I'm always open to discussing product design work or partnership opportunities.</p>
          </div>
          <div className="button sm:basis-auto basis-full"><button className="py-3 px-6 bg-sky-600 hover:bg-sky-500 text white rounded-lg">Contact</button></div>
        </div>
    </div>
  )
}

export default Projects
