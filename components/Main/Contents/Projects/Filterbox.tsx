interface FilterboxProp {
  title: string;
}
export default function Filterbox({title}:FilterboxProp) {
  return (
    <div  className="flex justify-center items-center py-3 px-4 border-[1px]  border-grey-12  rounded-2xl text-grey-40 text-xs md:text-base cursor-pointer group">
      <p className="group-hover:text-gray-400 duration-500 text-sm font-Jacquarda_Bastarda" >{title}</p>
    </div>
  )
}
