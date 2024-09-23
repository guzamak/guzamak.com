interface FilterboxProp {
  title: string;
  isFilter: boolean;
}
export default function Filterbox({title,isFilter}:FilterboxProp) {
  return (
    <div  className="flex justify-center items-center py-3 px-4 border-[1px] rounded-xl border-grey-12  rounded-2x text-xs md:text-base cursor-pointer group">
      <p className={`${isFilter ? "text-gray-400 " : "text-grey-40" } duration-1000 text-sm font-Jacquarda_Bastarda`} >{title}</p>
    </div>
  )
}
