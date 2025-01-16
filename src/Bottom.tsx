import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faCss3, faJsSquare, faNodeJs, faPhp, faReact, } from "@fortawesome/free-brands-svg-icons";


interface topProps{
  closeAbout: ()=> void
}

function Bottom({closeAbout = () => {}}: topProps ) {
  return (
    <div className="w-full h-screen bg-custom-card-2 fixed top-0 left-0 z-0 flex justify-center items-center">
        <div className="w-1/2 2/5 bg-white shadow-lg relative rounded-lg flex">
          <FontAwesomeIcon icon={faCircleXmark} className="text-3xl absolute top-4 right-4 cursor-pointer" onClick={closeAbout}/>
          <div className="img basis-[40%]">
            <img src="https://res.cloudinary.com/daul01w0g/image/upload/v1736680767/me_yeqyub.png" alt="hero" className="w-full object-cover" />
          </div>
          <div className="text basis-[60%] p-4 pr-6">
            <h3 className="font-bold text-2xl py-5">ABOUT ME</h3>
            <p className="text-sm text-slate-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur voluptate autem sapiente dicta, odio cumque rerum hic natus, sed ipsum unde eligendi labore illum qui? Perferendis soluta aut voluptate id.</p>
            <h4 className="font-semibold text-2xl pt-3">SKILLS</h4>
            <div className="skillz grid grid-cols-2 gap-3">
              <div className="skill p-5 border-[1px] border-gray-200 rounded-lg">
                <div className="info flex justify-between pb-1">
                  <div className="brandIcons">
                    <FontAwesomeIcon icon={faHtml5} className="pr-2"/>
                    <FontAwesomeIcon icon={faCss3}/>  
                  </div>
                  <p>90%</p>
                </div>
                <div className="progressBar w-full h-[5px] rounded-lg bg-gray-200">
                  <div className="progress h-full w-[90%] bg-sky-600 rounded-lg"></div>
                </div>
              </div>
              <div className="skill p-5 border-[1px] border-gray-200 rounded-lg">
                <div className="info flex justify-between pb-1">
                  <div className="brandIcons">
                    <FontAwesomeIcon icon={faJsSquare} className="pr-2"/>
                    <FontAwesomeIcon icon={faReact} className="pr-2"/>
                  </div>
                  <p>80%</p>
                </div>
                <div className="progressBar w-full h-[5px] rounded-lg bg-gray-200">
                  <div className="progress h-full w-[80%] bg-sky-600 rounded-lg"></div>
                </div>
              </div>
              <div className="skill p-5 border-[1px] border-gray-200 rounded-lg">
                <div className="info flex justify-between pb-1">
                  <div className="brandIcons">
                    <FontAwesomeIcon icon={faNodeJs} className="pr-2"/>
                  </div>
                  <p>75%</p>
                </div>
                <div className="progressBar w-full h-[5px] rounded-lg bg-gray-200">
                  <div className="progress h-full w-[75%] bg-sky-600 rounded-lg"></div>
                </div>
              </div>
              <div className="skill p-5 border-[1px] border-gray-200 rounded-lg">
                <div className="info flex justify-between pb-1">
                  <div className="brandIcons">
                    <FontAwesomeIcon icon={faPhp} className="pr-2"/>
                  </div>
                  <p>80%</p>
                </div>
                <div className="progressBar w-full h-[5px] rounded-lg bg-gray-200">
                  <div className="progress h-full w-[80%] bg-sky-600 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Bottom
