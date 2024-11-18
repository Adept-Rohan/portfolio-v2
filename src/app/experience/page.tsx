import Image from 'next/image'
import KPO from '../../../public/images.jpeg'
import Awakened from '../../../public/awakened.png'
import Channakya from '../../../public/Channakya.jpeg'

const Experience = () => {
    return (
        <div className="mt-12">
            <div className="flex flex-col">
                <span className="font-quicksand text-[32px]">My Work <span className="text-customGreen text-opacity-75">Experience</span></span>
                <span className="font-quicksand text-[20px] text-customGray text-opacity-70">Take a brief look at my work experience over the past years.</span>
            </div>
            <div className="mt-6 flex flex-col gap-4">
                <div className="rounded-md flex items-center cursor-pointer w-full h-[115px] dark:backdrop-blur-2xl transition-all duration-1000 opacity-1 -translate-y-0 bg-[#ffffff0a] hover:bg-[#ffffff0f] p-4 relative">
                    <div className='w-16 h-16'>
                        <Image src={Awakened} alt="Awakened Devs" />
                    </div>
                    <div className='flex flex-col ml-8 '>
                        <span className='font-quicksand text-[18px] font-semibold text-customGreen text-opacity-75'>Awakened Devs {""} <span>(Full Stack Developer)</span></span>
                        <span className='font-quicksand text-[18px] font-semibold'>Lokanthali, Bhaktapur</span>
                    </div>
                    <div className='absolute bottom-0 left-24 lg:right-6 font-quicksand'>
                        2024 August - <span className='font-quicksand text-customGreen text-opacity-75'>PRESENT</span>
                    </div>
                </div>
                <div className="rounded-md flex items-center cursor-pointer w-full h-[115px] dark:backdrop-blur-2xl transition-all duration-1000 opacity-1 -translate-y-0 bg-[#ffffff0a] hover:bg-[#ffffff0f] p-4 relative">
                    <div className='w-16 h-16'>
                        <Image src={Channakya} alt="Channakya Software" />
                    </div>
                    <div className='flex flex-col ml-8 '>
                        <span className='font-quicksand text-[18px] font-semibold text-customGreen text-opacity-75'>Channakya Software{""} <span>(Full Stack Developer)</span></span>
                        <span className='font-quicksand text-[18px] font-semibold'>Sinamangal, Kathmandu</span>
                    </div>
                    <div className='absolute bottom-0 left-[90px] lg:right-6 font-quicksand'>
                        2023 February - <span className='font-quicksand text-customGreen text-opacity-75'>2024 August</span>
                    </div>
                </div>
                <div className="rounded-md flex items-center cursor-pointer w-full h-[115px] dark:backdrop-blur-2xl transition-all duration-1000 opacity-1 -translate-y-0 bg-[#ffffff0a] hover:bg-[#ffffff0f] p-4 relative">
                    <div className='w-16 h-16'>
                        <Image src={KPO} alt="KPO and Company" />
                    </div>
                    <div className='flex flex-col ml-8 '>
                        <span className='font-quicksand text-[18px] font-semibold text-customGreen text-opacity-75'>KPO and Company {""} <span>(Junior Content Writer)</span></span>
                        <span className='font-quicksand text-[18px] font-semibold'>Chabahill , Kathmandu</span>
                    </div>
                    <div className='absolute bottom-0 left-[95px] lg:absolute lg:right-6   font-quicksand'>
                        2021 September - <span className='font-quicksand text-customGreen text-opacity-75'>2022 August</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Experience