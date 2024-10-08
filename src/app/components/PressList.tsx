import Image from 'next/image';
import React from 'react';
import { FaSquareArrowUpRight } from 'react-icons/fa6';

const ArtsyIcon = '/press-artsy.png';
const CreativeBloqIcon = '/press-cb.png';
const BroadcastIcon = '/press-broadcast.png';
const UKTechNewsIcon = '/press-technews.png';

function PressItem({ title, subtitle, link, logo }: { title: string | React.ReactNode, subtitle: string, link: string, logo: string }) {

  return (
    <a href={link} target="_blank" className="group block rounded-lg bg-white cursor-pointer hover:bg-gray-100 outline-1 outline-white focus-visible:outline-gray-700 focus-visible:outline-2 transition-all">
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
            Read <FaSquareArrowUpRight className="text-gray-400" />
          </p>
        </div>
      </div>
    </a>
  )
}

const PressList = () => {
  return (
    <>
      <PressItem title="App launched to help manage freelance contacts" subtitle="Broadcast" link="https://www.broadcastnow.co.uk/tech/app-launched-to-help-manage-freelance-contacts-/5131443.article" logo={BroadcastIcon} />
      <PressItem title="4 design tools you never knew you needed" subtitle="Creative Bloq" link="https://www.creativebloq.com/features/4-design-tools-you-never-knew-you-needed" logo={CreativeBloqIcon} />
      <PressItem title="5 New Websites Artists Can Use to Boost Their Careers" subtitle="Artsy" link="https://www.artsy.net/article/artsy-editorial-5-new-websites-artists-boost-careers" logo={ArtsyIcon} />
      <PressItem title="On-demand artist commissioning platform Easle secures £450,000 Seed" subtitle="UK Tech News" link="https://www.uktech.news/news/demand-artist-commissioning-platform-easle-secures-450000-seed-20170913" logo={UKTechNewsIcon} />
    </>
  );
};

export default PressList;
