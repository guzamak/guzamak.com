import { SiDevpost } from "react-icons/si";
import { FaGithub, FaItchIo } from "react-icons/fa";
import { SiAwwwards } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";

export default function ProjectItem({
  imagePath,
  title,
  desc,
  type,
  url,
}: Prop) {
  return (
    <div className="flex flex-col items-center gap-10 hover:shadow-[0px_3px_0_black] duration-500 border-[1px]  border-grey-12  rounded-2xl w-full min-w-64 max-w-96 h-[450px] p-10 relative group">
      <div className="w-full h-[40%] border-grey-15 border-2  rounded-2xl overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={imagePath[0]}
            alt=""
            fill
            sizes="100%"
            priority={true}
            className="w-full h-full opacity-70 group-hover:scale-110 group-hover:-translate-y-2 group-hover:opacity-90 duration-500 object-cove "
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <h1 className="text-gray-400 text-xl opacity-50 font-IBM_Plex">
          {title}
        </h1>
        <p className="text-grey-25 font-IBM_Plex">{desc}</p>
      </div>
      <div className="flex gap-4 absolute bottom-5 left-10 items-center">
        {Object.keys(url).map((key) => {
          const urlKey = key as UrlKey;
          const IconComponent = urlMap[urlKey];
          const urlValue = url[urlKey];
          return urlValue ? ( 
            <Link href={urlValue} replace={false} key={urlKey} target="_blank">
              <IconComponent className="text-grey-15 cursor-pointer" size={15} />
            </Link>
          ) : null;
        })}
      </div>
    </div>
  );
}

interface Url {
  devpost?: string;
  github?: string;
  itch?: string;
  www?: string;
}
interface Prop {
  imagePath: Array<string>;
  title: string;
  desc: string;
  type: string;
  url: Url;
}
type UrlKey = keyof Url;

const urlMap: Record<UrlKey, IconType> = {
  devpost: SiDevpost,
  github: FaGithub,
  itch: FaItchIo,
  www: SiAwwwards,
};
