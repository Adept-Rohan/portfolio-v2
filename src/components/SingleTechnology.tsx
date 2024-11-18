

export const SingleTechnology = ({
    svg,
    title
}: {
    svg: React.ReactNode,
    title: string
}) => {
    return (
        <div className="w-full h-[50px] rounded-md flex items-center space-x-8 cursor-pointer bg-[#ffffff0a] dark:backdrop-blur-2xl transition-all duration-1000 opacity-1 -translate-y-0 hover:bg-[#ffffff0f] p-4">
            {svg}
            <span className="font-quicksand text-[18px] font-semibold">{title}</span>
        </div>
    )
}