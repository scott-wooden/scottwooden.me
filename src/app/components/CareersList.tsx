import { useState } from "react";
import { Transition } from '@headlessui/react'
import Image from "next/image";
import classNames from "classnames";
import { FaCross, FaLink } from "react-icons/fa";
import { FaSquareArrowUpRight } from "react-icons/fa6";

const AtellioColor = '/Atellio-color.png';
const EasleColor = '/Easle-color.png';
const DojoColor = '/Dojo-color.png';
const OrderswiftColor = '/Orderswift-color.png';

function CareerItem({ title, subtitle, meta, children, logo }: { title: string | React.ReactNode, subtitle: string, meta: string, logo: string, children?: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <a role="button" onClick={() => setExpanded((prev) => !prev)} className={classNames("block rounded-lg group bg-white cursor-pointer border border-white transition-all hover:border-gray-100 outline-1 outline-white focus-visible:outline-gray-700 focus-visible:outline-2 relative", { "border-gray-100": expanded })}>

      <div className="flex p-4 items-center gap-4">
        <div className="flex-0 h-16 w-16 rounded overflow-hidden relative">
          <Image src={logo} className={classNames("absolute left-0 top-0 saturate-0 opacity-30 transition-all group-hover:saturate-100 group-hover:opacity-100", { "saturate-100 opacity-100": expanded })} width="80" height="80" alt="logo" />
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
        <div className="transition-all duration-700 ease-in-out data-[closed]:opacity-0 data-[closed]:h-0 overflow-hidden">
          <div className="pl-24 prose md:prose-md lg:prose-md pb-16">
            {children}
          </div>
        </div>
      </Transition>

    </a>
  )
}

function CareersList() {
  return (
    <>
      <CareerItem
        title={<>Atellio <span className="font-medium">SaaS Enterprise Product</span></>}
        subtitle="Co-Founder & CPO · Design, Development & Branding"
        meta="2018 - Present"
        logo={AtellioColor}
      >
        <>
          <a href="https://atellio.com" target="_blank" className="group/link relative px-2 py-1 border rounded-full inline-flex gap-1 items-center duration-300 border-gray-200 text-sm no-underline transition-all hover:pr-7 hover:shadow-sm hover:border-gray-400">
            <FaLink className="text-gray-300 group-hover/link:text-gray-400 transition-all duration-300" /> Visit at atellio.com <FaSquareArrowUpRight className="transition-all absolute right-1 opacity-0 duration-300 group-hover/link:opacity-100 group-hover/link:right-2" />
          </a>
          <ul>
            <li>💻 Enterprise SaaS talent management / resourcing platform</li>
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
          <p>
            We soon struggled to grow beyond that as our offering was highly specific to photo / video production which only provided enough value to very large enterprise customers. The platform is currently being maintained to serve it’s existing customers.
          </p>
        </>
      </CareerItem>
      <CareerItem
        title={<>Easle <span className="font-medium">Premium Creative Marketplace</span></>}
        subtitle="Co-Founder & CPO · Design, Development & Branding"
        meta="2016 - 2018"
        logo={EasleColor}
      >
        <>
          <div className="px-2 py-1 border rounded-full inline-flex gap-1 items-center border-gray-200 text-sm bg-gray-100">
            <FaCross className="text-gray-500" /> Shut down 2019
          </div>
          <ul>
            <li>💻 A marketplace to find and book talented vetted creatives</li>
            <li>💵 Raised $450,000 from angels to scale up marketplace</li>
            <li>📈 Reached $20k / month in contract value</li>
            <li>🏢 Customers ranged from boutique production houses to large creative agencies</li>
          </ul>
          <p>
            Dojo was a city discovery app that aimed to capture the zeitgeist of London. It quickly became a hot pocket within London where for most millennials it was customary to have both Citymapper and Dojo to be considered a “Londoner”.
          </p>
          <p>
            With its user base quickly growing, I was brought on to re-design and develop their newsletter builder, being one of its key marketing channels serving 100k+ subscribers. Alongside this, with the app snapping up design awards, I worked with the founding designer to translate the design to the web, allowing users without the app to access the good stuff.
          </p>
          <p>
            Unfortunately, the app shut down a few years later, leaving all wannabe London trendsetters anxious in having to revert back to more vanilla apps like Timeout.
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
          <div className="px-2 py-1 border rounded-full inline-flex gap-1 items-center border-gray-200 text-sm bg-gray-100">
            <FaCross className="text-gray-500" /> Shut down 2018
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
            Unfortunately, the app shut down a few years later, leaving all wannabe London trendsetters anxious in having to revert back to more vanilla apps like Timeout.
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
            <FaLink className="text-gray-300 group-hover/link:text-gray-400 transition-all duration-300" /> Visit at orderswift.com <FaSquareArrowUpRight className="transition-all absolute right-1 opacity-0 duration-300 group-hover/link:opacity-100 group-hover/link:right-2" />
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
            The business continues on today serving customers across a number of high street chains.
          </p>
        </>
      </CareerItem>
    </>
  );
};

export default CareersList;
