import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Services() {


  const services = [
    {
      icon: "coding.png",
      title: 'Web Development',
      description: 'Elevate your online presence with our expert web development'
    },
    {
      icon: "web-manage.png",
      title: 'Web Maintanance',
      description: 'Trust my web maintenance to keep your website running efficiently.'
    },
    {
      icon: "web-design.png",
      title: "Web Design",
      description: "Improve your online presence with our expert web design services."
    },
    {
      icon: "cloud-api.png",
      title: "API Development",
      description: "Empower your business with our API development services."
    }
  ];
  const isEven = (number: number) => {
    if (number % 2 === 0) {
      return true;
    }
  };

  return (
    <div className="services w-full h-fit relative">
       <div className="bg w-full h-full absolute top-0 left-0 z-10 flex">
        <div className="box sm:h-full h-96 sm:rounded-b-none rounded-b-full sm:basis-1/2 basis-full bg-custom-soft"></div>
        <div className="box h-full sm:basis-1/2 sm:block hidden"></div>
       </div>
       <div className="content w-full h-full flex justify-center gap-8 py-24 flex-wrap relative  z-20">

        {services.map((service, index) => (
          <div className={`serviceCard ${isEven(index) ? "bg-custom-card" : "bg-sky-700"} h-fit p-4 rounded-lg basis-custom shadow-xl`}>
            <img src={service.icon} alt="Service Icon" className={isEven(index) ? "filter-sky-600" : "filter-invert"} />
            <h3 className="text-xl font-bold text-white py-3">{service.title}</h3>
            <p className=" text-slate-400 text-sm pb-3">{service.description}</p>
            <button className={`${isEven(index) ? "text-sky-600" : "text-white"} flex items-center flex-nowrap font-medium`}>Learn More <FontAwesomeIcon icon={faAngleRight} className="ml-2" /></button>
          </div>
        ))}
        
       </div>
       <div className="stats w-full flex justify-center items-center gap-8 py-24 relative z-20">
          <div className="xp text-center basis-[30%]">
            <h1 className="text-8xl font-bold text-sky-600">4+</h1>
            <p className="text-slate-400 text-sm">Years of experience</p>
          </div>
          <div className="counts basis-[60%] flex flex-wrap gap-3">
            <div className="count basis-[400px] py-6 px-10 text-center bg-custom-card">
              <h1 className="text-4xl font-bold text-sky-600">5+</h1>
              <p className="text-slate-400 text-sm">Clients</p>
            </div>
            <div className="count basis-[400px] py-6 px-10 text-center bg-custom-card">
              <h1 className="text-4xl font-bold text-sky-600">10+</h1>
              <p className="text-slate-400 text-sm">Projects</p>
            </div>
            <div className="count basis-[400px] py-6 px-10 text-center bg-custom-card">
              <h1 className="text-4xl font-bold text-sky-600">6</h1>
              <p className="text-slate-400 text-sm">Projects Completed</p>
            </div>
            <div className="count basis-[400px] py-6 px-10 text-center bg-custom-card">
              <h1 className="text-4xl font-bold text-sky-600">4</h1>
              <p className="text-slate-400 text-sm">Achievements</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Services
