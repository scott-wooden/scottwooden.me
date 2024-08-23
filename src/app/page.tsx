'use client'

import { PropsWithChildren, useCallback, useEffect, useRef, useState } from "react";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

import AboutMe from "./components/AboutMe";
import CareersList from "./components/CareersList";
import classNames from "classnames";
import PressList from "./components/PressList";
import ProjectsList from "./components/ProjectsList";
import { FaEnvelope } from "react-icons/fa";
import { FaSquareArrowUpRight } from "react-icons/fa6";

function SectionHeader({ children }: PropsWithChildren) {
  return (
    <div className="p-8 flex items-center justify-center gap-2">
      <h2 className="text-2xl font-display italic text-gray-500">{children}</h2>
    </div>
  )
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);

  const onScroll = useCallback((event: Event) => {
    const target = event.target as HTMLElement;
    if (target && 'scrollTop' in target) {

      setScrollY(target.scrollTop);
    }
  }, []);

  useEffect(() => {

    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowHeight(window.innerHeight)
    }
  }, []);

  useEffect(() => {
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", onScroll, { passive: true });

      return () => {
        currentRef.removeEventListener("scroll", onScroll);
      }
    }
  }, [onScroll]);

  return (
    <main className="xl:h-screen flex flex-col xl:flex-row bg-white cursor-default">
      <aside
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={classNames("flex flex-col flex-0 xl:max-w-2xl xl:h-screen border-r border-r-gray-100 transition-all duration-500", {
          "xl:-translate-x-7 xl:opacity-30 xl:blur": !isHovering && (scrollY > (windowHeight / 2))
        })}>
        <AboutMe />
      </aside>
      <section ref={scrollRef} id="sectionScrollable" className="flex-1 xl:px-16 xl:h-screen overflow-y-scroll">
        <div className="max-w-3xl mx-auto px-4 xl:px-0">
          <div className="xl:flex h-screen flex-col items-center justify-end hidden">
            <div className="w-[1px] h-1/2 bg-white" />
            <Link
              to="scrollHint"
              smooth={true}
              duration={700}
              className="transition-all py-1 px-2 rounded text-gray-600 text-6xl cursor-pointer hover:scale-105"
              containerId="sectionScrollable"
            >👇🏽</Link>
            <div className="w-[1px] h-1/2 bg-gray-200 bg-gradient-to-t from-gray-200 to-white" />
          </div>
          <Element name="scrollHint" className="element">
            <SectionHeader>
              Career
            </SectionHeader>
          </Element>
          <CareersList />
          <SectionHeader>
            Press / Mentions
          </SectionHeader>
          <PressList />
          <SectionHeader>
            Other projects
          </SectionHeader>
          <ProjectsList />
          <div className="h-screen flex flex-col items-center justify-start pt-10">
            <div className="w-[1px] h-1/2 bg-gradient-to-t to-gray-200 from-white" />
            <div className="py-2 px-2 rounded text-gray-600 text-6xl">🪐</div>
            <div className="py-1 px-2 rounded text-gray-800 text-center">Thanks for stopping by!</div>
            <div className="py-1 px-2 rounded text-gray-500 text-sm text-center max-w-96">If you want to walk through any of my projects in more detail and learn about how I work please contact me below  <br /><br /><a href="mailto:scottwooden90@gmail.com" target="_blank" className="group/link relative px-2 py-1 border rounded-full inline-flex gap-1 items-center duration-300 border-gray-200 text-sm no-underline transition-all hover:pr-7 hover:shadow-sm hover:border-gray-400"><FaEnvelope className="text-gray-300 group-hover/link:text-black transition-all duration-300" />  scottwooden90@gmail.com <FaSquareArrowUpRight className="transition-all absolute right-1 opacity-0 duration-300 group-hover/link:opacity-100 group-hover/link:right-2" /></a></div>
            <div className="w-[1px] h-1/2 bg-white" />
            <div className="py-1 px-2 rounded text-gray-400 text-xs pb-8">Designed by Me · Built with NextJS · Deployed using Vercel · <a href="https://github.com/scott-wooden/scottwooden.me" target="_blank" className="underline">Code on Github</a></div>
          </div>
        </div>
      </section>
    </main>
  );
}
