

export const Footer = () => {
    return (
        <div className="mt-12 mb-8">
            <div className="w-full h-[1px] bg-slate-700 mb-4 "></div>
            <div className="flex items-center justify-center space-x-12">
                <span className="font-quicksand"><p className="mb-0">Copyright
                    <span className="ml-2 font-quicksand">{new Date().getFullYear()}</span> &copy; Rohan Khatiwada
                </p></span>
                <span className="font-quicksand">
                    Developed using <span className="text-customGreen text-opacity-75">Next.Js</span>
                </span>
            </div>
        </div>
    )
}