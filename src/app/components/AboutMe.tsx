import Image from "next/image";
import { FaInstagram, FaLinkedin, FaMedium, FaRegEnvelope } from "react-icons/fa";
import { SiNike } from "react-icons/si";

const ProfileVideo = '/Me.mp4';
const Zizzi = '/zizzi.png';
const Splashlight = '/splashlight.png';
const Nordstrom = '/nordstrom.png';

function EngineeringTooltip() {

  return (
    <span className="group font-bold italic relative border-b border-gray-300 hover:border-gray-500">
      Engineer
      <div className="group-hover:opacity-100 opacity-0 scale-95 group-hover:scale-100 transition-all py-2 px-4 shadow rounded-full bg-black text-white text-xs absolute -bottom-8 -left-4 font-body whitespace-nowrap">Specialising in Front-End · Building in React </div>
    </span>
  )
}

function AboutMe() {

  return (
    <>
      <div className="max-w-3xl mx-auto px-8 pt-8 xl:px-16 sm:pt-16 flex-1 overflow-y-scroll">
        <div className="w-32 h-40 flex-0 bg-slate-100 rounded-md overflow-hidden">
          <video width="160" height="160" autoPlay loop className="w-32 h-40 object-cover" playsInline preload="none" muted>
            <source src={ProfileVideo} type="video/mp4" />
          </video>
        </div>
        <div className="pt-4 sm:p-4">
          <h1 className="text-2xl sm:text-3xl 2xl:text-4xl font-medium font-display my-1">Hey! I&apos;m <span className="font-bold">Scott</span></h1>
          <h1 className="text-2xl sm:text-3xl 2xl:text-4xl font-medium font-display">A <span className="font-bold italic rainbow">Digital Designer</span> & <EngineeringTooltip /></h1>
          <p className="my-4 text-md sm:text-lg">
            For the past 7 years I’ve worked on my own start-up - Atellio - alongside my co-founder. Before that I designed and built digital products for an eclectic mix of start-ups.
          </p>
          <p className="my-4 text-md sm:text-lg">
            My experience runs across consumer and b2b web applications - with a sharp focus on guiding early companies build first versions of their product - from wireframe to launch.
          </p>
          <p className="my-4 text-md sm:text-lg">
            I’ve built products that are trusted by companies like{" "}
            <span className="mr-2 inline-block font-semibold">
              <span className="w-5 h-5 inline-flex items-center justify-center align-text-bottom rounded-sm overflow-hidden bg-gray-100">
                <Image src={Zizzi} width="32" height="32" alt="Zizzi logo" />
              </span>{" "}
              Zizzi
            </span>
            <span className="mr-2 inline-block font-semibold">
              <span className="w-5 h-5 inline-flex items-center justify-center align-text-bottom rounded-sm overflow-hidden bg-gray-100">
                <Image src={Splashlight} width="32" height="32" alt="Zizzi logo" />
              </span>{" "}
              Splashlight
            </span>
            <span className="mr-2 inline-block font-semibold">
              <span className="w-5 h-5 inline-flex items-center justify-center align-text-bottom rounded-sm overflow-hidden bg-gray-100">
                <Image src={Nordstrom} width="32" height="32" alt="Zizzi logo" />
              </span>{" "}
              Nordstrom
            </span>
            <span className="mr-2 inline-block font-semibold">
              <span className="w-5 h-5 inline-flex items-center justify-center align-text-bottom rounded-sm overflow-hidden bg-gray-100">
                <SiNike className="text-black" />
              </span>{" "}
              Nike
            </span>
            and more.
          </p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto w-full flex-0 p-2 flex justify-between px-8 xl:px-16 xl:py-8 items-center">
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