import { useRef } from "react";
import Home from "./Home"
import Projects from "./Projects"
import Services from "./Services"

function App() {

  const targetRef = useRef<HTMLDivElement>(null); 

  return (
    <>
      
      <div className="app w-full bg-custom-dark">
        <Home scrollToTarget={()=> {targetRef.current?.scrollIntoView({behavior: "smooth"})}} />
        <Services />
        <div ref={targetRef}>
          <Projects />
        </div>
      </div>
    </>
  )
}

export default App
