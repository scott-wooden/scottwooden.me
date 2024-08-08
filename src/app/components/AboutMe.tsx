import { FaInstagram, FaLinkedin, FaMedium, FaRegEnvelope } from "react-icons/fa";
const ProfileVideo = '/Me.mp4';


function AboutMe() {

  return (
    <>
      <div className="px-16 pt-16 flex-1 overflow-y-scroll">
        <div className="w-32 h-40 flex-0 bg-slate-100 rounded-md overflow-hidden">
          <video width="160" height="160" autoPlay loop className="w-32 h-40 object-cover" playsInline preload="none" muted>
            <source src={ProfileVideo} type="video/mp4" />
          </video>
        </div>
        <div className="p-4">
          <h1 className="text-3xl 2xl:text-4xl font-display my-1">Hello, I&apos;m <span className="font-semibold">Scott</span></h1>
          <h1 className="text-3xl 2xl:text-4xl font-display">A <span className="font-semibold italic rainbow">Product Designer</span> & <span className="font-semibold underline">Engineer</span></h1>
          <p className="my-4 text-lg">
            Building digital products has been my bread and butter for the last 14 years. I’m best placed at the early stages of an idea, working with great people to conceptualise, design & build the first version of a product to validate it against its market.
          </p>
          <p className="my-4 text-lg">
            I’ve designed and built a range of digital products that are used to this day by high street restaurants, top tier design agencies and fortune 500 companies - like <span className="w-5 h-5 inline-block align-text-bottom rounded-sm bg-gray-200" /> <span className="font-semibold">Nike*</span>.
          </p>
          <p className="my-4 text-sm text-gray-500">
            * I’m proud of this one.
          </p>
        </div>
      </div>
      <div className="flex-0 p-2 flex justify-between px-16 py-8 items-center">
        <div className="flex gap-2">
          {/* <a href="https://instagram.com/woodenwoody" target="_blank" className="text-gray-500 transition-colors hover:text-gray-800 inline-flex rounded-md w-8 h-8 p-1.5 2xl:w-10 2xl:h-10 items-center justify-center bg-white hover:bg-slate-100">
            <FaInstagram size="lg" />
          </a> */}
          <a href="https://medium.com/@woodenwoody" target="_blank" className="text-gray-500 transition-colors hover:text-gray-800 inline-flex rounded-md w-8 h-8 p-1.5 2xl:w-10 2xl:h-10 items-center justify-center bg-white hover:bg-slate-100">
            <FaMedium size="lg" />
          </a>
          <a href="https://www.linkedin.com/in/scott-wooden-68718024/" target="_blank" className="text-gray-500 transition-colors hover:text-gray-800 inline-flex rounded-md w-8 h-8 p-1.5 2xl:w-10 2xl:h-10 items-center justify-center bg-white hover:bg-slate-100">
            <FaLinkedin size="lg" />
          </a>
          <a href="mailto:scottwooden90@gmail.com" target="_blank" className="text-gray-500 hover:text-gray-800 transition-colors inline-flex rounded-md w-8 h-8 p-1.5 2xl:w-10 2xl:h-10 items-center justify-center bg-white hover:bg-slate-100">
            <FaRegEnvelope size="lg" />
          </a>
        </div>
        <div className="rounded-full p-1 px-2 border border-gray-200 text-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-1 flex-0 pulse relative" />
          Available from{"  "}<span className="font-semibold">September</span>
        </div>
      </div>
    </>
  )
}

export default AboutMe;