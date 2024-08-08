import Image from 'next/image';
import React from 'react';
import { FaSquareArrowUpRight } from 'react-icons/fa6';

const KMLogo = '/project-km.png';
const QuietJoy = '/project-quietjoy.png';

function ProjectsItem({ title, subtitle, link, logo }: { title: string | React.ReactNode, subtitle: string, link: string, logo: string }) {

  return (
    <a href={link} target="_blank" className="group block rounded-lg transition-all bg-white cursor-pointer hover:bg-gray-100 outline-1 outline-white focus-visible:outline-gray-700 focus-visible:outline-2">
      <div className="flex p-4 items-center gap-4">
        <div className="flex-0 h-12 w-12 md:h-16 md:w-16 rounded-md overflow-hidden bg-slate-300">
          <Image src={logo} className="saturate-0 opacity-30 transition-all group-hover:saturate-100 group-hover:opacity-100" width="80" height="80" alt="logo" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="truncate">{title}</h3>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
        <div className="flex-0l">
          <p className="italic text-sm text-gray-400 opacity-0 transition-opacity group-hover:opacity-100 inline-flex gap-1 items-center">
            Visit <FaSquareArrowUpRight className="text-gray-400" />
          </p>
        </div>
      </div>
    </a>
  )
}

const ProjectsList = () => {
  return (
    <>
      <ProjectsItem logo={KMLogo} title="Kudos Maps" subtitle="Premium artwork celebrating personal athletic wins" link="https://www.kudosmaps.com/" />
      <ProjectsItem logo={QuietJoy} title="Quiet Joy" subtitle="My personal creative journal" link="https://quietjoy.co/" />
    </>
  );
};

export default ProjectsList;
