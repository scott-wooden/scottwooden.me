import React from 'react';

function ProjectsItem({ title, subtitle, link }: { title: string | React.ReactNode, subtitle: string, link: string }) {

  return (
    <a href={link} target="_blank" className="block rounded-lg bg-white cursor-pointer hover:bg-gray-100 outline-1 outline-white focus-visible:outline-gray-700 focus-visible:outline-2">
      <div className="flex p-4 items-center gap-4">
        <div className="flex-0 h-16 w-16 rounded-sm bg-slate-300">
          {/* <Image src="https://placekitten.com/300/300" width="80" height="80" alt="logo" /> */}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="truncate">{title}</h3>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
        <div className="flex-0l">
          <p className="italic text-sm text-gray-400">
            View
          </p>
        </div>
      </div>
    </a>
  )
}

const ProjectsList = () => {
  return (
    <>
      <ProjectsItem title="Kudos Maps" subtitle="Premium artwork celebrating personal athletic wins" link="https://www.kudosmaps.com/" />
      <ProjectsItem title="Quiet Joy" subtitle="My personal creative journal" link="https://quietjoy.co/" />
    </>
  );
};

export default ProjectsList;
