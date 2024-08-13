import Image from "next/image";
import { FaInstagram, FaLinkedin, FaMedium, FaRegEnvelope } from "react-icons/fa";
import { SiNike } from "react-icons/si";

const ProfileVideo = '/profile-3.mp4';
const ProfileVideo_Loader = '/profile-3-gif.gif';
const Rei = '/rei.png';
const Splashlight = '/splashlight.png';
const Nordstrom = '/nordstrom.png';
const AtellioColor = '/Atellio-color.png';


function EngineeringTooltip() {

  return (
    <span className="group font-bold italic relative border-b border-gray-300 hover:border-gray-500">
      engineer
      <div className="group-hover:opacity-100 pointer-events-none opacity-0 scale-95 group-hover:scale-100 transition-all py-2 px-4 shadow rounded-full bg-black text-white text-xs absolute -bottom-8 -left-4 font-body whitespace-nowrap">Specialising in Front-End · Building in React </div>
    </span>
  )
}

function AboutMe() {

  return (
    <>
      <div className="max-w-3xl mx-auto px-8 pt-8 xl:px-16 sm:pt-16 flex-1 overflow-y-scroll">
        <div className="w-[124px] h-40 flex-0 bg-slate-100 rounded-b-lg rounded-tr-full rounded-tl-full overflow-hidden">
          <video autoPlay loop className="w-32 h-40 object-cover" playsInline preload="none" muted poster={ProfileVideo_Loader}>
            <source src={ProfileVideo} type="video/mp4" />
          </video>
        </div>
        <div className="pt-4 sm:p-4">
          <h1 className="text-2xl sm:text-3xl 2xl:text-4xl font-semibold font-display !leading-10">Hey! I&apos;m Scott.</h1>
          <h1 className="text-2xl sm:text-3xl 2xl:text-4xl font-semibold font-display italic !leading-10">A space-loving, 90&apos;s-bopping <br /> <span className="font-bold italic rainbow">digital designer</span> & <EngineeringTooltip /></h1>
          <p className="my-4 text-md sm:text-lg">
            I&apos;ve built up a decades worth of experience building consumer and b2b web applications - with a focus on early-stage companies to design and develop first versions of their product.
          </p>
          <p className="my-4 text-md sm:text-lg">
            Most recently I&apos;ve worked on my own start-up{" "}
            <a href="https://atellio.com" target="_blank" className="pl-1 pr-2 bg-white whitespace-nowrap border pt-1 sm:pt-0.5 pb-1 rounded-full items-center duration-300 border-gray-200 no-underline transition-all hover:shadow-sm hover:border-gray-400">
              <span className="w-5 h-5 rounded-full inline-flex items-center justify-center align-text-bottom overflow-hidden bg-gray-100">
                <Image src={AtellioColor} width="32" height="32" alt="Atellio logo" />
              </span>{" "}
              Atellio
            </a> alongside my co-founder, where we spent the last seven years building talent software for the creative industry.
          </p>
          <p className="my-4 text-md sm:text-lg">
            Products I&apos;ve built are being used at{" "}
            <a href="https://nike.com" target="_blank" className="pl-1 pr-2 bg-white pt-1 whitespace-nowrap sm:pt-0.5 pb-1 border rounded-full items-center duration-300 border-gray-200 no-underline transition-all hover:shadow-sm hover:border-gray-400">
              <span className="w-5 h-5 rounded-full inline-flex items-center justify-center align-text-bottom overflow-hidden bg-gray-100">
                <SiNike className="text-black" />
              </span>{" "}
              Nike
            </a>{" "}
            <a href="https://nordstrom.com" className="pl-1 pr-2 bg-white border pt-1 whitespace-nowrap sm:pt-0.5 pb-1 rounded-full items-center duration-300 border-gray-200 no-underline transition-all hover:shadow-sm hover:border-gray-400">
              <span className="w-5 h-5 rounded-full inline-flex items-center justify-center align-text-bottom overflow-hidden bg-gray-100">
                <Image src={Nordstrom} width="32" height="32" alt="Zizzi logo" />
              </span>{" "}
              Nordstrom
            </a>{" "}
            <a href="https://splashlight.com" className="pl-1 pr-2 bg-white border pt-1 whitespace-nowrap sm:pt-0.5 pb-1 rounded-full items-center duration-300 border-gray-200 no-underline transition-all hover:shadow-sm hover:border-gray-400">
              <span className="w-5 h-5 rounded-full inline-flex items-center justify-center align-text-bottom overflow-hidden bg-gray-100">
                <Image src={Splashlight} width="32" height="32" alt="Zizzi logo" />
              </span>{" "}
              Splashlight
            </a>{" "}
            <a href="https://rei.com" className="pl-1 pr-2 bg-white border pt-1 whitespace-nowrap sm:pt-0.5 pb-1 rounded-full items-center duration-300 border-gray-200 no-underline transition-all hover:shadow-sm hover:border-gray-400">
              <span className="w-5 h-5 rounded-full inline-flex items-center justify-center align-text-bottom overflow-hidden bg-gray-100">
                <Image src={Rei} width="32" height="32" alt="Zizzi logo" />
              </span>{" "}
              REI
            </a>{" "}
            and more...
          </p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto w-full flex-0 p-2 flex justify-between px-8 xl:px-16 xl:pb-8 xl:pt-4 items-center">
        <div className="flex gap-2">
          <a href="https://medium.com/@woodenwoody" target="_blank" className="text-gray-500 transition-colors hover:text-gray-800 inline-flex rounded-md w-8 h-8 p-1.5 2xl:w-10 2xl:h-10 items-center justify-center bg-white hover:bg-slate-100">
            <FaMedium />
          </a>
          <a href="https://www.linkedin.com/in/scott-wooden-68718024/" target="_blank" className="text-gray-500 transition-colors hover:text-gray-800 inline-flex rounded-md w-8 h-8 p-1.5 2xl:w-10 2xl:h-10 items-center justify-center bg-white hover:bg-slate-100">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/woodenwoody" target="_blank" className="text-gray-500 transition-colors hover:text-gray-800 inline-flex rounded-md w-8 h-8 p-1.5 2xl:w-10 2xl:h-10 items-center justify-center bg-white hover:bg-slate-100">
            <FaInstagram />
          </a>
          <a href="mailto:scottwooden90@gmail.com" target="_blank" className="text-gray-500 hover:text-gray-800 transition-colors inline-flex rounded-md w-8 h-8 p-1.5 2xl:w-10 2xl:h-10 items-center justify-center bg-white hover:bg-slate-100">
            <FaRegEnvelope />
          </a>
        </div>
        <div className="rounded-full p-1 px-2 border border-gray-200 text-sm flex items-center gap-1">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500 flex-0 pulse relative" />
          <span>Available from{"  "}<span className="font-semibold">Sept</span></span>
        </div>
      </div>
    </>
  )
}

export default AboutMe;