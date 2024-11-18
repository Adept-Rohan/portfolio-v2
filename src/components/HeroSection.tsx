
export const HeroSection = () => {
    return (
        <>
            <div className='flex flex-col items-center md:flex md:flex-row  lg:flex lg:flex-row justify-between'>
                <div className="flex flex-col justify-around space-y-6 my-12 md:my-24 lg:md-24">
                    <div className="flex flex-col ">
                        <div className="flex items-center space-x-4">
                            <span className="text-[2rem] font-quicksand text-customGreen text-opacity-75  ">Rohan </span>
                            <span className="text-[2rem] font-quicksand ">Khatiwada</span>
                        </div>
                        <span className="text-[2rem] font-quicksand " >full-Stack <span className="text-customGreen text-opacity-75">Developer</span> </span>
                    </div>
                    <div className="text-customGray text-opacity-70 text-base font-quicksand">
                        I create UI from  <span className="text-customGreen text-opacity-75 font-semibold">React.js</span> and <span className="text-customGreen text-opacity-75 font-semibold">Next.js</span>. I style them using <span className="text-customGreen text-opacity-75 font-semibold">Tailwind Css</span>. <br /> I integrate them with a server using <span className="text-customGreen text-opacity-75 font-semibold">Node.js</span>. I use <span className="text-customGreen text-opacity-75 font-semibold">Postgres</span> or <span className="text-customGreen text-opacity-75 font-semibold">Mysql</span> <br /> database and <span className="text-customGreen text-opacity-75 font-semibold">Drizzle</span> and <span className="text-customGreen text-opacity-75 font-semibold">Knex</span> ORM to transfer data to the UI.
                    </div>
                </div>
                <div className='w-72 h-72'>
                    <img
                        alt="Generated avatar"
                        src="https://api.dicebear.com/9.x/personas/svg?seed=Ryker"
                        width={150}
                        height={150}
                        className="w-full h-auto"
                        style={{ color: 'transparent' }}
                    />

                </div>

            </div>
        </>
    )
}