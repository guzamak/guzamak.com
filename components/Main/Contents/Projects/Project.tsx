import { SiDevpost } from "react-icons/si";
import { FaGithub, FaItchIo } from "react-icons/fa";
import { SiAwwwards } from "react-icons/si";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Url {
  devpost?: string | undefined;
  github?: string | undefined;
  itch?: string | undefined;
  www?: string | undefined;
}
interface ProjectProp {
  imagePath: Array<string>;
  title: string;
  desc: string;
  type: string;
  url: Url;
}
const urlMap = {
  devpost: SiDevpost,
  github: FaGithub,
  itch: FaItchIo,
  www: SiAwwwards,
};

export default function Project({
  imagePath,
  title,
  desc,
  type,
  url,
}: ProjectProp) {
  useEffect(() => {}, []);
  return (
    <div className="flex flex-col items-center gap-10 hover:shadow-[0px_3px_0_black] duration-500 border-[1px]  border-grey-12  rounded-2xl w-full min-w-64 max-w-96 h-[450px] p-10 relative">
      <div className="w-full h-[40%] border-grey-12  rounded-2xl text-absolute-white overflow-hidden">
        {/* <Image
          src={imagePath[0]}
          alt=""
          fill
          objectFit="cover"
          className="w-full h-full opacity-75"
        /> */}
      </div>
      <div className="flex flex-col gap-4 w-full">
        <h1 className="text-gray-400 text-xl opacity-50">{title}</h1>
        <p className="text-grey-25 ">{desc}</p>
      </div>
      <div className="flex gap-4 absolute bottom-10 left-10 items-center">
        {Object.keys(url).map((key) => {
          const Component = urlMap[key];
          return (
            <Link href={url[key]} replace={false} key={key}  target="_blank" >
                <Component className="text-grey-15 cursor-pointer" size={15} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
