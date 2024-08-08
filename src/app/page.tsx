'use client'

import { PropsWithChildren, useCallback, useEffect, useRef, useState } from "react";
import AboutMe from "./components/AboutMe";
import CareersList from "./components/CareersList";
import classNames from "classnames";
import PressList from "./components/PressList";
import ProjectsList from "./components/ProjectsList";

function SectionHeader({ children }: PropsWithChildren) {
  return (
    <div className="p-8 flex items-center justify-center gap-2">
      {/* <hr className="flex- 0 w-11" /> */}
      <h2 className="text-2xl font-display italic text-gray-500">{children}</h2>
      {/* <hr className="flex- 0 w-11" /> */}
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
      <section ref={scrollRef} className="flex-1 px-4 xl:px-16 xl:h-screen overflow-y-scroll">
        <div className="max-w-3xl mx-auto px-4 xl:px-0">
          <div className="xl:flex h-screen flex-col items-center justify-end hidden">
            <div className="py-1 px-2 rounded text-gray-600 text-6xl">🍌</div>
            <div className="w-[1px] h-1/2 bg-gray-200" />
          </div>
          <SectionHeader>
            Career
          </SectionHeader>
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
            <div className="w-[1px] h-1/2 bg-gray-200" />
            <div className="py-1 px-2 rounded text-gray-600 text-sm bg-gray-200">End</div>
          </div>
        </div>
      </section>
    </main>
  );
}
