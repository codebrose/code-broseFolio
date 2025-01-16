import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Bottom from "./Bottom";

interface homeProps {
  scrollToTarget: ()=>  void;
}

const Home: React.FC<homeProps> = ({scrollToTarget}) => {

  const buttonClasses = "px-4 py-2 text-white hover:text-sky-600 cursor-pointer hover:border-sky-600 transition-all mx-4";
  const responsiveBtnClasses = "p-6 hover:bg-custom-soft cursor-pointer hover:pl-7 border-custom";

  const [isHidden, setIsHidden] = useState(true);

  const [showAbout, setShowAbout] = useState(false);

  function triggerAbout() {
    showAbout ? setShowAbout(false) : setShowAbout(true);
  }

  

  return (
    <div className="w-full sm:h-custom h-fit relative overflow-hidden">
      <nav className="lg:w-3/4 w-full mx-auto flex justify-between items-center p-6 sm:flex-nowrap">
        <div className="logo w-16 h-16 bg-white rounded-full"></div>
        <ul className="items-center sm:flex hidden">
          <li className={buttonClasses}>Home</li>
          <li className={buttonClasses} onClick={scrollToTarget}>Projects</li>
          <li className={buttonClasses} onClick={triggerAbout}>About</li>
          <li className={buttonClasses}>Contact</li>
        </ul>
        <div className={`responsiveNav absolute top-24 left-0 w-full ${isHidden ? 'h-0' : 'h-screen'} overflow-hidden bg-opacity-65 bg-custom-dark`}>
          <ul className="text-white pb-24">
            <li className={responsiveBtnClasses}>Home</li>
            <li className={responsiveBtnClasses}>Projects</li>
            <li className={responsiveBtnClasses}>About</li>
            <li className={responsiveBtnClasses}>Contact</li>
          </ul>
        </div>
        <div className="navBtn cursor-pointer sm:hidden"><FontAwesomeIcon icon={faAlignJustify} className="text-white text-3xl" /></div>
      </nav>
      <div className="home lg:w-3/4 w-full mx-auto flex sm:flex-nowrap flex-wrap ">
        <div className="hero sm:basis-2/4 basis-full flex justify-center sm:order-1 order-2">
          <img src="https://res.cloudinary.com/daul01w0g/image/upload/v1736680767/me_yeqyub.png" alt="hero" />
        </div>
        <div className="text sm:basis-2/4 basis-full flex items-center p-3 sm:text-left text-center sm:order-2 order-1">
          <div className="container">
            <h4 className="text-sky-600 text-lg font-semibold block">Hello! I'm Loshie</h4>
            <h1 className="text-5xl font-bold text-white block my-5">Web Developer</h1>
            <p className="text-slate-400 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores deleniti fugiat magni sint, nam doloremque ipsam ex earum id in nihil? Tenetur totam dolore in est ducimus minima quaerat!
            </p>
            <button className="py-3 px-6 rounded-md bg-sky-600 hover:bg-sky-500 text-white">About Me</button>
            <div className="quickContact flex my-8 mx-auto sm:justify-start justify-center">
              <FontAwesomeIcon icon={faGithub} className="mr-4 text-2xl cursor-pointer text-white" />
              <FontAwesomeIcon icon={faLinkedin} className="mx-4 text-2xl cursor-pointer text-white" />
              <FontAwesomeIcon icon={faEnvelope} className="ml-4 text-2xl cursor-pointer text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="bgSplit absolute w-full h-2/4 flex sm:bg-transparent bg-custom-soft">
        <div className="box1 basis-2/4 bg-custom-soft"></div>
        <div className="box basis-2/4"></div>
      </div>
      <div className={`aboutPop ${showAbout ? 'block' : 'hidden'}`}>
        <Bottom closeAbout={triggerAbout}/>
      </div>
    </div>
  )
}

export default Home
