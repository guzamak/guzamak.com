import Image from "next/image";

interface ActivityProp {
  imagePath: string;
  title: string;
  desc: string;
}

export default function Activity({ imagePath, title, desc }: ActivityProp) {
  return (
    <div className="flex   items-center py-10 px-6 rounded-2xl border-x-[1px] border-grey-12 h-36  w-full min-w-64  relative">
      <div className="w-12 h-12 rounded-full bg-grey-06  border-2 border-grey-10  shadow-[0px_3px_0_black] overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={imagePath}
            alt=""
            fill
            priority={true}
            sizes="100%"
            className="w-full h-full opacity-75 object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center w-11/12 overflow-hidden py-2 gap-2 px-4">
        <h1 className="text-gray-400 text-xl opacity-50">{title}</h1>
        <p className=" truncate  text-grey-25 ">{desc}</p>
      </div>
    </div>
  );
}
