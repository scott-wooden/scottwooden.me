import { useState } from "react";
import { Transition } from '@headlessui/react'
import Image from "next/image";
import classNames from "classnames";
import { FaCross, FaLink } from "react-icons/fa";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { PiStrategyBold } from "react-icons/pi";

const AtellioColor = '/Atellio-color.png';
const EasleColor = '/Easle-color.png';
const DojoColor = '/Dojo-color.png';
const OrderswiftColor = '/Orderswift-color.png';
const FreelanceColor = '/Freelance-color.png';

function CareerItem({ title, subtitle, meta, children, logo }: { title: string | React.ReactNode, subtitle: string, meta: string, logo: string, children?: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <button onClick={() => setExpanded((prev) => !prev)} className={classNames("text-left w-full block rounded-lg group bg-white cursor-pointer border border-white transition-all hover:border-gray-100 outline-1 outline-white focus-visible:outline-gray-700 focus-visible:outline-2 relative", { "border-gray-100": expanded })}>

      <div className="flex p-4 items-center gap-2 md:gap-4">
        <div className="flex-0 h-12 w-12 md:h-16 md:w-16 rounded overflow-hidden relative">
          <Image src={logo} className={classNames("absolute left-0 top-0 saturate-0 transition-all group-hover:saturate-100 group-hover:opacity-100", { "saturate-100 opacity-100": expanded, "opacity-30": !expanded })} width="80" height="80" alt="logo" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold truncate">{title}</h3>
          <p className="text-sm text-gray-500 truncate">{subtitle}</p>
        </div>
        <div className="flex-0 relative">
          <p className="italic text-sm text-gray-400 transition-opacity group-hover:opacity-0">
            {meta}
          </p>
          <p className={classNames("absolute top-0 right-0 italic text-sm text-gray-400 transition-opacity opacity-0 group-hover:opacity-100", { "opacity-0": expanded })}>
            {expanded ? "Read less" : "Read more"}
          </p>
        </div>
      </div>

      <Transition show={expanded}>
        <div className="transition-all duration-700 ease-in-out max-h-[2000px] data-[closed]:opacity-0 data-[closed]:max-h-0 overflow-hidden">
          <div className="px-4 md:pl-24 prose md:prose-md lg:prose-md pb-16">
            {children}
          </div>
        </div>
      </Transition>

    </button>
  )
}

function CareersList() {
  return (
    <>
      <CareerItem
        title={<>Atellio <span className="font-medium">B2B Enterprise SaaS Product</span></>}
        subtitle="CPO & Co-Founder · Design, Development & Branding"
        meta="2018 - Present"
        logo={AtellioColor}
      >
        <>
          <a href="https://atellio.com" target="_blank" className="group/link relative px-2 py-1 border rounded-full inline-flex gap-1 items-center duration-300 border-gray-200 text-sm no-underline transition-all hover:pr-7 hover:shadow-sm hover:border-gray-400">
            <FaLink className="text-gray-300 group-hover/link:text-black transition-all duration-300" /> Visit at atellio.com <FaSquareArrowUpRight className="transition-all absolute right-1 opacity-0 duration-300 group-hover/link:opacity-100 group-hover/link:right-2" />
          </a>
          <ul>
            <li>💻 Enterprise SaaS talent management / resourcing platform</li>
            <li>🧑‍🎨 Responsible for branding, UX / UI design and product direction</li>
            <li>💵 Raised $1m from investors to scale and grow product offering</li>
            <li>📈 Reached $1m Revenue ARR</li>
            <li>🏢 Customers include Nike, Nordstrom, Splashlight & Converse</li>
          </ul>
          <p>
            Atellio (initially called Stitch)  is an enterprise SaaS platform that allows companies to manage their talent and crew. It was born out of our insights from Easle, where customers on Easle would ask about white labelling the platform for their own talent management needs. Within 2 weeks of building a prototype, we had our first paying customer.
          </p>
          <p>
            We soon found traction within the retail and fashion space, where large companies would struggle to wrangle together their talent into one coherent system. We worked alongside these companies to extend the product offering. Our system build bespoke features for shortlisting, booking, budgeting and assigning talent to photo and video productions.
          </p>
          <p>
            In its peak we got to just shy of $1m in annual recurring revenue, with customers like Nike, Walmart, Nordstrom and REI to name a few. Serving 100’s of users within these customers to manage their fluid workforce across high velocity projects.
          </p>
        </>
      </CareerItem>
      <CareerItem
        title={<>Easle <span className="font-medium">Premium Creative Marketplace</span></>}
        subtitle="CPO & Co-Founder · Design, Development & Branding"
        meta="2016 - 2018"
        logo={EasleColor}
      >
        <>
          <div className="px-2 py-1 border rounded-full inline-flex gap-1 items-center border-gray-200 text-sm bg-gray-50">
            <PiStrategyBold className="text-gray-400" /> Pivotted to Atellio
          </div>
          <ul>
            <li>💻 A marketplace to find and book talented vetted creatives</li>
            <li>💵 Raised $450,000 from angels to scale up marketplace</li>
            <li>📈 Reached $20k / month in contract value</li>
            <li>🏢 Customers ranged from boutique production houses to large creative agencies</li>
          </ul>
          <p>
            Easle was a vetted talent marketplace allowing companies to find and book high-bar creative talent across design, illustration and photography. We catered to heavyweight creative agencies and brands that valued the top 10% of creatives.
          </p>
          <p>
            Our approach was to vet both the talent onboarding the platform, as well as the companies looking to hire them. Talent was vetted by appointing “Creative Ambassadors”, who would sift through the applications and approve talent based on their quality of work. That way, we could ensure substantial and fair briefs for the talent on our roster. Our roster totalled 700+ top tier Graphic Designers, Animators, Illustrators & Photographers.
          </p>
          <p>
            We built an entire booking engine where companies are guided to create contracts that are reviewed and approved by both parties. These contracts were then tied to financial amounts where companies can choose to pay through a number of payment methods.
          </p>
          <p>
            While we managed to scale contract revenue to $20k / month, we quickly learned that companies preferred the traditional route of talent agencies where hoping on a phone was more convenient than going through talent marketplace to find and coordinate bookings.
          </p>
        </>
      </CareerItem>

      <CareerItem
        title={<>Dojo <span className="font-medium">London City Discovery App</span></>}
        subtitle="Senior Designer · UX / UI Design & Development"
        meta="2015 - 2016"
        logo={DojoColor}
      >
        <>
          <div className="px-2 py-1 border rounded-full inline-flex gap-1 items-center border-gray-200 text-sm bg-gray-50">
            <PiStrategyBold className="text-gray-400" /> Pivotted to Kyra
          </div>
          <ul>
            <li>💻 A City Discovery App for London / Paris - Think Timeout but cooler...</li>
            <li>💵 Designed and developed the web version of the app & a savvy newsletter builder</li>
            <li>📈 Serving 300k+ audience & user base</li>
          </ul>
          <p>
            Dojo was a city discovery app that aimed to capture the zeitgeist of London. It quickly became a hot pocket within London where for most millennials it was customary to have both Citymapper and Dojo to be considered a “Londoner”.
          </p>
          <p>
            With its user base quickly growing, I was brought on to re-design and develop their newsletter builder, being one of its key marketing channels serving 100k+ subscribers. Alongside this, with the app snapping up design awards, I worked with the founding designer to translate the design to the web, allowing users without the app to access the good stuff.
          </p>
          <p>
            Unfortunately, the app shut down a few years later, leaving all wannabe London trendsetters anxious in having to revert back to more apps like Timeout.
          </p>
        </>
      </CareerItem>

      <CareerItem
        title={<>Orderswift <span className="font-medium">Click & Collect Restaurant Ordering</span></>}
        subtitle="Founding Designer · Design & Development"
        meta="2012 - 2015"
        logo={OrderswiftColor}
      >
        <>
          <a href="https://orderswift.com" target="_blank" className="group/link relative px-2 py-1 border rounded-full inline-flex gap-1 items-center duration-300 border-gray-200 text-sm no-underline transition-all hover:pr-7 hover:shadow-sm hover:border-gray-400">
            <FaLink className="text-gray-300 group-hover/link:text-black transition-all duration-300" /> Visit at orderswift.com <FaSquareArrowUpRight className="transition-all absolute right-1 opacity-0 duration-300 group-hover/link:opacity-100 group-hover/link:right-2" />
          </a>
          <ul>
            <li>💻 A customisable restaurant click & collect ordering platform</li>
            <li>💵 Designed & developed customer facing application as well as restaurant order system</li>
            <li>📈 Serving many high street restaurant chains including Zizzi, Giggling Squid & Prezzo</li>
          </ul>
          <p>
            Orderswift started out as a food order and delivery app, much like we see Deliveroo and Uber eats today, but quickly moved into the bespoke restaurant solution of click and collect ordering. Deliveroo at the time was just starting out, and I wonder what would have been if we competed head to head. Would Orderoo have been the go to? Who knows...
          </p>
          <p>
            I worked with the founders to conceptualise, wireframe, design and build the food ordering experience from the ground up. This included the customer facing menu and checkout system, as well as the restaurant application to receive and manage the orders coming through our system.
          </p>
          <p>
            The business continues on today serving customers across a number of high street chains such as Zizzi, Giggling Squid & Busaba.
          </p>
        </>
      </CareerItem>

      <CareerItem
        title="Freelance & Consulting"
        subtitle="Creative Direction / Design Lead: UX & UI / Developer"
        meta="2011 - 2016"
        logo={FreelanceColor}
      >
        <>
          <p>
            Through my freelance career I have worked with a number companies of various shapes and sizes on short-term projects. Some of which are listed below:
          </p>
          <ul>
            <li><span className="font-bold">Barclays:</span> UX / UI design for an iOS app</li>
            <li><span className="font-bold">Hitch:</span> UX / UI design for iOS dating app</li>
            <li><span className="font-bold">ADA. National College:</span> UX / UI design for college website and CMS</li>
            <li><span className="font-bold">VFestival:</span> UX / UI design for iOS festival app 2015</li>
            <li><span className="font-bold">Daniel Shiffman:</span> Creative direction & website build for a coding tutor</li>
            <li><span className="font-bold">Wildd:</span> Creative Direction / UX & UI design for a kids outdoor explorers App</li>
          </ul>
        </>
      </CareerItem>
    </>
  );
};

export default CareersList;
