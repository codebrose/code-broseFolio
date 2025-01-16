import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";


interface topProps{
  closeAbout: ()=> void
}

function Top({ closeAbout = () => {} }: topProps ) {
  return (
    <div className="w-fit h-fit fixed top-4 right-4 z-50" onClick={closeAbout}>
      <FontAwesomeIcon icon={faCircleXmark} className="text-white text-4xl cursor-pointer hover:text-sky-600 transition-colors"/>
    </div>
  )
}

export default Top
